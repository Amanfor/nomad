import React, { useState, useEffect, useRef, useMemo, useCallback, useDeferredValue } from 'react';
import { motion, AnimatePresence, useAnimation, useSpring, type MotionValue } from 'framer-motion';
import Fuse from 'fuse.js';
import katex from 'katex';
import { marked } from 'marked';
import { MICRO_QUESTIONS, TARGET_QUESTIONS } from '../data/questions';
import { loadPyqQuestions, loadTargetQuestions } from '../data/pyq';
import { loadFormulaSheets } from '../data/formulas';
import { ConceptBrowser, loadConcepts } from '../concepts';
import { Capacitor, registerPlugin } from '@capacitor/core';

/* ─── Base URL helper for assets (handles /nomad base path) ──────────────── */
const BASE_URL = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');
const asset = (path: string) => `${BASE_URL}${path.replace(/^\//, '')}`;

export interface Concept {
  id: string;
  title: string;
  section: string;
  content: string;
  formulas: string[];
  image?: string;
  imageCaption?: string;
}

/* ─── Markdown & LaTeX renderer ──────────────── */
function renderContent(text: string): string {
  if (!text) return '';
  
  // 1. Process LaTeX blocks
  let processed = text.replace(/\$\$([^$]+)\$\$/g, (_, tex) => {
    try { return katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false }); } catch { return `$$${tex}$$`; }
  });
  processed = processed.replace(/\$([^$]+)\$/g, (_, tex) => {
    try { return katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false }); } catch { return `$${tex}$`; }
  });

  // 2. Parse Markdown
  return marked.parse(processed) as string;
}

function renderFormulaBlock(tex: string): string {
  try { return katex.renderToString(tex, { displayMode: true, throwOnError: false }); } catch { return tex; }
}

function renderInlineLatex(text: string): string {
  if (!text) return '';
  // Replace $$...$$ block math
  let result = text.replace(/\$\$([^$]+)\$\$/g, (_, tex) => {
    try { return katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false }); }
    catch { return tex; }
  });
  // Replace $...$ inline math
  result = result.replace(/\$([^$]+)\$/g, (_, tex) => {
    try { return katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false }); }
    catch { return tex; }
  });
  return result;
}

function renderOption(opt: string): string {
  if (!opt) return '';
  // Already has explicit $...$ delimiters -> use the standard renderer.
  if (opt.includes('$')) return renderInlineLatex(opt);
  // Otherwise auto-wrap options that look like math (MR^2, L/4, b = 150...)
  // but reject anything that reads as a normal word/sentence.
  const withoutLatexCmds = opt.replace(/\\[a-zA-Z]+/g, '');
  const hasLongWord = /[a-zA-Z]{3,}/.test(withoutLatexCmds);
  const looksMath = !hasLongWord && /[0-9\\^_+=\-*/<>{}()]/.test(opt);
  if (looksMath) {
    try { return katex.renderToString(opt.trim(), { displayMode: false, throwOnError: false }); } catch { return opt; }
  }
  return opt;
}

/* ─── Eye Paths & Config ──────────────────────── */
const eyePaths = {
  closed: "M 20 60 Q 100 57 180 60 Q 100 63 20 60 Z",
  open:   "M 20 60 Q 100 10 180 60 Q 100 110 20 60 Z",
  wide:   "M 20 60 Q 100 -10 180 60 Q 100 130 20 60 Z",
  reptile: "M 20 60 Q 100 25 180 60 Q 100 95 20 60 Z"
};

const easeMorph = [0.22, 1, 0.36, 1];
const easeClose = [0.64, 0, 0.78, 0];

type EyeState = 'closed' | 'open' | 'wide' | 'reptile';

