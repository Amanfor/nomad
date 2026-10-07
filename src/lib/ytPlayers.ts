/* YouTube embed runtime for notes that render a .yt-wrap block.
 *
 * Looked like:
 *   <div class="yt-wrap" data-vid="<id>">
 *     <div class="yt-host"></div>
 *     <div class="yt-ctl">…buttons…</div>
 *   </div>
 *
 * On hydration it:
 *   • loads the official YT IFrame API and starts a YT.Player in .yt-host
 *   • restores the last saved playback position from localStorage
 *     (key `nomad.yt.pos.<id>`; persisted every 5s while playing and on pause)
 *   • wires the small nomad-ybtn row (play / pause / vol - / vol + / mute)
 *
 * Covers both LearnPath and NomadApp note panes since either mounts note
 * HTML into the DOM — a MutationObserver picks up new .yt-wrap nodes. */

let apiReady: Promise<any> | null = null;

function loadApi(): Promise<any> {
  if (apiReady) return apiReady;
  apiReady = new Promise<any>((resolve) => {
    const w = window as any;
    if (w.YT && w.YT.Player) { resolve(w.YT); return; }
    const prev = w.onYouTubeIframeAPIReady;
    w.onYouTubeIframeAPIReady = () => { if (prev) prev(); resolve(w.YT); };
    const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!existing) {
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(s);
    }
  });
  return apiReady;
}

const posKey = (vid: string) => `nomad.yt.pos.${vid}`;

function hydrateOne(wrap: HTMLElement) {
  if ((wrap as any)._yt) return;
  (wrap as any)._yt = true;
  const vid = wrap.getAttribute('data-vid') || '';
  const host = wrap.querySelector<HTMLElement>('.yt-host');
  if (!vid || !host) return;

  loadApi().then((YT) => {
    let saveTimer: number | null = null;
    const savePos = () => {
      try { localStorage.setItem(posKey(vid), String(Math.round(player.getCurrentTime() || 0))); } catch {}
    };
    const player = new YT.Player(host, {
      videoId: vid,
      width: '100%',
      height: '100%',
      playerVars: { rel: 0, modestbranding: 1, playsinline: 1, controls: 1, origin: window.location.origin },
      events: {
        ready: () => {
          try {
            const saved = Number(localStorage.getItem(posKey(vid)) || 0);
            if (saved > 15 && player.getDuration() > saved + 5) player.seekTo(saved, true);
          } catch {}
          wrap.querySelectorAll<HTMLButtonElement>('.yt-ctl button').forEach((b) => {
            b.addEventListener('click', () => {
              try {
                switch (b.dataset.cmd) {
                  case 'play': player.playVideo(); break;
                  case 'pause': player.pauseVideo(); break;
                  case 'voldown': player.setVolume(Math.max(0, (player.getVolume() || 0) - 10)); break;
                  case 'volup': player.setVolume(Math.min(100, (player.getVolume() || 0) + 10)); break;
                  case 'mute':
                    if (player.isMuted()) { player.unMute(); b.textContent = 'mute'; }
                    else { player.mute(); b.textContent = 'unmute'; }
                    break;
                }
              } catch {}
            });
          });
        },
        stateChange: (e: any) => {
          if (e.data === YT.PlayerState.PLAYING) {
            if (saveTimer) window.clearInterval(saveTimer);
            saveTimer = window.setInterval(savePos, 5000);
          } else {
            if (saveTimer) window.clearInterval(saveTimer);
            saveTimer = null;
            if (e.data === YT.PlayerState.PAUSED) savePos();
            else if (e.data === YT.PlayerState.ENDED) { try { localStorage.removeItem(posKey(vid)); } catch {} }
          }
        },
      },
    });
  }).catch(() => {
    // best-effort: leave the link fallback below the block visible
  });
}

function scan(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('.yt-wrap').forEach(hydrateOne);
}

// observe insertions so panes created after first render are picked up
const obs = new MutationObserver((muts) => {
  for (const m of muts) {
    for (const n of Array.from(m.addedNodes)) {
      if (n instanceof HTMLElement) {
        if (n.classList.contains('yt-wrap')) hydrateOne(n);
        else scan(n);
      }
    }
  }
});

obs.observe(document.body, { childList: true, subtree: true });
scan();

export default hydrateOne;
