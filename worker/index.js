/**
 * nomad · wisdom proxy
 * --------------------
 * A tiny Cloudflare Worker that holds GEMINI_API_KEY so the browser never
 * sees it. The Nomad front end POSTs { question, context, history } here;
 * this forwards to the Gemini free tier and returns { text }.
 *
 * Deploy (free plan is enough):
 *   cd worker && npx wrangler login && npx wrangler deploy
 * Then paste the printed https://…workers.dev URL into
 * settings → wisdom · ai endpoint.
 *
 * Secrets:   npx wrangler secret put GEMINI_API_KEY
 * Optional:  npx wrangler secret put GEMINI_MODEL   (default gemini-2.5-flash)
 */

const SYSTEM = `You are "wisdom", the optional AI companion inside Nomad, a focused JEE Main/Advanced study app.

Rules:
- Answer from the provided context (Nomad notes and formula sheets) whenever it is relevant; lean on the formulas quoted there and show which one you used.
- If the context does not contain the answer, say so plainly, then answer from your own knowledge and mark it [outside nomad].
- Always end with one source line: "src: <note title>" when it came from a Nomad note, "src: open web" when it did not.
- Pitch at JEE Main level by default. Only bring the JEE Advanced twist (partial results, corner cases, multi-concept traps) when explicitly asked.
- Teach, don't do the homework: never solve a whole paper or dump answers for a list of questions. For an MCQ, reason through the concept and derive the result first — never state an option letter without the reasoning that leads to it.
- If a question is pasted and the message says "hint" (or asks for a hint), give exactly one nudge toward the method. No solution.
- Reply in the language the user writes in; Hinglish is fine.
- 120 words maximum unless the user asks for a full derivation.
- Use $$ display lines only for the final result; derivations as numbered steps; inline math in $...$.
- Short punchy sentences. No emoji, no greetings, no filler.`;

// Best-effort per-isolate rate limit: 10 requests / minute / IP.
const LIMITS = new Map();

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

export default {
  async fetch(request, env) {
    const headers = corsHeaders(request.headers.get('Origin'));

    if (request.method === 'OPTIONS') return new Response(null, { headers });
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'POST { question, context, history }' }), { status: 405, headers: { ...headers, 'Content-Type': 'application/json' } });
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const now = Date.now();
    const recent = (LIMITS.get(ip) || []).filter(t => now - t < 60_000);
    if (recent.length >= 10) {
      return new Response(JSON.stringify({ error: 'rate limited' }), {
        status: 429,
        headers: { ...headers, 'Content-Type': 'application/json', 'Retry-After': '60' },
      });
    }
    recent.push(now);
    LIMITS.set(ip, recent);

    let question = '', context = '', history = [];
    try {
      const body = await request.json();
      question = String(body?.question || '');
      context = String(body?.context || '').slice(0, 12000);
      history = Array.isArray(body?.history) ? body.history.slice(-6) : [];
    } catch {
      return new Response(JSON.stringify({ error: 'invalid json' }), { status: 400, headers: { ...headers, 'Content-Type': 'application/json' } });
    }
    if (!question.trim()) {
      return new Response(JSON.stringify({ error: 'empty question' }), { status: 400, headers: { ...headers, 'Content-Type': 'application/json' } });
    }

    const contents = [
      ...history
        .filter(m => m && typeof m.text === 'string' && m.text.trim())
        .map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.text }] })),
      { role: 'user', parts: [{ text: `${context ? `${context}\n\n---\n\n` : ''}${question}` }] },
    ];

    const model = env.GEMINI_MODEL || 'gemini-2.5-flash';
    let upstream;
    try {
      upstream = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(env.GEMINI_API_KEY)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM }] },
            contents,
            generationConfig: { temperature: 0.4, maxOutputTokens: 1200 },
          }),
        },
      );
    } catch {
      return new Response(JSON.stringify({ error: 'upstream unreachable' }), { status: 502, headers: { ...headers, 'Content-Type': 'application/json' } });
    }

    if (upstream.status === 429) {
      return new Response(JSON.stringify({ error: 'provider rate limited' }), { status: 429, headers: { ...headers, 'Content-Type': 'application/json', 'Retry-After': '30' } });
    }
    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => '');
      return new Response(JSON.stringify({ error: `gemini HTTP ${upstream.status}`, detail: detail.slice(0, 300) }), { status: 502, headers: { ...headers, 'Content-Type': 'application/json' } });
    }

    const data = await upstream.json();
    const text = data?.candidates?.[0]?.content?.parts?.map(p => p?.text || '').join('') || '';
    if (!text.trim()) {
      return new Response(JSON.stringify({ error: 'empty model response' }), { status: 502, headers: { ...headers, 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ text }), { headers: { ...headers, 'Content-Type': 'application/json' } });
  },
};