/* ─── Reusable Eye Graphic ────────────────────── */
function EyeGraphic({ 
  shape, 
  pupilX, 
  pupilY, 
  scale = 1, 
  style = {},
  isReptile = false
}: { 
  shape: EyeState; 
  pupilX: MotionValue<number>; 
  pupilY: MotionValue<number>; 
  scale?: number;
  style?: any;
  isReptile?: boolean;
}) {
  const [pupilReptile, setPupilReptile] = useState(false);

  useEffect(() => {
    if (isReptile) {
      const t = setTimeout(() => setPupilReptile(true), 200);
      return () => clearTimeout(t);
    } else {
      setPupilReptile(false);
    }
  }, [isReptile]);

  const maskId = useMemo(() => `mask-${Math.random().toString(36).substr(2, 9)}`, []);
  return (
    <svg viewBox="0 -40 200 180" style={{ width: 280 * scale, height: 250 * scale, overflow: 'visible', filter: 'drop-shadow(0px 0px 40px rgba(255,255,255,0.15))', ...style }}>
      <defs>
        <clipPath id={maskId}>
           <motion.path animate={{ d: eyePaths[shape] }} transition={{ duration: shape === 'closed' ? 0.15 : 0.8, ease: shape === 'closed' ? easeClose : easeMorph }} />
        </clipPath>
      </defs>
      <motion.path animate={{ d: eyePaths[shape] }} transition={{ duration: shape === 'closed' ? 0.15 : 0.8, ease: shape === 'closed' ? easeClose : easeMorph }} fill="#fff" />
      <g clipPath={`url(#${maskId})`}>
        <motion.g style={{ x: pupilX, y: pupilY }}>
          {/* Main Pupil */}
          <motion.ellipse 
            cx={100} 
            cy={60} 
            animate={{
              rx: pupilReptile ? 2.5 : 32,
              ry: pupilReptile ? 18 : 32,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            fill="#000"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={pupilReptile ? 1.5 : 0}
          />
        </motion.g>
      </g>
    </svg>
  );
}

/* ─── Mini Eye for Events ─────────────────────── */
function MiniEye({ x, y, scale, isReptile }: { x: string, y: string, scale: number, isReptile?: boolean }) {
  // Lightweight paranoia mode: static open eyes, no per-eye springs or listeners.
  const pX = useSpring(0, { stiffness: 300, damping: 25 });
  const pY = useSpring(0, { stiffness: 300, damping: 25 });
  return (
    <div style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%, -50%)', zIndex: 0, pointerEvents: 'none', willChange: 'transform' }}>
      <EyeGraphic shape={isReptile ? 'reptile' : 'open'} pupilX={pX} pupilY={pY} scale={scale} isReptile={isReptile} style={{ filter: 'drop-shadow(0px 0px 18px rgba(255,255,255,0.08))' }} />
    </div>
  );
}

const MINI_EYES = [
  { id: 1, x: '18%', y: '40%', scale: 0.28 },
  { id: 2, x: '82%', y: '40%', scale: 0.32 },
  { id: 3, x: '25%', y: '65%', scale: 0.35 },
  { id: 4, x: '75%', y: '65%', scale: 0.26 },
];

/* ─── Footer (Stats & Countdown) ──────────────── */
function Footer({ isMultiEye, count, isMobile, gazingAt, onConceptClick, inline, alwaysGlow, unit }: { isMultiEye: boolean, count: number, isMobile: boolean, gazingAt: string | null, onConceptClick?: () => void, inline?: boolean, alwaysGlow?: boolean, unit?: string }) {
  const [hoverLeft, setHoverLeft] = useState(false);
  const leftGlow = isMultiEye || hoverLeft || alwaysGlow || gazingAt === 'concepts';

  // Inline variant sits directly below the search bar (desktop web);
  // the absolute variant stays pinned to the bottom of the screen (mobile/Android).
  const containerStyle = inline
    ? {
        position: 'relative' as const, width: '100%', marginTop: '3rem',
        display: 'flex', flexDirection: 'row' as const, justifyContent: 'center', alignItems: 'center',
        fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 300, zIndex: 5, pointerEvents: 'none'
      }
    : {
        position: 'absolute' as const, bottom: isMobile ? '7rem' : '8rem', left: isMobile ? '1.5rem' : '4rem', right: isMobile ? '1.5rem' : '4rem',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'flex-start', alignItems: isMobile ? 'center' : 'flex-end',
        fontSize: isMobile ? '0.6rem' : '0.75rem', gap: isMobile ? '1rem' : '0', letterSpacing: '0.2em', fontWeight: 300, zIndex: 5, pointerEvents: 'none'
      };

  return (
    <div style={containerStyle}>
      <div 
        id="nomad-concepts"
        onClick={onConceptClick}
        onMouseEnter={() => setHoverLeft(true)} 
        onMouseLeave={() => setHoverLeft(false)}
        style={{ 
          pointerEvents: 'auto', 
          cursor: 'pointer',
          textAlign: (inline || isMobile) ? 'center' : 'left',
          color: leftGlow ? '#fff' : 'rgba(255,255,255,0.15)',
          textShadow: leftGlow ? '0 0 14px rgba(255,255,255,0.95)' : 'none',
          transition: 'all 0.3s ease, color 0.4s ease, text-shadow 0.4s ease'
        }}
      >
        <div style={{ fontSize: isMobile ? '0.5rem' : '0.55rem', letterSpacing: '0.1em', marginBottom: '0.5rem', color: leftGlow ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }}>DATABASE</div>
        {count} {unit || 'CONCEPTS'}
      </div>
    </div>
  );
}

function JEECountdown({ isMobile, gazingAt, isMultiEye, alwaysGlow }: { isMobile: boolean, gazingAt: string | null, isMultiEye?: boolean, alwaysGlow?: boolean }) {
  const [timeLeft, setTimeLeft] = useState('');
  const [hoverRight, setHoverRight] = useState(false);

  useEffect(() => {
    const target = new Date('2027-01-22T00:00:00').getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) { setTimeLeft('THE DAY HAS COME'); return; }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft(`T - ${d}D ${h.toString().padStart(2, '0')}H ${m.toString().padStart(2, '0')}M ${s.toString().padStart(2, '0')}S`);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;
  const rightGlow = isMultiEye || hoverRight || alwaysGlow || gazingAt === 'countdown';

  return (
    <div 
      id="nomad-countdown"
      onMouseEnter={() => setHoverRight(true)} 
      onMouseLeave={() => setHoverRight(false)}
      style={{ 
        position: 'fixed', top: '1rem', right: isMobile ? '1rem' : '4rem', zIndex: 5, pointerEvents: 'auto',
        fontSize: isMobile ? '0.6rem' : '0.75rem', letterSpacing: '0.2em', fontWeight: 300, textAlign: 'right',
        color: rightGlow ? '#fff' : 'rgba(255,255,255,0.15)',
        textShadow: rightGlow ? '0 0 14px rgba(255,255,255,0.95)' : 'none',
        transition: 'all 0.3s ease, color 0.4s ease, text-shadow 0.4s ease'
      }}
    >
      <div style={{ fontSize: isMobile ? '0.5rem' : '0.55rem', letterSpacing: '0.1em', marginBottom: '0.5rem', color: rightGlow ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }}>JEE 2027</div>
      {timeLeft}
    </div>
  );
}

/* ─── Styles ──────────────────────────────────── */
const S = {
  root: { position: 'fixed' as const, inset: 0, display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', background: '#000', fontFamily: "'Inter', sans-serif", overflow: 'hidden' },
  headerTitle: { position: 'relative' as const, fontFamily: "'Cinzel', serif", fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: '#ffffff', marginBottom: '2.5rem', textAlign: 'center' as const, userSelect: 'none' as const, textShadow: '0 0 40px rgba(255,255,255,0.08)' },
  searchContainer: { display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 500, position: 'relative' as const, zIndex: 10 },
  input: { width: '100%', padding: '1rem 0', marginTop: '2rem', fontSize: '1.2rem', fontWeight: 300, letterSpacing: '0.04em', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none', textAlign: 'center' as const, caretColor: 'white', transition: 'border-color 0.3s' },
  dropdown: { position: 'absolute' as const, top: 'calc(100% + 15px)', left: '50%', transform: 'translateX(-50%)', width: '100%', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8, maxHeight: 300, overflowY: 'auto' as const, zIndex: 20, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' },
  resultItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', fontWeight: 300, borderBottom: '1px solid rgba(255,255,255,0.03)', cursor: 'pointer', textAlign: 'left' as const, transition: 'background 0.2s' },
  resultItemActive: { background: 'rgba(255,255,255,0.06)', color: '#fff', borderLeft: '2px solid rgba(255,255,255,0.6)' },
  contentView: { position: 'absolute' as const, inset: 0, overflowY: 'auto' as const, padding: '6rem 15vw', boxSizing: 'border-box' as const, zIndex: 30, background: '#000', scrollbarWidth: 'none' as const },
  backBtn: { background: 'none', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 300, padding: '0.5rem 1rem', cursor: 'pointer', marginBottom: '4rem', transition: 'opacity 0.2s ease, background 0.2s ease' },
  title: { fontSize: '3rem', fontWeight: 300, color: '#fff', marginBottom: '2.5rem', letterSpacing: '0.02em' },
  section: { fontSize: '0.85rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' as const, marginBottom: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem' },
  prose: { fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.85)' },
  formulaBox: { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '2rem', marginBottom: '2.5rem' },
};



function PracticeOverlay({ onClose }: { onClose: () => void }) {
  // Quiz session state
  const [questions, setQuestions] = useState<any[]>([]);
  const [sessionLabel, setSessionLabel] = useState('practice mode');
  const [phase, setPhase] = useState<'menu' | 'browse' | 'quiz'>('menu');
  const [selectedChapters, setSelectedChapters] = useState<Set<string>>(new Set());
  const [pickerMode, setPickerMode] = useState<'custom' | 'pyq'>('custom');

  // Comprehensive PYQ database (public/pyq-database.json), bundled fallback.
  const [pyqDb, setPyqDb] = useState<any[] | null>(null);
  const [loadingPyq, setLoadingPyq] = useState(true);

  const allQuestions = useMemo(
    () => [...MICRO_QUESTIONS, ...(pyqDb ?? TARGET_QUESTIONS)],
    [pyqDb]
  );

  // Chapter groups: collapse duplicate chapter spellings (e.g. '3D-Geometry'
  // vs '3D Geometry') so the browse list is not repeated.
  const normChapter = (s: string) =>
    s.toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => !!w && w !== 'and' && w !== 'the' && w !== 'of' && w !== 'in')
      .map(w => w.replace(/s$/, '')) // simple plural → singular
      .sort()
      .join('');
  const chapterGroups = useMemo(() => {
    const m = new Map<string, { key: string; label: string; count: number }>();
    for (const q of allQuestions) {
      const key = normChapter(q.chapter || '');
      if (!m.has(key)) m.set(key, { key, label: q.chapter, count: 0 });
      const g = m.get(key)!;
      g.count += 1;
      // Prefer the most readable label: one without dashes/underscores.
      if ((g.label.includes('_') || g.label.includes('-')) &&
          !(q.chapter || '').includes('_') && !(q.chapter || '').includes('-')) g.label = q.chapter;
    }
    return Array.from(m.values()).sort((a, b) => a.label.localeCompare(b.label));
  }, [allQuestions]);

  const matchedCount = useMemo(() => {
    const pool = pickerMode === 'pyq' ? (pyqDb && pyqDb.length ? pyqDb : TARGET_QUESTIONS.slice()) : allQuestions;
    return pool.filter(q => selectedChapters.has(normChapter(q.chapter || ''))).length;
  }, [selectedChapters, allQuestions, pyqDb, pickerMode]);

  const chapterGroupsActive = useMemo(() => {
    const pool = pickerMode === 'pyq' ? (pyqDb && pyqDb.length ? pyqDb : TARGET_QUESTIONS.slice()) : allQuestions;
    const m = new Map<string, { key: string; label: string; count: number }>();
    for (const q of pool) {
      const key = normChapter(q.chapter || '');
      if (!key) continue;
      if (!m.has(key)) m.set(key, { key, label: q.chapter, count: 0 });
      const g = m.get(key)!;
      g.count += 1;
      if ((g.label.includes('_') || g.label.includes('-')) && !(q.chapter || '').includes('_') && !(q.chapter || '').includes('-')) g.label = q.chapter;
    }
    return Array.from(m.values()).sort((a, b) => a.label.localeCompare(b.label));
  }, [allQuestions, pyqDb, pickerMode]);

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isHoverPrev, setIsHoverPrev] = useState(false);
  const [isHoverNext, setIsHoverNext] = useState(false);
  const [showSolutionNote, setShowSolutionNote] = useState(false);

  const currentQRef = useRef(currentQ);
  const selectedAnswerRef = useRef(selectedAnswer);
  const answersRef = useRef(answers);
  const showResultsRef = useRef(showResults);
  const onCloseRef = useRef(onClose);

  useEffect(() => { currentQRef.current = currentQ; }, [currentQ]);
  useEffect(() => {
    setShowSolutionNote(false);
  }, [currentQ, questions]);

  useEffect(() => {
    selectedAnswerRef.current = selectedAnswer;
  }, [selectedAnswer]);
  useEffect(() => { answersRef.current = answers; }, [answers]);
  useEffect(() => { showResultsRef.current = showResults; }, [showResults]);
  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);

  const pupilX = useSpring(0, { stiffness: 300, damping: 25 });
  const pupilY = useSpring(0, { stiffness: 300, damping: 25 });
  const eyeControls = useAnimation();

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      pupilX.set((e.clientX / window.innerWidth) * 40 - 20);
      pupilY.set((e.clientY / window.innerHeight) * 40 - 20);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [pupilX, pupilY]);

  const score = useMemo(() => {
    return questions.reduce((acc, q, idx) => {
      return answers[idx] === q.correct ? acc + 1 : acc;
    }, 0);
  }, [questions, answers]);

  const q = !showResults && currentQ < questions.length ? questions[currentQ] : null;

  const goToNext = useCallback(() => {
    setDirection(1);
    const curr = currentQRef.current;
    if (curr < questions.length - 1) {
      const nextQ = curr + 1;
      currentQRef.current = nextQ;
      setCurrentQ(nextQ);
      const nextAnswer = answersRef.current[nextQ] ?? null;
      selectedAnswerRef.current = nextAnswer;
      setSelectedAnswer(nextAnswer);
    } else {
      showResultsRef.current = true;
      setShowResults(true);
    }
  }, [questions.length]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    const curr = currentQRef.current;
    if (curr > 0) {
      const prevQ = curr - 1;
      currentQRef.current = prevQ;
      setCurrentQ(prevQ);
      const prevAnswer = answersRef.current[prevQ] ?? null;
      selectedAnswerRef.current = prevAnswer;
      setSelectedAnswer(prevAnswer);
    }
  }, []);

  const handleSelect = useCallback((idx: number) => {
    if (selectedAnswerRef.current !== null) return;
    const curr = currentQRef.current;
    const currentQuestion = questions[curr];
    if (!currentQuestion) return;
    if (idx < 0 || idx >= currentQuestion.options.length) return;

    selectedAnswerRef.current = idx;
    setSelectedAnswer(idx);
    setAnswers(prev => {
      const next = [...prev];
      next[curr] = idx;
      answersRef.current = next;
      return next;
    });
    try {
      const raw = localStorage.getItem('nomad-practice-stats');
      const stats = raw ? JSON.parse(raw) : { attempted: 0, correct: 0 };
      stats.attempted += 1;
      if (idx === currentQuestion.correct) stats.correct += 1;
      localStorage.setItem('nomad-practice-stats', JSON.stringify(stats));
    } catch (e) {}
    if (idx !== currentQuestion.correct) {
      eyeControls.start({ x: [0, -12, 12, -10, 10, -6, 6, 0], transition: { duration: 0.5, ease: 'easeInOut' } });
      const rawBuzz = localStorage.getItem('nomad-settings');
      try {
        const parsed = rawBuzz ? JSON.parse(rawBuzz) : {};
        if (parsed.enableBuzz !== false) {
          const audio = new Audio(asset('buzz_wrong.wav'));
          audio.play().catch(() => {});
          const audio2 = new Audio(asset('buzz_wrong.wav'));
          setTimeout(() => audio2.play().catch(() => {}), 50);
        }
      } catch (e) {}
    }
  }, [questions, eyeControls]);

  const handleRestart = () => {
    currentQRef.current = 0;
    selectedAnswerRef.current = null;
    answersRef.current = [];
    showResultsRef.current = false;
    setCurrentQ(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
    setDirection(1);
    setIsHoverPrev(false);
    setIsHoverNext(false);
  };

  const startSession = (qs: any[]) => {
    // Shuffle a copy so the source bank order is never mutated.
    const shuffled = [...qs];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    currentQRef.current = 0;
    selectedAnswerRef.current = null;
    answersRef.current = [];
    showResultsRef.current = false;
    setCurrentQ(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
    setDirection(1);
    setIsHoverPrev(false);
    setIsHoverNext(false);
    setQuestions(shuffled);
    setPhase('quiz');
  };

  // ── Load the comprehensive PYQ database once per mount ────────
  useEffect(() => {
    let alive = true;
    loadPyqQuestions().then(r => { if (alive) { setPyqDb(r); setLoadingPyq(false); } });
    return () => { alive = false; };
  }, []);

  // Quick practice: 10 random questions across both banks.
  const startQuick = () => {
    const pool = [...allQuestions];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    startSession(pool.slice(0, 10));
    setSessionLabel('quick practice');
  };
  // PYQ mode: dedicated full-length JEE Mains previous-year questions.
  const startBrowse = (mode: 'custom' | 'pyq') => {
    setPickerMode(mode);
    setSelectedChapters(new Set());
    setPhase('browse');
  };
  const startPyqPicked = () => {
    const pool = (pyqDb && pyqDb.length ? pyqDb : TARGET_QUESTIONS.slice());
    const qs = pool.filter(q => selectedChapters.has(normChapter(q.chapter || '')));
    if (qs.length > 0) {
      startSession(qs);
      setSessionLabel('pyq · chapter pick');
    }
  };
  const startCustom = () => {
    const qs = allQuestions.filter(q => selectedChapters.has(normChapter(q.chapter || '')));
    if (qs.length > 0) { startSession(qs); setSessionLabel('custom practice'); }
  };
  const pretty = (s: string) => s.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const toggleChapter = (chapterKey: string) => {
    setSelectedChapters(prev => {
      const next = new Set(prev);
      if (next.has(chapterKey)) next.delete(chapterKey);
      else next.add(chapterKey);
      return next;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    // Blur any active element to ensure keyboard events are not stolen
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (!showResultsRef.current && selectedAnswerRef.current !== null) {
          goToNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (!showResultsRef.current && currentQRef.current > 0) {
          goToPrev();
        }
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        e.preventDefault();
        const idx = parseInt(e.key, 10) - 1;
        if (!showResultsRef.current && selectedAnswerRef.current === null) {
          handleSelect(idx);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, handleSelect]);

  // Touch swipe support (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (showResults) return;
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) { // minimum swipe threshold
      if (delta > 0 && selectedAnswer !== null) {
        // swiped left → next question
        goToNext();
      } else if (delta < 0 && currentQ > 0) {
        // swiped right → previous question
        goToPrev();
      }
    }
  };

  const canGoPrev = !showResults && currentQ > 0;
  const canGoNext = !showResults && selectedAnswer !== null;

  // ── Phase: menu ──────────────────────────────────────────────
  if (phase === 'menu') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 100, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "'Inter', sans-serif", color: '#fff' }}>
        <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={onClose} className="nomad-btn">⟨ exit ⟩</button>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>practice mode</div>
          <div style={{ width: '3rem' }} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', padding: '0 2rem', textAlign: 'center' }}>
          <button onClick={startQuick} className="nomad-btn" style={{ border: '1px solid rgba(255,255,255,0.35)', padding: '0.9rem 2rem', borderRadius: 4 }}>⟨ quick practice · 10 random questions ⟩</button>
          <button onClick={() => startBrowse('pyq')} className="nomad-btn" style={{ border: '1px solid rgba(255,255,255,0.25)', padding: '0.9rem 2rem', borderRadius: 4 }}>⟨ pyq mode · full-length mains ⟩</button>
          <button onClick={() => startBrowse('custom')} className="nomad-btn" style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '0.9rem 2rem', borderRadius: 4 }}>⟨ custom practice ⟩</button>
          <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', letterSpacing: '0.1em', marginTop: '0.5rem' }}>{loadingPyq ? 'loading pyq database…' : (pyqDb && pyqDb.length ? `${pyqDb.length} pyqs loaded` : 'bundle questions')}</div>
        </div>
      </motion.div>
    );
  }

  // ── Phase: browse (pick chapters) ───────────────────
  if (phase === 'browse') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 100, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "'Inter', sans-serif", color: '#fff' }}>
        <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
          <button onClick={onClose} className="nomad-btn" style={{ flexShrink: 0 }}>⟨ exit ⟩</button>
          <div style={{ flex: 1, minWidth: 0, textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{pickerMode === 'pyq' ? 'pyq · chapter select' : 'chapter select'}</div>
          <button onClick={() => setPhase('menu')} className="nomad-btn" style={{ flexShrink: 0 }}>⟨ back ⟩</button>
        </div>
        <div style={{ marginTop: '4.5rem', width: '100%', maxWidth: '640px', display: 'flex', justifyContent: 'flex-end', padding: '0 1.5rem', boxSizing: 'border-box' }}>
          <button onClick={() => setSelectedChapters(new Set(chapterGroupsActive.map(g => g.key)))} className="nomad-btn" style={{ fontSize: '0.5rem', opacity: 0.5 }}>⟨ select all ⟩</button>
        </div>
        <div className="nomad-practice-scroll" style={{ marginTop: '0.5rem', flex: 1, width: '100%', maxWidth: '640px', minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none' as any, padding: '0 1.5rem 7rem', boxSizing: 'border-box' }}>
          {chapterGroupsActive.map(g => {
            const active = selectedChapters.has(g.key);
            return (
              <div key={g.key} style={{ width: '100%', marginBottom: '1.25rem' }}>
                <button
                  onClick={() => toggleChapter(g.key)}
                  style={{ width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0.9rem 0', color: active ? '#fff' : 'rgba(255,255,255,0.4)', fontSize: '0.95rem', fontWeight: 300, letterSpacing: '0.04em', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer', textAlign: 'left', transition: 'color 0.2s' }}
                >
                  <span style={{ flex: 1, minWidth: 0, lineHeight: 1.5, overflowWrap: 'break-word' as any }}>{active ? '[ x ]' : '[   ]'} {pretty(g.label)}</span>
                  <span style={{ flexShrink: 0, marginTop: '0.15rem', opacity: 0.4, fontSize: '0.75rem' }}>{g.count}</span>
                </button>
              </div>
            );
          })}
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', padding: '2.5rem 1.5rem calc(1.5rem + env(safe-area-inset-bottom))', background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 45%)', pointerEvents: 'none' }}>
          <button onClick={pickerMode === 'pyq' ? startPyqPicked : startCustom} disabled={matchedCount === 0} className="nomad-btn" style={{ pointerEvents: 'auto', border: '1px solid rgba(255,255,255,0.3)', background: '#000', padding: '0.8rem 1.75rem', borderRadius: 4, opacity: matchedCount === 0 ? 0.3 : 1, whiteSpace: 'nowrap' }}>
            ⟨ start practice · {matchedCount} ⟩
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'fixed', inset: 0, zIndex: 100, background: '#000',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        fontFamily: "'Inter', sans-serif", color: '#fff'
      }}
    >
      {/* Header */}
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={onClose} className="nomad-btn">⟨ exit ⟩</button>
          <button onClick={() => setPhase('menu')} className="nomad-btn">⟨ menu ⟩</button>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{sessionLabel}</div>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '0.12em' }}>{score} / {questions.length}</div>
      </div>

      {/* Flanking Arrow Buttons */}
      {!showResults && (
        <>
          <motion.button
            onClick={canGoPrev ? goToPrev : undefined}
            disabled={!canGoPrev}
            whileHover={canGoPrev ? { scale: 1.1 } : undefined}
            onMouseEnter={() => canGoPrev && setIsHoverPrev(true)}
            onMouseLeave={() => setIsHoverPrev(false)}
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              y: '-50%',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '2rem',
              opacity: !canGoPrev ? 0.2 : (isHoverPrev ? 1 : 0.7),
              cursor: canGoPrev ? 'pointer' : 'default',
              transition: 'opacity 0.2s ease',
              padding: '0.5rem',
              lineHeight: 1,
              zIndex: 10,
              userSelect: 'none'
            }}
            aria-label="Previous question"
          >
            ‹
          </motion.button>

          <motion.button
            onClick={canGoNext ? goToNext : undefined}
            disabled={!canGoNext}
            whileHover={canGoNext ? { scale: 1.1 } : undefined}
            onMouseEnter={() => canGoNext && setIsHoverNext(true)}
            onMouseLeave={() => setIsHoverNext(false)}
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              y: '-50%',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '2rem',
              opacity: !canGoNext ? 0.2 : (isHoverNext ? 1 : 0.7),
              cursor: canGoNext ? 'pointer' : 'default',
              transition: 'opacity 0.2s ease',
              padding: '0.5rem',
              lineHeight: 1,
              zIndex: 10,
              userSelect: 'none'
            }}
            aria-label="Next question"
          >
            ›
          </motion.button>
        </>
      )}

      {/* Main Question Card Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '600px', minHeight: 0, padding: '0 3.5rem', boxSizing: 'border-box' }}>
        <div style={{ transform: 'scale(0.6)', marginTop: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', flexShrink: 0, willChange: 'transform' }}>
          <motion.div animate={eyeControls}>
            <EyeGraphic shape="open" pupilX={pupilX} pupilY={pupilY} />
          </motion.div>
        </div>
        <div className="nomad-practice-scroll" style={{ flex: 1, width: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '0.5rem', paddingBottom: '2rem', scrollbarWidth: 'none' as any }}>
        {showResults ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '2rem' }}>{score} / {questions.length} correct</div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button onClick={handleRestart} className="nomad-btn active" style={{ border: '1px solid rgba(255,255,255,0.3)', padding: '0.75rem 1.5rem', borderRadius: 4 }}>⟨ begin again ⟩</button>
              <button onClick={() => setPhase('menu')} className="nomad-btn" style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '0.75rem 1.5rem', borderRadius: 4 }}>⟨ menu ⟩</button>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            {q && (
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', textAlign: 'center' }}>{(q as any).chapter?.toUpperCase()} · {(q as any).topic?.toUpperCase()}</div>
                {(q as any).figure && (
                  <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={asset(String((q as any).figure).replace(/^media\//, 'media/'))}
                      alt="question figure"
                      loading="lazy"
                      style={{ maxWidth: '100%', maxHeight: '260px', objectFit: 'contain', borderRadius: 4, border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                  </div>
                )}
                <div
                  style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '2.5rem', lineHeight: 1.5, fontWeight: 300 }}
                  dangerouslySetInnerHTML={{ __html: renderInlineLatex(q.question) }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px' }}>
                  {q.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === q.correct;
                    const hasAnswered = selectedAnswer !== null;
                    let borderColor = 'rgba(255,255,255,0.15)';
                    let prefix = '';
                    let textColor = '#fff';
                    if (hasAnswered) {
                      if (isCorrect) {
                        borderColor = 'rgba(255,255,255,1)';
                        prefix = '✓ ';
                      } else if (isSelected) {
                        borderColor = 'rgba(255,255,255,0.3)';
                        prefix = '✗ ';
                        textColor = 'rgba(255,255,255,0.5)';
                      } else {
                        borderColor = 'rgba(255,255,255,0.1)';
                        textColor = 'rgba(255,255,255,0.3)';
                      }
                    }
                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        whileHover={hasAnswered ? {} : { scale: 1.01, borderColor: 'rgba(255,255,255,0.5)' }}
                        style={{
                          background: 'transparent',
                          border: `1px solid ${borderColor}`,
                          color: textColor,
                          fontSize: '0.85rem',
                          padding: '0.75rem 1.25rem',
                          borderRadius: 4,
                          cursor: hasAnswered ? 'default' : 'pointer',
                          textAlign: 'left',
                          transition: 'border-color 0.2s, color 0.2s'
                        }}
                        dangerouslySetInnerHTML={{ __html: `${prefix}${renderOption(opt)}` }}
                      />
                    );
                  })}
                </div>
                {q && selectedAnswer !== null && (q as any).solution && (q as any).solution.trim().length > 0 && (
                  <div style={{ marginTop: '1.75rem', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                    <button
                      onClick={() => setShowSolutionNote(prev => !prev)}
                      className="nomad-btn"
                      style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, padding: '0.6rem 1.2rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}
                    >
                      ⟨ {showSolutionNote ? 'conceal solution' : 'see solution'} ⟩
                    </button>
                    {showSolutionNote && (
                      <div
                        className="nomad-prose"
                        style={{ marginTop: '1.5rem', textAlign: 'left', fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontWeight: 300 }}
                        dangerouslySetInnerHTML={{ __html: renderContent((q as any).solution) }}
                      />
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      </div>
    </motion.div>
  );
}

function WanderOverlay({ onClose, isMobile }: { onClose: () => void; isMobile: boolean }) {
  const links = [
    { label: 'Coordination Compounds', url: 'https://amanfor.github.io/coordination-compounds' },
    { label: 'Differential Equations', url: 'https://amanfor.github.io/differential-equations' },
    { label: 'Ray Optics', url: 'https://amanfor.github.io/ray-optics' },
  ];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 100, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={onClose} className="nomad-btn" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>⟨ exit ⟩</button>
      <div style={{ ...S.headerTitle, fontSize: isMobile ? '0.75rem' : '0.85rem', marginBottom: isMobile ? '2rem' : '3rem' }}>WANDER</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.5rem', width: '100%', maxWidth: '400px', padding: isMobile ? '0 2rem' : '0', textAlign: 'center' }}>
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 300, letterSpacing: '0.08em', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
          >
            ⟨ {link.label} ⟩
          </a>
        ))}
      </div>
    </motion.div>
  );
}


type Settings = {
  enableAnimations: boolean;
  enableParanoia: boolean;
  enableBlinking: boolean;
  enableEyeMovement: boolean;
  enableGaze: boolean;
  disableEye: boolean;
  enableVoice: boolean;
  enableBuzz: boolean;
  alwaysGlow: boolean;
  lightMode: boolean;
};

const DEFAULT_SETTINGS: Settings = {
  enableAnimations: true,
  enableParanoia: true,
  enableBlinking: true,
  enableEyeMovement: true,
  enableGaze: true,
  disableEye: false,
  enableVoice: true,
  enableBuzz: true,
  alwaysGlow: false,
  lightMode: false,
};

function SettingsOverlay({ settings, setSettings, onClose, isMobile, concepts }: { settings: Settings, setSettings: (s: Settings) => void, onClose: () => void, isMobile: boolean, concepts?: Concept[] }) {
  const toggle = (key: keyof Settings) => {
    if (key === 'lightMode') {
      const newLightMode = !settings.lightMode;
      setSettings({ 
        ...settings, 
        lightMode: newLightMode,
        alwaysGlow: newLightMode ? true : settings.alwaysGlow 
      });
    } else {
      setSettings({ ...settings, [key]: !settings[key] });
    }
  };
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 100, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', overflowY: 'auto', padding: '4.5rem 1rem 3rem', boxSizing: 'border-box' }}>
      <button onClick={onClose} className="nomad-btn" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>⟨ exit ⟩</button>
      
      <div style={{ ...S.headerTitle, fontSize: isMobile ? '0.75rem' : '0.85rem', marginBottom: isMobile ? '2rem' : '3rem' }}>SETTINGS</div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.5rem', width: '100%', maxWidth: '400px', padding: isMobile ? '0 2rem' : '0' }}>
        {[
          { key: 'lightMode' as keyof Settings, label: 'Light Mode (White Theme)' },
          { key: 'alwaysGlow' as keyof Settings, label: 'Always Glow (all elements lit)' },
          { key: 'enableParanoia' as keyof Settings, label: 'Paranoia Mode (1% random event)' },
          { key: 'enableEyeMovement' as keyof Settings, label: 'Ambient Eye Movement' },
          { key: 'enableBlinking' as keyof Settings, label: 'Random Blinking' },
          { key: 'enableGaze' as keyof Settings, label: 'UI Gazing (Eye looks at buttons)' },
          { key: 'disableEye' as keyof Settings, label: 'Disable Eye Graphic' },
          { key: 'enableVoice' as keyof Settings, label: 'Enable Voices (Welcome)' },
          { key: 'enableBuzz' as keyof Settings, label: 'Enable Buzz Sound (Practice)' },
        ].map(({ key, label }) => (
          <div key={key} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'space-between', alignItems: isMobile ? 'flex-start' : 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: isMobile ? '0.5rem' : '1rem', gap: isMobile ? '0.5rem' : '0' }}>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '0.95rem' : '0.85rem' }}>{label}</span>
            <span onClick={() => toggle(key)} style={{ cursor: 'pointer', fontSize: isMobile ? '0.85rem' : '0.75rem', color: settings[key] ? '#fff' : 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', transition: 'color 0.2s', alignSelf: isMobile ? 'flex-end' : 'auto' }}>
              [ {settings[key] ? 'ENABLED' : 'DISABLED'} ]
            </span>
          </div>
        ))}
      </div>

      {/* One-click database sync from GitHub (public fetch) */}
      <div style={{ marginTop: isMobile ? '2rem' : '3rem', width: '100%', maxWidth: '400px', padding: isMobile ? '0 2rem' : '0', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: isMobile ? '1.5rem' : '2rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem', textTransform: 'uppercase' }}>database sync</div>
        <SyncDatabaseButton isMobile={isMobile} concepts={concepts} />
      </div>

      {/* Android app download (GitHub release) */}
      <div style={{ marginTop: isMobile ? '2rem' : '3rem', width: '100%', maxWidth: '400px', padding: isMobile ? '0 2rem' : '0', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: isMobile ? '1.5rem' : '2rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem', textTransform: 'uppercase' }}>android app</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          <a
            href="https://github.com/Amanfor/nomad/releases/latest/download/nomad.apk"
            className="nomad-btn"
            style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.5rem', borderRadius: '4px', minWidth: '200px', textAlign: 'center', textDecoration: 'none' }}
          >
            ⟨ download apk ⟩
          </a>
          <AndroidUpdateButton />
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>free · installs offline</div>
        </div>
      </div>

      {/* Desktop app: macOS / Windows / Linux (GitHub release) */}
      <div style={{ marginTop: isMobile ? '2rem' : '3rem', width: '100%', maxWidth: '400px', padding: isMobile ? '0 2rem' : '0', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: isMobile ? '1.5rem' : '2rem' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem', textTransform: 'uppercase' }}>desktop app</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          <DesktopDownloads />
          <DesktopUpdateButton />
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>free · dmg · exe · appimage</div>
        </div>
      </div>
    </motion.div>
  );
}

function SyncDatabaseButton({ isMobile, concepts }: { isMobile: boolean, concepts?: Concept[] }) {
  const [status, setStatus] = useState<string>('');
  const [busy, setBusy] = useState(false);

  // Hardcoded repo info — adjust if needed
  const REPO_OWNER = 'Amanfor';
  const REPO_NAME = 'nomad';
  const BRANCH = 'main';
  const SYNC_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/nomad-database.json`;

  const sync = async () => {
    if (busy) return;
    setBusy(true);
    setStatus('fetching...');
    try {
      const res = await fetch(SYNC_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const payload = await res.json();
      if (!payload || !Array.isArray(payload.targetQuestions)) throw new Error('Invalid database format');
      // Apply synced data — only questions go to localStorage; concepts are fetched from /all-concepts.json on reload
      const { microQuestions, targetQuestions } = payload;
      if (microQuestions?.length) {
        try { localStorage.setItem('nomad-synced-micro', JSON.stringify(microQuestions)); } catch (e) {}
      }
      if (targetQuestions?.length) {
        try { localStorage.setItem('nomad-synced-target', JSON.stringify(targetQuestions)); } catch (e) {}
      }
      setStatus(`synced ✓ ${new Date().toLocaleTimeString()} — ${targetQuestions?.length ?? 0} target, ${microQuestions?.length ?? 0} micro`);
      // Reload to apply new questions (concepts come from /all-concepts.json on boot)
      setTimeout(() => window.location.reload(), 800);
    } catch (e: any) {
      setStatus(`failed: ${e.message || e}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
      <button 
        className="nomad-btn" 
        onClick={sync} 
        disabled={busy}
        style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.5rem', borderRadius: '4px', opacity: busy ? 0.5 : 1, minWidth: '200px' }}
      >
        ⟨ {busy ? 'syncing...' : 'sync database'} ⟩
      </button>
      {status && <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', wordBreak: 'break-word', textAlign: 'center' }}>{status}</div>}
    </div>
  );
}

const LATEST_JSON_URL = 'https://github.com/Amanfor/nomad/releases/latest/download/latest.json';

const cmpVersions = (a: string, b: string) => {
  const pa = a.split('.').map(Number), pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d !== 0) return d;
  }
  return 0;
};

const isTauri = () => typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;

// ── Android self-update (sideloaded APK via native AppUpdater plugin) ──────
const AppUpdater = registerPlugin<{
  download(opts: { url: string }): Promise<{ downloadId: number }>;
  canRequestInstalls(): Promise<{ allowed: boolean }>;
  openInstallSettings(): Promise<{ opened: boolean }>;
  addListener(event: 'updateEvent', cb: (info: { state: string }) => void): Promise<{ remove: () => void }>;
}>('AppUpdater');

function AndroidUpdateButton() {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const [needsGrant, setNeedsGrant] = useState(false);
  if (!Capacitor.isNativePlatform()) return null;

  const check = async () => {
    if (busy) return;
    setBusy(true); setNeedsGrant(false); setStatus('checking...');
    try {
      const { App } = await import('@capacitor/app');
      const info = await App.getInfo();
      const res = await fetch(LATEST_JSON_URL, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const latest = await res.json();
      if (!latest?.version) throw new Error('bad update manifest');
      if (cmpVersions(latest.version, info.version) <= 0) {
        setStatus(`up to date · v${info.version}`);
        return;
      }
      const { allowed } = await AppUpdater.canRequestInstalls();
      if (!allowed) {
        setStatus(`v${latest.version} available · permission needed`);
        setNeedsGrant(true);
        setBusy(false);
        return;
      }
      setStatus(`downloading v${latest.version}...`);
      await AppUpdater.addListener('updateEvent', (e) => {
        if (e.state === 'ready') setStatus('download done · confirm install');
        else if (e.state === 'failed') { setStatus('download failed'); setBusy(false); }
      });
      await AppUpdater.download({ url: 'https://github.com/Amanfor/nomad/releases/latest/download/nomad.apk' });
    } catch (e: any) {
      setStatus(`failed: ${e.message || e}`);
      setBusy(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
      <button className="nomad-btn"
        onClick={needsGrant ? (async () => { await AppUpdater.openInstallSettings(); setNeedsGrant(false); setStatus('enabled? tap check again'); }) : check}
        disabled={busy}
        style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.5rem', borderRadius: '4px', minWidth: '200px', opacity: busy ? 0.5 : 1 }}>
        ⟨ {needsGrant ? 'allow installs' : 'check for update'} ⟩
      </button>
      {status && <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>{status}</div>}
    </div>
  );
}

// ── Desktop self-update (Tauri updater, signed bundles) ────────────────────
function DesktopUpdateButton() {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  if (!isTauri()) return null;

  const check = async () => {
    if (busy) return;
    setBusy(true); setStatus('checking...');
    try {
      const { check } = await import('@tauri-apps/plugin-updater');
      const update = await check();
      if (!update) { setStatus('up to date'); return; }
      setStatus(`downloading v${update.version}...`);
      await update.downloadAndInstall();
      setStatus('restarting...');
      const { relaunch } = await import('@tauri-apps/plugin-process');
      await relaunch();
    } catch (e: any) {
      setStatus(`failed: ${e.message || e}`);
      setBusy(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
      <button className="nomad-btn" onClick={check} disabled={busy}
        style={{ border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.5rem', borderRadius: '4px', minWidth: '200px', opacity: busy ? 0.5 : 1 }}>
        ⟨ check for update ⟩
      </button>
      {status && <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>{status}</div>}
    </div>
  );
}

// ── Desktop downloads: per-OS buttons built from latest.json (never rot) ────
function DesktopDownloads() {
  const [version, setVersion] = useState<string | null>(null);
  useEffect(() => {
    fetch(LATEST_JSON_URL, { cache: 'no-store' })
      .then(r => r.ok ? r.json() : null)
      .then(j => { if (j?.version) setVersion(j.version); })
      .catch(() => {});
  }, []);
  const btn = { border: '1px solid rgba(255,255,255,0.15)', padding: '0.5rem 1.5rem', borderRadius: '4px', minWidth: '200px', textAlign: 'center' as const, textDecoration: 'none' };
  if (!version) {
    return (
      <a href="https://github.com/Amanfor/nomad/releases/latest" target="_blank" rel="noopener noreferrer" className="nomad-btn" style={btn}>
        ⟨ macos · windows · linux ⟩
      </a>
    );
  }
  const dl = (file: string) => `https://github.com/Amanfor/nomad/releases/latest/download/${file}`;
  return (
    <>
      <a href={dl(`nomad_${version}_universal.dmg`)} className="nomad-btn" style={btn}>⟨ macos · dmg ⟩</a>
      <a href={dl(`nomad_${version}_x64-setup.exe`)} className="nomad-btn" style={btn}>⟨ windows · exe ⟩</a>
      <a href={dl(`nomad_${version}_amd64.AppImage`)} className="nomad-btn" style={btn}>⟨ linux · appimage ⟩</a>
    </>
  );
}

class OverlayErrorBoundary extends React.Component<{ children: any }, { err: string | null }> {
  constructor(props: any) { super(props); this.state = { err: null }; }
  static getDerivedStateFromError(err: any) { return { err: String(err?.message || err) }; }
  componentDidCatch(err: any, info: any) { console.error('[OverlayErrorBoundary]', err?.message, info?.componentStack); }
  render() { return this.state.err ? <div style={{ color: '#f00', padding: '2rem', width: '80vw', maxWidth: 900 }}>{this.state.err}</div> : this.props.children; }
}

function FormulaSheetsOverlay({ onClose, isMobile }: { onClose: () => void; isMobile: boolean }) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [sheetDb, setSheetDb] = useState<any[] | null>(null);
  const [formulaSheets, setFormulaSheets] = useState<any[] | null>(null);

  useEffect(() => {
    let alive = true;
    loadTargetQuestions().then(r => { if (alive) setSheetDb(r); });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    let alive = true;
    loadFormulaSheets().then(r => { if (alive) setFormulaSheets(r); });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const grouped = useMemo(() => {
    if (formulaSheets && formulaSheets.length) {
      const m = new Map<string, Set<string>>();
      for (const f of formulaSheets) {
        const subj = (f.subject || 'general').toString().trim();
        if (!m.has(subj)) m.set(subj, new Set());
        m.get(subj)!.add(f.title);
      }
      return Array.from(m.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([s, cs]) => [s, Array.from(cs).sort()] as const);
    }
    const list: any[] = sheetDb ?? [...MICRO_QUESTIONS, ...TARGET_QUESTIONS];
    const m = new Map<string, Set<string>>();
    for (const q of list) {
      const subj = (q.subject || 'general').toString().trim();
      if (!m.has(subj)) m.set(subj, new Set());
      m.get(subj)!.add(q.chapter || 'misc');
    }
    return Array.from(m.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([s, cs]) => [s, Array.from(cs).sort()] as const);
  }, [sheetDb, formulaSheets]);

  const pretty = (s: string) => s.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 100, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button onClick={onClose} className="nomad-btn" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 2 }}>⟨ exit ⟩</button>
      <div style={{ ...S.headerTitle, fontSize: isMobile ? '0.75rem' : '0.85rem', marginBottom: isMobile ? '1rem' : '2rem', marginTop: '1.5rem' }}>FORMULA SHEETS</div>

      <div className="nomad-practice-scroll" style={{ flex: 1, width: '100%', maxWidth: '640px', minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none' as any, padding: '0 1.5rem 3rem', boxSizing: 'border-box' }}>
        {selectedChapter ? (() => {
          const sheet = formulaSheets?.find((f: any) => f.title === selectedChapter);
          const groups: Array<[string, string[] | undefined]> = [
            ['# most important', sheet?.mostImportant],
            ['# important', sheet?.important],
            ['# others', sheet?.others],
          ];
          return (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'stretch' }}>
              <button onClick={() => setSelectedChapter(null)} className="nomad-btn" style={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>⟨ back ⟩</button>
              <div style={{ fontSize: '1.25rem', fontWeight: 300, letterSpacing: '0.06em', color: '#fff' }}>{pretty(selectedChapter)}</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>{sheet?.subject ? sheet.subject + ' · ' : ''}{sheet ? (sheet.mostImportant?.length ?? 0) + (sheet.important?.length ?? 0) + (sheet.others?.length ?? 0) + ' formulas' : 'sheet pending'}</div>
              {sheet ? (
                groups.map(([label, items]) => (items && items.length > 0 ? (
                  <section key={label} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
                    <div style={{ fontSize: '0.85rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{label}</div>
                    {items.map((tex: string, i: number) => (
                      <div key={i} style={{ marginBottom: '0.75rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: renderInlineLatex(tex) }} />
                    ))}
                  </section>
                ) : null))
              ) : (
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                  <p>— key formula · {pretty(selectedChapter)} 1 (placeholder)</p>
                  <p>— key formula · {pretty(selectedChapter)} 2 (placeholder)</p>
                  <p>— derivations &amp; shortcuts (placeholder)</p>
                </div>
              )}
            </motion.div>
          );
        })() : selectedSubject ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <button onClick={() => setSelectedSubject(null)} className="nomad-btn" style={{ marginBottom: '1rem' }}>⟨ back ⟩</button>
            <div style={{ fontSize: '1.1rem', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>{pretty(selectedSubject)}</div>
            {(grouped.find(([s]) => s === selectedSubject)?.[1] ?? []).map(chapter => (
              <div key={chapter} id={`fs-${chapter}`} onClick={() => setSelectedChapter(chapter)} style={{ padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 300, cursor: 'pointer', letterSpacing: '0.03em' }}>
                {pretty(chapter)}
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '1rem' }}>subjects</div>
            {grouped.map(([subject]) => (
              <div key={subject} onClick={() => setSelectedSubject(subject)} style={{ padding: '1.1rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontSize: '1.05rem', fontWeight: 300, letterSpacing: '0.05em', cursor: 'pointer' }}>
                {pretty(subject)}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function StatsOverlay({ onClose, isMobile }: { onClose: () => void, isMobile: boolean }) {
  let visitedCount = 0;
  let attempted = 0;
  let correct = 0;
  let totalReadingSeconds = 0;
  try {
    const visitedRaw = localStorage.getItem('nomad-visited-notes');
    if (visitedRaw) visitedCount = JSON.parse(visitedRaw).length;
    const practiceRaw = localStorage.getItem('nomad-practice-stats');
    if (practiceRaw) {
      const ps = JSON.parse(practiceRaw);
      attempted = ps.attempted || 0;
      correct = ps.correct || 0;
    }
    const readingRaw = localStorage.getItem('nomad-reading-time');
    if (readingRaw) {
      const rt = JSON.parse(readingRaw);
      totalReadingSeconds = rt.totalSeconds || 0;
    }
  } catch (e) {}
  const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;
  const minutes = Math.floor(totalReadingSeconds / 60);
  const seconds = totalReadingSeconds % 60;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 100, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={onClose} className="nomad-btn" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>⟨ exit ⟩</button>
      <div style={{ ...S.headerTitle, fontSize: isMobile ? '0.75rem' : '0.85rem', marginBottom: isMobile ? '2rem' : '3rem' }}>STATS</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.5rem', width: '100%', maxWidth: '400px', padding: isMobile ? '0 2rem' : '0', textAlign: 'center' }}>
        <div><span style={{ color: 'rgba(255,255,255,0.5)' }}>Visited notes: </span><span style={{ color: '#fff' }}>{visitedCount}</span></div>
        <div><span style={{ color: 'rgba(255,255,255,0.5)' }}>Practice questions: </span><span style={{ color: '#fff' }}>{attempted}</span></div>
        <div><span style={{ color: 'rgba(255,255,255,0.5)' }}>Practice accuracy: </span><span style={{ color: '#fff' }}>{accuracy}%</span></div>
        <div><span style={{ color: 'rgba(255,255,255,0.5)' }}>Reading time: </span><span style={{ color: '#fff' }}>{minutes}m {seconds}s</span></div>
      </div>
    </motion.div>
  );
}

function TodoWidget({ isMobile, alwaysGlow }: { isMobile: boolean, alwaysGlow?: boolean }) {
  if (isMobile) return null;

  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState<{ id: string, text: string, done: boolean }[]>([]);
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('nomad-todos');
      if (saved) setTodos(JSON.parse(saved));
    } catch (e) {}
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const save = (newTodos: { id: string, text: string, done: boolean }[]) => {
    setTodos(newTodos);
    try {
      localStorage.setItem('nomad-todos', JSON.stringify(newTodos));
    } catch(e) {}
  };

  const toggle = (id: string) => save(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const del = (id: string) => save(todos.filter(t => t.id !== id));
  const add = () => {
    if (!inputVal.trim()) return;
    save([...todos, { id: Math.random().toString(36).substring(2,9), text: inputVal.trim(), done: false }]);
    setInputVal('');
  };

  return (
    <div style={{ position: 'fixed', top: '1.5rem', left: '1.5rem', zIndex: 50 }}>
      <button 
        className="nomad-btn" 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: (alwaysGlow || isOpen) ? '#fff' : 'rgba(255,255,255,0.3)',
          textShadow: (alwaysGlow || isOpen) ? '0 0 14px rgba(255,255,255,0.95)' : 'none',
          transition: 'color 0.4s ease, text-shadow 0.4s ease'
        }}
      >
        ⟨ tasks ⟩
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ 
              marginTop: '1rem',
              width: '220px',
              background: 'rgba(0,0,0,0.85)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
          >
            <div className="nomad-todo-list" style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {todos.map(t => (
                <div key={t.id} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', fontSize: '0.8rem', color: t.done ? 'rgba(255,255,255,0.3)' : '#fff', textDecoration: t.done ? 'line-through' : 'none' }}>
                  <div style={{ cursor: 'pointer', flexShrink: 0, paddingTop: '1px' }} onClick={() => toggle(t.id)}>
                    {t.done ? '■' : '□'}
                  </div>
                  <div style={{ flex: 1, wordBreak: 'break-word', cursor: 'pointer' }} onClick={() => toggle(t.id)}>{t.text}</div>
                  <div className="nomad-todo-del" style={{ cursor: 'pointer', paddingLeft: '0.25rem' }} onClick={() => del(t.id)}>×</div>
                </div>
              ))}
              {todos.length === 0 && <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>No tasks.</div>}
            </div>
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
              <input 
                className="nomad-todo-input"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') add();
                }}
                placeholder="add task..."
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: '0.8rem',
                  outline: 'none',
                  fontFamily: "'Inter', sans-serif"
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function NomadApp() {
  const [settings, setSettingsState] = useState<Settings>(DEFAULT_SETTINGS);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isFormulasOpen, setIsFormulasOpen] = useState(false);
  const [isWanderOpen, setIsWanderOpen] = useState(false);
  const readingStartRef = useRef<number | null>(null);
  const currentNoteRef = useRef<string | null>(null);

  const [settingsLoaded, setSettingsLoaded] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem('nomad-settings');
      if (saved) {
        // Merge with defaults so newly added settings keys exist for old saves.
        setSettingsState({ ...DEFAULT_SETTINGS, ...JSON.parse(saved) });
      }
    } catch (e) {
      console.error('Failed to parse nomad-settings:', e);
    }
    setSettingsLoaded(true);
  }, []);

  const setSettings = (newSettings: Settings) => {
    setSettingsState(newSettings);
    localStorage.setItem('nomad-settings', JSON.stringify(newSettings));
  };

  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [fuse, setFuse] = useState<Fuse<Concept> | null>(null);

  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState<Concept | null>(null);
  const [isBrowsingConcepts, setIsBrowsingConcepts] = useState(false);
  const [isBrowsingQuestions, setIsBrowsingQuestions] = useState(false);
  const [targetBrowseResults, setTargetBrowseResults] = useState<any[]>([]);
  const [questionLimit, setQuestionLimit] = useState(24);
  
  const [eyeShape, setEyeShape] = useState<EyeState>('closed');
  const [isBlinking, setIsBlinking] = useState(false);
  const [isMultiEye, setIsMultiEye] = useState(false);
  const paranoiaTimeoutRef = useRef<number | null>(null);
  const paranoiaStartedAtRef = useRef(0);
  const PARANOIA_MIN_DURATION = 8000; // paranoia can never end before this

  const closeParanoia = () => {
    if (paranoiaTimeoutRef.current) {
      clearTimeout(paranoiaTimeoutRef.current);
      paranoiaTimeoutRef.current = null;
    }
    setIsMultiEye(false);
    setEyeShape('open');
    pupilX.set(0);
    pupilY.set(0);
  };

  // Enforces the minimum duration before paranoia may end (manual or automatic).
  const requestParanoiaEnd = () => {
    const elapsed = Date.now() - paranoiaStartedAtRef.current;
    const remaining = PARANOIA_MIN_DURATION - elapsed;
    if (remaining <= 0) {
      closeParanoia();
    } else {
      setTimeout(closeParanoia, remaining);
    }
  };
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPractice, setIsPractice] = useState(false);
  const [isTargetMode, setIsTargetMode] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<(typeof MICRO_QUESTIONS[0]) | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [gazingAt, setGazingAt] = useState<string | null>(null);
  // First-boot guided intro: 0=eye only, 1=title/welcome, 2=search, 3=practice,
  // 4=stats, 5=database, 6=remember+paranoia, null=intro finished/skipped.
  // Initialize from localStorage on client; SSR gets 0 (safe), client hydrates correctly.
  const [introStage, setIntroStage] = useState<number | null>(() => {
    if (typeof window === 'undefined') return 0; // SSR
    try { return localStorage.getItem('nomad-intro-done') ? null : 0; } catch { return 0; }
  });
  
  const introStageRef = useRef<number | null>(introStage);
  useEffect(() => { introStageRef.current = introStage; }, [introStage]);
  const introActive = introStage !== null;
  const introRunRef = useRef(false);
  // Hold the intro at stage 0 until the user touches the page. If the page
  // is never interacted with, the tour (and its audio) never starts.
  const [introWaitingForGesture, setIntroWaitingForGesture] = useState(() => {
    if (typeof window === 'undefined') return false;
    try { return !localStorage.getItem('nomad-intro-done'); } catch { return true; }
  });
  // True once a given intro stage (or normal mode) has been reached.
  const introShow = (min: number) => !introActive || (introStage as number) >= min;
  const searching = query.trim().length > 0;
  const welcomeAudioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayedWelcomeRef = useRef(false);

  // ── Autoplay guard ─────────────────────────────────────────
  // Android Chrome / iOS Safari refuse audio that did not follow a
  // user gesture. We cannot force it, so when playback is blocked we
  // park the exact element and retry it on the user's first touch or
  // key. After that one gesture all audio is allowed (sticky).
  const pendingLineRef = useRef<HTMLAudioElement | null>(null);
  const unlockAudio = useCallback(() => {
    const el = pendingLineRef.current;
    if (!el) return;
    // Only clear the parked line once playback actually starts; a failed
    // attempt (e.g. synthesized, untrusted event) must not consume it,
    // otherwise the line is silently lost.
    el.play()
      .then(() => { if (pendingLineRef.current === el) pendingLineRef.current = null; })
      .catch(() => {});
  }, []);
  useEffect(() => {
    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('touchstart', unlockAudio);
    window.addEventListener('keydown', unlockAudio);
    return () => {
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
  }, [unlockAudio]);

  // Play welcome voice after user interaction once settings are known.
  // During the first-boot intro the sequencer owns the welcome line instead.
  useEffect(() => {
    if (introStageRef.current !== null) { hasPlayedWelcomeRef.current = true; return; }
    if (!settingsLoaded || !settings.enableVoice || !welcomeAudioRef.current || hasPlayedWelcomeRef.current) return;
    hasPlayedWelcomeRef.current = true;
    welcomeAudioRef.current.play().catch((err) => {
      if (err && err.name === 'NotAllowedError') pendingLineRef.current = welcomeAudioRef.current;
    });
  }, [settings.enableVoice, settingsLoaded]);

  // Immediately stop any playing voice line when the user disables voices.
  useEffect(() => {
    if (!settings.enableVoice) {
      welcomeAudioRef.current?.pause();
      pendingLineRef.current = null;
    }
  }, [settings.enableVoice]);
  // Comprehensive, solution-ready target bank (curated TARGET + deduped
  // solution-ready PYQs from public/pyq-database.json).
  const [targetDb, setTargetDb] = useState<any[] | null>(null);
  useEffect(() => {
    let alive = true;
    loadTargetQuestions().then(r => { if (alive) setTargetDb(r); });
    return () => { alive = false; };
  }, []);

  const questionFuse = useMemo(() => {
    if (!isTargetMode) return null;
    return new Fuse(targetDb ?? TARGET_QUESTIONS, {
      keys: [
      { name: 'chapter', weight: 3 },
      { name: 'topic', weight: 2 },
      { name: 'question', weight: 1 }
    ],
      threshold: 0.4,
      ignoreLocation: true,
    });
  }, [isTargetMode, targetDb]);
  
  const containerControls = useAnimation(); 
  const inputControls = useAnimation(); 
  const contentControls = useAnimation(); 
  
  const pupilX = useSpring(0, { stiffness: 300, damping: 25 });
  const pupilY = useSpring(0, { stiffness: 300, damping: 25 });
  const searchInterval = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const gazeAtElement = useCallback((el: HTMLElement) => {
    const eyeEl = document.getElementById('nomad-eye-center');
    if (!el || !eyeEl) return;
    const eyeRect = eyeEl.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const eyeCX = eyeRect.left + eyeRect.width / 2;
    const eyeCY = eyeRect.top + eyeRect.height / 2;
    const elCX = elRect.left + elRect.width / 2;
    const elCY = elRect.top + elRect.height / 2;
    // Vector from eye center to element center
    const dx = elCX - eyeCX;
    const dy = elCY - eyeCY;
    // Clamp to max pupil travel distance (e.g. 18px)
    const dist = Math.sqrt(dx*dx + dy*dy);
    const maxDist = 18;
    const scale = Math.min(1, maxDist / dist);
    pupilX.set(dx * scale);
    pupilY.set(dy * scale);
  }, [pupilX, pupilY]);

  useEffect(() => {
    setShowAnswer(false);
  }, [selectedQuestion]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Boot & Fetch
  useEffect(() => {
    async function boot() {
      // Fetch concepts (base-URL aware, shared cache, never throws)
      const { concepts: data } = await loadConcepts();
      setConcepts(data);
      if (data.length) {
        setFuse(new Fuse(data, {
          keys: [ { name: 'title', weight: 2.0 }, { name: 'section', weight: 1.0 }, { name: 'content', weight: 0.5 } ],
          threshold: 0.35, ignoreLocation: true,
        }));
      }

      await new Promise(r => setTimeout(r, 600));
      setEyeShape('open');
      await containerControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: easeMorph } });
      // During the first-boot intro the sequencer owns the input reveal,
      // and auto-focus would pop the Android keyboard mid-tour.
      if (introStageRef.current === null) {
        await inputControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
        inputRef.current?.focus();
      }
    }
    containerControls.set({ opacity: 0, y: 20 });
    inputControls.set({ opacity: 0, y: 10 });
    contentControls.set({ opacity: 0, y: 40 });
    boot();
  }, [containerControls, inputControls, contentControls]);

  // ── First-boot guided intro (runs exactly once) ──────────────
  // Stage 0 eye only → 1 title/welcome → 2 search → 3 practice →
  // 4 stats → 5 database → 6 reminder + paranoia, then done.
  // The tour only starts after the first user gesture.
  useEffect(() => {
    if (!introWaitingForGesture) return;
    const start = () => setIntroWaitingForGesture(false);
    window.addEventListener('pointerdown', start, { once: true });
    window.addEventListener('touchstart', start, { once: true });
    window.addEventListener('keydown', start, { once: true });
    return () => {
      window.removeEventListener('pointerdown', start);
      window.removeEventListener('touchstart', start);
      window.removeEventListener('keydown', start);
    };
  }, [introWaitingForGesture]);

  useEffect(() => {
    if (introStageRef.current === null || introRunRef.current || introWaitingForGesture) return;
    introRunRef.current = true;
    let cancelled = false;
    const wait = (ms: number) => new Promise<void>(r => setTimeout(r, ms));
    // Read the live setting directly so a settings load never cancels the run.
    const voiceOn = () => {
      try {
        const raw = localStorage.getItem('nomad-settings');
        if (raw) return JSON.parse(raw).enableVoice !== false;
      } catch (e) {}
      return true;
    };
    const playVoice = (src: string, fallbackMs: number) =>
      new Promise<void>(resolve => {
        if (!voiceOn()) { wait(fallbackMs).then(resolve); return; }
        const a = new Audio(src);
        let settled = false;
        const finish = () => { if (!settled) { settled = true; resolve(); } };
        a.onended = finish;
        a.onerror = () => wait(fallbackMs).then(finish);
        a.play().catch((err) => {
          // Browser refused autoplay: retry this exact line on first tap.
          if (err && err.name === 'NotAllowedError') pendingLineRef.current = a;
          wait(fallbackMs).then(finish);
        });
        setTimeout(finish, fallbackMs + 8000); // safety net
      });
    // Buffer every voice line before the tour starts. Without this the first
    // line races the network and the intro either stalls or speaks late.
    const INTRO_VOICES = [
      'welcome_to_nomad.mp3',
      'intro_search.mp3',
      'intro_practice.mp3',
      'intro_stats.mp3',
      'intro_database.mp3',
      'intro_reminder.mp3',
    ];
    const preloadVoices = () =>
      Promise.all(
        INTRO_VOICES.map(f =>
          fetch(asset(f), { cache: 'force-cache' })
            .then(r => (r.ok ? r.arrayBuffer() : undefined))
            .catch(() => undefined)
        )
      );
    const gaze = (id: string, key: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      setGazingAt(key);
      gazeAtElement(el);
    };
    const releaseGaze = () => {
      setGazingAt(null);
      pupilX.set(0);
      pupilY.set(0);
    };
    // Wait out the delay, reveal the stage, then let it settle in the DOM.
    const advance = async (stage: number, preDelay: number, settle: number) => {
      await wait(preDelay);
      if (cancelled) return false;
      setIntroStage(stage);
      await wait(settle);
      return !cancelled;
    };

    (async () => {
      // Stage 0 → 1: eye finishes opening while the voice lines buffer,
      // then the title appears only once they are ready to play.
      const buffering = preloadVoices();
      if (!await advance(1, 2600, 800)) return;
      await Promise.race([buffering, wait(5000)]); // slight load hold, never a hang
      if (cancelled) return;
      gaze('nomad-title', 'title');
      await playVoice(asset('welcome_to_nomad.mp3'), 2600);
      if (cancelled) return;
      releaseGaze();

      // Stage 2: search bar fades in and the eye studies it.
      inputControls.set({ opacity: 0, y: 10 });
      if (!await advance(2, 400, 120)) return;
      inputControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
      gaze('nomad-search-input', 'search');
      await playVoice(asset('intro_search.mp3'), 4200);
      if (cancelled) return;
      releaseGaze();

      // Stage 3: practice button.
      if (!await advance(3, 400, 500)) return;
      gaze('nomad-practice-btn', 'practice');
      await playVoice(asset('intro_practice.mp3'), 3100);
      if (cancelled) return;
      releaseGaze();

      // Stage 4: stats button.
      if (!await advance(4, 400, 500)) return;
      gaze('nomad-stats-btn', 'stats');
      await playVoice(asset('intro_stats.mp3'), 3300);
      if (cancelled) return;
      releaseGaze();

      // Stage 5: database / concepts footer.
      if (!await advance(5, 400, 500)) return;
      gaze('nomad-concepts', 'concepts');
      await playVoice(asset('intro_database.mp3'), 3300);
      if (cancelled) return;
      releaseGaze();

      // Stage 6: reminder line, paranoia lifts when the voice ends.
      if (!await advance(6, 500, 600)) return;
      paranoiaStartedAtRef.current = Date.now();
      setIsMultiEye(true);
      await playVoice(asset('intro_reminder.mp3'), 4100);
      if (cancelled) return;
      closeParanoia();
      try { localStorage.setItem('nomad-intro-done', '1'); } catch (e) {}
      setIntroStage(null);
    })();

    return () => { cancelled = true; };
  }, [inputControls, gazeAtElement, pupilX, pupilY, introWaitingForGesture]);

  // Organic Idle Loop (Blinking, Staring, Multi-Eye Event)
  useEffect(() => {
    if (eyeShape !== 'open' || isTyping || isMultiEye || introStage !== null) return;
    
    let timeout: number;
    const organicLoop = () => {
      const rand = Math.random();
      
      if (rand < 0.01) {
        if (settings.enableParanoia) {
          // Multi-eye event (Paranoia Mode) - Rare (1% chance per loop)
          setIsBlinking(true); // main eye closes briefly
          setTimeout(() => {
            setIsBlinking(false);
            paranoiaStartedAtRef.current = Date.now();
            setIsMultiEye(true);
            pupilX.set(0);
            pupilY.set(0);
          }, 300);
          
          if (paranoiaTimeoutRef.current) clearTimeout(paranoiaTimeoutRef.current);
          paranoiaTimeoutRef.current = window.setTimeout(() => {
            setIsMultiEye(false); // remove mini eyes
            organicLoop();
          }, 10000); // Lasts exactly 10 seconds
          return;
        } else {
          timeout = window.setTimeout(organicLoop, 2000);
          return;
        }
      } 
      else if (rand < 0.3) {
        if (settings.enableEyeMovement) {
          // Random stare (saccade)
          pupilX.set((Math.random() * 40) - 20);
          pupilY.set((Math.random() * 40) - 20);
        }
        timeout = window.setTimeout(organicLoop, 800 + Math.random() * 1000);
        return;
      } 
      else {
        if (settings.enableBlinking) {
          // Double Blink
          setIsBlinking(true);
          setTimeout(() => setIsBlinking(false), 200); // end first blink
          setTimeout(() => setIsBlinking(true), 350);  // start second blink
          setTimeout(() => setIsBlinking(false), 550); // end second blink
        }
        
        timeout = window.setTimeout(organicLoop, 2500 + Math.random() * 4000);
      }
    };
    
    if (settings.enableParanoia || settings.enableEyeMovement || settings.enableBlinking) {
      timeout = window.setTimeout(organicLoop, 2000);
    }
    
    let gazeTimeout: number;
    const scheduleGaze = () => {
      gazeTimeout = window.setTimeout(async () => {
        if (isTyping || isMultiEye || selected || selectedQuestion || !settings.enableGaze) {
          scheduleGaze();
          return;
        }

        const targets = ['stats', 'settings', 'practice', 'target', 'countdown', 'concepts'];
        const pick = targets[Math.floor(Math.random() * targets.length)];
        setGazingAt(pick);

        const idMap: Record<string, string> = {
          stats: 'nomad-stats-btn',
          settings: 'nomad-settings-btn',
          practice: 'nomad-practice-btn',
          target: 'nomad-target-btn',
          countdown: 'nomad-countdown',
          concepts: 'nomad-concepts'
        };
        const el = document.getElementById(idMap[pick]);
        if (el) gazeAtElement(el);

        await new Promise(r => setTimeout(r, 2200 + Math.random() * 1200));
        setGazingAt(null);
        pupilX.set(0);
        pupilY.set(0);
        scheduleGaze();
      }, 8000 + Math.random() * 7000);
    };
    scheduleGaze();

    return () => { clearTimeout(timeout); clearTimeout(gazeTimeout); };
  }, [eyeShape, isTyping, isMultiEye, selected, selectedQuestion, gazeAtElement, pupilX, pupilY, settings, introStage]);

  // Pupil Tracking Logic
  useEffect(() => {
    if (eyeShape === 'wide' || isMultiEye) {
      if (isMultiEye) {
        pupilX.set(0);
        pupilY.set(0);
      }
      return;
    }

    // The intro sequencer drives the pupil; never fight it.
    if (introStage !== null) return;

    if (isTyping && query.length > 0) {
      pupilY.set(22);
      const xOffset = Math.min(30, (query.length / 15) * 30) - 15;
      pupilX.set(xOffset);
    } else {
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 40 - 20;
        const y = (e.clientY / window.innerHeight) * 40 - 20;
        pupilX.set(x);
        pupilY.set(y);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isTyping, query, eyeShape, isMultiEye, pupilX, pupilY, introStage]);

  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    if (!deferredQuery.trim()) return [];
    if (isTargetMode && questionFuse) {
      const qResults = questionFuse.search(deferredQuery).map(r => r.item);
      if (qResults.length > 0) {
        const browseAllItem = {
          isBrowseAll: true,
          id: 'browse-all',
          chapter: `VIEW ALL MATCHES FOR "${deferredQuery.toUpperCase()}"`,
          topic: `${qResults.length} questions found`,
          questions: qResults
        };
        return [browseAllItem, ...qResults].slice(0, 7);
      }
      return [];
    }
    if (!isTargetMode && fuse) {
      const rawResults = fuse.search(deferredQuery).map(r => r.item);
      const sorted = [...rawResults].sort((a, b) => {
        const aFull = (a as any).isFullChapter ? -1 : 1;
        const bFull = (b as any).isFullChapter ? -1 : 1;
        return aFull - bFull;
      });
      return sorted.slice(0, 6);
    }
    return [];
  }, [deferredQuery, fuse, isTargetMode, questionFuse]);

  const handleSelect = async (item: any) => {
    if (item.isBrowseAll) {
      setTargetBrowseResults(item.questions);
      setQuestionLimit(24);
      setIsBrowsingQuestions(true);
      setIsBrowsingConcepts(false);
      setQuery('');
      return;
    }

    setIsBlinking(false);
    setIsMultiEye(false);
    const wasBrowsing = isBrowsingConcepts || isBrowsingQuestions;
    setIsBrowsingConcepts(false);
    setIsBrowsingQuestions(false);
    setIsTyping(false);
    
    if (!wasBrowsing) {
      setEyeShape('wide');
      searchInterval.current = window.setInterval(() => {
        pupilX.set((Math.random() * 60) - 30);
        pupilY.set((Math.random() * 40) - 20);
      }, 150);

      inputControls.start({ opacity: 0, y: 10, transition: { duration: 0.3 } });
      await new Promise(r => setTimeout(r, 1200));
      
      if (searchInterval.current) clearInterval(searchInterval.current);
      pupilX.set(0); pupilY.set(0);
    }
    
    setEyeShape('closed');
    
    if (!wasBrowsing) {
      await new Promise(r => setTimeout(r, 300));
    }
    
    const transitionDuration = wasBrowsing ? 0.2 : 0.4;
    await containerControls.start({ opacity: 0, scale: 0.95, transition: { duration: transitionDuration } });

    if (isTargetMode) {
      setSelectedQuestion(item);
    } else {
      setSelected(item);
      try {
        const raw = localStorage.getItem('nomad-visited-notes');
        const visited = raw ? JSON.parse(raw) : [];
        const existingIdx = visited.findIndex((v: any) => v.id === item.id);
        const entry = { id: item.id, title: item.title, section: item.section, visitedAt: Date.now() };
        if (existingIdx >= 0) visited[existingIdx] = entry;
        else visited.push(entry);
        localStorage.setItem('nomad-visited-notes', JSON.stringify(visited));
      } catch (e) {}
      readingStartRef.current = Date.now();
      currentNoteRef.current = item.title;
    }
    setQuery('');
    window.scrollTo(0, 0);
    setTimeout(() => {
      contentControls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: easeMorph } });
    }, 50);
  };

  const handleBack = async () => {
    await contentControls.start({ opacity: 0, y: 20, transition: { duration: 0.4 } });
    if (readingStartRef.current && currentNoteRef.current) {
      try {
        const elapsed = Math.round((Date.now() - readingStartRef.current) / 1000);
        const raw = localStorage.getItem('nomad-reading-time');
        const rt = raw ? JSON.parse(raw) : { totalSeconds: 0, byNote: {} };
        rt.totalSeconds = (rt.totalSeconds || 0) + elapsed;
        rt.byNote = rt.byNote || {};
        rt.byNote[currentNoteRef.current] = (rt.byNote[currentNoteRef.current] || 0) + elapsed;
        localStorage.setItem('nomad-reading-time', JSON.stringify(rt));
      } catch (e) {}
      readingStartRef.current = null;
      currentNoteRef.current = null;
    }
    setSelected(null);
    setSelectedQuestion(null);
    setIsBrowsingConcepts(false);
    setIsBrowsingQuestions(false);
    
    setTimeout(() => {
      containerControls.set({ opacity: 1, scale: 1, y: 0 }); 
      setEyeShape('open');
      inputControls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
      setTimeout(() => inputRef.current?.focus(), 100);
    }, 50);
  };

  // Hardware back button & Escape: return to home instead of exiting.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selected || selectedQuestion || isBrowsingConcepts || isBrowsingQuestions) {
          handleBack();
        }
        setIsSettingsOpen(false);
        setIsStatsOpen(false);
        setIsFormulasOpen(false);
        setIsWanderOpen(false);
        setIsPractice(false);
        setIsTargetMode(false);
        setQuery('');
        
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected, selectedQuestion, isBrowsingConcepts, handleBack]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex(i => Math.min(i + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex(i => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter' && results.length > 0 && !selected) { e.preventDefault(); handleSelect(results[activeIndex]); }
  };

  let activeShape = eyeShape;
  if (isMultiEye) activeShape = 'wide';
  else if (isBlinking) activeShape = 'closed';
  else if (isTargetMode && activeShape === 'open') activeShape = 'reptile';

  const eyeClickCount = useRef(0);
  const lastEyeClick = useRef(0);

  const handleEyeClick = () => {
    if (introStageRef.current !== null) return; // intro owns the eye
    const now = Date.now();
    if (now - lastEyeClick.current < 500) {
      eyeClickCount.current += 1;
    } else {
      eyeClickCount.current = 1;
    }
    lastEyeClick.current = now;

    if (isMultiEye) {
      // Tapping the main eye four times closes paranoia mode early
      if (eyeClickCount.current >= 4) {
        eyeClickCount.current = 0;
        requestParanoiaEnd();
      }
      return;
    }

    if (eyeShape === 'wide') return; // Ignore while searching

    if (eyeClickCount.current >= 4) {
      // Trigger Paranoia
      eyeClickCount.current = 0;
      setIsBlinking(true); // Close main eye briefly
      
      setTimeout(() => {
        setIsBlinking(false);
        paranoiaStartedAtRef.current = Date.now();
        setIsMultiEye(true);
        pupilX.set(0);
        pupilY.set(0);
      }, 300);
      
      if (paranoiaTimeoutRef.current) clearTimeout(paranoiaTimeoutRef.current);
      paranoiaTimeoutRef.current = window.setTimeout(() => {
        setIsMultiEye(false);
      }, 10000); // Lasts exactly 10 seconds
    } else {
      // Normal forced blink
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }
  };

  return (
    <div style={{ ...S.root, filter: settings.lightMode ? 'invert(1)' : 'none' }} className={settings.lightMode ? 'nomad-light' : ''}>
      <style>{`
        .nomad-light img { filter: invert(1); }
        @keyframes nomad-tip-pulse { 0%,100% { opacity: 0.55; } 50% { opacity: 0.2; } }
      `}</style>
      <audio ref={welcomeAudioRef} src={asset("welcome_to_nomad.mp3")} preload="auto" />

      {/* First-boot hint: shown only until the first tap/key. */}
      {introWaitingForGesture && (
        <div
          style={{
            position: 'fixed', bottom: '12%', left: 0, right: 0, zIndex: 60,
            textAlign: 'center', pointerEvents: 'none',
            color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 300,
            letterSpacing: '0.25em', textTransform: 'lowercase',
            animation: 'nomad-tip-pulse 2.4s ease-in-out infinite',
          }}
        >
          click anywhere to begin
        </div>
      )}

      <TodoWidget isMobile={isMobile} alwaysGlow={settings.alwaysGlow} />
      
      {/* Practice Button */}
      {introShow(3) && !searching && !selected && !selectedQuestion && !isBrowsingConcepts && !isPractice && (
        <button
          id="nomad-practice-btn"
          onClick={() => { inputRef.current?.blur(); setIsPractice(true); setIsTargetMode(false); setSelectedQuestion(null); setQuery(''); setIsBrowsingConcepts(false);
    setIsBrowsingQuestions(false); }}
          className={`nomad-btn ${isMultiEye || gazingAt === 'practice' ? 'active' : ''}`}
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            zIndex: 50,
            pointerEvents: introActive ? 'none' : 'auto',
            color: (isMultiEye || gazingAt === 'practice') ? 'rgba(255,255,255,1)' : '',
            textShadow: (isMultiEye || gazingAt === 'practice' || settings.alwaysGlow) ? '0 0 14px rgba(255,255,255,0.95)' : 'none',
            transition: 'color 0.4s ease, text-shadow 0.4s ease'
          }}
        >
          ⟨ practice ⟩
        </button>
      )}
      
      {/* Target Mode Button */}
      {introShow(6) && !searching && !selected && !selectedQuestion && !isBrowsingConcepts && !isPractice && (
        <button
          id="nomad-target-btn"
          onClick={() => {
            const nextTarget = !isTargetMode;
            setIsTargetMode(nextTarget);
            setIsBrowsingConcepts(false);
    setIsBrowsingQuestions(false);
            if (nextTarget) {
              setIsPractice(false);
              setEyeShape('closed');
              setTimeout(() => setEyeShape('open'), 200);
            } else {
              setEyeShape('closed');
              setTimeout(() => setEyeShape('open'), 200);
              setSelectedQuestion(null);
              setQuery('');
            }
          }}
          className={`nomad-btn ${(isMultiEye || settings.alwaysGlow || isTargetMode || gazingAt === 'target') ? 'active' : ''}`}
          style={{
            position: 'fixed',
            bottom: '3.5rem',
            right: '1.5rem',
            zIndex: 50,
            color: (isMultiEye || settings.alwaysGlow || isTargetMode || gazingAt === 'target') ? 'rgba(255,255,255,1)' : '',
            textShadow: (isMultiEye || settings.alwaysGlow || isTargetMode || gazingAt === 'target') ? '0 0 14px rgba(255,255,255,0.95)' : 'none',
            transition: 'color 0.4s ease, text-shadow 0.4s ease'
          }}
        >
          ⟨ target ⟩
        </button>
      )}

      {/* Exit Browse Concepts handled inside ConceptBrowser's sticky header */}

      <AnimatePresence>
        {isPractice && <OverlayErrorBoundary><PracticeOverlay onClose={() => setIsPractice(false)} /></OverlayErrorBoundary>}
      </AnimatePresence>

      <AnimatePresence>
        {isSettingsOpen && <SettingsOverlay settings={settings} setSettings={setSettings} onClose={() => setIsSettingsOpen(false)} isMobile={isMobile} concepts={concepts} />}
      </AnimatePresence>

      <AnimatePresence>
        {isStatsOpen && <StatsOverlay onClose={() => setIsStatsOpen(false)} isMobile={isMobile} />}
      </AnimatePresence>

      <AnimatePresence>
        {isFormulasOpen && <FormulaSheetsOverlay onClose={() => setIsFormulasOpen(false)} isMobile={isMobile} />}
      </AnimatePresence>

      <AnimatePresence>
        {isWanderOpen && <WanderOverlay onClose={() => setIsWanderOpen(false)} isMobile={isMobile} />}
      </AnimatePresence>

      {introShow(4) && !searching && !selected && !selectedQuestion && !isBrowsingConcepts && !isPractice && (
        <button
          id="nomad-stats-btn"
          onClick={() => setIsStatsOpen(true)}
          className={`nomad-btn ${isMultiEye || settings.alwaysGlow || gazingAt === 'stats' ? 'active' : ''}`}
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '1.5rem',
            zIndex: 50,
            fontSize: '0.55rem',
            pointerEvents: introActive ? 'none' : 'auto',
            color: (isMultiEye || settings.alwaysGlow || gazingAt === 'stats') ? 'rgba(255,255,255,1)' : '',
            textShadow: (isMultiEye || settings.alwaysGlow || gazingAt === 'stats') ? '0 0 14px rgba(255,255,255,0.95)' : 'none',
          }}
        >
          ⟨ STATS ⟩
        </button>
      )}

      {introShow(6) && !searching && !selected && !selectedQuestion && !isBrowsingConcepts && !isPractice && (
        <button
          id="nomad-settings-btn"
          onClick={() => setIsSettingsOpen(true)}
          className={`nomad-btn ${isMultiEye || settings.alwaysGlow || gazingAt === 'settings' ? 'active' : ''}`}
        style={{
          position: 'fixed',
          bottom: '3.5rem',
          left: '1.5rem',
          zIndex: 50,
          fontSize: '0.55rem',
          pointerEvents: introActive ? 'none' : 'auto',
          color: (isMultiEye || settings.alwaysGlow || gazingAt === 'settings') ? 'rgba(255,255,255,1)' : '',
          textShadow: (isMultiEye || settings.alwaysGlow || gazingAt === 'settings') ? '0 0 14px rgba(255,255,255,0.95)' : 'none',
        }}
      >
        ⟨ SETTINGS ⟩
      </button>
      )}

      {introShow(4) && !searching && !selected && !selectedQuestion && !isBrowsingConcepts && !isPractice && (
        <button
          id="nomad-wander-btn"
          onClick={() => setIsWanderOpen(true)}
          className={`nomad-btn ${isWanderOpen || settings.alwaysGlow || gazingAt === 'wander' ? 'active' : ''}`}
          style={{
            position: 'fixed',
            bottom: '5.5rem',
            left: '1.5rem',
            zIndex: 50,
            fontSize: '0.55rem',
            pointerEvents: introActive ? 'none' : 'auto',
            color: (isWanderOpen || settings.alwaysGlow || gazingAt === 'wander') ? 'rgba(255,255,255,1)' : '',
            textShadow: (isWanderOpen || settings.alwaysGlow || gazingAt === 'wander') ? '0 0 14px rgba(255,255,255,0.95)' : 'none',
          }}
        >
          ⟨ WANDER ⟩
        </button>
      )}

      {introShow(6) && !searching && !selected && !selectedQuestion && !isBrowsingConcepts && !isPractice && (
        <button
          id="nomad-formulas-btn"
          onClick={() => setIsFormulasOpen(true)}
          className={`nomad-btn ${isFormulasOpen || settings.alwaysGlow || gazingAt === 'formulas' ? 'active' : ''}`}
          style={{
            position: 'fixed',
            bottom: '5.5rem',
            right: '1.5rem',
            zIndex: 50,
            fontSize: '0.55rem',
            pointerEvents: introActive ? 'none' : 'auto',
            color: (isFormulasOpen || settings.alwaysGlow || gazingAt === 'formulas') ? 'rgba(255,255,255,1)' : '',
            textShadow: (isFormulasOpen || settings.alwaysGlow || gazingAt === 'formulas') ? '0 0 14px rgba(255,255,255,0.95)' : 'none',
          }}
       >
         ⟨ FORMULAS ⟩
        </button>
      )}

      {introShow(6) && !selected && !selectedQuestion && !isBrowsingConcepts && <JEECountdown isMobile={isMobile} gazingAt={gazingAt} isMultiEye={isMultiEye} alwaysGlow={settings.alwaysGlow} />}

      {/* Pinned DATABASE footer only on mobile; desktop shows it below the search bar */}
      {isMobile && introShow(5) && !searching && !selected && !selectedQuestion && !isBrowsingConcepts && !isBrowsingQuestions && <Footer alwaysGlow={settings.alwaysGlow} isMultiEye={isMultiEye} count={isTargetMode ? (targetDb ? targetDb.length : TARGET_QUESTIONS.length) : concepts.length} unit={isTargetMode ? 'QUESTIONS' : undefined} isMobile={isMobile} gazingAt={gazingAt} onConceptClick={() => { if (introActive) return; if (isTargetMode) { setTargetBrowseResults(targetDb ?? TARGET_QUESTIONS); setQuestionLimit(24); setIsBrowsingQuestions(true); setIsBrowsingConcepts(false); setSelectedQuestion(null); setSelected(null); } else { setIsBrowsingConcepts(true); setSelectedQuestion(null); setSelected(null); } }} />}

      {/* Background Paranoia Event */}
      {isMultiEye && !selected && !selectedQuestion && !isBrowsingConcepts && !settings.disableEye && MINI_EYES.map(m => (
        <MiniEye key={m.id} x={m.x} y={m.y} scale={isMobile ? m.scale * 0.5 : m.scale} isReptile={isMultiEye} />
      ))}

      {/* SEARCH VIEW (Eye + Input) */}
      {!selected && !selectedQuestion && !isPractice && (
        <motion.div animate={containerControls} style={{ ...S.searchContainer, maxWidth: isBrowsingConcepts ? '1200px' : (isMobile ? '90vw' : 500), width: isBrowsingConcepts ? '90vw' : '100%', height: isBrowsingConcepts ? '100vh' : 'auto', paddingTop: isBrowsingConcepts ? (isMobile ? '4rem' : '6rem') : 0 }}>
          
          {introShow(1) && !settings.disableEye && (
            <motion.h1
              id="nomad-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{
                ...S.headerTitle,
                fontSize: isMobile ? '0.7rem' : '0.85rem',
                textShadow: gazingAt === 'title' || settings.alwaysGlow || settings.alwaysGlow
                  ? '0 0 22px rgba(255,255,255,0.95), 0 0 48px rgba(255,255,255,0.4)'
                  : '0 0 40px rgba(255,255,255,0.08)',
                transition: 'text-shadow 0.4s ease'
              }}
            >
              The Nomad Project
            </motion.h1>
          )}

          {settings.disableEye ? (
            <div style={{ padding: '3rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center', transform: isMobile ? 'scale(0.8)' : 'scale(1)', transition: 'transform 0.3s' }}>
              <h1 style={{ fontFamily: "'Cinzel', serif", fontVariant: 'small-caps', letterSpacing: '0.4em', fontSize: '2rem', color: '#fff', textShadow: '0 0 40px rgba(255,255,255,0.08)', margin: 0, fontWeight: 300 }}>NOMAD</h1>
            </div>
          ) : (
            <div id="nomad-eye-center" onClick={handleEyeClick} style={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent', transform: isMobile ? 'scale(0.45)' : 'scale(1)', transition: 'transform 0.3s', position: 'relative', flexShrink: 0, filter: 'none' }}>
               <EyeGraphic shape={activeShape} pupilX={pupilX} pupilY={pupilY} style={{ transition: 'opacity 0.3s' }} isReptile={isTargetMode || isMultiEye} />
            </div>
          )}

          {/* SEARCH INPUT OR BROWSE VIEW */}
          {!isBrowsingConcepts && !isBrowsingQuestions ? (
            <motion.div animate={inputControls} style={{ position: 'relative', width: '100%', marginTop: isMobile ? '-4rem' : '-2rem', display: introShow(2) ? 'block' : 'none', pointerEvents: introActive ? 'none' : 'auto' }}>
              <input
                ref={inputRef}
                id="nomad-search-input"
                className="nomad-input"
                style={{
                  ...S.input, fontSize: isMobile ? '1rem' : '1.2rem', padding: isMobile ? '0.5rem 0' : '1rem 0',
                  borderBottom: gazingAt === 'search' || settings.alwaysGlow || settings.alwaysGlow ? '1px solid rgba(255,255,255,0.85)' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: gazingAt === 'search' || settings.alwaysGlow || settings.alwaysGlow ? '0 10px 30px rgba(255,255,255,0.18)' : 'none'
                }}
                placeholder={isTargetMode ? "search questions..." : "search concepts..."}
                value={query}
                onChange={e => { setQuery(e.target.value); setActiveIndex(0); }}
                onFocus={() => setIsTyping(true)}
                onBlur={() => setIsTyping(false)}
                onKeyDown={handleKeyDown}
                autoComplete="off" spellCheck={false}
              />
              
              {query.trim() && (
                <div style={{ ...S.dropdown, width: isMobile ? '90vw' : '100%' }}>
                  {results.length > 0 ? results.map((r, i) => (
                    <div key={r.id} style={{ ...S.resultItem, padding: isMobile ? '0.75rem 1rem' : '1rem 1.5rem', ...(i === activeIndex ? S.resultItemActive : {}) }}
                         onClick={() => handleSelect(r)} onMouseEnter={() => setActiveIndex(i)}>
                      <span style={{ fontSize: isMobile ? '0.85rem' : '0.95rem' }} 
                            dangerouslySetInnerHTML={{ __html: renderInlineLatex(isTargetMode ? ((r.question || '').length > 60 ? (r.question || '').substring(0, 60) + '...' : (r.question || '')) : r.title) }} 
                      />
                      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginTop: '0.2rem' }}>
                        {isTargetMode ? `${r.chapter.toUpperCase()} · ${r.topic.toUpperCase()}` : ((r as any).isFullChapter ? 'chapter · full note' : 'concept · atom')}
                      </span>
                    </div>
                  )) : <div style={{ padding: '1.5rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>{isTargetMode ? "no questions found" : "no concepts found"}</div>}
                </div>
              )}

              {/* DATABASE entry — sits directly below the search bar on desktop web */}
              {!isMobile && introShow(5) && !searching && (
                <Footer alwaysGlow={settings.alwaysGlow} isMultiEye={isMultiEye} count={isTargetMode ? (targetDb ? targetDb.length : TARGET_QUESTIONS.length) : concepts.length} unit={isTargetMode ? 'QUESTIONS' : undefined} isMobile={isMobile} gazingAt={gazingAt} inline onConceptClick={() => { if (introActive) return; if (isTargetMode) { setTargetBrowseResults(targetDb ?? TARGET_QUESTIONS); setQuestionLimit(24); setIsBrowsingQuestions(true); setIsBrowsingConcepts(false); setSelectedQuestion(null); setSelected(null); } else { setIsBrowsingConcepts(true); setSelectedQuestion(null); setSelected(null); } }} />
              )}
            </motion.div>
          ) : isBrowsingConcepts ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ width: '100%' }}
            >
              <ConceptBrowser
                isMobile={isMobile}
                onExit={() => setIsBrowsingConcepts(false)}
                onSelect={(c) => handleSelect(c)}
              />
            </motion.div>
          ) : isBrowsingQuestions ? (
            <motion.div 
              onScroll={(e) => {
                const el = e.currentTarget;
                if (el.scrollTop + el.clientHeight >= el.scrollHeight - 200) {
                  setQuestionLimit(prev => Math.min(prev + 24, targetBrowseResults.length));
                }
              }}
              className="nomad-browse-container"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ width: '100%', marginTop: isMobile ? '-1rem' : '2rem', maxHeight: '65vh', overflowY: 'auto', paddingRight: '0.5rem', paddingBottom: '4rem', scrollbarWidth: 'thin' as any, scrollbarColor: 'rgba(255,255,255,0.25) transparent' }}
            >
              <div style={{ position: 'sticky', top: 0, zIndex: 2, background: '#000', paddingBottom: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button className="nomad-btn" onClick={() => setIsBrowsingQuestions(false)}>⟨ exit ⟩</button>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {Math.min(questionLimit, targetBrowseResults.length)} / {targetBrowseResults.length} questions
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {targetBrowseResults.slice(0, questionLimit).map((q, i) => (
                  <div 
                    key={q.id || i}
                    onClick={() => handleSelect(q)}
                    style={{
                      padding: '1rem',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }} dangerouslySetInnerHTML={{ __html: renderInlineLatex(q.question.length > 60 ? q.question.substring(0, 60) + '...' : q.question) }} />
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{q.chapter} · {q.topic}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : null}
        </motion.div>
      )}

      {/* CONTENT VIEW */}
      {selected && (
        <motion.div className="nomad-content" animate={contentControls} initial={{ opacity: 0, y: 40 }} style={{ ...S.contentView, padding: isMobile ? '3rem 1rem' : '6rem 15vw' }}>
          <button className="nomad-btn" style={{ minHeight: isMobile ? '44px' : 'auto', width: isMobile ? '100%' : 'auto', marginBottom: isMobile ? '2rem' : '4rem', display: 'block' }} onClick={handleBack}>⟨ return ⟩</button>
          
          <div style={S.section}>{selected.section}</div>
          <h1 style={{ ...S.title, fontSize: isMobile ? '2rem' : '3rem', marginBottom: isMobile ? '1.5rem' : '2.5rem' }} dangerouslySetInnerHTML={{ __html: renderInlineLatex(selected.title) }} />
          
          {selected.formulas.length > 0 && (
            <div style={S.formulaBox}>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', marginBottom: '1.5rem', fontWeight: 500 }}>KEY FORMULAS</div>
              {selected.formulas.map((f, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: renderFormulaBlock(f) }} style={{ marginBottom: '1rem' }} />
              ))}
            </div>
          )}
          
          <div className="nomad-prose" style={S.prose} dangerouslySetInnerHTML={{ __html: renderContent(selected.content) }} />
          
          {selected.image && (
            <div style={{ marginTop: '3rem' }}>
              <img src={selected.image} alt="" style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', filter: 'invert(0.9) hue-rotate(180deg)' }} />
            </div>
          )}
        </motion.div>
      )}

      {/* QUESTION CONTENT VIEW */}
      {selectedQuestion && (
        <motion.div className="nomad-content" animate={contentControls} initial={{ opacity: 0, y: 40 }} style={{ ...S.contentView, padding: isMobile ? '3rem 1rem' : '6rem 15vw' }}>
          <button className="nomad-btn" style={{ minHeight: isMobile ? '44px' : 'auto', width: isMobile ? '100%' : 'auto', marginBottom: isMobile ? '2rem' : '4rem', display: 'block' }} onClick={handleBack}>⟨ return ⟩</button>
          
          <div style={S.section}>{selectedQuestion.chapter} · {selectedQuestion.topic}</div>
          
          <div
            style={{ ...S.title, fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: isMobile ? '2rem' : '3.5rem', lineHeight: 1.5 }}
            dangerouslySetInnerHTML={{ __html: renderInlineLatex(selectedQuestion.question) }}
          />

          {/* Top section - non-interactive display */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '600px', marginBottom: '2rem' }}>
            {selectedQuestion.options.map((opt, idx) => {
              const prefix = ['A', 'B', 'C', 'D'][idx] + '. ';
              return (
                <div
                  key={idx}
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.85rem',
                    textAlign: 'left',
                  }}
                  dangerouslySetInnerHTML={{ __html: `${prefix}${renderOption(opt)}` }}
                />
              );
            })}
          </div>

          {/* Bottom section - Answer & Solution (collapsible) */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', width: '100%', maxWidth: '600px' }}>
            <button 
              onClick={() => setShowAnswer(prev => !prev)}
              className="nomad-btn"
              style={{ marginBottom: showAnswer ? '1.5rem' : 0 }}
            >
              ⟨ {showAnswer ? 'conceal' : 'reveal'} ⟩
            </button>
            <AnimatePresence>
              {showAnswer && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ color: '#fff', fontSize: '1rem', marginBottom: '1rem', fontWeight: 500 }}
                       dangerouslySetInnerHTML={{ __html: renderInlineLatex(`ANSWER: ${['A', 'B', 'C', 'D'][selectedQuestion.correct]}. ${selectedQuestion.options[selectedQuestion.correct]}`) }}
                  />
                  <div 
                    style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: renderContent((selectedQuestion as any).solution || '') }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
      
      {/* Font & Global CSS */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap');
        ::selection { background: rgba(255,255,255,0.15); color: #fff; }
        .katex { color: #ffffff; }
        .katex-display { margin: 0.3em 0; }
        .nomad-content::-webkit-scrollbar { display: none; }
        .nomad-practice-scroll::-webkit-scrollbar { display: none; }
        .nomad-browse-container::-webkit-scrollbar { width: 4px; }
        .nomad-browse-container::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
        .nomad-input:focus { border-bottom: 1px solid rgba(255,255,255,0.1) !important; }
        .nomad-input::placeholder { color: rgba(255,255,255,0.25); }
        .nomad-prose p { margin-bottom: 1.5rem; line-height: 1.7; }
        .nomad-prose strong { color: #fff; font-weight: 500; }
        .nomad-prose h1 { font-size: 1.8rem; margin: 3rem 0 1.5rem 0; color: #fff; letter-spacing: -0.02em; font-weight: 400; }
        .nomad-prose h2 { font-size: 1.3rem; margin: 2.5rem 0 1rem 0; color: #fff; letter-spacing: -0.01em; font-weight: 400; }
        .nomad-prose h3 { font-size: 1rem; margin: 2rem 0 1rem 0; color: rgba(255,255,255,0.7); letter-spacing: 0.05em; text-transform: uppercase; }
        .nomad-prose ul { margin-bottom: 2rem; padding-left: 1.5rem; list-style-type: square; }
        .nomad-prose li { margin-bottom: 0.5rem; line-height: 1.6; color: rgba(255,255,255,0.7); }
        .nomad-prose li strong { color: rgba(255,255,255,0.9); }
        .nomad-prose img { width: 100%; border-radius: 8px; margin: 2rem 0; border: 1px solid rgba(255,255,255,0.1); }
        .nomad-prose blockquote { border-left: 1px solid rgba(255,255,255,0.05); padding-left: 1rem; margin-left: 0; }
        .nomad-prose code, .nomad-prose pre { font-family: monospace; background: rgba(255,255,255,0.07); padding: 0.2em 0.4em; border-radius: 3px; }
        .nomad-prose pre { padding: 1rem; overflow-x: auto; }
        .nomad-prose pre code { background: transparent; padding: 0; }
                .nomad-btn {
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          background: none;
          border: none;
          border-bottom: 1px solid transparent;
          cursor: pointer;
          transition: color 0.25s ease, border-bottom 0.25s ease;
          padding: 0;
        }
        .nomad-btn:hover {
          color: rgba(255,255,255,0.85);
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }
        .nomad-btn.active {
          color: rgba(255,255,255,1);
        }
        button, .nomad-btn, .nomad-btn:active, .nomad-btn:focus {
          -webkit-tap-highlight-color: transparent !important;
          outline: none !important;
        }
        .nomad-btn:active, .nomad-btn:focus-visible,
        button:active, button:focus-visible {
          color: #fff !important;
          text-shadow: 0 0 14px rgba(255,255,255,0.95) !important;
        }
        .nomad-btn:active, .nomad-btn:focus-visible {
          border-bottom-color: rgba(255,255,255,0.35) !important;
        }
        .nomad-btn.disabled {
          color: rgba(255,255,255,0.15);
          cursor: default;
          pointer-events: none;
        }
        .nomad-todo-input::placeholder { color: rgba(255, 255, 255, 0.3); }
        .nomad-todo-del { opacity: 0.25; transition: opacity 0.15s ease; }
        .nomad-todo-del:hover { opacity: 1 !important; }
        .nomad-todo-list::-webkit-scrollbar { width: 3px; }
        .nomad-todo-list::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 2px; }
        @media (max-width: 600px) {
          .nomad-prose p { font-size: 0.9rem; line-height: 1.6; }
          .nomad-prose li { font-size: 0.9rem; line-height: 1.5; }
          .nomad-prose h1 { font-size: 1.4rem; margin: 2rem 0 1rem 0; }
          .nomad-prose h2 { font-size: 1.1rem; margin: 1.5rem 0 0.8rem 0; }
          .nomad-prose h3 { font-size: 0.9rem; margin: 1.2rem 0 0.8rem 0; }
          .nomad-backbtn { width: 100%; font-size: 0.9rem; padding: 0.75rem; text-align: center; }
        }
      `}</style>
    </div>
  );
}
