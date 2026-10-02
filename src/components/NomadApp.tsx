import React, { useState, useEffect, useRef, useMemo, useCallback, useDeferredValue } from 'react';
import { motion, AnimatePresence, useAnimation, useSpring, type MotionValue } from 'framer-motion';
import Fuse from 'fuse.js';
import katex from 'katex';
import { marked } from 'marked';

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

export const MICRO_QUESTIONS = [
  {
    "id": 100,
    "question": "What is the relation between velocity and displacement for constant acceleration $a$?",
    "options": [
      "v^2 = u^2 + 2ax",
      "v = u + at",
      "v = u - at",
      "v^2 = u^2 - 2ax"
    ],
    "correct": 0,
    "solution": "The third equation of motion is $v^2 = u^2 + 2as$.",
    "chapter": "Kinematics",
    "topic": "Equations of Motion"
  },
  {
    "id": 101,
    "question": "For a perfectly inelastic collision, what is the coefficient of restitution?",
    "options": [
      "e = 1",
      "e = 0.5",
      "e = 0",
      "e < 0"
    ],
    "correct": 2,
    "solution": "In a perfectly inelastic collision, the bodies stick together, so the relative velocity of separation is zero, making $e=0$.",
    "chapter": "Center of Mass and Collisions",
    "topic": "Coefficient of Restitution"
  },
  {
    "id": 102,
    "question": "Which conservation law is always applicable during the brief moment of collision?",
    "options": [
      "Conservation of Kinetic Energy",
      "Conservation of Linear Momentum",
      "Conservation of Mechanical Energy",
      "None of the above"
    ],
    "correct": 1,
    "solution": "Impulsive forces are internal, so net external impulsive force is zero, conserving linear momentum.",
    "chapter": "Center of Mass and Collisions",
    "topic": "Conservation of Momentum"
  },
  {
    "id": 103,
    "question": "In uniform circular motion, what is the direction of net acceleration?",
    "options": [
      "Along the tangent",
      "Radially inward",
      "Radially outward",
      "At an angle to the radius"
    ],
    "correct": 1,
    "solution": "In UCM, tangential acceleration is zero, and net acceleration is purely centripetal (radially inward).",
    "chapter": "Circular Motion",
    "topic": "Uniform Circular Motion"
  },
  {
    "id": 104,
    "question": "What is the formula for centripetal acceleration in terms of angular velocity?",
    "options": [
      "a = v/r",
      "a = w^2 r",
      "a = w r^2",
      "a = w/r"
    ],
    "correct": 1,
    "solution": "Centripetal acceleration is $a_c = v^2/r$, and since $v = \\omega r$, $a_c = \\omega^2 r$.",
    "chapter": "Circular Motion",
    "topic": "Centripetal Acceleration"
  },
  {
    "id": 105,
    "question": "According to Newton's Second Law, Force is the rate of change of:",
    "options": [
      "Velocity",
      "Acceleration",
      "Linear Momentum",
      "Angular Momentum"
    ],
    "correct": 2,
    "solution": "Newton's second law states $F = \frac{dp}{dt}$, where $p$ is linear momentum.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Newton's Second Law"
  },
  {
    "id": 106,
    "question": "What is the unit of impulse?",
    "options": [
      "N/s",
      "N.s",
      "kg m/s^2",
      "J"
    ],
    "correct": 1,
    "solution": "Impulse is force times time, so its unit is Newton-second (N.s), which is equivalent to kg m/s.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Impulse"
  },
  {
    "id": 107,
    "question": "For an object moving in a fluid, the viscous drag force is often proportional to:",
    "options": [
      "Velocity",
      "Displacement",
      "Acceleration",
      "Time"
    ],
    "correct": 0,
    "solution": "Viscous drag at low speeds (Stokes' drag) is proportional to velocity: $F_d = -bv$.",
    "chapter": "Fluid Mechanics",
    "topic": "Viscous Drag"
  },
  {
    "id": 108,
    "question": "What is the work done by the normal force when a block moves on a horizontal surface?",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Depends on friction"
    ],
    "correct": 2,
    "solution": "The normal force is perpendicular to the displacement, so work done $W = F \\cdot d \\cos(90^\\circ) = 0$.",
    "chapter": "Work, Energy and Power",
    "topic": "Work Done by Normal Force"
  },
  {
    "id": 109,
    "question": "In a conservative force field, the work done in a closed loop is:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Depends on the path"
    ],
    "correct": 2,
    "solution": "For a conservative force, work done depends only on initial and final positions. In a closed loop, it is zero.",
    "chapter": "Work, Energy and Power",
    "topic": "Conservative Forces"
  },
  {
    "id": 110,
    "question": "What is the SI unit of power?",
    "options": [
      "Joule",
      "Watt",
      "Newton",
      "Pascal"
    ],
    "correct": 1,
    "solution": "Power is the rate of doing work, measured in Joules per second, which is defined as the Watt (W).",
    "chapter": "Work, Energy and Power",
    "topic": "Power"
  },
  {
    "id": 111,
    "question": "The center of mass of a uniform rod of length L is at:",
    "options": [
      "L/4",
      "L/3",
      "L/2",
      "L"
    ],
    "correct": 2,
    "solution": "By symmetry, the center of mass of a uniform rod is at its geometric center, $L/2$ from either end.",
    "chapter": "Center of Mass and Collisions",
    "topic": "Center of Mass"
  },
  {
    "id": 112,
    "question": "In purely rolling motion, the velocity of the lowest point in contact with ground is:",
    "options": [
      "v",
      "v/2",
      "0",
      "2v"
    ],
    "correct": 2,
    "solution": "In pure rolling, there is no relative slipping at the point of contact, so its velocity is 0.",
    "chapter": "Rotational Motion",
    "topic": "Pure Rolling"
  },
  {
    "id": 113,
    "question": "What is the moment of inertia of a solid sphere of mass M and radius R about its diameter?",
    "options": [
      "MR^2",
      "2/3 MR^2",
      "2/5 MR^2",
      "1/2 MR^2"
    ],
    "correct": 2,
    "solution": "The moment of inertia of a solid sphere about its diameter is $2/5 MR^2$.",
    "chapter": "Rotational Motion",
    "topic": "Moment of Inertia"
  },
  {
    "id": 114,
    "question": "Kepler's Second Law (Law of Areas) is a consequence of conservation of:",
    "options": [
      "Linear Momentum",
      "Angular Momentum",
      "Energy",
      "Mass"
    ],
    "correct": 1,
    "solution": "Central forces (like gravity) exert no torque, so angular momentum is conserved, leading to constant areal velocity.",
    "chapter": "Gravitation",
    "topic": "Kepler's Laws"
  },
  {
    "id": 115,
    "question": "The escape velocity from the surface of the Earth is proportional to:",
    "options": [
      "R",
      "\\sqrt{R}",
      "1/R",
      "1/\\sqrt{R}"
    ],
    "correct": 1,
    "solution": "Escape velocity $v_e = \\sqrt{2GM/R} = \\sqrt{2gR}$, so it is proportional to $\\sqrt{R}$.",
    "chapter": "Gravitation",
    "topic": "Escape Velocity"
  },
  {
    "id": 116,
    "question": "What is the restoring force in a simple harmonic oscillator?",
    "options": [
      "-kx",
      "kx",
      "-kv",
      "kv"
    ],
    "correct": 0,
    "solution": "Hooke's law states that the restoring force is proportional to displacement and opposite in direction: $F = -kx$.",
    "chapter": "Oscillations",
    "topic": "Simple Harmonic Motion"
  },
  {
    "id": 117,
    "question": "In a longitudinal wave, particles of the medium oscillate:",
    "options": [
      "Perpendicular to wave propagation",
      "Parallel to wave propagation",
      "In circles",
      "Do not oscillate"
    ],
    "correct": 1,
    "solution": "Longitudinal waves involve compressions and rarefactions where particles oscillate parallel to the wave direction.",
    "chapter": "Waves",
    "topic": "Longitudinal Waves"
  },
  {
    "id": 118,
    "question": "The speed of sound in a gas is given by the Newton-Laplace formula:",
    "options": [
      "\\sqrt{P/\rho}",
      "\\sqrt{\\gamma P/\rho}",
      "\\sqrt{\rho/P}",
      "\\sqrt{\\gamma \rho/P}"
    ],
    "correct": 1,
    "solution": "The correct formula is $v = \\sqrt{\\gamma P / \rho}$, incorporating the adiabatic index $\\gamma$.",
    "chapter": "Waves",
    "topic": "Speed of Sound"
  },
  {
    "id": 119,
    "question": "According to the First Law of Thermodynamics, $\\Delta Q$ equals:",
    "options": [
      "\\Delta U - \\Delta W",
      "\\Delta U + \\Delta W",
      "\\Delta W - \\Delta U",
      "0"
    ],
    "correct": 1,
    "solution": "The First Law states that heat supplied to a system ($\\Delta Q$) equals the change in internal energy ($\\Delta U$) plus work done by the system ($\\Delta W$).",
    "chapter": "Thermodynamics",
    "topic": "First Law of Thermodynamics"
  },
  {
    "id": 120,
    "question": "In a series LCR circuit at resonance, the phase difference between the applied voltage and the current is",
    "options": [
      "$0$",
      "$\\frac{\\pi}{2}$",
      "$\\pi$",
      "$\\frac{\\pi}{4}$"
    ],
    "correct": 0,
    "solution": "At resonance, $X_L = X_C$, so the net reactance is zero and the circuit is purely resistive; voltage and current are in phase.",
    "chapter": "AC",
    "topic": "Resonance"
  },
  {
    "id": 121,
    "question": "The initiation step in the dehydration of alcohols using concentrated $H_2SO_4$ is",
    "options": [
      "Elimination of water",
      "Formation of carbocation",
      "Protonation of the alcohol molecule",
      "Formation of an ester"
    ],
    "correct": 2,
    "solution": "The hydroxyl oxygen is first protonated by conc. $H_2SO_4$, converting $-OH$ into a good leaving group $-OH_2^+$.",
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Dehydration of Alcohols"
  },
  {
    "id": 122,
    "question": "The distance of a point $(x_1,y_1,z_1)$ from the plane $ax+by+cz+d=0$ is",
    "options": [
      "$\\frac{|ax_1+by_1+cz_1+d|}{\\sqrt{a^2+b^2+c^2}}$",
      "$\\frac{|ax_1+by_1+cz_1+d|}{a^2+b^2+c^2}$",
      "$\\frac{|ax_1+by_1+cz_1+d|}{\\sqrt{a+b+c}}$",
      "$\\frac{|ax_1+by_1+cz_1|}{\\sqrt{a^2+b^2+c^2}}$"
    ],
    "correct": 0,
    "solution": "By the point-to-plane distance formula, $d=\\frac{|ax_1+by_1+cz_1+d|}{\\sqrt{a^2+b^2+c^2}}$.",
    "chapter": "3D Geometry",
    "topic": "Distance from a Plane"
  },
  {
    "id": 123,
    "question": "A cell of internal resistance r drives current\nthrough an external resistance R. The power\ndelivered by the cell to the external resistance\nwill be maximum when :-",
    "options": [
      "R = 1000 r",
      "R = r",
      "R = 2r",
      "R = 0.001 r"
    ],
    "correct": 1,
    "solution": "(b)\nCurrent i = ${E \\over {r + R}}$<br><br>\nPower generated in R<br><br>\nP = i<sup>2</sup>R<br><br>\n$P = {{{E^2}R} \\over {{{\\left( {r + R} \\right)}^2}}}$<br><br>\nFor maximum power${{dP} \\over {dR}} = 0$<br><br>\n${E^2}\\left[ {{{{{\\left( {r + R} \\right)}^2} \\times 1 - R \\times 2(r + R)} \\over {{{\\left( {r + R} \\right)}^4}}}} \\right] = 0$<br><br>\n$ \\Rightarrow$ r = R or R = r",
    "chapter": "Electric Power And Heating Effect Of Current",
    "topic": "Electric Power And Heating Effect Of Current"
  },
  {
    "id": 124,
    "question": "If the length of a wire is made double and radius is halved of its respective values. Then, the Young's modulus of the material of the wire will :",
    "options": [
      "remain same",
      "become 8 times its initial value",
      "become$\\frac{1}{4}$ of its initial value",
      "become 4 times its initial value"
    ],
    "correct": 0,
    "solution": "(a)\nYoung's modulus of matter depends on material of wire and is independent of the dimensions of the wire. As the material remains same so Young's modulus also remain same.",
    "chapter": "Properties-Of-Matter",
    "topic": "Properties-Of-Matter"
  },
  {
    "id": 125,
    "question": "Tube$A$ has bolt ends open while tube$B$ has one end closed, otherwise they are identical. The ratio of fundamental frequency of tube$A$ and$B$ is",
    "options": [
      "$1:2$",
      "$1:4$",
      "$2:1$",
      "$4:1$"
    ],
    "correct": 2,
    "solution": "(c)\nKEY CONCEPT : The fundamental frequency for closed organ pipe is given by${\\upsilon \\_c} = {v \\over {4\\ell }}$ and For open organ pipe is given by${\\upsilon \\_0} = {v \\over {2\\ell }} \\therefore {{{\\upsilon \\_0}} \\over {{\\upsilon \\_c}}} = {v \\over {2\\ell }} \\times {{4\\ell } \\over v} = {2 \\over 1}$",
    "chapter": "Waves",
    "topic": "Waves"
  },
  {
    "id": 126,
    "question": "The products obtained during treatment of hard water using Clark's method are :",
    "options": [
      "$\\mathrm{CaCO}_{3}$ and$\\mathrm{MgCO}_{3}$",
      "$\\mathrm{Ca}(\\mathrm{OH})_{2}$ and$\\mathrm{Mg}(\\mathrm{OH})_{2}$",
      "$\\mathrm{CaCO}_{3}$ and$\\mathrm{Mg}(\\mathrm{OH})_{2}$",
      "$\\mathrm{Ca}(\\mathrm{OH})_{2}$ and$\\mathrm{MgCO}_{3}$"
    ],
    "correct": 2,
    "solution": "(c)\nIn Clark's method lime water is used\n$\n\\begin{aligned}\n&\\mathrm{Ca}\\left(\\mathrm{HCO}_3\\right)_2+2 \\mathrm{Ca}(\\mathrm{OH})_2 \\rightarrow 2 \\mathrm{CaCO}_3+2 \\mathrm{H}_2 \\mathrm{O} \\\\\\\\\n&\\mathrm{Mg}\\left(\\mathrm{HCO}_3\\right)_2+2 \\mathrm{Ca}(\\mathrm{OH})_2 \\rightarrow 2 \\mathrm{CaCO}_3+\\mathrm{Mg}(\\mathrm{OH})_2+2 \\mathrm{H}_2 \\mathrm{O}\n\\end{aligned}\n$",
    "chapter": "Hydrogen",
    "topic": "Hydrogen"
  },
  {
    "id": 127,
    "question": "Which one of the following statements is NOT correct?",
    "options": [
      "Eutrophication indicates that water body is polluted",
      "The dissolved oxygen concentration below 6 ppm inhibits fish growth",
      "Eutrophication leads to increase in the oxygen level in water",
      "Eutrophication leads to anaerobic conditions"
    ],
    "correct": 2,
    "solution": "(c)\nEutrophication leads to decrease in oxygen level of water. 3rd statement is incorrect.",
    "chapter": "Environmental-Chemistry",
    "topic": "Environmental-Chemistry"
  },
  {
    "id": 128,
    "question": "Extraction of copper by smelting uses silica as an additive tore\nmove",
    "options": [
      "Cu_2 S",
      "FeO",
      "FeS",
      "Cu_2 O"
    ],
    "correct": 1,
    "solution": "(b)\nThe reaction involved in the smelting process is given by,\n$Q = \\frac{\\pi r^{4}}{8\\eta}\\frac{\\Delta P}{L}$\n$\\frac{P_{1}r_{1}^{4}}{l_{1}} = \\frac{P_{2}r_{2}^{4}}{l_{2}}$\nIn this prosses\n$\\frac{P_{r_{1}}^{4}}{l_{1}} = \\frac{4P_{1}r_{2}^{4}}{\\frac{I_{1}}{4}}$\n forms the flux and $u_{initial\\ } = \\frac{5}{2}$ NRT \n$r_{2}^{4} = \\frac{r_{1}^{4}}{16}$\n$r_{2} = \\frac{r_{1}}{2}$\nforms the gangue which results in the formation of\n$u_{final\\ } = \\frac{3}{2}(2nRT) + \\frac{5}{2}(N - n)RT$\n$= \\frac{1}{2}nRT + \\frac{5}{2}NRT$",
    "chapter": "Physical Chemistry",
    "topic": "Physical Chemistry"
  },
  {
    "id": 129,
    "question": "$\\lim\\limits_{x \\rightarrow \\frac{\\pi}{4}} \\frac{8 \\sqrt{2}-(\\cos x+\\sin x)^{7}}{\\sqrt{2}-\\sqrt{2} \\sin 2 x}$ is equal to",
    "options": [
      "14",
      "7",
      "14$\\sqrt2$",
      "7$\\sqrt2$"
    ],
    "correct": 0,
    "solution": "(a)\n$\\mathop {\\lim }\\limits_{x \\to {\\pi  \\over 4}} {{8\\sqrt 2  - {{(\\cos x + \\sin x)}^7}} \\over {\\sqrt 2  - \\sqrt 2 \\sin 2x}}\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\left( {{0 \\over 0}\\,\\mathrm{form}} \\right)$\n$ = \\mathop {\\lim }\\limits_{x \\to {\\pi  \\over 4}} {{ - 7{{(\\cos x + \\sin x)}^6}( - \\sin x + \\cos x)} \\over { - 2\\sqrt 2 \\cos 2x}}$ using$\\mathrm{L-H}$ Rule\n$ = \\mathop {\\lim }\\limits_{x \\to {\\pi  \\over 4}} {{56(\\cos x - \\sin x)} \\over {2\\sqrt 2 \\cos 2x}}\\,\\,\\left( {{0 \\over 0}} \\right)$\n$ = \\mathop {\\lim }\\limits_{x \\to {\\pi  \\over 4}} {{ - 56(\\sin x + \\cos x)} \\over { - 4\\sqrt 2 \\sin 2x}}$ using$\\mathrm{L-H}$ Rule\n$ = 7\\sqrt 2 \\,.\\,\\sqrt 2  = 14$",
    "chapter": "Limits-Continuity-And-Differentiability",
    "topic": "Limits-Continuity-And-Differentiability"
  },
  {
    "id": 130,
    "question": "If$\\frac{logx}{2} = \\frac{logy}{3} = \\frac{logz}{5},$ then\n$x^{2} =$",
    "options": [
      "$\\sqrt{xy}$",
      "$\\sqrt{yz}$",
      "$\\sqrt{3x}$",
      "none of these"
    ],
    "correct": 1,
    "solution": "(b)\n$\\frac{logx}{2} = \\frac{logy}{3} = \\frac{logz}{5}$ then\n$x^{1/2} = K$\n$y^{1/3} = K,z^{1/5} = K$\n$\\Rightarrow x = K^{2},y = K^{3},z = K^{5} \\Rightarrow x^{2} = K^{4}$\n$\\sqrt{yz} = \\sqrt{K^{8}} = K^{4} \\Rightarrow x^{2} = \\sqrt{yz}$",
    "chapter": "Logarithm",
    "topic": "Logarithm"
  },
  {
    "id": 131,
    "question": "f(x) = x^4 - ax^3 + bx^2 - cx + 330 \n 1 f(2)= 0",
    "options": [
      "b = 150",
      "= 0",
      "b = 157",
      "b = 141"
    ],
    "correct": 3,
    "solution": "(d)\nProduct of roots = 330\n= 2.3.5.11\nso roots are 2,3,5,11",
    "chapter": "Quadratic Equations",
    "topic": "Quadratic Equations"
  },
];

export const TARGET_QUESTIONS = [
  {
    "id": 200,
    "question": "At t = 0, truck, starting from rest, moves in the positive x-direction at uniform acceleration of 5 ms$-$2. At t = 20 s, a ball is released from the top of the truck. The ball strikes the ground in 1 s after the release. The velocity of the ball, when it strikes the ground, will be :\n(Given g = 10 ms$-$2)",
    "options": [
      "$100\\widehat i - 10\\widehat j$",
      "$10\\widehat i - 100\\widehat j$",
      "$100\\widehat i$",
      "$ - 10\\widehat j$"
    ],
    "correct": 0,
    "solution": "At t = 20 s,\nvelocity of truck,\nv = 0 + 5$\\times$ 20 = 100 m/s\nAt 20 sec a ball is dropped from the truck, so velocity of ball will be same as truck.\nVelocity of truck at x-direction = 100 m/s and in y-direction = 0.\n$\\therefore$ Velocity of ball vx = 100 m/s, vy = 0\nNow ball will show projectile motion where vertically downward acceleration g = 10 m/s act on the ball.\nAs horizontally no acceleration acting on the ball so horizontal velocity 100 m/s will remain unchanged.\nVelocity of the ball when it reach the ground along y-direction after 1 sec.\n${v_y} = 0 - 10 \\times 1$\n$\\Rightarrow {v_y} = - 10$ m/s\n$\\therefore$ Velocity of ball$(\\overrightarrow v ) = 100\\widehat i - 10\\widehat j$",
    "chapter": "Kinematics",
    "topic": "Projectile Motion"
  },
  {
    "id": 201,
    "question": "A ball is thrown from a point with a speed \u03bd0 at an angle of projection \u03b8. From the same point and at the same instant person starts running with a constant speed${{{v\\_0}} \\over 2}$ to catch the ball. Will the person be able to catch the ball? If yes, what should be the angle of projection \u03b8?",
    "options": [
      "No",
      "Yes, $30^\\circ$",
      "Yes, $60^\\circ$",
      "Yes, $45^\\circ$"
    ],
    "correct": 2,
    "solution": "Yes, the person can catch the ball when horizontal velocity is equal to the horizontal component of ball's velocity, the motion of ball will be only in vertical direction with respect to person for that, ${{{v\\_0}} \\over 2} = {v\\_0}\\cos \\theta \\,\\,\\,\\,$ or$\\cos \\theta = {1 \\over 2} \\Rightarrow \\cos \\theta = \\cos 60^\\circ \\Rightarrow \\theta = 60^\\circ$",
    "chapter": "Kinematics",
    "topic": "Projectile Motion"
  },
  {
    "id": 202,
    "question": "A body of mass$500 \\mathrm{~g}$ moves along$\\mathrm{x}$-axis such that it's velocity varies with displacement$\\mathrm{x}$ according to the relation$v=10 \\sqrt{x} \\mathrm{~m} / \\mathrm{s}$ the force acting on the body is:-",
    "options": [
      "166 N",
      "5 N",
      "25 N",
      "125 N"
    ],
    "correct": 2,
    "solution": "Given that the velocity of the body varies with displacement x according to the relation:\n\n\n$\nv = 10\\sqrt{x}\\,\\mathrm{ms}^{-1}\n$\n\n\nTo find the force acting on the body, we first need to find its acceleration, which can be obtained by differentiating the velocity with respect to time. However, we don't have the velocity expressed as a function of time, but rather as a function of displacement. To work around this, we will use the chain rule:\n\n\n$\n\\frac{dv}{dt} = \\frac{dv}{dx} \\cdot \\frac{dx}{dt}\n$\n\n\nNow, differentiate the velocity with respect to displacement:\n\n\n$\n\\frac{dv}{dx} = \\frac{1}{2} \\cdot 10 \\cdot x^{-1/2} = 5x^{-1/2}\n$\n\n\nRecall that$\\frac{dx}{dt}$ is the velocity, so we have:\n\n\n$\n\\frac{dv}{dt} = 5x^{-1/2} \\cdot 10\\sqrt{x} = 50\n$\n\n\nThus, the acceleration is constant and equal to 50 m/s$\u00b2$.\n\n\nNow we can find the force acting on the body using Newton's second law:\n\n\n$\nF = ma\n$\n\n\nFirst, convert the mass from grams to kilograms:\n\n\n$\nm = \\frac{500\\,\\mathrm{g}}{1000} = 0.5\\,\\mathrm{kg}\n$\n\n\nNow, calculate the force:\n\n\n$\nF = (0.5\\,\\mathrm{kg})(50\\,\\mathrm{ms}^{-2}) = 25\\,\\mathrm{N}\n$\n\n\nThe force acting on the body is 25 N.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Force and Acceleration"
  },
  {
    "id": 203,
    "question": "A bullet of mass 20 g has an initial speed of 1 ms\u20131\n, just before it starts penetrating a mud wall of thickness\n20 cm. If the wall offers a mean resistance of 2.5 $\u00d7$ 10\u20132 N, the speed of the bullet after emerging from the\nother side of the wall is close to :",
    "options": [
      "0.3 ms-1",
      "0.1 ms-1",
      "0.7 ms-1",
      "0.4 ms-1"
    ],
    "correct": 2,
    "solution": "Given, resistance offered by the wall\n$\n=F=-25 \\times 10^{-2} \\mathrm{~N}\n$\nSo, deacceleration of bullet,\n$\n\\begin{aligned}\na=\\frac{F}{m}=\\frac{-2.5 \\times 10^{-2}}{20 \\times 10^{-3}} & =-\\frac{5}{4} \\mathrm{~ms}^{-2} \\\\\\\\\n(\\because m & \\left.=20 \\mathrm{~g}=20 \\times 10^{-3} \\mathrm{~kg}\\right)\n\\end{aligned}\n$\nNow, using the equation of motion,\n$\nv^2-u^2=2 a s\n$\nWe have,\n$\nv^2=1+2\\left(-\\frac{5}{4}\\right)\\left(20 \\times 10^{-2}\\right)\n$\n$\n\\left(\\because u=1 \\mathrm{~ms}^{-1} \\text { and } s=20 \\mathrm{~cm}=20 \\times 10^{-2} \\mathrm{~m}\\right)\n$\n$\n\\begin{array}{ll}\n\\Rightarrow v^2=\\frac{1}{2} \\\\\\\\\n\\therefore v=\\frac{1}{\\sqrt{2}} \\approx 0.7 \\mathrm{~ms}^{-1}\n\\end{array}\n$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Force and Acceleration"
  },
  {
    "id": 204,
    "question": "A ball is thrown upward with an initial velocity\nV0 from the surface of the earth. The motion\nof the ball is affected by a drag force equal to\nm$\\gamma$u2 (where m is mass of the ball, u is its\ninstantaneous velocity and$\\gamma$ is a constant).\nTime taken by the ball to rise to its zenith is :",
    "options": [
      "${1 \\over {\\sqrt {\\gamma g} }}{\\tan ^{ - 1}}\\left( {\\sqrt {{\\gamma \\over g}} {V_0}} \\right)$",
      "${1 \\over {\\sqrt {\\gamma g} }}{ln}\\left( 1+ {\\sqrt {{\\gamma \\over g}} {V_0}} \\right)$",
      "${1 \\over {\\sqrt {\\gamma g} }}{\\sin ^{ - 1}}\\left( {\\sqrt {{\\gamma \\over g}} {V_0}} \\right)$",
      "${1 \\over {\\sqrt {2\\gamma g} }}{\\tan ^{ - 1}}\\left( {\\sqrt {{2\\gamma \\over g}} {V_0}} \\right)$"
    ],
    "correct": 0,
    "solution": "Given, drag force, $F=m \\gamma v^2$ ......(i)\nAs we know, general equation of force\n$\n=m a\n$ .........(ii)\nComparing Eqs. (i) and (ii), we get\n$\na=\\gamma v^2\n$\n\n\nThe net retardation of the ball when thrown vertically upward is therefore\n$a_{\\text{net}} = - (g + \\gamma v^2) = \\frac{dv}{dt}$, where$g$ is the acceleration due to gravity.\n\n\nRearranging terms gives us :\n\n\n$\\frac{dv}{g + \\gamma v^2} = - dt$\n\n\nWe now need to integrate both sides of this equation.\n\n\nWhen the ball is thrown upward with velocity$v_0$ and reaches its zenith ( \"zenith\" refers to the highest point that the ball reaches in its upward trajectory.), the velocity is$0$. The time to reach the zenith is$t$.\n\n\nSo the integral equation is :\n\n\n$\\int\\limits_{v_0}^{0} \\frac{dv}{\\gamma v^2 + g} = - \\int\\limits_{0}^{t} dt$\n\n\nSeparating the constants from the integral :\n\n\n$\\frac{1}{\\gamma} \\int\\limits_{v_0}^{0} \\frac{1}{\\left(\\frac{g}{\\gamma}+v^2\\right)} dv = - \\int\\limits_{0}^{t} dt$\n\n\nRecognizing the integral as the standard form$\\frac{1}{x^2 + a^2} = \\frac{1}{a} \\tan^{-1}\\left(\\frac{x}{a}\\right)$, we write the integral in terms of the arctangent function.\n\n\nThis gives us :\n\n\n$\\frac{1}{\\gamma} \\left(\\frac{1}{\\sqrt{\\frac{g}{\\gamma}}}\\right) \\left[\\tan^{-1}\\left(\\frac{v}{\\sqrt{\\frac{g}{\\gamma}}}\\right)\\right]_{v_0}^{0} = -t$\n\n\nEvaluating the integral at the bounds gives us :\n\n\n$\\frac{1}{\\sqrt{\\gamma g}} \\tan^{-1}\\left(\\frac{\\sqrt{\\gamma} v_0}{\\sqrt{g}}\\right) = t$\n\n\nTherefore, the time taken by the ball to rise to its zenith, considering the drag force, is given by\n\n\n$t = \\frac{1}{\\sqrt{\\gamma g}} \\tan^{-1}\\left(\\sqrt{\\frac{\\gamma}{g}} V_0\\right)$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Drag Force"
  },
  {
    "id": 205,
    "question": "A spaceship in space sweeps stationary\ninterplanetary dust. As a result, its mass\nincreases at a rate${{dM\\left( t \\right)} \\over {dt}}$ = bv2(t), where v(t) is\nits instantaneous velocity. The instantaneous\nacceleration of the satellite is :",
    "options": [
      "-bv3(t)",
      "$ - {{2b{v^3}} \\over {M\\left( t \\right)}}$",
      "$ - {{b{v^3}} \\over {M\\left( t \\right)}}$",
      "$ - {{b{v^3}} \\over {2M\\left( t \\right)}}$"
    ],
    "correct": 2,
    "solution": "Given${{dM\\left( t \\right)} \\over {dt}}$ = bv2(t)\nIn free space\nno external force\nso there in only thrust force on rocket.\nFthrust = v${{dm} \\over {dt}}$\nForce on satellite = $ - \\overrightarrow v {{dm\\left( t \\right)} \\over {dt}}$\nM(t)a = \u2013 v (bv2)\n$ \\Rightarrow$ a = $ - {{b{v^3}} \\over {M\\left( t \\right)}}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Variable Mass System"
  },
  {
    "id": 206,
    "question": "At any instant the velocity of a particle of mass$500 \\mathrm{~g}$ is$\\left(2 t \\hat{i}+3 t^{2} \\hat{j}\\right) \\mathrm{ms}^{-1}$. If the force acting on the particle at$t=1 \\mathrm{~s}$ is$(\\hat{i}+x \\hat{j}) \\mathrm{N}$. Then the value of$x$ will be:",
    "options": [
      "2",
      "4",
      "6",
      "3"
    ],
    "correct": 3,
    "solution": "Given the velocity vector of a particle$v = (2t \\hat{i}+3 t^{2} \\hat{j}) \\, \\text{ms}^{-1}$, the acceleration$a$ is the derivative of the velocity vector with respect to time. So, we have:\n$a = \\frac{dv}{dt} = (2 \\hat{i} + 6t \\hat{j}) \\, \\text{ms}^{-2}$.\nAt$t=1 \\, \\text{s}$, the acceleration$a$ is$(2 \\hat{i} + 6 \\hat{j}) \\, \\text{ms}^{-2}$.\nAccording to Newton's second law, the force$F$ is equal to the mass$m$ times acceleration$a$. The mass$m$ is given as$500 \\, \\text{g}$, or equivalently, $0.5 \\, \\text{kg}$.\nTherefore, the force$F$ on the particle at$t=1 \\, \\text{s}$ is:\n$F = m \\cdot a = 0.5 \\cdot (2 \\hat{i} + 6 \\hat{j}) = (1 \\hat{i} + 3 \\hat{j}) \\, \\text{N}$.\nSo, the force acting on the particle at$t=1 \\, \\text{s}$ is$(\\hat{i} + x \\hat{j}) \\, \\text{N}$, where$x=3$.\nTherefore, the answer is$x=3$.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Force and Acceleration"
  },
  {
    "id": 207,
    "question": "The position vector of a particle related to time$t$ is given by\n\n$\\vec{r}=\\left(10 t \\hat{i}+15 t^{2} \\hat{j}+7 \\hat{k}\\right) m$\n\nThe direction of net force experienced by the particle is :",
    "options": [
      "Positive$x$ - axis",
      "Positive$y$ - axis",
      "Positive$z$ - axis",
      "In$x$ - $y$ plane"
    ],
    "correct": 1,
    "solution": "To find the direction of the net force experienced by the particle, we need to find the acceleration vector of the particle and then use Newton's second law, which states that the net force on an object is equal to its mass times its acceleration vector.\n\n\nThe position vector of the particle is given by:\n\n\n$\n\\vec{r} = (10t\\hat{i} + 15t^2\\hat{j} + 7\\hat{k})\\,\\text{m}\n$\n\n\nDifferentiating$\\vec{r}$ twice with respect to time$t$, we get the acceleration vector:\n\n\n$\n\\vec{a} = \\frac{d^2\\vec{r}}{dt^2} = \\frac{d}{dt}(10\\hat{i} + 30t\\hat{j}) = 30\\hat{j}\\,\\text{m/s}^2\n$\n\n\nTherefore, the acceleration vector is$\\vec{a} = 30\\hat{j}\\,\\text{m/s}^2$.\n\n\nUsing Newton's second law, the net force on the particle is given by:\n\n\n$\n\\vec{F}_{net} = m\\vec{a}\n$\n\n\nwhere$m$ is the mass of the particle.\n\n\nSince we are only interested in the direction of the net force, we can ignore the magnitude of the acceleration and focus on its direction, which is along the positive$y$-axis.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Force and Acceleration"
  },
  {
    "id": 208,
    "question": "A small ball of mass m is thrown upward with velocity u from the ground. The ball experiences a\nresistive force mkv2\nwhere v is its speed. The maximum height attained by the ball is :",
    "options": [
      "${1 \\over k}{\\tan ^{ - 1}}{{k{u^2}} \\over {2g}}$",
      "${1 \\over {2k}}{\\tan ^{ - 1}}{{k{u^2}} \\over g}$",
      "${1 \\over {2k}}\\ln \\left( {1 + {{k{u^2}} \\over g}} \\right)$",
      "${1 \\over k}\\ln \\left( {1 + {{k{u^2}} \\over {2g}}} \\right)$"
    ],
    "correct": 2,
    "solution": "Fnet = ma\n$ \\Rightarrow$ -mg - mkv2 = $mv{{dv} \\over {ds}}$\n$ \\Rightarrow ds = {{ - vdv} \\over {g + k{v^2}}}$\n$ \\Rightarrow \\int\\limits_{s = 0}^{{H_{\\max }}} {ds} = \\int\\limits_{v = u}^{v = 0} {{{ - vdv} \\over {g + k{v^2}}}}$\n$ \\Rightarrow$ Hmax = ${1 \\over {2k}}\\ln \\left( {{{g + k{u^2}} \\over g}} \\right)$ = ${1 \\over {2k}}\\ln \\left( {1 + {{k{u^2}} \\over g}} \\right)$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Drag Force"
  },
  {
    "id": 209,
    "question": "Two forces P and Q, of magnitude 2F and 3F, respectively, are at an angle$\\theta$ with each other. If the force Q is doubled, then their resultant also gets doubled. Then, the angle$\\theta$ is -",
    "options": [
      "90o",
      "60o",
      "30o",
      "120o"
    ],
    "correct": 3,
    "solution": "4F2 + 9F2 + 12F2 cos$\\theta$ = R2\n4F2 + 36F2 + 24F2 cos$\\theta$ = 4R2\n4F2 + 36F2 + 24F2 cos$\\theta$\n= 4(13F2 + 12F2cos$\\theta$) = 52F2 + 48F2cos$\\theta$\ncos$\\theta$ = $- {{12{F^2}} \\over {24{F^2}}}$ = $- {1 \\over 2}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Resultant Force"
  },
  {
    "id": 210,
    "question": "A particle moves in$x$-$y$ plane under the influence of a force$\\vec{F}$ such that its linear momentum is$\\overrightarrow{\\mathrm{p}}(\\mathrm{t})=\\hat{i} \\cos (\\mathrm{kt})-\\hat{j} \\sin (\\mathrm{kt})$. If$\\mathrm{k}$ is constant, the angle between$\\overrightarrow{\\mathrm{F}}$ and$\\overrightarrow{\\mathrm{p}}$ will be :",
    "options": [
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{6}$"
    ],
    "correct": 0,
    "solution": "To find the angle between$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$, we first need to understand the relationship between force and momentum. The force$\\vec{F}$ acting on a particle is related to the rate of change of its linear momentum$\\overrightarrow{\\mathrm{p}}$ with respect to time, as described by Newton's second law of motion:\n\n\n$\\vec{F} = \\frac{d\\overrightarrow{\\mathrm{p}}}{dt}$\n\n\nGiven the expression for the momentum$\\overrightarrow{\\mathrm{p}}(t) = \\hat{i} \\cos (kt) - \\hat{j} \\sin (kt)$, we can find$\\vec{F}$ by differentiating$\\overrightarrow{\\mathrm{p}}$ with respect to$t$:\n\n\n$\\frac{d\\overrightarrow{\\mathrm{p}}}{dt} = -k\\hat{i} \\sin (kt) - k\\hat{j} \\cos (kt)$\n\n\nSo, $\\vec{F} = -k\\hat{i} \\sin (kt) - k\\hat{j} \\cos (kt)$.\n\n\nNow, to find the angle between$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$, we use the dot product formula:\n\n\n$\\vec{F} \\cdot \\overrightarrow{\\mathrm{p}} = |\\vec{F}| |\\overrightarrow{\\mathrm{p}}| \\cos(\\theta)$,\n\n\nwhere$\\theta$ is the angle between$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$. However, in this case, it's more insightful to see if$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$ are orthogonal (at a$\\frac{\\pi}{2}$ angle to each other), because the dot product of two perpendicular vectors is zero.\n\n\nThe dot product of$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$ is:\n\n\n$(-k\\hat{i} \\sin (kt) - k\\hat{j} \\cos (kt)) \\cdot (\\hat{i} \\cos (kt) - \\hat{j} \\sin (kt)) =$\n\n\n$- k \\sin (kt) \\cos (kt) + k \\cos (kt) \\sin (kt) = 0$\n\n\nThe result is zero, indicating that the angle between$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$ is indeed$\\frac{\\pi}{2}$.\n\n\nTherefore, the correct option is:\n\n\nOption A$\\frac{\\pi}{2}$.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Momentum and Force"
  },
  {
    "id": 211,
    "question": "A heavy iron bar, of weight$W$ is having its one end on the ground and the other on the shoulder of a person. The bar makes an angle$\\theta$ with the horizontal. The weight experienced by the person is :",
    "options": [
      "$W \\sin \\theta$",
      "$W$",
      "$\\frac{W}{2}$",
      "$W \\cos \\theta$"
    ],
    "correct": 2,
    "solution": "$\\begin{aligned} & m g \\times \\frac{L}{2} \\cos \\theta=N \\times L \\cos \\theta \\\\ & \\Rightarrow \\quad N=\\frac{m g}{2}=\\frac{W}{2} \\end{aligned}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Equilibrium"
  },
  {
    "id": 212,
    "question": "A cricket player catches a ball of mass$120 \\mathrm{~g}$ moving with$25 \\mathrm{~m} / \\mathrm{s}$ speed. If the catching process is completed in$0.1 \\mathrm{~s}$ then the magnitude of force exerted by the ball on the hand of player will be (in SI unit) :",
    "options": [
      "30",
      "24",
      "12",
      "25"
    ],
    "correct": 0,
    "solution": "The first step in solving this problem is to calculate the change in momentum of the ball when it is caught. The change in momentum, or impulse, is the product of the mass of the ball and the change in velocity (as momentum is mass times velocity).\n\n\nThe ball is initially moving with a velocity of$v_i = 25 \\mathrm{~m/s}$ before the catch and finally comes to rest with a velocity of$v_f = 0 \\mathrm{~m/s}$ after the catch. Since the ball is caught, the final velocity is zero. The change in velocity$\\Delta v = v_f - v_i = 0 - 25 = -25 \\mathrm{~m/s}.$ Remember that the direction of the force exerted by the ball on the hand will be opposite to the direction of the ball's initial motion.\n\n\nThe mass of the ball$m$ is given as$120 \\mathrm{~g}$ which needs to be converted into kilograms to maintain SI units:\n$m = 120 \\mathrm{~g} = 120 \\times 10^{-3} \\mathrm{~kg} = 0.12 \\mathrm{~kg}.$\n\n\nNow we can calculate the change in momentum (impulse):\n$\\Delta p = m \\Delta v = 0.12 \\mathrm{~kg} \\times (-25 \\mathrm{~m/s}).$\n\n\nSubstituting the values we get:\n$\\Delta p = 0.12 \\times -25 = -3 \\mathrm{~kg \\cdot m/s}.$\n\n\nThe negative sign indicates that the change in momentum is in the opposite direction of the ball's initial motion, which makes sense because the ball's velocity is reduced to zero.\n\n\nThe magnitude of the impulse is independent of the sign and is$3 \\mathrm{~kg \\cdot m/s}$.\n\n\nImpulse is also equal to the average force exerted on the ball times the time interval during which the force is exerted. We can use the formula:\n$\\Delta p = F_{avg} \\Delta t$\n\n\nWhere$F_{avg}$ is the average force and$\\Delta t$ is the time interval of$0.1 \\mathrm{~s}$. Re-arranging the formula to solve for$F_{avg}$ gives us:\n$F_{avg} = \\frac{\\Delta p}{\\Delta t}.$\n\n\nSubstituting the known values we have:\n$F_{avg} = \\frac{3}{0.1} = 30 \\mathrm{~N}.$\n\n\nThe magnitude of the average force exerted by the hand of the player to catch the ball is$30 \\mathrm{~N}$.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Impulse"
  },
  {
    "id": 213,
    "question": "A player caught a cricket ball of mass$150 \\mathrm{~g}$ moving at a speed of$20 \\mathrm{~m} / \\mathrm{s}$. If the catching process is completed in$0.1 \\mathrm{~s}$, the magnitude of force exerted by the ball on the hand of the player is:",
    "options": [
      "150 N",
      "3 N",
      "30 N",
      "300 N"
    ],
    "correct": 2,
    "solution": "The force exerted by the ball on the hand can be calculated using the formula derived from Newton's second law of motion, which is$F = \\frac{\\Delta p}{\\Delta t}$, where$F$ is the force, $\\Delta p$ represents the change in momentum, and$\\Delta t$ is the time over which this change occurs.\n\n\nThe change in momentum, $\\Delta p$, can be calculated as the difference between the final momentum, $p_f$, and the initial momentum, $p_i$. In this scenario, because the ball comes to a stop in the player's hand, its final velocity (and hence, its final momentum) is 0. Therefore, the change in momentum is equal to the initial momentum of the ball (since final momentum is zero).\n\n\nThe initial momentum, $p_i$, of the ball can be calculated using the formula$p = mv$, where$m$ is the mass of the ball and$v$ is its velocity. Given that the mass of the ball is$150 \\, \\mathrm{g} = 0.15 \\, \\mathrm{kg}$ (converting grams to kilograms) and its velocity is$20 \\, \\mathrm{m/s}$, we have:\n\n\n$p_i = (0.15 \\, \\mathrm{kg}) \\times (20 \\, \\mathrm{m/s}) = 3 \\, \\mathrm{kg \\cdot m/s}$\n\n\nSince the change in momentum, $\\Delta p$, equals the initial momentum ($p_i$) because the final momentum is 0, the force exerted can be found by substituting$\\Delta p$ and$\\Delta t$ into the first formula:\n\n\n$F = \\frac{3 \\, \\mathrm{kg \\cdot m/s}}{0.1 \\, \\mathrm{s}} = 30 \\, \\mathrm{N}$\n\n\nTherefore, the magnitude of force exerted by the ball on the hand of the player is 30 N, which corresponds to Option C.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Impulse"
  },
  {
    "id": 214,
    "question": "The particle of mass 1 kg is acted upon by a\nforce$\\overset{\\rightarrow}{F} = F_{x}\\overset{\\hat{}}{i} + F_{y}\\overset{\\hat{}}{j}$\nfrom t = 0 to t = 4 sec. Find the velocityof the particle at t=4 sec.,\nif its initial velocity is\n$\\overset{\\rightarrow}{u} = - \\overset{\\hat{}}{i} + \\overset{\\hat{}}{j}$and\nthe variation of applied force with time is as shown in the graphs",
    "options": [
      "$\\overset{\\rightarrow}{v} = - \\overset{\\hat{}}{i} + \\overset{\\hat{}}{j}$",
      "$\\overset{\\rightarrow}{v} = - \\overset{\\hat{}}{i} + 11\\overset{\\hat{}}{j}$",
      "$\\overset{\\rightarrow}{v} = 10\\overset{\\hat{}}{i}$",
      "$\\overset{\\rightarrow}{v} = 2\\overset{\\hat{}}{i} + 10\\overset{\\hat{}}{j}$"
    ],
    "correct": 1,
    "solution": "Explanation\n$\\int_{0}^{4}{F_{x}dt = \\Delta P_{x} = m(v_{x} - u_{x})}$\n$\\Rightarrow 0 = m(v_{x} - u_{x})$.\n$\\Rightarrow V_{x} = u_{x} = - 1$\n$\\int_{0}^{4}{F_{y}dt = \\Delta P_{y} = m(v_{y} - u_{y})}$\n$\\Rightarrow \\frac{1}{2} \\times 4 \\times 5 = 1(v_{y} - 1) \\Rightarrow v_{y} = 11$\n$\\overset{\\rightarrow}{v} = - \\overset{\\hat{}}{i} + 11\\overset{\\hat{}}{j}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Impulse and Momentum"
  },
  {
    "id": 215,
    "question": "A force$\\overrightarrow F = (40\\widehat i + 10\\widehat j)N$ acts on a body of mass 5 kg. If the body starts from rest, its position vector$\\overrightarrow r$ at time t = 10 s, will be :",
    "options": [
      "$(100\\widehat i + 400\\widehat j)m$",
      "$(100\\widehat i + 100\\widehat j)m$",
      "$(400\\widehat i + 100\\widehat j)m$",
      "$(400\\widehat i + 400\\widehat j)m$"
    ],
    "correct": 2,
    "solution": "${{d\\overrightarrow v } \\over {dt}} = \\overrightarrow a = {{\\overrightarrow F } \\over m} = (8\\widehat i + 2\\widehat j)m/{s^2}${{d\\overrightarrow r } \\over {dt}} = \\overrightarrow v = (8t\\widehat i + 2t\\widehat j)m/s$\\overrightarrow r = (8\\widehat i + 2\\widehat j){{{t^2}} \\over 2}m$At t = 10 sec$\\overrightarrow r = \\left[ {(8\\widehat i + 2\\widehat j)50} \\right]m \\Rightarrow \\overrightarrow r = (400\\widehat i + 100\\widehat j)m$",
    "chapter": "Kinematics",
    "topic": "Equations of Motion in 2D"
  },
  {
    "id": 216,
    "question": "Initially the block is at rest acceleration of the block is",
    "options": [
      "$2\\ m/s^{2}$",
      "$0\\ m/s^{2}$",
      "$1\\ m/s^{2}$",
      "$0.5\\ m/s^{2}$"
    ],
    "correct": 1,
    "solution": "Explanation\n[IMAGE] $N + 24 - 100 = 0$ For vertical direction\n$\\therefore N = 76N$\nNow, $0 \\leq f_{s} \\leq \\mu_{s}N\\$\n$0 \\leq f_{s} \\leq 76 \\times 0.5$\n$0 \\leq f_{s} \\leq 38N$\n$\\therefore 32 \\  $\\therefore\\ \\$Acceleration of block is zero.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Friction"
  },
  {
    "id": 217,
    "question": "Two forces are such that the sum of their magnitudes is$18 N$ and their resultant is$12 N$ which is perpendicular to the smaller force. Then the magnitudes of the forces are",
    "options": [
      "$12N,$ $6N$",
      "$13N,$ $5N$",
      "$10N,$ $8N$",
      "$16N$, $2N.$"
    ],
    "correct": 1,
    "solution": "Let the two forces be${F_1}$ and${F_2}$ and let${F_2}$ is smaller than$ {F_1}$ and assume$R$ is the resultant force.\nGiven${F_1} + {F_2} = 18 \\,\\,\\,\\,\\,\\,$ ....$(i)$\nFrom the right angle triangle, $F_2^2 + {R^2} = F_1^2$\nor$F_1^2 - F_2^2 = {R^2}$\nor$\\left( {{F_1} + {F_2}} \\right) \\left( {{F_1} - {F_2}} \\right)$ = ${R^2}$\nor$\\left( {18} \\right)\\left( {{F_1} - {F_2}} \\right)$ = ${\\left( {12} \\right)^2}$ = 144\nor$\\left( {{F_1} - {F_2}} \\right) = 8 \\,\\,\\,\\,\\,\\,$ ....$(ii)$\nBy solving equation$(i)$ and$(ii)$ we get,\n${{F_1} = 13\\,N}$ and${{F_2} = 5\\,N}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Resultant Force"
  },
  {
    "id": 218,
    "question": "A particle is projected with velocity v0 along x-axis. A damping force is acting on the particle which is proportional to the square of the distance from the origin i.e. ma = $- \\alpha$x2. The distance at which the particle stops :",
    "options": [
      "${\\left[ {{{3mv_0^2} \\over {2\\alpha }}} \\right]^{{1 \\over 3}}}$",
      "${\\left( {{{2{v_0}} \\over {3\\alpha }}} \\right)^{{1 \\over 3}}}$",
      "${\\left( {{{3v_0^2} \\over {2\\alpha }}} \\right)^{{1 \\over 2}}}$",
      "${\\left( {{{2v_0^2} \\over {3\\alpha }}} \\right)^{{1 \\over 2}}}$"
    ],
    "correct": 0,
    "solution": "Given, speed of projection = v0Damping force, F = ma = $- \\alpha$x2$\\Rightarrow$ a = $- \\alpha$x2 / mAlso, $a = v{{dv} \\over {dx}}$ \\Rightarrow vdv = a\\,dx = - {\\alpha \\over m}{x^2}dx$Integrating both sides, we get$\\int_{{v_0}}^v {vdv = \\int_0^x { - {\\alpha \\over m}{x^2}dx} }$ \\Rightarrow \\left( {{{{v^2}} \\over 2}} \\right)_{{v_0}}^0 = - {\\alpha \\over m}\\left( {{{{x^3}} \\over 3}} \\right)_0^x \\Rightarrow 0 - v_0^2/2 = - {\\alpha \\over m}{{{x^3}} \\over 3} \\Rightarrow x = {\\left( {{{3m} \\over 2}{{v_0^2} \\over \\alpha }} \\right)^{1/3}}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Variable Force"
  },
  {
    "id": 219,
    "question": "A particle of mass m is acted upon by a force F given by the empirical law\nF =${R \\over {{t^2}}}\\,v\\left( t \\right).$ If this law is to be tested experimentally by observing the motion starting from rest, the best way is to plot :",
    "options": [
      "$\\upsilon $(t) against t2",
      "log $\\upsilon $(t) against ${1 \\over {{t^2}}}$",
      "log $\\upsilon $(t) against t",
      "log $\\upsilon $(t) against ${1 \\over {{t}}}$"
    ],
    "correct": 3,
    "solution": "Given,\nF = ${R \\over {{t^2}}}$ v(t)\n$ \\Rightarrow$\\ \\ \\ m${{dv} \\over {dt}}$ = ${R \\over {{t^2}}}$ (v)\n$ \\Rightarrow$\\ \\ \\ ${{dv} \\over v}$ = ${R \\over m} {{dt} \\over {{t^2}}}$\nIntergrating both sides,\n$\\int {{{dv} \\over v} = {R \\over m}\\int {{{dt} \\over {{t^2}}}} }$\n$ \\Rightarrow$\\ \\ \\ lnv = ${{R \\over m}} \\times \\left( { - {1 \\over t}} \\right)$ + C\n$ \\Rightarrow$\\ \\ \\ lnv = $- {{R \\over m}} \\left( {{1 \\over t}} \\right)$ + C\nGraph between lnv and${{1 \\over t}}$ will be straight line curve.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Variable Force"
  },
  {
    "id": 220,
    "question": "A particle of mass 0.3 kg subjected to a force$F=-kx$ with$k=15 N/m$. What will be its initial acceleration if it is released from a point 20 cm away from the origin?",
    "options": [
      "$15\\,\\,\\,\\,m/{s^2}$",
      "$3\\,\\,\\,m/{s^2}$",
      "$10\\,\\,\\,m/{s^2}$",
      "$5\\,\\,\\,m/{s^2}$"
    ],
    "correct": 2,
    "solution": "Given F = - kx\n$\\Rightarrow$ F = - 15$ \\times {{20} \\over {100}}$ = - 3 N\nF = m.a = 3 N\n$\\Rightarrow$ a = ${3 \\over m}$ = ${3 \\over {0.3}}$ = 10 m/s2",
    "chapter": "Newton's Laws of Motion",
    "topic": "Force and Acceleration"
  },
  {
    "id": 221,
    "question": "A particle of mass M originally at rest is subjected to a force whose direction is constant but magnitude varies with time according to the relation$F = {F_0}\\left[ {1 - {{\\left( {{{t - T} \\over T}} \\right)}^2}} \\right]$Where F0 and T are constants. The force acts only for the time interval 2T. The velocity v of the particle after time 2T is :",
    "options": [
      "2F0T/M",
      "F0T/2M",
      "4F0T/3M",
      "F0T/3M"
    ],
    "correct": 2,
    "solution": "At t = 0, u = 0$a = {{{F_0}} \\over M} - {{{F_0}} \\over {M{T^2}}}{(t - T)^2} = {{dv} \\over {dt}}$\\int\\limits_0^v {dv = \\int\\limits_{t = 0}^{2T} {\\left( {{{{F_0}} \\over M} - {{{F_0}} \\over {M{T^2}}}{{(t - T)}^2}} \\right)dt} }$V = \\left[ {{{{F_0}} \\over M}t} \\right]_0^{2T} - {{{F_0}} \\over {M{T^2}}}\\left[ {{{{t^3}} \\over 3} - {t^2}T + {T^2}t} \\right]_0^{2T} \\Rightarrow V = {{4{F_0}T} \\over {3M}}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Variable Force"
  },
  {
    "id": 222,
    "question": "Statement : 1 If three forces${\\overrightarrow F \\_1},{\\overrightarrow F \\_2}$ and${\\overrightarrow F \\_3}$ are represented by three sides of a triangle and${\\overrightarrow F \\_1} + {\\overrightarrow F \\_2} = - {\\overrightarrow F \\_3}$, then these three forces are concurrent forces and satisfy the condition for equilibrium. Statement : 2 A triangle made up of three forces${\\overrightarrow F \\_1}$, ${\\overrightarrow F \\_2}$ and${\\overrightarrow F \\_3}$ as its sides taken in the same order, satisfy the condition for translatory equilibrium. In the light of the above statements, choose the most appropriate answer from the options given below :",
    "options": [
      "Statement - I is false but Statement - II is true",
      "Statement - I is true but Statement - II is false",
      "Both Statement-I and Statement-II are false",
      "Both Statement-I and Statement-II are true"
    ],
    "correct": 3,
    "solution": "Here, ${\\overrightarrow F \\_1} + {\\overrightarrow F \\_2} + {\\overrightarrow F \\_3} = 0 {\\overrightarrow F \\_1} + {\\overrightarrow F \\_2} = - {\\overrightarrow F \\_3}$ Since${\\overrightarrow F _{net}} = 0$ (equilibrium) Both statements correct.",
    "chapter": "Newton's Laws of Motion",
    "topic": "Equilibrium"
  },
  {
    "id": 223,
    "question": "A particle moving in the xy plane experiences a velocity dependent force\n$\\overrightarrow F = k\\left( {{v_y}\\widehat i + {v_x}\\widehat j} \\right)$\n, where vx\nand vy\nare the x and y components of its velocity$\\overrightarrow v$\n. If$\\overrightarrow a$\nis the acceleration of the particle, then\nwhich of the following statements is true for the particle?",
    "options": [
      "kinetic energy of particle is constant in time",
      "quantity $\\overrightarrow v \\times \\overrightarrow a $",
      "quantity $\\overrightarrow v .\\overrightarrow a $",
      "$\\overrightarrow F $ arises due to a magnetic field"
    ],
    "correct": 1,
    "solution": "Given$\\overrightarrow F = k\\left( {{v_y}\\widehat i + {v_x}\\widehat j} \\right)$\n$ \\Rightarrow$ m$\\overrightarrow a$ = $k\\left( {{v_y}\\widehat i + {v_x}\\widehat j} \\right)$\n$ \\Rightarrow \\overrightarrow a = {k \\over m}\\left( {{v_y}\\widehat i + {v_x}\\widehat j} \\right)$\nAlso${{d{v_x}} \\over {dt}} = {k \\over m}{v_x}$\nand${{d{v_y}} \\over {dt}} = {k \\over m}{v_y}$\n${{d{v_x}} \\over {d{v_y}}} = {{{v_y}} \\over {{v_x}}}$\n$ \\Rightarrow \\int {{v_x}d{v_x}} = \\int {{v_y}} d{v_y}$\n$ \\Rightarrow v_y^2 = v_x^2 + C$\n$ \\Rightarrow v_y^2 - v_x^2 = C$ = Constant\nFrom Option (B),\n$\\overrightarrow v \\times \\overrightarrow a$\n= $\\left( {{v_x}\\widehat i + {v_y}\\widehat j} \\right) \\times {k \\over m}\\left( {{v_y}\\widehat i + {v_x}\\widehat j} \\right)$\n= $\\left( {v_x^2\\widehat k - v_y^2\\widehat k} \\right) \\times {k \\over m}$\n= $\\left( {v_x^2 - v_y^2} \\right) \\times {k \\over m}\\widehat k$\n= Constant",
    "chapter": "Newton's Laws of Motion",
    "topic": "Variable Force"
  },
  {
    "id": 224,
    "question": "A block of mass M placed inside a box descends vertically with acceleration 'a'. The block exerts a force equal to one-fourth of its weight on the floor of the box. The value of 'a' will be",
    "options": [
      "${g \\over 4}$",
      "${g \\over 2}$",
      "${3g \\over 4}$",
      "g"
    ],
    "correct": 2,
    "solution": "Using Newton's second law\n$mg - {{mg} \\over 4} = ma$\n$ \\Rightarrow a = {{3g} \\over 4}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Pseudo Force"
  },
  {
    "id": 225,
    "question": "The initial mass of a rocket is 1000 kg. Calculate at what rate the fuel should be burnt so that the rocket is given an acceleration of 20 ms-2. The gases come out at a relative speed of 500 ms$-$1 with respect to the rocket : [Use g = 10 m/s2]",
    "options": [
      "6.0$\\times$ 102 kg s$-$1",
      "500 kg s$-$1",
      "10 kg s$-$1",
      "60 kg s$-$1"
    ],
    "correct": 3,
    "solution": "${F_{thrust}} = \\left( {{{dm} \\over {dt}}.{V_{rel}}} \\right)$\\left( {{{dm} \\over {dt}}{V_{rel}} - mg} \\right) = ma$ \\Rightarrow \\left( {{{dm} \\over {dt}}} \\right) \\times 500 - {10^3} \\times 10 = {10^3} \\times 20 {{dm} \\over {dt}}$ = (60 kg /s)",
    "chapter": "Newton's Laws of Motion",
    "topic": "Variable Mass System"
  },
  {
    "id": 226,
    "question": "A body of mass$4 \\mathrm{~kg}$ experiences two forces$\\vec{F}_1=5 \\hat{i}+8 \\hat{j}+7 \\hat{k}$ and$\\overrightarrow{\\mathrm{F}}_2=3 \\hat{i}-4 \\hat{j}-3 \\hat{k}$. The acceleration acting on the body is :",
    "options": [
      "$2 \\hat{i}+\\hat{j}+\\hat{k}$",
      "$4 \\hat{i}+2 \\hat{j}+2 \\hat{k}$",
      "$-2 \\hat{i}-\\hat{j}-\\hat{k}$",
      "$2 \\hat{i}+3 \\hat{j}+3 \\hat{k}$"
    ],
    "correct": 0,
    "solution": "To find the acceleration acting on the body, we first need to determine the resultant force acting on the body by adding the two forces$\\vec{F}_1$ and$\\vec{F}2$ vectorially. Then, we apply Newton's second law of motion, which states that the acceleration$\\vec{a}$ of a body is directly proportional to the total force$\\vec{F}$ acting on it and inversely proportional to the mass$m$ of the body :\n$ \\vec{F} = m \\cdot \\vec{a}$\nor\n$ \\vec{a} = \\frac{\\vec{F}}{m}$\nLet's start by adding the forces:\n$ \\vec{F}1 + \\vec{F}2 = (5 \\hat{i}+8 \\hat{j}+7 \\hat{k}) + (3 \\hat{i}-4 \\hat{j}-3 \\hat{k})$\nPerforming the addition component-wise:\n$\n\\vec{F}{\\text{total}} = (5 + 3)\\hat{i} + (8 - 4)\\hat{j} + (7 - 3)\\hat{k} \\\n\\vec{F}{\\text{total}} = 8 \\hat{i} + 4 \\hat{j} + 4 \\hat{k}\n$\nNow, let's use the formula for acceleration with$m = 4 \\mathrm{~kg}$:\n$\n\\vec{a} = \\frac{\\vec{F}{\\text{total}}}{m} = \\frac{8 \\hat{i} + 4 \\hat{j} + 4 \\hat{k}}{4 \\mathrm{~kg}}\n$\nDivide each component by the mass:\n$\n\\vec{a} = 2 \\hat{i} + 1 \\hat{j} + 1 \\hat{k}\n$\nSo, the acceleration acting on the body is:\n$ \\vec{a} = 2 \\hat{i} + \\hat{j} + \\hat{k}$\nThus, the correct option is:\nOption A :\n$2 \\hat{i}+\\hat{j}+\\hat{k}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Force and Acceleration"
  },
  {
    "id": 227,
    "question": "A force acts for 20 s on a body of mass 20 kg, starting from rest, after which the force ceases and then body describes 50 m in the next 10 s. The value of force will be:",
    "options": [
      "40 N",
      "20 N",
      "5 N",
      "10 N"
    ],
    "correct": 2,
    "solution": "$m = 20$ kg\n$t = 20$ sec.\nAcceleration$ = {F \\over {20}}$ m/s$^2$\n$\\therefore v = u + at$\n$v = 0 + \\left( {{F \\over {20}}} \\right)(20)$\n$ = F$ ms$^{-1}$\nNow for next 10 sec.\n$S=ut$\n$50=F(10)$\n$F=5$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Force and Acceleration"
  },
  {
    "id": 228,
    "question": "When forces${F\\_1},\\,\\,{F\\_2},\\,\\,{F\\_3}$ are acting on a particle of mass$m$ such that${F\\_2}$ and${F\\_3}$ are mutually perpendicular, then the particle remains stationary. If the force${F\\_1}$ is now removed then the acceleration of the particle is",
    "options": [
      "${F\\_1}/m$",
      "${F\\_2}{F\\_3}/m{F\\_1}$",
      "$\\left( {F{}\\_2 - {F\\_3}} \\right)/m$",
      "${F\\_2}/m$"
    ],
    "correct": 0,
    "solution": "When${F\\_1},{F\\_2}$ and${F\\_3}$ are acting on a particle then the particle remains stationary. This means that the resultant of${F\\_1},{F\\_2}$ and${F\\_3}$ is zero. When${F\\_1}$ is removed then particle will start moving due to the force${F\\_2}$ and${F\\_3}$ in the resultant of${F\\_2}$ and${F\\_3}$ and it should be equal and opposite to${F\\_1}. i.e. \\left| {{{\\overrightarrow F }\\_2} + {{\\overrightarrow F }\\_3}} \\right| = \\left| {{{\\overrightarrow F }\\_1}} \\right| \\therefore \\,\\,\\,\\,\\,a = {{\\left| {{{\\overrightarrow F }\\_2} + {{\\overrightarrow F }\\_3}} \\right|} \\over m} \\Rightarrow a = {{{F\\_1}} \\over m}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Equilibrium"
  },
  {
    "id": 229,
    "question": "In the fig. shown a cart moves on a smooth horizontal surface\ndue to an external constant force of magnitude F. The initial mass of\nthe cart is$M_{0}$and velocity is zero. Sand falls on to the cart with\nnegligible velocity at constant rate$\\mu\\ kg/s$ and sticks to the cart.\nThe velocity of the cart at time t is",
    "options": [
      "$\\frac{Ft}{M_{0} + \\mu t}$",
      "$\\frac{F}{\\mu}\\mathcal{l}n\\frac{m_{0} + \\mu t}{m_{0}}$",
      "$\\frac{Ft}{M_{0}}$",
      "$\\frac{Ft}{M_{0} + \\mu t}e^{\\mu t}$"
    ],
    "correct": 0,
    "solution": "Explanation\n[IMAGE] Formula$F = m\\frac{dv}{dt} + (V - u)\\frac{dm}{dt}$\nHere u=velocity of sand =0\n$m = M_{o} - \\mu t = mass\\ at\\ time\\ t$\nand$\\frac{dm}{dt} = \\mu$\n$\\therefore F = (M_{0} + \\mu t)\\frac{dm}{dt} + v\\mu$\n$(F - \\mu v)dt = (M_{o} + \\mu t)dv$\n$\\int_{0}^{t}\\frac{dt}{M_{0} + \\mu t} = \\int_{0}^{v}\\frac{dv}{F - \\mu v}$\n${\\lbrack log(M_{0} + \\mu t)\\rbrack}{0}^{t} = \\frac{1}{\\mu}\\lbrack log(F - \\mu v)\\rbrack{0}^{v}$\n$log\\frac{(M_{0} + \\mu t)}{M_{0}} = log(\\frac{F}{F - \\mu v})$\n$F - \\mu v = \\frac{M_{o}F}{M_{0} + \\mu t} \\Rightarrow v = \\frac{Ft}{M_{0} + \\mu t}$",
    "chapter": "Newton's Laws of Motion",
    "topic": "Variable Mass System"
  },
  {
    "id": 301,
    "question": "Two point charges $q_1(\\sqrt{10}\\mu C)$ and $q_2(-25\\mu C)$ are placed on the x-axis at $x = 1 m$ and $x = 4 m$ respectively. The electric field (in V/m) at a point $y = 3 m$ on y-axis is:",
    "options": [
      "$(63\\hat{i} - 27\\hat{j}) \\times 10^2$",
      "$(-63\\hat{i} + 27\\hat{j}) \\times 10^2$",
      "$(81\\hat{i} - 81\\hat{j}) \\times 10^2$",
      "$(-81\\hat{i} + 81\\hat{j}) \\times 10^2$"
    ],
    "correct": 0,
    "solution": "Distance of point P(0,3) from $q_1(1,0)$ is $\\sqrt{1^2+3^2} = \\sqrt{10}$ m.\nDistance of P(0,3) from $q_2(4,0)$ is $\\sqrt{4^2+3^2} = 5$ m.\nElectric field due to $q_1$: $\\vec{E_1} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1}{|r_1|^3}\\vec{r_1} = 9\\times 10^9 \\times \\frac{\\sqrt{10}\\times 10^{-6}}{10\\sqrt{10}} (-\\hat{i}+3\\hat{j}) = 900(-\\hat{i}+3\\hat{j}) = (-9\\hat{i}+27\\hat{j}) \\times 10^2$ V/m.\nElectric field due to $q_2$: $\\vec{E_2} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_2}{|r_2|^3}\\vec{r_2} = 9\\times 10^9 \\times \\frac{-25\\times 10^{-6}}{125} (-4\\hat{i}+3\\hat{j}) = -1800(-4\\hat{i}+3\\hat{j}) = (72\\hat{i}-54\\hat{j}) \\times 10^2$ V/m.\nNet field $\\vec{E} = \\vec{E_1} + \\vec{E_2} = (63\\hat{i} - 27\\hat{j}) \\times 10^2$ V/m.",
    "chapter": "Electrostatics",
    "topic": "Electric Field"
  },
  {
    "id": 302,
    "question": "A solid sphere of radius R carries a charge density $\\rho(r) = \\rho_0 (1 - \\frac{r}{R})$, where r is the distance from the center. The electric field at a distance r (r < R) is:",
    "options": [
      "$\\frac{\\rho_0 r}{3\\epsilon_0}(1 - \\frac{3r}{4R})$",
      "$\\frac{\\rho_0 r}{4\\epsilon_0}(1 - \\frac{3r}{4R})$",
      "$\\frac{\\rho_0 r}{3\\epsilon_0}(1 - \\frac{r}{R})$",
      "$\\frac{\\rho_0 r}{\\epsilon_0}(1 - \\frac{3r}{R})$"
    ],
    "correct": 0,
    "solution": "By Gauss's law for $r < R$:\n$\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{in}}{\\epsilon_0}$\n$E \\times 4\\pi r^2 = \\frac{1}{\\epsilon_0} \\int_0^r \\rho(x) 4\\pi x^2 dx$\n$= \\frac{4\\pi\\rho_0}{\\epsilon_0} \\int_0^r (1 - \\frac{x}{R})x^2 dx$\n$= \\frac{4\\pi\\rho_0}{\\epsilon_0} [\\frac{r^3}{3} - \\frac{r^4}{4R}]$\n$E = \\frac{\\rho_0}{\\epsilon_0} [\\frac{r}{3} - \\frac{r^2}{4R}] = \\frac{\\rho_0 r}{3\\epsilon_0}(1 - \\frac{3r}{4R})$.",
    "chapter": "Electrostatics",
    "topic": "Gauss's Law"
  },
  {
    "id": 303,
    "question": "An electric dipole is formed by two equal and opposite charges q with separation d. The charges have same mass m. It is kept in a uniform electric field E. If it is slightly rotated from its equilibrium orientation, then its angular frequency $\\omega$ is:",
    "options": [
      "$\\sqrt{\\frac{qE}{md}}$",
      "$\\sqrt{\\frac{2qE}{md}}$",
      "$2\\sqrt{\\frac{qE}{md}}$",
      "$\\sqrt{\\frac{qE}{2md}}$"
    ],
    "correct": 1,
    "solution": "Restoring torque $\\tau = -pE \\sin\\theta \\approx -pE\\theta = -qEd \\theta$.\nMoment of inertia $I = m(d/2)^2 + m(d/2)^2 = md^2/2$.\nSince $\\tau = I\\alpha$, we have $\\frac{md^2}{2} \\alpha = -qEd \\theta \\implies \\alpha = -\\frac{2qE}{md} \\theta$.\nComparing with $\\alpha = -\\omega^2 \\theta$, we get $\\omega = \\sqrt{\\frac{2qE}{md}}$.",
    "chapter": "Electrostatics",
    "topic": "Electric Dipole"
  },
  {
    "id": 304,
    "question": "A charge $Q$ is distributed over three concentric spherical shells of radii $a, b, c$ ($a < b < c$) such that their surface charge densities are equal to one another. The total potential at a point at distance $r$ from their common centre, where $r < a$, would be:",
    "options": [
      "$\\frac{Q(a+b+c)}{4\\pi\\epsilon_0 (a^2+b^2+c^2)}$",
      "$\\frac{Q(a^2+b^2+c^2)}{4\\pi\\epsilon_0 (a+b+c)}$",
      "$\\frac{Q(a+b+c)}{4\\pi\\epsilon_0}$",
      "$\\frac{Q}{4\\pi\\epsilon_0 (a+b+c)}$"
    ],
    "correct": 0,
    "solution": "Let surface charge density be $\\sigma$.\nTotal charge $Q = \\sigma 4\\pi (a^2 + b^2 + c^2) \\implies \\sigma = \\frac{Q}{4\\pi(a^2+b^2+c^2)}$.\nFor $r < a$, the potential is the sum of potentials due to each shell at its center:\n$V = V_a + V_b + V_c = \\frac{1}{4\\pi\\epsilon_0}(\\frac{q_a}{a} + \\frac{q_b}{b} + \\frac{q_c}{c})$\nSince $q = \\sigma 4\\pi R^2$, $V = \\frac{1}{4\\pi\\epsilon_0}(\\sigma 4\\pi a + \\sigma 4\\pi b + \\sigma 4\\pi c) = \\frac{\\sigma}{\\epsilon_0}(a+b+c)$.\nSubstituting $\\sigma$, $V = \\frac{Q(a+b+c)}{4\\pi\\epsilon_0 (a^2+b^2+c^2)}$.",
    "chapter": "Electrostatics",
    "topic": "Electric Potential"
  },
  {
    "id": 305,
    "question": "Two equal capacitors are first connected in series and then in parallel. The ratio of the equivalent capacities in the two cases is:",
    "options": [
      "1:4",
      "4:1",
      "1:2",
      "2:1"
    ],
    "correct": 0,
    "solution": "Let the capacitance of each capacitor be $C$.\nIn series, equivalent capacitance $C_s = \\frac{C}{2}$.\nIn parallel, equivalent capacitance $C_p = 2C$.\nRatio $C_s : C_p = \\frac{C}{2} : 2C = 1:4$.",
    "chapter": "Electrostatics",
    "topic": "Capacitance"
  }
,
  {
  "id": 306,
  "chapter": "Heat and Thermodynamics",
  "topic": "Kinetic Theory of Gases",
  "question": "One $kg$ of a diatomic gas is at a pressure of $8 \\times {10^4}\\,N/{m^2}.$ The density of the gas is $4kg/{m^3}$. What is the energy of the gas due to its thermal motion ?",
  "options": [
    "$5 \\times {10^4}\\,J$",
    "$6 \\times {10^4}\\,J$",
    "$7 \\times {10^4}\\,J$",
    "$3 \\times {10^4}\\,J$"
  ],
  "correct": 0,
  "solution": "$Volume\\,\\, = \\,\\,{{mass} \\over {density}} = {1 \\over 4}{m^3} K.E = {5 \\over 2}PV  = {5 \\over 2} \\times 8 \\times {10^4} \\times {1 \\over 4}  = 5 \\times {10^4}J$"
},
  {
  "id": 307,
  "chapter": "Heat and Thermodynamics",
  "topic": "Kinetic Theory of Gases",
  "question": "Three perfect gases at absolute temperatures ${T_1},\\,{T_2}$ and ${T_3}$ are mixed. The masses of molecules are ${m_1},{m_2}$ and ${m_3}$ and the number of molecules are ${n_1}, {n_2}$ and ${n_3}$ respectively. Assuming no loss of energy, the final temperature of the mixture is:",
  "options": [
    "${{{n_1}{T_1} + {n_2}{T_2} + {n_3}{T_3}} \\over {{n_1} + {n_2} + {n_3}}}$",
    "${{{n_1}T_1^2 + {n_2}T_2^2 + {n_3}T_3^2} \\over {{n_1}{T_1} + {n_2}{T_2} + {n_3}{T_3}}}$",
    "${{n_1^2T_1^2 + n_2^2T_2^2 + n_3^2T_3^2} \\over {{n_1}{T_1} + {n_2}{T_2} + {n_3}{T_3}}}$",
    "${{\\left( {{T_1} + {T_2} + {T_3}} \\right)} \\over 3}$"
  ],
  "correct": 0,
  "solution": "Number of moles of first gas $ = {{{n_1}} \\over {{N_A}}}$ Number of moles of second gas $ = {{{n_2}} \\over {{N_A}}}$ Number of moles of third gas $ = {{{n_3}} \\over {{N_A}}}$ If there is no loss of energy then ${P_1}{V_1} + {P_2}{V_2} + {P_3}{V_3} = PV {{{n_1}} \\over {{N_A}}}R{T_1} + {{{n_2}} \\over {{N_A}}}R{T_2} + {{{n_3}} \\over {{N_A}}}R{T_3}  = {{{n_1} + {n_2} + {n_3}} \\over {{N_A}}}R{T_{mix}}  \\Rightarrow {T_{mix}} = {{{n_1}{T_1} + {n_2}{T_2} + {n_3}{T_3}} \\over {{n_1} + {n_2} + {n_3}}}$"
},
  {
  "id": 308,
  "chapter": "Heat and Thermodynamics",
  "topic": "Specific Heat",
  "question": "An ideal gas has molecules with 5 degrees of freedom. The ratio of specific heats at constant pressure ($C_p$) and at constant volume ($C_v$) is :",
  "options": [
    "6",
    "${7 \\over 2}$",
    "${5 \\over 2}$",
    "${7 \\over 5}$"
  ],
  "correct": 3,
  "solution": "For ideal gas molecule with 5 degree of freedom, $C_v = {5 \\over 2} R$ and $C_p = {7 \\over 2} R \\therefore\\,\\,\\, {{{C_p}} \\over {{C_v}}} = {{{7 \\over 2}R} \\over {{5 \\over 2}R}} = {7 \\over 5}$"
},
  {
  "id": 309,
  "chapter": "Heat and Thermodynamics",
  "topic": "Specific Heat",
  "question": "Two moles of helium are mixed with n moles of hydrogen. If ${{C_p} \\over {C_v}} = {3 \\over 2}$ for the mixture, then the value of n is :",
  "options": [
    "1",
    "3",
    "2",
    "3 / 2"
  ],
  "correct": 2,
  "solution": "${{{C_p}} \\over {{C_v}}} = {{{f_{mix}} + 2} \\over {{f_{mix}}}} = {3 \\over 2}  \\Rightarrow\\,\\,\\, f_{mix} = 4$. As, $f_{mix} = {{{n_1}{f_1} + {n_2}{f_2}} \\over {{n_1} + {n_2}}}  \\Rightarrow\\,\\,\\, 4 = {{2 \\times 3 + n \\times 5} \\over {2 + n}}  \\Rightarrow  \\,\\,\\, n = 2$ moles."
},
  {
  "id": 310,
  "chapter": "Heat and Thermodynamics",
  "topic": "Internal Energy",
  "question": "A gas mixture consists of 3 moles of oxygen and 5 moles of argon at temperature T. considering only translational and rotational modes, the total internal energy of the system is :",
  "options": [
    "12 RT",
    "20 RT",
    "4 RT",
    "15 RT"
  ],
  "correct": 3,
  "solution": "$U = {{{f_1}} \\over 2}{n_1}RT + {{{f_2}} \\over 2}{n_2}RT  = {5 \\over 2}\\left( {3RT} \\right) + {3 \\over 2} \\times 5RT \\Rightarrow U = 15RT$"
},
  {
  "id": 311,
  "chapter": "Kinematics",
  "topic": "Relative Motion",
  "question": "A system is shown in the figure. Block A is moving with 1 m /s towards left. Wedge is moving with 1 m /s towards right. Then speed of the block B will be",
  "options": [
    "1 m/s",
    "2 m/s",
    "$\\sqrt{3}$ m/s",
    "none of these"
  ],
  "correct": 2,
  "solution": "Velocity of block A w.r.t. wedge is 2 m/s. So we have ${\\overset{\\rightarrow}{V}}_{BW} = {\\overset{\\rightarrow}{V}}_{B} - {\\overset{\\rightarrow}{V}}_{W} \\Rightarrow {\\overset{\\rightarrow}{V}}_{B} = {\\overset{\\rightarrow}{V}}_{BW} + {\\overset{\\rightarrow}{V}}_{W}$. So $V_{B} = \\sqrt{{(V_{W})}^{2} + {(V_{BW})}^{2} + 2V_{W} \\times V_{BW}(\\cos120^{\\circ})} = \\sqrt{1^{2} + 2^{2} + 2 \\times 1 \\times 2 \\times ( - 1/2)} = \\sqrt{3}m/s$"
},
  {
  "id": 312,
  "chapter": "Kinematics",
  "topic": "1D Motion",
  "question": "Consider a particle initially moving with a velocity 7 m/s starts decelerating at a constant rate of $2m/s^{2}$. The distance travelled in the fourth second is $\\frac{x}{10}m$. Find the value of x.",
  "options": [
    "5",
    "6",
    "7",
    "8"
  ],
  "correct": 0,
  "solution": "Here particle is decelerating so velocity of particle becomes 0 after t=3.5 sec. the particle has a turning point at t=3.5 sec. $V=U+at \\Rightarrow 0 = 7 - 2t \\Rightarrow t = 3.5\\sec$. $y_{2} = 7 \\times 3.5 - \\frac{1}{2} \\times 2 \\times (3.5)^{2} = \\frac{49}{4}m$. $y_{2} - x_{1} = \\frac{49}{4} - 12 = \\frac{1}{4}m$. Due to symmetry displacement of the particle at t=3 and t=4sec. is same. so total distance traveled in the fourth sec is $= \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}m = \\frac{5}{10}m \\Rightarrow x=5$"
},
  {
  "id": 313,
  "chapter": "Kinematics",
  "topic": "2D Motion",
  "question": "Starting from the origin at time $t = 0$, with initial velocity $5\\widehat{j}$ ms$^{-1}$, a particle moves in the x-y plane with a constant acceleration of $(10\\widehat{i} + 4\\widehat{j})$ ms$^{-2}$. At time $t$, its coordinates are $(20$ m$, y_0$ m$)$. The values of $t$ and $y_0$ are, respectively:",
  "options": [
    "5 s and 25 m",
    "2 s and 18 m",
    "2 s and 24 m",
    "4 s and 52 m"
  ],
  "correct": 1,
  "solution": "For the x-coordinate: $x = u_x t + \\frac{1}{2} a_x t^2 = 0 + \\frac{1}{2}(10)t^2 = 5t^2$. $5t^2 = 20 \\Rightarrow t^2 = 4 \\Rightarrow t = 2 \\text{ s}$. For the y-coordinate: $y = u_y t + \\frac{1}{2} a_y t^2 = 5(2) + \\frac{1}{2}(4)(2)^2 = 10 + 8 = 18 \\text{ m}$. Hence, $t = 2$ s and $y_0 = 18$ m."
},
  {
  "id": 314,
  "chapter": "Kinematics",
  "topic": "Projectile Motion",
  "question": "The trajectory of a projectile in a vertical plane is $y = \\alpha x - \\beta x^2$, where $\\alpha$ and $\\beta$ are constants and $x$ & $y$ are respectively the horizontal and vertical distances of the projectile from the point of projection. The angle of projection $\\theta$ and the maximum height attained $H$ are respectively given by:",
  "options": [
    "$\\tan^{-1}\\alpha$, $\\frac{\\alpha^2}{4\\beta}$",
    "$\\tan^{-1}\\alpha$, $\\frac{4\\alpha^2}{\\beta}$",
    "$\\tan^{-1}\\left(\\frac{\\beta}{\\alpha}\\right)$, $\\frac{\\alpha^2}{\\beta}$",
    "$\\tan^{-1}\\beta$, $\\frac{\\alpha^2}{2\\beta}$"
  ],
  "correct": 0,
  "solution": "The trajectory equation of a projectile is: $y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$. Comparing with given equation $y = \\alpha x - \\beta x^2$: $\\tan\\theta = \\alpha \\Rightarrow \\theta = \\tan^{-1}\\alpha$. Also, $\\beta = \\frac{g}{2u^2\\cos^2\\theta}$. Maximum height $H = \\frac{u^2\\sin^2\\theta}{2g} = \\frac{u^2\\tan^2\\theta}{2g(1+\\tan^2\\theta)} = \\frac{u^2\\alpha^2}{2g(1+\\alpha^2)}$. From $\\beta = \\frac{g}{2u^2\\cos^2\\theta}$ and $\\cos^2\\theta = \\frac{1}{1+\\tan^2\\theta} = \\frac{1}{1+\\alpha^2}$: $\\beta = \\frac{g(1+\\alpha^2)}{2u^2} \\Rightarrow \\frac{u^2}{g} = \\frac{1+\\alpha^2}{2\\beta}$. Therefore: $H = \\frac{(1+\\alpha^2)\\alpha^2}{2 \\cdot 2\\beta(1+\\alpha^2)} = \\frac{\\alpha^2}{4\\beta}$"
},
  {
  "id": 315,
  "chapter": "Kinematics",
  "topic": "2D Motion",
  "question": "A particle starts from the origin at $t = 0$ with an initial velocity of $3.0\\widehat{i}$ m/s and moves in the x-y plane with a constant acceleration $(6\\widehat{i} + 4\\widehat{j})$ m/s$^2$. The x-coordinate of the particle at the instant when its y-coordinate is 32 m is $D$ meters. The value of $D$ is:",
  "options": [
    "40",
    "32",
    "50",
    "60"
  ],
  "correct": 3,
  "solution": "For the y-coordinate: $y = u_y t + \\frac{1}{2} a_y t^2 = 0 + \\frac{1}{2}(4)t^2 = 2t^2$. $2t^2 = 32 \\Rightarrow t^2 = 16 \\Rightarrow t = 4 \\text{ s}$. For the x-coordinate: $x = u_x t + \\frac{1}{2} a_x t^2 = 3.0(4) + \\frac{1}{2}(6)(4)^2 = 12 + 3(16) = 12 + 48 = 60 \\text{ m}$. Therefore, $D = 60$."
},
  {
  "id": 316,
  "chapter": "Rotational Motion",
  "topic": "Dynamics",
  "question": "An impulsive force F acts horizontally on a solid sphere of radius R placed on a horizontal surface. The line of action of the impulsive force is at a height h above the centre of the sphere. If the rotational and translational kinetic energies of the sphere just after the impulse are equal, then h is equal to",
  "options": [
    "$\\frac{R}{2}$",
    "$\\frac{2}{5}R$",
    "$\\frac{R}{\\sqrt{2}}$",
    "$\\sqrt{\\frac{2}{5}}R$"
  ],
  "correct": 3,
  "solution": "Transitional k.e. = rotational k.e. $\\frac{1}{2}{mv}^{2} = \\frac{1}{2}I\\omega^{2} \\Rightarrow V^{2} = \\frac{2}{5}\\omega^{2}R^{2}$...(1). Impulse eq. $Fdt = mV$...(2). $\\ Fhdt\\ = I\\omega = \\frac{2}{5}mR^{2}\\omega$...(3). Dividing (2) and (3) $h = \\frac{2}{5}\\frac{R^{2}\\omega}{v}$...(4). Solving (1) and (4) $h = \\sqrt{\\frac{2}{5}}R$"
},
  {
  "id": 317,
  "chapter": "Rotational Motion",
  "topic": "Conservation of Angular Momentum",
  "question": "Initial angular velocity of a circular disc of mass $M$ is ${\\omega _1}.$ Then two small spheres of mass $m$ are attached gently to diametrically opposite points on the edge of the disc. What is the final angular velocity of the disc?",
  "options": [
    "$\\left( {{{M + m} \\over M}} \\right)\\,\\,{\\omega _1}$",
    "$\\left( {{{M + m} \\over m}} \\right)\\,\\,{\\omega _1}$",
    "$\\left( {{M \\over {M + 4m}}} \\right)\\,\\,{\\omega _1}$",
    "$\\left( {{M \\over {M + 2m}}} \\right)\\,\\,{\\omega _1}$"
  ],
  "correct": 2,
  "solution": "When two small spheres of mass $m$ are attached gently, the external torque, about the axis of rotation, is zero. So the angular momentum about the axis of rotation is conserved. $\\therefore {I_1}{\\omega _1} = {I_2}{\\omega _2}  \\Rightarrow {\\omega _2} = {{{I_1}} \\over {{I_2}}}{\\omega _1}$. Here Moment of inertia of Disc ${I_1} = {1 \\over 2}M{R^2}$ and After adding two sphere Moment of Inertia of disc and two sphere, ${I_2} = {1 \\over 2}M{R^2} +  2\\left( {{1 \\over 2}m{R^2} + {1 \\over 2}m{R^2}} \\right) \\therefore {\\omega _2} = {{{1 \\over 2}M{R^2}} \\over {{1 \\over 2}MR + 2m{R^2}}} \\times {\\omega _1} = {M \\over {M + 4m}}{\\omega _1}$"
},
  {
  "id": 318,
  "chapter": "Rotational Motion",
  "topic": "Angular Momentum",
  "question": "A particle performing uniform circular motion has angular frequency is doubled & its kinetic energy halved, then the new angular momentum is",
  "options": [
    "${L \\over 4}$",
    "$2L$",
    "$4L$",
    "${L \\over 2}$"
  ],
  "correct": 0,
  "solution": "We know Rotational Kinetic Energy $={1 \\over 2}I{\\omega ^2},$ Angular Momentum $L = I\\omega \\Rightarrow I = {L \\over \\omega } \\therefore$ Initial $K.E. = {1 \\over 2}{L \\over \\omega } \\times {\\omega ^2} = {1 \\over 2}L\\omega$. Final $K.E'$ = ${{K.E} \\over 2}$ = ${1 \\over 2}{L'} \\times 2\\omega  \\therefore {{K.E} \\over {K.E'}} = {{L \\times \\omega } \\over {L' \\times \\omega '}}  \\Rightarrow {{K.E} \\over {{{K.E} \\over 2}}} = {{L \\times \\omega } \\over {L' \\times 2\\omega }}$. $\\therefore L' = {L \\over 4}$"
},
  {
  "id": 319,
  "chapter": "Rotational Motion",
  "topic": "Conservation of Angular Momentum",
  "question": "A solid sphere is rotating in free space. If the radius of the sphere is increased keeping mass same which on of the following will not be affected ?",
  "options": [
    "Angular velocity",
    "Angular momentum",
    "Moment of inertia",
    "Rotational kinetic energy"
  ],
  "correct": 1,
  "solution": "Solid sphere is rotating in free space that means no external torque is operating on the sphere. Angular momentum will remain the same since external torque is zero."
},
  {
  "id": 320,
  "chapter": "Rotational Motion",
  "topic": "Conservation of Angular Momentum",
  "question": "A thin circular ring of mass $m$ and radius $R$ is rotating about its axis with a constant angular velocity $\\omega$. Two objects each of mass $M$ are attached gently to the opposite ends of a diameter of the ring. The ring now rotates with an angular velocity $\\omega ' = $",
  "options": [
    "${{\\omega \\left( {m + 2M} \\right)} \\over m}$",
    "${{\\omega \\left( {m - 2M} \\right)} \\over {\\left( {m + 2M} \\right)}}$",
    "${{\\omega m} \\over {\\left( {m + M} \\right)}}$",
    "${{\\omega m} \\over {\\left( {m + 2M} \\right)}}$"
  ],
  "correct": 3,
  "solution": "Here angular momentum is conserved. Applying conservation of angular momentum $I'\\omega ' = I\\omega \\,\\, \\left( {m{R^2} + 2M{R^2}} \\right)\\omega \\,' = m{R^2}\\omega   \\Rightarrow \\omega \\,' = \\omega \\left[ {{m \\over {m + 2M}}} \\right]$"
},
  {
  "id": 321,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "The distance of the point ($-$1, 2, $-$2) from the line of intersection of the planes 2x + 3y + 2z = 0 and x $-$ 2y + z = 0 is :",
  "options": [
    "${1 \\over {\\sqrt{2} }}$",
    "${5 \\over 2}$",
    "${{\\sqrt {42} } \\over 2}$",
    "${{\\sqrt {34} } \\over 2}$"
  ],
  "correct": 3,
  "solution": "P1 : 2x + 3y + 2z = 0 $\\Rightarrow$ ${\\overrightarrow n \\_1} = 2\\widehat i + 3\\widehat j + 2\\widehat k$ P2 : x $-$ 2y + z = 0 $\\Rightarrow$ ${\\overrightarrow n \\_2} = \\widehat i - 2\\widehat j + \\widehat k$ Direction vector of line L which is line of intersection of P1 & P2 $\\overrightarrow r = {\\overrightarrow n \\_1} \\times {\\overrightarrow n \\_2} = 7\\widehat i - 7\\widehat k$ DR's of L are (1, 0, $-$1) $\\Rightarrow$ Equation of L : ${x \\over 1} = {y \\over 0} = {z \\over { - 1}} = \\lambda $ DR's of $\\overrightarrow {PQ} $ = ($\\lambda$ + 1, $-$2, 2 $-$ $\\lambda$) $\\because$ $\\overrightarrow {PQ} \\bot \\overrightarrow r $ $ \\Rightarrow (\\lambda + 1)(1) + ( - 2)(0) + (2 - \\lambda )( - 1) = 0$ $ \\Rightarrow \\lambda = {1 \\over 2} \\Rightarrow Q\\left( {{1 \\over 2},0,{{..."
},
  {
  "id": 322,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "The vector equation of the plane passing through the intersection of the planes$\\overrightarrow r .\\left( {\\widehat i + \\widehat j + \\widehat k} \\right) = 1$ and$\\overrightarrow r .\\left( {\\widehat i - 2\\widehat j} \\right) = - 2$, and the point (1, 0, 2) is :",
  "options": [
    "$\\overrightarrow r .\\left( {\\widehat i + 7\\widehat j + 3\\widehat k} \\right) = {7 \\over 3}$",
    "$\\overrightarrow r .\\left( {\\widehat i + 7\\widehat j + 3\\widehat k} \\right) = 7$",
    "$\\overrightarrow r .\\left( {3\\widehat i + 7\\widehat j + 3\\widehat k} \\right) = 7$",
    "$\\overrightarrow r .\\left( {\\widehat i - 7\\widehat j + 3\\widehat k} \\right) = {7 \\over 3}$"
  ],
  "correct": 1,
  "solution": "Given, point (1, 0, 2) Equation of plane = $\\overrightarrow r\\,.\\,(\\widehat i + \\widehat j + \\widehat k) = 1$ and$\\overrightarrow r\\,.\\,(\\widehat i - 2\\widehat j) = - 2$ Equation of plane passing through the intersection of given planes is$[\\overrightarrow r\\,.\\,(\\widehat i + \\widehat j + \\widehat k) - 1] + \\lambda [\\overrightarrow r\\,.\\,(\\widehat i - 2\\widehat j) + 2] = 0 \\because$ This plane passes through point (1, 0, 2) i.e., vector$(\\widehat i + 2\\widehat k) \\therefore [(\\widehat i + 2\\widehat k)\\,.\\,(\\widehat i + \\widehat j + \\widehat k) - 1] + \\lambda [(\\widehat i + 2\\widehat k)\\,.\\,(\\widehat i - 2\\widehat j) + 2] = 0  \\Rightarrow (3 - 1) + \\lambda (1 + 2) = 0$ $ \\Rightarrow 2 + \\lambda \\times 3 = 0  \\Rightarrow \\lambda = - 2/3$ Hence, equation of re..."
},
  {
  "id": 323,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "If the mirror image of the point$P(3,4,9)$ in the line$\\frac{x-1}{3}=\\frac{y+1}{2}=\\frac{z-2}{1}$ is$(\\alpha, \\beta, \\gamma)$, then 14$(\\alpha+\\beta+\\gamma)$ is :",
  "options": [
    "102",
    "138",
    "132",
    "108"
  ],
  "correct": 3,
  "solution": "$\\begin{aligned} & \\overrightarrow{\\mathrm{PN}}. \\overrightarrow{\\mathrm{b}}=0\\\\\\\\ & 3(3 \\lambda-2)+2(2 \\lambda-5)+(\\lambda-7)=0 \\\\\\\\ & 14 \\lambda=23 \\Rightarrow \\lambda=\\frac{23}{14}\\end{aligned} \\begin{aligned} & \\mathrm{N}\\left(\\frac{83}{14}, \\frac{32}{14}, \\frac{51}{14}\\right) \\\\\\\\ & \\therefore \\frac{\\alpha+3}{2}=\\frac{83}{14} \\Rightarrow \\alpha=\\frac{62}{7}\\end{aligned}$ $\\begin{aligned} & \\frac{\\beta+4}{2}=\\frac{32}{14} \\Rightarrow \\beta=\\frac{4}{7} \\\\\\\\ & \\frac{\\gamma+9}{2}=\\frac{51}{14} \\Rightarrow \\gamma=\\frac{-12}{7}\\end{aligned}$ Now, $14(\\alpha+\\beta+\\gamma)=14\\left(\\frac{62+4-12}{7}\\right)=108$"
},
  {
  "id": 324,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "The two lines$x=ay+b,z=cy+d$ and$x = a'y + b',z = c'y + d'$ will be perpendicular, if and only if :",
  "options": [
    "$aa' + cc' + 1 = 0$",
    "$aa' + bb'cc' + 1 = 0$",
    "$aa' + bb'cc' = 0$",
    "$\\left( {a + a'} \\right)\\left( {b + b'} \\right) + \\left( {c + c'} \\right) = 0$"
  ],
  "correct": 0,
  "solution": "${{x - b} \\over a} = {y \\over 1} = {{z - d} \\over c}; {{x - b'} \\over {a'}}  = {y \\over 1} = {{z - d'} \\over c'}$ For perpenedicularity of lines$aa' + 1 + cc' = 0$"
},
  {
  "id": 325,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "A line makes the same angle$\\theta$, with each of the$x$ and$z$ axis. If the angle$\\beta \\,$, which it makes with y-axis, is such that$\\,{\\sin \\^2}\\beta = 3{\\sin \\^2}\\theta ,$ then${\\cos \\^2}\\theta$ equals :",
  "options": [
    "${2 \\over 5}$",
    "${1 \\over 5}$",
    "${3 \\over 5}$",
    "${2 \\over 3}$"
  ],
  "correct": 2,
  "solution": "Concept : If a line makes the angle$\\alpha ,\\beta ,\\gamma$ with x, y, z axis respectively then${\\cos \\^2}\\alpha + {\\cos \\^2}\\beta + {\\cos \\^2}\\gamma = 1$ In this question given that the line makes angle with x and z-axis and with yaxis. $\\therefore\\: cos\\^2\\theta+cos\\^2\\beta+cos\\^2\\theta=1 \\Rightarrow\\:2cos\\^2\\theta=1-cos\\^2\\beta  \\Rightarrow 2{\\cos \\^2}\\theta = {\\sin \\^2}\\beta$ But given that$sin\\^2\\beta=3sin\\^2\\theta \\therefore 2{\\cos \\^2}\\theta = 3{\\sin \\^2}\\theta   \\Rightarrow 2{\\cos \\^2}\\theta = 3\\left( {1 - {{\\cos }\\^2}\\theta } \\right)  \\Rightarrow 2{\\cos \\^2}\\theta = 3 - 3{\\cos \\^2}\\theta   \\Rightarrow 5{\\cos \\^2}\\theta = 3  \\Rightarrow {\\cos \\^2}\\theta = {3 \\over 5}$"
},
  {
  "id": 326,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "If a line makes an angle of$\\pi /4$ with the positive directions of each of$x$-axis and$y$-axis, then the angle that the line makes with the positive direction of the$z$-axis is :",
  "options": [
    "${\\pi \\over 4}$",
    "${\\pi \\over 2}$",
    "${\\pi \\over 6}$",
    "${\\pi \\over 3}$"
  ],
  "correct": 1,
  "solution": "Let the angle of line makes with the positive direction of$z$-axis is$\\alpha$ direction cosines of line with the$+ve$ directions of$x$-axis, $y$-axis, and$z$-axis is$l, m, n$ respectively. $\\therefore l = \\cos {\\pi \\over 4},m = \\cos {\\pi \\over 4},\\,\\,n = cos\\,\\alpha$ as we know that, ${l\\^2} + {m\\^2} + {n\\^2} = 1 \\therefore {\\cos \\^2}{\\pi \\over 4} + {\\cos \\^2}{\\pi \\over 4} + {\\cos \\^2}\\alpha = 1  \\Rightarrow {1 \\over 2} + {1 \\over 2} + {\\cos \\^2}\\alpha = 1  \\Rightarrow {\\cos \\^2}\\alpha = 0 \\Rightarrow \\alpha = {\\pi \\over 2}$ Hence, angle with positive direction of the$z$-axis is${\\pi \\over 2}$"
},
  {
  "id": 327,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "Let$L$ be the line of intersection of the planes$2x+3y+z=1$ and$x+3y+2z=2.$ If$L$ makes an angle$\\alpha$ with the positive$x$-axis, then cos$\\alpha$ equals",
  "options": [
    "$1$",
    "${1 \\over {\\sqrt{2} }}$",
    "${1 \\over {\\sqrt{3} }}$",
    "${1 \\over 2}$"
  ],
  "correct": 2,
  "solution": "Let the direction cosines of line$L$ be$l,m,n,$ then$2l+3m+n=0 \\,\\,\\,\\,\\,\\,\\,....\\left( i \\right)$ and$l + 3m + 2n = 0\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,....\\left( {ii} \\right)$ on solving equation$(i)$ and$(ii),$ we get${l \\over {6 - 3}} = {m \\over {1 - 4}} = {n \\over {6 - 3}} \\,\\,\\,\\,\\,\\,\\,\\,\\,\\, \\Rightarrow {l \\over 3} = {m \\over { - 3}} = {n \\over 3}$ Now$ \\Rightarrow {l \\over 3} = {m \\over { - 3}} = {n \\over 3} = {{\\sqrt {{l\\^2} + {m\\^2} + {n\\^2}} } \\over {\\sqrt {{3\\^2} + {{\\left( { - 3} \\right)}\\^2} + {3\\^2}} }}$ As${l\\^2} + {m\\^2} + {n\\^2} = 1 \\therefore {l \\over 3} = {m \\over { - 3}} = {n \\over 3} = {1 \\over {\\sqrt {27} }}  \\Rightarrow l = {3 \\over {\\sqrt {27} }} = {1 \\over {\\sqrt{3} }},\\,\\,m = - {1 \\over {\\sqrt{3} }},n = {1 \\over {\\sqrt{3} }}$ Line$L,$ makes..."
},
  {
  "id": 328,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "The projections of a vector on the three coordinate axis are$6,-3,2$ respectively. The direction cosines of the vector are :",
  "options": [
    "${6 \\over 5},{{ - 3} \\over 5},{2 \\over 5}$",
    "${6 \\over 7 },{{ - 3} \\over 7},{2 \\over 7}$",
    "${- 6 \\over 7 },{{ - 3} \\over 7},{2 \\over 7}$",
    "$6, -3, 2$"
  ],
  "correct": 1,
  "solution": "Let$P\\left( {{x\\_1},{y\\_1},{z\\_1}} \\right)$ and$Q\\left( {{x\\_2},{y\\_2},{z\\_2}} \\right)$ be the initial and final points of the vector whose projections on the three coordinates axes are${6, - 3,2}$ then${x\\_2} - {x\\_1}, = 6;\\,\\,{y\\_2} - {y\\_1} = - 3;\\,\\,{z\\_2} - {z\\_1} = 2$ So that directions ratios of$\\overrightarrow {PQ}$ are${6, - 3,2} \\therefore$ Direction cosines of$\\overrightarrow {PQ}$ are${6 \\over {\\sqrt {{6\\^2} + {{\\left( { - 3} \\right)}\\^2} + {2\\^2}} }},{{ - 3} \\over {\\sqrt {{6\\^2} + {{\\left( { - 3} \\right)}\\^2} + {2\\^2}} }}, \\,\\,\\,\\,\\,\\,\\,\\, {2 \\over {\\sqrt {{6\\^2} + {{\\left( { - 3} \\right)}\\^2} + {2\\^2}} }} = {6 \\over 7},{{ - 3} \\over 7},{2 \\over 7}$"
},
  {
  "id": 329,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "A line$AB$ in three-dimensional space makes angles${45^ \\circ }$ and${120^ \\circ }$ with the positive$x$-axis and the positive$y$-axis respectively. If$AB$ makes an acute angle$\\theta$ with the positive$z$-axis, then$\\theta$ equals :",
  "options": [
    "${45^ \\circ }$",
    "${60^ \\circ }$",
    "${75^ \\circ }$",
    "${30^ \\circ }$"
  ],
  "correct": 1,
  "solution": "Direction cosines of the line : $\\ell = \\cos {45^ \\circ } = {1 \\over {\\sqrt{2} }},m = \\cos {120^ \\circ } = {{ - 1} \\over 2},\\pi = \\cos \\theta$ where$\\theta$ is the angle, which line makes with positive$z$-axis. Now${\\ell \\^2} + {m\\^2} + {n\\^2} = 1  \\Rightarrow {1 \\over 2} + {1 \\over 4} + {\\cos \\^2}\\theta = 1,\\,\\,{\\cos \\^2}\\theta = {1 \\over 4}  \\Rightarrow \\cos \\theta = {1 \\over 2}\\,\\,\\,\\,\\left( \\theta \\right.$ being acute)$ \\Rightarrow 0 = {\\pi \\over 3}$"
},
  {
  "id": 330,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "The angle between the lines whose direction cosines satisfy the equations$l+m+n=0$ and${l\\^2} = {m\\^2} + {n\\^2}$ is :",
  "options": [
    "${\\pi \\over 6}$",
    "${\\pi \\over 2}$",
    "${\\pi \\over 3}$",
    "${\\pi \\over 4}$"
  ],
  "correct": 2,
  "solution": "Given$l + m + n = 0$ and${l\\^2} = {m\\^2} + {n\\^2}$ Now, ${\\left( { - m - n} \\right)\\^2} = {m\\^2} + {n\\^2}  \\Rightarrow mn = 0 \\Rightarrow m = 0\\,\\,$ or$\\,\\,n = 0$ If$m=0$ then$l=-n$ We know${l\\^2} + {m\\^2} + {n\\^2} = 1 \\Rightarrow n = \\pm {1 \\over {\\sqrt{2} }}$ i.e.$\\left( {{l\\_1},{m\\_1},{n\\_1}} \\right) = \\left( { - {1 \\over {\\sqrt{2} }},0,{1 \\over {\\sqrt{2} }}} \\right)$ If$n=0$ then$l=-m {l\\^2} + {m\\^2} + {n\\^2} = 1\\,\\,\\, \\Rightarrow 2{m\\^2} = 1  \\Rightarrow m = \\pm {1 \\over {\\sqrt{2} }}$ Let$m = {1 \\over {\\sqrt{2} }} \\Rightarrow l = - {1 \\over {\\sqrt{2} }}$ and$n=0 \\left( {{l\\_2},{m\\_2},{n\\_2}} \\right) = \\left( { - {1 \\over {\\sqrt{2} }},{1 \\over {\\sqrt{2} }},0} \\right) \\therefore \\cos \\theta = {1 \\over 2} \\Rightarrow \\theta = {\\pi \\over 3}$"
},
  {
  "id": 331,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "A plane which passes through the point$(3,2,0)$ and the line \n${{x - 4} \\over 1} = {{y - 7} \\over 5} = {{z - 4} \\over 4}$ is :",
  "options": [
    "$x-y+z=1$",
    "$x+y+z=5$",
    "$x+2y-z=1$",
    "$2x-y+z=5$"
  ],
  "correct": 0,
  "solution": "As the point$\\left( {3,2,0} \\right)$ lies on the given line\n${{x - 4} \\over 1} = {{y - 7} \\over 5} = {{z - 4} \\over 4}$\n$\\therefore$ There can be infinite many planes passing through this line. But here out of the four options only first option is satisfied by the coordinates of both the points$\\left( {3,\\,2,\\,0} \\right)$ and$\\left( {4,\\,7,\\,4} \\right)$\n$\\therefore x - y + z = 1$ is the required plane."
},
  {
  "id": 332,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "If the angel$\\theta$ between the line${{x + 1} \\over 1} = {{y - 1} \\over 2} = {{z - 2} \\over 2}$ and \nthe plane$2x - y + \\sqrt \\lambda  \\,\\,z + 4 = 0$ is such that$\\sin \\,\\,\\theta  = {1 \\over 3}$ then value of$\\lambda$ is :",
  "options": [
    "${5 \\over 3}$",
    "${-3 \\over 5}$",
    "${3 \\over 4}$",
    "${-4 \\over 3}$"
  ],
  "correct": 0,
  "solution": "If$\\theta$ is the angle between line and plane then$\\left( {{\\pi  \\over 2} - 0} \\right)$\nis the angle between line and normal to plane given by\n$\\cos \\left( {{\\pi  \\over 2} - 0} \\right) = {{\\left( {\\widehat i + 2\\widehat j + 2\\widehat k} \\right).\\left( {2\\widehat i - \\widehat j + \\sqrt \\lambda  \\widehat k} \\right)} \\over {3\\sqrt {4 + 1 + \\lambda } }}$\n$\\cos \\left( {{\\pi  \\over 2} - \\theta } \\right) = {{2 - 2 + 2\\sqrt \\lambda  } \\over {3 \\times \\sqrt 5  + \\lambda }}$\n$ \\Rightarrow \\sin \\theta  = {{2\\sqrt \\lambda  } \\over {3\\sqrt 5  + \\lambda }} = {1 \\over 3}$\n$ \\Rightarrow 4\\lambda  = 5 + \\lambda  \\Rightarrow \\lambda  = {5 \\over 3}$"
},
  {
  "id": 333,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "If the plane$2ax-3ay+4az+6=0$ passes through the midpoint of the line joining the centres of the spheres \n${x^2} + {y^2} + {z^2} + 6x - 8y - 2z = 13$ and \n${x^2} + {y^2} + {z^2} - 10x + 4y - 2z = 8$ then a equals :",
  "options": [
    "$-1$",
    "$1$",
    "$-2$",
    "$2$"
  ],
  "correct": 2,
  "solution": "Centers of given spheres are$\\left( { - 3,4,1} \\right)$ and$\\left( {5, - 2,1} \\right).$\nMid point of centers is$\\left( {1,1,1} \\right).$\nSatisfying this in the equation of plane, we get\n$2a - 3a + 4a + 6 = 0$\n$ \\Rightarrow a =  - 2$"
},
  {
  "id": 334,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "The distance between the line \n$\\overrightarrow r  = 2\\widehat i - 2\\widehat j + 3\\widehat k + \\lambda \\left( {i - j + 4k} \\right),$ and the plane \n$\\overrightarrow r .\\left( {\\widehat i + 5\\widehat j + \\widehat k} \\right) = 5$ is",
  "options": [
    "${{10} \\over 9}$",
    "${{10} \\over {3\\sqrt 3 }}$",
    "${{3} \\over 10}$",
    "${{10} \\over 3}$"
  ],
  "correct": 1,
  "solution": "A point on lines is$\\left( {2, - 2,3} \\right)$ its perpendicular distance\nfrom the plane$x + 5y + z - 5 = 0$ is\n$ = \\left| {{{2 - 10 + 3 - 5} \\over {\\sqrt {1 + 25 + 1} }}} \\right| = {{10} \\over {3\\sqrt 3 }}$"
},
  {
  "id": 335,
  "chapter": "3D Geometry",
  "topic": "3D Geometry",
  "question": "The image of the point$(-1, 3,4)$ in the plane$x-2y=0$ is :",
  "options": [
    "$\\left( { - {{17} \\over 3}, - {{19} \\over 3},4} \\right)$",
    "$(15,11,4)$",
    "$\\left( { - {{17} \\over 3}, - {{19} \\over 3},1} \\right)$",
    "None of these"
  ],
  "correct": 3,
  "solution": "$E{q^n}\\,\\,\\,\\,$ of$\\,\\,\\,\\,PN:  $-\n${{x + 1} \\over 1} = {{y - 3} \\over { - 2}} = {{z - 4} \\over 0} = \\lambda$\n$N\\left( {\\lambda  - 1, - 2\\lambda  + 3 - 4} \\right)$\nIt lies on$x-2y=0$\n$ \\Rightarrow \\lambda  - 1 + 4\\lambda  - 6 = 0$\n$ \\Rightarrow \\lambda  = 7/5$\n$N\\left( {{2 \\over 5},{1 \\over 5},4} \\right)$\n$N$ is mid point of$PP'$\n$\\therefore \\alpha  - 1 = {4 \\over 5},\\beta  + 3 = {2 \\over 5},r + 4 = 8$\n$ \\Rightarrow \\alpha  = {9 \\over 5},\\beta  = {{ - 13} \\over 5},r = 4$\n$\\therefore$ Image is$\\left( {{9 \\over 5},{{ - 13} \\over 5},4} \\right)$"
}
  ,{
    "id": 336,
    "question": "CH3 - Mg - Br is an organometallic compound due to :",
    "options": [
      "Mg - Br bond",
      "C - Mg bond",
      "C - Br bond",
      "C - H bond"
    ],
    "correct": 1,
    "solution": "Compounds that contain at least one carbon metal bond are known as organometallic compounds. In$C{H\\_3}  - Mg - Br$ (Grignard's reagent) a bond is present between carbon and$Mg$ (Metal) hence it is an organometallic compound.",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 337,
    "question": "Coordination compound have great importance in biological systems. In this context which of the following statements is incorrect?",
    "options": [
      "Chlorophylls are green pigments in plants and contains calcium",
      "Carboxypeptidase A is an enzyme and contains zinc",
      "Cyanocobalamin is B12 and contains cobalt",
      "Haemoglobin is the red pigment of blood and contains iron"
    ],
    "correct": 0,
    "solution": "The chlorophyll molecule plays an important role in photosynthesis, contain porphyrin ring and the metal$Mg$ not$Ca.$",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 338,
    "question": "Match the metals (column I) with the coordination compound(s)/enzyme(s) (column II) .tg {border-collapse:collapse;border-spacing:0;width:100%} .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;} .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;} .tg .tg-x1hj{font-size:22px;border-color:inherit;text-align:left;vertical-align:top} .tg .tg-nhda{font-size:22px;border-color:inherit;text-align:center} .tg .tg-9d8n{font-size:22px;border-color:inherit;text-align:center;vertical-align:top} .tg .tg-c4o0{font-size:22px;border-color:inherit;text-align:left} (Column I) Metals (Column II) Coordination compounds(s) enzyme(s) (A) Co (i) Wilkinson catalyst (B) Zn (ii) Chlorophyl (C) Rh (iii) Vitamin B12 (D) Mg (iv) Carbonic anhydrase",
    "options": [
      "(A)-(iii); (B)-(iv); (C)-(i); (D)-(ii)",
      "(A)-(iv); (B)-(iii); (C)-(i); (D)-(ii)",
      "(A)-(i); (B)-(ii); (C)-(iii); (D)-(iv)",
      "(A)-(ii); (B)-(i); (C)-(iv); (D)-(iii)"
    ],
    "correct": 0,
    "solution": "Co$ \\to$ Vitamin B12 Zn$ \\to$ Carbonic anhydrase Rh$ \\to$ Wilkinson catalyst Mg$ \\to$ Chlorophyll",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 339,
    "question": "The number of bridging CO ligand(s) and Co-Co bond(s) in Co2(CO)8, respectively are :",
    "options": [
      "2 and 0",
      "0 and 2",
      "4 and 0",
      "2 and 1"
    ],
    "correct": 3,
    "solution": "",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 340,
    "question": "Mn2(CO)10 is an organometallic compound due to the presence of -",
    "options": [
      "CO bond",
      "Mn Mn bond",
      "Mn O bond",
      "Mn C bond"
    ],
    "correct": 3,
    "solution": "Compounds that contain at least one carbon-metal bond are called organometallic compounds.",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 341,
    "question": "The compound that inhibits the growth of tumors is :",
    "options": [
      "cis-[Pd(Cl)2(NH3)2    ]",
      "trans-[Pd(Cl)2(NH3)2    ]",
      "cis-[Pt(Cl)2(NH3)2    ]",
      "trans-[Pt(Cl)2(NH3)2    ]"
    ],
    "correct": 2,
    "solution": "Cis-platin or cis-[Pt(Cl)2(NH3)2] is used as an anti-cancer drug.",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 342,
    "question": "The compound used in the treatment of lead poisoning is :",
    "options": [
      "desferrioxime B",
      "Cis-platin",
      "D-penicillamine",
      "EDTA"
    ],
    "correct": 3,
    "solution": "EDTA is used in treatment of lead poisoning.",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 343,
    "question": "The potassium ferrocyanide solution gives a Prussian blue colour, when added to :",
    "options": [
      "CoCl3",
      "FeCl2",
      "CoCl2",
      "FeCl3"
    ],
    "correct": 3,
    "solution": "FeCl3 + K4[Fe(CN)6] $\\to$ Fe4[Fe(CN)6]3 (Prussian blue)",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 344,
    "question": "To inhibit the growth of tumours, identify the compounds used from the following : A. EDTA B. Coordination Compounds of Pt C. D - Penicillamine D. Cis - Platin Choose the correct answer from the option given below :",
    "options": [
      "A and B Only",
      "C and D Only",
      "B and D Only",
      "A and C Only"
    ],
    "correct": 2,
    "solution": "Cis-platin is [Pt(NH$\\_3$)$\\_2$Cl$\\_2$]; cis platin and other complexes of pt are used to inhibit the growth of tumours.\n\n\n[!info]- Figure data (callout)\n- Description: [from stem]\n- Axes: [from stem]\n- Key points: [from stem]\n- Relations: [from stem]",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 345,
    "question": "The crystal field splitting energy for octahedral complex$\\left( \\Delta_{0} \\right)$ and that for tetrahedral complex$\\left( \\Delta_{t} \\right)$ are related as: $\\left( \\Delta_{t} \\right)$ ds fy, fLVy {ks=k foikVu fuEu izdkj lEcfU/kr",
    "options": [
      "$\\Delta_{t} = \\frac{4}{9}\\Delta_{0}$",
      "$\\Delta_{t} = 0.5\\Delta_{0}$",
      "$\\Delta_{t} = 0.33\\Delta_{0}$",
      "$\\Delta_{t} = \\frac{9}{4}\\Delta_{0}$"
    ],
    "correct": 0,
    "solution": "(A) This may attributes to the following two reasons.\n(i)There are only four ligands instead of six, so the ligand field is\nonly two thirds the size; as the ligand field splitting is also the\ntwo thirds the size and (ii) the direction of the orbitals does not\nconcide with the direction of the ligands. This reduces the crystal\nfield splitting by roughly further two third.\nSo$\\Delta_{1} = \\frac{2}{3} \\times \\frac{2}{3} = \\frac{4}{9}\\Delta_{0}$\ngy uEu nks dkj.kksa ls,slk gks ldrk gSaA\n(i) i) vkdkj\noy nks frgkbZ\nfrgkbZ gSaA (ii) fyxs.M lkFk lEikrh ugha\nblfy,\n$\\Delta_{1} = \\frac{2}{3} \\times \\frac{2}{3} = \\frac{4}{9}\\Delta_{0}$\n\n\n[!info]- Figure data (callout)\n- Description: [from stem]\n- Axes: [from stem]\n- Key points: [from stem]\n- Relations: [from stem]",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 346,
    "question": "Which statement is not true with respect to nitrate ion test?",
    "options": [
      "A dark brown ring is formed at the junction of two solutions.",
      "Ring is formed due to nitroferrous sulphate complex.",
      "The brown complex is [Fe(H2O)5 (NO)    ]SO4.",
      "Heating the nitrate salt with conc. H2SO4, light brown fumes are evolved."
    ],
    "correct": 1,
    "solution": "Brown ring test\n\n$\n\\begin{aligned}\n&\\mathrm{NO}_{3}^{-}+3 \\mathrm{Fe}^{+2}+4 \\mathrm{H}^{+} \\rightarrow \\mathrm{NO}+3 \\mathrm{Fe}^{+3}+2 \\mathrm{H}_{2} \\mathrm{O} \\\\\\\\\n&{\\left[\\mathrm{Fe}\\left(\\mathrm{H}_{2} \\mathrm{O}\\right)_{6}\\right]^{2+} \\mathrm{NO} \\rightarrow \\underset{\\text{Brown ring}}{\\left[\\mathrm{Fe}\\left(\\mathrm{H}_{2} \\mathrm{O}\\right)_{5} \\mathrm{NO}]^{2+} \\mathrm{H}_{2} \\mathrm{O}\\right.}}\n\\end{aligned}\n$",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 347,
    "question": "Correct formula of the compound which gives a white precipitate with BaCl2 solution, but not with AgNO3 solution, is :",
    "options": [
      "[Co(NH3)5Br    ]SO4",
      "[Co(NH3)5SO4    ]Br",
      "[Pt(NH3)4Cl2    ]Br2",
      "[Pt(NH3)4Br2    ]Cl2"
    ],
    "correct": 0,
    "solution": "Only the counter ions are replaced easily by other reagents. $\\left[\\mathrm{Co}\\left(\\mathrm{NH}_{3}\\right)_{5} \\mathrm{Br}\\right] \\mathrm{SO}_{4}+\\mathrm{BaCl}_{2} \\rightarrow\\left[\\mathrm{Co}\\left(\\mathrm{NH}_{3}\\right)_{5} \\mathrm{Br}\\right] \\mathrm{Cl}_{2}+\\underset{\\text{White ppt.}}{\\mathrm{BaSO}_{4}{\\downarrow}}$\n\nWhite ppt. It does not have chloride ion as counter ion so it will not give white ppt with$\\mathrm{AgNO}_{3}$.",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 348,
    "question": "$\\mathrm{Fe}^{3+}$ cation gives a prussian blue precipitate on addition of potassium ferrocyanide solution due to the formation of :",
    "options": [
      "$\\left[\\mathrm{Fe}\\left(\\mathrm{H}_{2} \\mathrm{O}\\right)_{6}\\right    ]_{2}\\left[\\mathrm{Fe}(\\mathrm{CN})_{6}\\right    ]$",
      "$\\mathrm{Fe}_{2}\\left[\\mathrm{Fe}(\\mathrm{CN})_{6}\\right    ]_{2}$",
      "$\\mathrm{Fe}_{3}\\left[\\mathrm{Fe}(\\mathrm{OH})_{2}(\\mathrm{CN})_{4}\\right    ]_{2}$",
      "$\\mathrm{Fe}_{4}\\left[\\mathrm{Fe}(\\mathrm{CN})_{6}\\right    ]_{3}$"
    ],
    "correct": 3,
    "solution": "$4 \\mathrm{Fe}^{3+}+3\\left[\\mathrm{Fe}(\\mathrm{CN})_6\\right]^{-4} \\longrightarrow\\underset{\\text{Prussian Blue}} {\\mathrm{Fe}_4\\left[\\mathrm{Fe}(\\mathrm{CN})_6\\right]_3}$",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 349,
    "question": "A solution of$\\mathrm{FeCl_3}$ when treated with$\\mathrm{K_4[Fe(CN)_6]}$ gives a prussium blue precipitate due to the formation of :",
    "options": [
      "$\\mathrm{Fe[Fe(CN)_{6}    ]}$",
      "$\\mathrm{Fe_{4}[Fe(CN)_{6}    ]_{3}}$",
      "$\\mathrm{Fe_{3}[Fe(CN)_{6}    ]_{2}}$",
      "$\\mathrm{K[Fe_{2}(CN)_{6}    ]}$"
    ],
    "correct": 1,
    "solution": "$\\mathrm{Fe}^{3+}+\\left[\\mathrm{Fe}(\\mathrm{CN})_{6}\\right]^{4-} \\longrightarrow \\mathrm{Fe}_{4}\\left[\\mathrm{Fe}(\\mathrm{CN})_{6}\\right]_{3}$(Prussium Blue)",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  }
  ,{
    "id": 350,
    "question": "The mismatched combinations are\nA. Chlorophyll - Co\nB. Water hardness - EDTA\nC. Photography$-\\left[\\mathrm{Ag}(\\mathrm{CN})_{2}\\right]^{-}$\nD. Wilkinson catalyst$-\\left[\\left(\\mathrm{Ph}_{3} \\mathrm{P}\\right)_{3} \\mathrm{RhCl}\\right]$\nE. Chelating ligand - D-Penicillamine\nChoose the correct answer from the options given below :",
    "options": [
      "A and E Only",
      "D and E Only",
      "A and C Only",
      "A, C, and E Only"
    ],
    "correct": 2,
    "solution": "Let's analyze each combination :\n\nA. Chlorophyll - Co : Mismatched. Chlorophyll has a magnesium (Mg) ion at its center, not cobalt (Co).\n\nB. Water hardness - EDTA : Correct match. EDTA (ethylenediaminetetraacetic acid) is used to treat water hardness by chelating metal ions like Ca$²$⁺ and Mg$²$⁺.\n\nC. Photography - [Ag(CN)₂]⁻ : Mismatched. Silver halides (AgX, where X = Cl, Br, I) are used in photography, not [Ag(CN)₂]⁻.\n\nD. Wilkinson catalyst - [(Ph₃P)₃RhCl] : Correct match. Wilkinson's catalyst is a homogeneous hydrogenation catalyst with the formula [(Ph₃P)₃RhCl].\n\nE. Chelating ligand - D-Penicillamine : Correct match. D-Penicillamine is a chelating agent that can bind to metal ions through multiple coordination sites.\n\nThe mismatched combinations are A and C. So, the correct answer is :\n\nA and C Only.",
    "chapter": "Chemistry",
    "topic": "Coordination Compounds"
  },
  {
    "id": 351,
    "question": "A ball whose kinetic energy E, is projected at an angle of$45^\\circ$ to the horizontal. The kinetic energy of the ball at the highest point of its height will be",
    "options": ["E", "${E \\over {\\sqrt{2} }}$", "${E \\over 2}$", "zero"],
    "correct": 2,
    "solution": "> Assume the ball of mass m is projected with a speed u. Then the kinetic energy(E) at the point of projection = ${1 \\over 2}m{u\\^2}$ At highest point of flight only horizontal component of velocity$u\\cos \\theta$ present as at highest point vertical component of velocity is = 0. Note : The horizontal component of velocity does not change in entire projectile motion. At highest point the velocity is = $u\\cos \\theta$ = $u\\cos 45^\\circ$ = ${u \\over {\\sqrt{2} }} \\therefore$ The kinetic energy at the height point = ${1 \\over 2}m{\\left( {{u \\over {\\sqrt{2} }}} \\right)\\^2}$ = ${1 \\over 2}m{u\\^2} \\times {1 \\over 2}$ = ${E \\over 2}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work Power and Energy"
  },
  {
    "id": 352,
    "question": "If a body looses half of its velocity on penetrating$3 cm$ in a wooden block, then how much will it penetrate more before coming to rest?",
    "options": ["$1$ $cm$", "$2$ $cm$", "$3$ $cm$", "$4$ $cm$"],
    "correct": 0,
    "solution": "> We know the work energy theorem, $W = \\Delta K = FS$ For first penetration, by applying work energy theorem we get, ${1 \\over 2}m{v\\^2} - {1 \\over 2}m{\\left( {{v \\over 2}} \\right)\\^2} = F \\times 3\\,\\,...(i)$ For second penetration, by applying work energy theorem we get, ${1 \\over 2}m{\\left( {{v \\over 2}} \\right)\\^2} - 0 = F \\times S\\,...(ii)$ On dividing$(ii)$ by$(i) {{1/4} \\over {3/4}} = S/3 \\therefore S = 1\\,cm$",
    "chapter": "Work, Power and Energy",
    "topic": "Work Power and Energy"
  },
  {
    "id": 353,
    "question": "A wire suspended vertically from one of its ends is stretched by attaching a weight of$200N$ to the lower end. The weight stretches the wire by$1 mm.$ Then the elastic energy stored in the wire is",
    "options": ["$0.2$ $J$", "$10$ $J$", "$20$ $J$", "$0.1$ $J$"],
    "correct": 3,
    "solution": "> The elastic potential energy$ = {1 \\over 2} \\times$ Force$ \\times$ extension$= {1 \\over 2} \\times 200 \\times 0.001 = 0.1\\,J$",
    "chapter": "Work, Power and Energy",
    "topic": "Work Power and Energy"
  },
  {
    "id": 354,
    "question": "A particle moves in a straight line with retardation proportional to its displacement. Its loss of kinetic energy for any displacement$x$ is proportional to",
    "options": ["$x$", "${e\\^x}$", "${x\\^2}$", "${\\log \\_e}x$"],
    "correct": 2,
    "solution": "> Given that, retardation$ \\propto$ displacement$ \\Rightarrow  a=-kx$ But we know$a = v{{dv} \\over {dx}}\\,\\,\\,\\,\\,\\,\\,\\,\\, \\therefore {{vdv} \\over {dx}} = - kx  \\Rightarrow \\int\\limits_{{v\\_1}}^{{v\\_2}} v \\,dv = - k\\int\\limits\\_0\\^x {xdx}  \\left( {v\\_2\\^2 - v\\_1\\^2} \\right) = - k{{{x\\^2}} \\over 2}  \\Rightarrow {1 \\over 2}m\\left( {v\\_2\\^2 - v\\_1\\^2} \\right) = {1 \\over 2}mk\\left( {{{ - x\\^2} \\over 2}} \\right) \\therefore$ Loss in kinetic energy is proportional to${x\\^2}$. $\\therefore \\Delta K \\propto {x\\^2}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work Power and Energy"
  },
  {
    "id": 355,
    "question": "A uniform chain of length$2 m$ is kept on a table such that a length of$60 cm$ hangs freely from the edge of the table. The total mass of the chain is$4 kg.$ What is the work done in pulling the entire chain on the table?",
    "options": ["$12$ $J$", "$3.6$ $J$", "$7.2$ $J$", "$1200$ $J$"],
    "correct": 1,
    "solution": "> Mass of hanging part$(m') = {4 \\over 2} \\times \\left( {0.6} \\right)kg$ = 1.2 kg Let at the surface$PE=0$ Center of mass of hanging part$=0.3 m$ below the surface of the table${U\\_i} = - m'gx = - 1.2 \\times 10 \\times 0.30$ = - 3.6 J$\\Delta U = m'gx = 3.6 J = $ Work done in putting the entire chain on the table.",
    "chapter": "Work, Power and Energy",
    "topic": "Work Power and Energy"
  },
  {
    "id": 356,
    "question": "A particle is acted upon by a force of constant magnitude which is always perpendicular to the velocity of the particle, the motion of the particles takes place in a plane. It follows that",
    "options": ["its kinetic energy is constant", "is acceleration is constant", "its velocity is constant", "it moves in a straight line"],
    "correct": 0,
    "solution": "> Work done by such force is always zero when a force of constant magnitude always at right angle to the velocity of a particle when the motion of the particle takes place in a plane. $\\therefore$ From work-energy theorem, $ \\Delta K = 0$ $\\therefore$ $K$ remains constant.",
    "chapter": "Work, Power and Energy",
    "topic": "Work Power and Energy"
  },
  {
    "id": 357,
    "question": "A boy is rolling a 0.5 kg ball on the frictionless floor with the speed of 20 ms-1. The ball gets deflected by an obstacle on the way. After deflection it moves with 5% of its initial kinetic energy. What is the speed of the ball now?",
    "options": ["14.41 ms$-$1", "19.0 ms$-$1", "4.47 ms$-$1", "1.00 ms$-$1"],
    "correct": 2,
    "solution": "> $K.E{._f} = 5\\% \\,K{E_i}${1 \\over 2}m{v^2} = {5 \\over {100}} \\times {1 \\over 2} \\times m \\times {20^2}${v^2} = {1 \\over {20}} \\times {20^2} = 20 v = \\sqrt {20}  = 2\\sqrt 5$ m/s= 4.47 m/s",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 358,
    "question": "A block moving horizontally on a smooth surface with a speed of 40 m/s splits into two parts with masses in the ratio of 1 : 2. If the smaller part moves at 60 m/s in the same direction, then the fractional change in kinetic energy is :-",
    "options": ["${{1 \\over 3}}$", "${{2 \\over 3}}$", "${{1 \\over 8}}$", "${{1 \\over 4}}$"],
    "correct": 2,
    "solution": "> 3MV0 = 2MV2 + MV13V0 = 2V2 + V1120 = 2V2 + 60$\\Rightarrow$ V2 = 30 m/s${{\\Delta K.E.} \\over {K.E.}} = {{{1 \\over 2}MV_1^2 + {1 \\over 2}2MV_2^2 - {1 \\over 2}3MV_0^2} \\over {{1 \\over 2}3MV_0^2}}$ = {{V_1^2 + 2V_2^2 - 3V_0^2} \\over {3V_0^2}}$ = {{3600 + 1800 - 4800} \\over {4800}} = {1 \\over 8}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 359,
    "question": "A particle of mass 500 gm is moving in a straight line with velocity v = b x5/2. The work done by the net force during its displacement from x = 0 to x = 4 m is : (Take b = 0.25 m$-$3/2 s$-$1).",
    "options": ["2 J", "4 J", "8 J", "16 J"],
    "correct": 3,
    "solution": "> ${W_{total}} = \\Delta K$\n> $ = {1 \\over 2}\\left( {{1 \\over 2}} \\right)\\left[ {{{\\{ b{{(4)}^{5/2}}\\} }^2} - 0} \\right]$\n> $ = {{{b^2}} \\over 4} \\times {4^5}$\n> $ \\Rightarrow {W_{total}} = 16\\,J$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 360,
    "question": "A body of mass$0.5 \\mathrm{~kg}$ travels on straight line path with velocity$v=\\left(3 x^{2}+4\\right) \\mathrm{m} / \\mathrm{s}$. The net workdone by the force during its displacement from$x=0$ to$x=2 \\mathrm{~m}$ is :",
    "options": ["64 J", "60 J", "120 J", "128 J"],
    "correct": 1,
    "solution": "> $v = 3{x^2} + 4$\n> at$x = 0$, ${v_1} = 4$ m/s\n> $x = 2$, ${v_2} = 16$ m/s\n> $\\Rightarrow$ Work done = $\\Delta$ kinetic energy\n> $ = {1 \\over 2} \\times m\\left( {v_2^2 - v_1^2} \\right)$\n> $ = {1 \\over 4}(256 - 16)$\n> $ = 60$ J",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 361,
    "question": "A bag of sand of mass 9.8 kg is suspended by a rope. A bullet of 200 g travelling with speed 10 ms$-$1 gets embedded in it, then loss of kinetic energy will be :",
    "options": ["4.9 J", "9.8 J", "14.7 J", "19.6 J"],
    "correct": 1,
    "solution": "> Loss in$KE = {1 \\over 2} \\times {{{m_1}{m_2}} \\over {{m_1} + {m_2}}} \\times {v^2}$\n> $ = {1 \\over 2} \\times {{9.8 \\times 0.2} \\over {10}} \\times {(10)^2}$\n> $= 9.8$ J",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 362,
    "question": "A ball is projected with kinetic energy E, at an angle of$60^{\\circ}$ to the horizontal. The kinetic energy of this ball at the highest point of its flight will become :",
    "options": ["Zero", "$\\frac{E}{2}$", "$\\frac{E}{4}$", "E"],
    "correct": 2,
    "solution": "> $K.E. = E = {1 \\over 2}m{v^2}$\n> at highest point\n> $K.E' = {1 \\over 2}m{v^2}{\\cos ^2}\\theta$\n> $ = {1 \\over 2}m{v^2}\\left( {{1 \\over 4}} \\right)$\n> $ = {E \\over 4}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 363,
    "question": "A stone is projected at angle$30^{\\circ}$ to the horizontal. The ratio of kinetic energy of the stone at point of projection to its kinetic energy at the highest point of flight will be -",
    "options": ["1 : 4", "1 : 2", "4 : 3", "4 : 1"],
    "correct": 2,
    "solution": "> $\n> \\mathrm{KE}_{\\mathrm{in}}=\\frac{1}{2} m v^{2}\n> $\n> $\\mathrm{KE}_{\\text {final }}=\\frac{1}{2} m v^{2} \\cos ^{2} 30^{\\circ}=\\frac{1}{2} m v^{2}\\left(\\frac{\\sqrt{3}}{2}\\right)^{2}$\n>\n> $\\frac{\\mathrm{KE}_{\\mathrm{in}}}{\\mathrm{KE}_{\\mathrm{f}}}=\\frac{\\frac{1}{2} m v^{2}}{\\frac{1}{2} m v^{2}\\left(\\frac{3}{4}\\right)}=\\frac{4}{3}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 364,
    "question": "Two bodies are having kinetic energies in the ratio 16 : 9. If they have same linear momentum, the ratio of their masses respectively is :",
    "options": ["$3: 4$", "$4: 3$", "$9: 16$", "$16: 9$"],
    "correct": 2,
    "solution": "> The kinetic energy of a body of mass$m$ and velocity$v$ is given by$K=\\frac{1}{2}mv^2$. Since the bodies have the same linear momentum, we can write:\n>\n> $p=mv$\n>\n> where$p$ is the linear momentum of the bodies.\n>\n> Let the masses of the two bodies be$m_1$ and$m_2$ and their kinetic energies be$K_1$ and$K_2$, respectively. Then, we have:\n>\n> $\\frac{K_1}{K_2}=\\frac{16}{9}$\n>\n> $\\frac{1}{2}m_1v_1^2\\div\\frac{1}{2}m_2v_2^2=\\frac{16}{9}$\n>\n> Since$p=mv$, we have$v_1=\\frac{p}{m_1}$ and$v_2=\\frac{p}{m_2}$. Substituting these in the above equation, we get:\n>\n> $\\frac{m_2}{m_1}=\\frac{9}{16}$\n>\n> Therefore, the ratio of the masses of the two bodies is$\\boxed{9:16}$.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 365,
    "question": "Given below are two statements:\nStatement I : A truck and a car moving with same kinetic energy are brought to rest by applying breaks which provide equal retarding forces. Both come to rest in equal distance.\nStatement II : A car moving towards east takes a turn and moves towards north, the speed remains unchanged. The acceleration of the car is zero.\nIn the light of given statements, choose the most appropriate answer from the options given below",
    "options": ["Statement I is incorrect but Statement II is correct.", "Statement$\\mathrm{I}$ is correct but Statement II is incorrect.", "Both Statement I and Statement II are correct.", "Both Statement I and Statement II are incorrect."],
    "correct": 1,
    "solution": "> Statement I is correct: The kinetic energy of an object is given by$\\frac{1}{2}mv^2$, where m is the mass of the object and v is its velocity. If a truck and a car are moving with the same kinetic energy and are brought to rest by applying brakes that provide equal retarding forces, both will come to rest in equal distances. This is because the distance required to stop an object depends on its initial kinetic energy and the force applied to bring it to rest. Since both the truck and car have the same initial kinetic energy and are subjected to the same retarding force, they will come to rest in the same distance.\n>\n> Statement II is incorrect. When the car moves from east to north, even though its speed remains unchanged, its direction changes. Since velocity is a vector quantity that has both magnitude (speed) and direction, a change in direction implies a change in velocity. Acceleration is the rate of change of velocity, so when the velocity changes, there is acceleration. In this case, the car's acceleration is not zero as it turns from east to north.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 366,
    "question": "A bullet is fired into a fixed target looses one third of its velocity after travelling$4 \\mathrm{~cm}$. It penetrates further$\\mathrm{D} \\times 10^{-3} \\mathrm{~m}$ before coming to rest. The value of$\\mathrm{D}$ is :",
    "options": ["23", "32", "42", "52"],
    "correct": 1,
    "solution": "> $\\begin{aligned}\n> & v^2-u^2=2 a S \\\\\n> & \\left(\\frac{2 u}{3}\\right)^2=u^2+2(-a)\\left(4 \\times 10^{-2}\\right) \\\\\n> & \\frac{4 u^2}{9}=u^2-2 a\\left(4 \\times 10^{-2}\\right) \\\\\n> & -\\frac{5 u^2}{9}=-2 a\\left(4 \\times 10^{-2}\\right) \\ldots(1) \\\\\n> & 0=\\left(\\frac{2 u}{3}\\right)^2+2(-a)(x) \\\\\n> & -\\frac{4 u^2}{9}=-2 a x \\ldots(2)\n> \\end{aligned}$\n> $(1)/(2)$\n> $\\begin{aligned}\n> & \\frac{5}{4}=\\frac{4 \\times 10^{-2}}{\\mathrm{x}} \\\\\n> & \\mathrm{x}=\\frac{16}{5} \\times 10^{-2} \\\\\n> & \\mathrm{x}=3 \\cdot 2 \\times 10^{-2} \\mathrm{~m} \\\\\n> & \\mathrm{x}=32 \\times 10^{-3} \\mathrm{~m}\n> \\end{aligned}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 367,
    "question": "The potential energy function (in$J$ ) of a particle in a region of space is given as$U=\\left(2 x^2+3 y^3+2 z\\right)$. Here$x, y$ and$z$ are in meter. The magnitude of$x$-component of force (in$N$ ) acting on the particle at point$P(1,2,3) \\mathrm{m}$ is :",
    "options": ["4", "2", "8", "6"],
    "correct": 0,
    "solution": "> $\\begin{aligned}\n> & \\text { Given } U=2 x^2+3 y^3+2 z \\\\\n> & F_x=-\\frac{\\partial U}{\\partial x}=-4 x\n> \\end{aligned}$\n> At$x=1$ magnitude of$F_x$ is$4 N$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 368,
    "question": "If a rubber ball falls from a height$h$ and rebounds upto the height of$h / 2$. The percentage loss of total energy of the initial system as well as velocity ball before it strikes the ground, respectively, are :",
    "options": ["$50 \\%, \\sqrt{2 \\mathrm{gh}}$", "$50 \\%, \\sqrt{\\mathrm{gh}}$", "$50 \\%, \\sqrt{\\frac{\\text { gh }}{2}}$", "$40 \\%, \\sqrt{2 \\mathrm{gh}}$"],
    "correct": 0,
    "solution": "> To solve this problem, we need to analyze both the energy loss and the initial velocity of the rubber ball before it strikes the ground.\n>\n> First, let's consider the energy loss. The energy involved here is gravitational potential energy. The initial potential energy of the ball when it is about to fall is given by$U_i = mgh$, where$U_i$ is the initial potential energy, $m$ is the mass of the ball, $g$ is the acceleration due to gravity, and$h$ is the initial height from which the ball falls. After the ball rebounds, it reaches a height of$h/2$. The potential energy at this new height is$U_f = mg \\cdot \\frac{h}{2}$.\n>\n> The energy loss can be calculated as the difference between the initial and final potential energies, and to find the percentage energy loss, we divide this difference by the initial energy and multiply by 100:\n>\n> $\\text{Energy loss percentage} = \\frac{(U_i - U_f)}{U_i} \\times 100$\n>\n> Substituting the values of$U_i$ and$U_f$ gives:\n>\n> $\\text{Energy loss percentage} = \\frac{(mgh - mg\\frac{h}{2})}{mgh} \\times 100$\n>\n> By simplifying, we find:\n>\n> $\\text{Energy loss percentage} = \\frac{mgh - \\frac{1}{2} mgh}{mgh} \\times 100 = \\frac{1}{2} \\times 100 = 50\\%$\n>\n> This tells us that the energy loss percentage is indeed$50\\%$.\n>\n> Next, we'll find the velocity of the ball just before it strikes the ground. The velocity can be determined using the formula for the velocity of an object in free fall:\n>\n> $v = \\sqrt{2gh}$\n>\n> Here, $v$ is the velocity of the ball just before impact, $g$ is the acceleration due to gravity, and$h$ is the height from which the ball falls. This formula shows that the initial velocity of the ball before it strikes the ground is$\\sqrt{2gh}$, not taking into account air resistance and assuming it starts from rest.\n>\n> Therefore, the correct answer is Option A: $50\\%$, $\\sqrt{2gh}$.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 369,
    "question": "When kinetic energy of a body becomes 36 times of its original value, the percentage increase in the momentum of the body will be :",
    "options": ["60%", "500%", "6%", "600%"],
    "correct": 1,
    "solution": "> The relationship between kinetic energy (K.E) and momentum (p) of a body can be expressed through their respective definitions. Kinetic energy is given by$K.E = \\frac{1}{2} mv^2$ where$m$ is the mass of the body and$v$ is its velocity. The momentum (p) of a body is given by$p = mv$. To express kinetic energy in terms of momentum, we can manipulate the expression for momentum as follows:\n>\n> $p = mv \\implies v = \\frac{p}{m}$\n>\n> Substituting$v$ in the kinetic energy formula, we get\n>\n> $K.E = \\frac{1}{2} m\\left(\\frac{p}{m}\\right)^2 = \\frac{1}{2} \\frac{p^2}{m}$\n>\n> Therefore, we see that kinetic energy is directly proportional to the square of the momentum$(K.E \\propto p^2)$.\n>\n> Now, given that the kinetic energy of a body becomes 36 times its original value, we can set up the proportionality as\n>\n> $\\frac{K.E_{\\text{final}}}{K.E_{\\text{original}}} = 36$\n>\n> Since$K.E_{\\text{final}} = 36 \\times K.E_{\\text{original}}$ and knowing$K.E \\propto p^2$, we can express this relationship through the squares of the initial and final momentum:\n>\n> $\\frac{p_{\\text{final}}^2}{p_{\\text{original}}^2} = 36$\n>\n> Taking the square root of both sides to find the ratio of final to initial momentum, we have\n>\n> $\\frac{p_{\\text{final}}}{p_{\\text{original}}} = \\sqrt{36} = 6$\n>\n> This indicates that the final momentum is 6 times the original momentum. To find the percentage increase in the momentum, we calculate the increase from the original to the final, subtracting the original momentum (which is considered 1 times itself):\n>\n> $\\text{Percentage increase} = \\left(\\frac{p_{\\text{final}} - p_{\\text{original}}}{p_{\\text{original}}}\\right) \\times 100\\% = \\left(\\frac{6p - p}{p}\\right) \\times 100\\% \n> = \\left(6 - 1\\right) \\times 100\\% = 5 \\times 100\\% = 500\\%$\n>\n> Therefore, the correct answer is Option B: 500%.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 370,
    "question": "A bullet of mass$50 \\mathrm{~g}$ is fired with a speed$100 \\mathrm{~m} / \\mathrm{s}$ on a plywood and emerges with$40 \\mathrm{~m} / \\mathrm{s}$. The percentage loss of kinetic energy is :",
    "options": ["$44 \\%$", "$16 \\%$", "$84 \\%$", "$32 \\%$"],
    "correct": 2,
    "solution": "> To find the percentage loss of kinetic energy of the bullet, we first calculate the initial kinetic energy before the bullet hits the plywood and the final kinetic energy after it emerges. The formula for kinetic energy (KE) is given by:\n>\n> $KE = \\frac{1}{2} mv^2$\n>\n> where$m$ is the mass of the object and$v$ is its velocity.\n>\n> Let's calculate the initial and final kinetic energies.\n>\n> Initial Kinetic Energy:\n>\n> $KE_{\\text{initial}} = \\frac{1}{2} \\times 50 \\times (100)^2 = \\frac{1}{2} \\times 50 \\times 10000 = 25 \\times 10000 = 250000 \\, \\text{g.m}^2/\\text{s}^2$\n>\n> Note: To keep units consistent, we used grams and meters per second. We can also convert the mass to kilograms (by dividing by 1000) which would result in the energy being calculated in Joules, but for the purpose of finding the percentage change, the form of units does not matter as long as they are consistent, since it will be a ratio.\n>\n> Final Kinetic Energy:\n>\n> $KE_{\\text{final}} = \\frac{1}{2} \\times 50 \\times (40)^2 = \\frac{1}{2} \\times 50 \\times 1600 = 25 \\times 1600 = 40000 \\, \\text{g.m}^2/\\text{s}^2$\n>\n> The loss of kinetic energy is then:\n>\n> $\\Delta KE = KE_{\\text{initial}} - KE_{\\text{final}} = 250000 - 40000 = 210000 \\, \\text{g.m}^2/\\text{s}^2$\n>\n> Finally, the percentage loss of kinetic energy can be calculated using the formula:\n>\n> $\\text{Percentage loss of KE} = \\left( \\frac{\\Delta KE}{KE_{\\text{initial}}} \\right) \\times 100\\%$\n>\n> $\\text{Percentage loss of KE} = \\left( \\frac{210000}{250000} \\right) \\times 100\\% = 0.84 \\times 100\\% = 84\\%$\n>\n> Thus, the percentage loss of kinetic energy is 84%, which corresponds to Option C.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 371,
    "question": "Four particles$A, B, C, D$ of mass$\\frac{m}{2}, m, 2 m, 4 m$, have same momentum, respectively. The particle with maximum kinetic energy is :",
    "options": ["B", "C", "D", "A"],
    "correct": 3,
    "solution": "> The momentum$p$ of a particle is given by the product of its mass$m$ and its velocity$v$, that is, $p = m \\cdot v$. For a given momentum, the relationship between mass and velocity can be understood as inversely proportional. This means that as the mass increases, the velocity decreases to maintain the same momentum, and vice versa.\n>\n> The kinetic energy ($K.E.$) of a particle is given by the formula$K.E. = \\frac{1}{2} m v^2$. This equation shows that the kinetic energy depends on both the mass of the particle and the square of its velocity.\n>\n> Given that four particles$A, B, C, D$ have masses$\\frac{m}{2}, m, 2 m, 4 m$, respectively, and all have the same momentum, we can assume the momentum of each particle to be$p$. This common value of momentum allows us to express the velocity of each particle in terms of its mass and the common momentum$p$. The velocity$v$ of each particle will be$v = \\frac{p}{m}$.\n>\n> Thus, for each particle, we can determine the velocity as follows:\n>\n>\n> For$A$: $v_A = \\frac{p}{\\frac{m}{2}} = \\frac{2p}{m}$\n> For$B$: $v_B = \\frac{p}{m}$\n> For$C$: $v_C = \\frac{p}{2m} = \\frac{p}{2m}$\n> For$D$: $v_D = \\frac{p}{4m}$\n>\n> Now, substituting these velocities into the kinetic energy formula yields the kinetic energies for each particle:\n>\n>\n> $K.E._A = \\frac{1}{2} \\cdot \\frac{m}{2} \\cdot \\left(\\frac{2p}{m}\\right)^2 =  \\frac{1}{2} \\cdot \\frac{m}{2} \\cdot \\frac{4p^2}{m^2} = \\frac{2p^2}{m}$\n> $K.E._B = \\frac{1}{2} \\cdot m \\cdot \\left(\\frac{p}{m}\\right)^2 = \\frac{1}{2} \\cdot m \\cdot \\frac{p^2}{m^2} = \\frac{p^2}{2m}$\n> $K.E._C = \\frac{1}{2} \\cdot 2m \\cdot \\left(\\frac{p}{2m}\\right)^2 = \\frac{1}{2} \\cdot 2m \\cdot \\frac{p^2}{4m^2} = \\frac{p^2}{4m}$\n> $K.E._D = \\frac{1}{2} \\cdot 4m \\cdot \\left(\\frac{p}{4m}\\right)^2 = \\frac{1}{2} \\cdot 4m \\cdot \\frac{p^2}{16m^2} = \\frac{p^2}{8m}$\n>\n> Comparing these kinetic energies, we see that the particle$A$ has the maximum kinetic energy, as it is inversely related to mass in this scenario, and$A$ has the least mass but the highest velocity squared component, thus maximizing its kinetic energy. Therefore, the correct answer is:\n>\n> Option D: A",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 372,
    "question": "A constant power delivering machine has towed a box, which was initially at rest, along a horizontal straight line. The distance moved by the box in time 't' is proportional to :-",
    "options": ["t2/3", "t3/2", "t", "t1/2"],
    "correct": 1,
    "solution": "> $P = F.v = mav$P = {{mvdv} \\over {dt}}$\\int\\limits_0^t {Pdt}  = m\\int\\limits_0^v {vdv}$Pt = {{m{v^2}} \\over 2}$v = \\sqrt {{{2Pt} \\over m}}${{dx} \\over {dt}} = \\sqrt {{{2Pt} \\over m}}$\\int {dx}  = \\int {\\sqrt {{{2Pt} \\over m}} } dt x \\propto {t^{3/2}}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 373,
    "question": "A body at rest is moved along a horizontal straight line by a machine delivering a constant power. The distance moved by the body in time 't' is proportional to :",
    "options": ["${t^{{3 \\over 2}}}$", "${t^{{1 \\over 2}}}$", "${t^{{1 \\over 4}}}$", "${t^{{3 \\over 4}}}$"],
    "correct": 0,
    "solution": "> P = constant${1 \\over 2}$mv2 = Pt$\\Rightarrow$ v$\\propto \\sqrt t${{dx} \\over {dt}} = C\\sqrt t$ [C = constant]by integration.$x = C{{{t^{{1 \\over 2} + 1}}} \\over {{1 \\over 2} + 1}}$x \\propto {t^{3/2}}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 374,
    "question": "An automobile of mass 'm' accelerates starting from origin and initially at rest, while the engine supplies constant power P. The position is given as a function of time by :",
    "options": ["${\\left( {{{9P} \\over {8m}}} \\right)^{{1 \\over 2}}}{t^{{3 \\over 2}}}$", "${\\left( {{{8P} \\over {9m}}} \\right)^{{1 \\over 2}}}{t^{{2 \\over 3}}}$", "${\\left( {{{9m} \\over {8P}}} \\right)^{{1 \\over 2}}}{t^{{3 \\over 2}}}$", "${\\left( {{{8P} \\over {9m}}} \\right)^{{1 \\over 2}}}{t^{{3 \\over 2}}}$"],
    "correct": 3,
    "solution": "> P = const.$P = Fv = {{m{v^2}dv} \\over {dx}}$\\int\\limits_0^x {{P \\over m}dx}  = \\int\\limits_0^v {{v^2}dv}${{Px} \\over m} = {{{v^3}} \\over 3}${\\left( {{{3Px} \\over m}} \\right)^{1/3}} = v = {{dx} \\over {dt}}${\\left( {{{3P} \\over m}} \\right)^{1/3}}\\int\\limits_0^t {dt}  = \\int\\limits_0^x {{x^{ - 1/3}}} dx  \\Rightarrow x = {\\left( {{{8P} \\over {9m}}} \\right)^{1/2}}{t^{3/2}}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 375,
    "question": "Sand is being dropped from a stationary dropper at a rate of$0.5 \\,\\mathrm{kgs}^{-1}$ on a conveyor belt moving with a velocity of$5 \\mathrm{~ms}^{-1}$. The power needed to keep the belt moving with the same velocity will be :",
    "options": ["1.25 W", "2.5 W", "6.25 W", "12.5 W"],
    "correct": 3,
    "solution": "> ${{dm} \\over {dt}} = 0.5$ kg/s\n> $v = 5$ m/s\n> $F = {{vdm} \\over {dt}} = 2.5$ kg m/s2\n> $P = \\overline F \\,.\\,\\overline v  = (2.5)(5)$ W\n> $ = 12.5$ W",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 376,
    "question": "The ratio of powers of two motors is$\\frac{3 \\sqrt{x}}{\\sqrt{x}+1}$, that are capable of raising$300 \\mathrm{~kg}$ water in 5 minutes and$50 \\mathrm{~kg}$ water in 2 minutes respectively from a well of$100 \\mathrm{~m}$ deep. The value of$x$ will be",
    "options": ["16", "4", "2", "2.4"],
    "correct": 0,
    "solution": "> Let us first find the power required to lift the water using each motor. Let$P_1$ be the power of the first motor, and$P_2$ be the power of the second motor.\n>\n> The work done in lifting the water is given by$W = mgh$, where$m$ is the mass of water lifted, $g$ is the acceleration due to gravity, and$h$ is the height through which the water is lifted. In this case, $m = 300\\mathrm{~kg}$ and$h = 100\\mathrm{~m}$ for the first motor, and$m = 50\\mathrm{~kg}$ and$h = 100\\mathrm{~m}$ for the second motor.\n>\n> The work done in lifting the water in 5 minutes by the first motor is:\n> $W_1 = mgh = (300\\mathrm{~kg})(9.8\\mathrm{~m/s^2})(100\\mathrm{~m}) = 294000\\mathrm{~J}$\n>\n> The power required to do this work in 5 minutes is:\n> $P_1 = \\frac{W_1}{t_1} = \\frac{294000\\mathrm{~J}}{300\\mathrm{~s}} = 980\\mathrm{~W}$\n>\n> The work done in lifting the water in 2 minutes by the second motor is:\n> $W_2 = mgh = (50\\mathrm{~kg})(9.8\\mathrm{~m/s^2})(100\\mathrm{~m}) = 49000\\mathrm{~J}$\n>\n> The power required to do this work in 2 minutes is:\n> $P_2 = \\frac{W_2}{t_2} = \\frac{49000\\mathrm{~J}}{120\\mathrm{~s}} = 408.33\\mathrm{~W}$\n>\n> The ratio of the powers of the two motors is:\n> $\\frac{P_1}{P_2} = \\frac{980\\mathrm{~W}}{408.33\\mathrm{~W}} \\approx 2.4$\n>\n> We are given that this ratio is equal to:\n> $\\frac{3 \\sqrt{x}}{\\sqrt{x}+1}$\n>\n> We can solve for$x$ as follows:\n> $\\frac{3 \\sqrt{x}}{\\sqrt{x}+1} = 2.4$\n> $3\\sqrt{x} = 2.4(\\sqrt{x}+1)$\n> $3\\sqrt{x} = 2.4\\sqrt{x} + 2.4$\n> $(3-2.4)\\sqrt{x} = 2.4$\n> $0.6\\sqrt{x} = 2.4$\n> $\\sqrt{x} = 4$\n> $x = 16$\n> Therefore, the value of$x$ is 16.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 377,
    "question": "A body of mass$2 \\mathrm{~kg}$ begins to move under the action of a time dependent force given by$\\vec{F}=\\left(6 t \\hat{i}+6 t^2 \\hat{j}\\right) N$. The power developed by the force at the time$t$ is given by:",
    "options": ["$\\left(3 t^3+6 t^5\\right) W$", "$\\left(9 t^5+6 t^3\\right) W$", "$\\left(6 t^4+9 t^5\\right) W$", "$\\left(9 t^3+6 t^5\\right) W$"],
    "correct": 3,
    "solution": "> $\\begin{aligned}\n> & \\vec{F}=\\left(6 t \\hat{i}+6 t^2 \\hat{j}\\right) N \\\\\n> & \\vec{F}=m \\vec{a}=\\left(6 t \\hat{i}+6 t^2 \\hat{j}\\right) \\\\\n> & \\vec{a}=\\frac{\\vec{F}}{m}=\\left(3 t \\hat{i}+3 t^2 \\hat{j}\\right) \\\\\n> & \\vec{v}=\\int_\\limits0^t \\vec{a} d t=\\frac{3 t^2}{2} \\hat{i}+t^3 \\hat{j} \\\\\n> & P=\\vec{F} \\cdot \\vec{v}=\\left(9 t^3+6 t^5\\right) W\n> \\end{aligned}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 378,
    "question": "A body is moving unidirectionally under the influence of a constant power source. Its displacement in time t is proportional to :",
    "options": ["t2/3", "t3/2", "t", "t2"],
    "correct": 1,
    "solution": "> When a body moves under the influence of a constant power, the relationship between displacement and time can be established through the concept of power. Power (P) is defined as the rate at which work is done, and it can also be expressed in terms of force (F) and velocity (v) as$ P = F \\cdot v$.\n>\n> For a constant power P and assuming the force acts in the direction of the velocity, we can analyze how displacement (s) changes with time (t). Since force can also be written as$ F = \\frac{d(mv)}{dt}$ for a constant mass m, this simplifies to$ F = m \\frac{dv}{dt}$, because mass doesn't change with time for most cases. Integrating force over a distance gives work (W), and power is the rate of doing work, thus we can connect these concepts.\n>\n> The kinetic energy (K.E) of the body is given by$ K.E = \\frac{1}{2}mv^2$, and the work done by the force is equal to the change in kinetic energy. Considering power is constant, $ P = \\frac{dW}{dt} = \\frac{d(\\frac{1}{2}mv^2)}{dt}$. Rearranging terms to focus on velocity and integrating with respect to time will give us a relation involving velocity and time.\n>\n> For a constant mass system, and using$ P = F \\cdot v = m \\cdot a \\cdot v = m \\cdot \\frac{dv}{dt} \\cdot v$, and knowing that$ P = \\text{constant}$, we rearrange to find the relationship between velocity and time.\n>\n> Given$ P = m \\cdot v \\cdot \\frac{dv}{dt}$, we rearrange to$ \\frac{P}{m} dt = v dv$. Integrating both sides where the initial condition is when$ t = 0, v = 0$, we get$ \\frac{P}{m} t = \\frac{1}{2} v^2$, solving for$ v$ gives$ v \\propto t^{1/2}$, so$ v = k \\cdot t^{1/2}$ for some constant$ k$.\n>\n> The displacement$ s$ is obtained by integrating the velocity with respect to time, $ s = \\int v dt = \\int k \\cdot t^{1/2} dt = \\frac{2}{3}k \\cdot t^{3/2}$. Therefore, the displacement$ s$ is proportional to$ t^{3/2}$.\n>\n> The correct answer is Option B, $ t^{3/2}$.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 379,
    "question": "A porter lifts a heavy suitcase of mass 80 kg and at the destination lowers it down by a distance of 80 cm with a constant velocity. Calculate the work done by the porter in lowering the suitcase.(take g = 9.8 ms$-$2)",
    "options": ["+627.2 J", "$-$62720.0 J", "$-$627.2 J", "784.0 J"],
    "correct": 2,
    "solution": "> $W =  - N \\times \\Delta x$ =  - 80 \\times 9.8 \\times {{80} \\over {100}}$ =  - 627.2$ J",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
,
  {
    "id": 380,
    "question": "A body of mass 'm' dropped from a height 'h' reaches the ground with a speed of 0.8$\\sqrt {gh}$. The value of workdone by the air-friction is :",
    "options": ["$-$0.68 mgh", "mgh", "1.64 mgh", "0.64 mgh"],
    "correct": 0,
    "solution": "> Given, the mass of the body = mThe height from which the body dropped = hThe speed of the body when reached the ground, ${v_f} = 0.8\\sqrt {gh}$Initial velocity of the body, v = 0 m/sUsing the work-energy theorem,Work done by gravity + Work done by air-friction = Final kinetic energy$-$ Initial kinetic energy.${W_{mg}} + {W_{air - friction}} = {1 \\over 2}mv_f^2 - {1 \\over 2}mv_i^2$Here, work done by gravity = mgh$ \\Rightarrow mgh + {W_{air - friction}} = {1 \\over 2}m{(0.8\\sqrt {gh} )^2} - {1 \\over 2}m{(0)^2}$ \\Rightarrow {W_{air - friction}} = {{0.64mgh} \\over 2} - mgh$ \\Rightarrow 0.32mgh - mgh =  - 0.68mgh$The value of the work done by the air friction is$-$ 0.68 mgh.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 381,
    "question": "A particle experiences a variable force$\\overrightarrow F  = \\left( {4x\\widehat i + 3{y^2}\\widehat j} \\right)$ in a horizontal x-y plane. Assume distance in meters and force is newton. If the particle moves from point (1, 2) to point (2, 3) in the x-y plane, then Kinetic Energy changes by :",
    "options": ["50.0 J", "12.5 J", "25.0 J", "0 J"],
    "correct": 2,
    "solution": "> $W = \\int {\\overrightarrow F \\,.\\,d\\overrightarrow r }$\n> $ = \\int\\limits_1^2 {4xdx + \\int\\limits_2^3 {3{y^2}dy} }$\n> $ = [2{x^2}]_1^2 + [{y^3}]_2^3$\n> $ = 2 \\times 3 + (27 - 8)$\n> $ = 25$ J",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 382,
    "question": "Identify the correct statements from the following :\nA. Work done by a man in lifting a bucket out of a well by means of a rope tied to the bucket is negative.\nB. Work done by gravitational force in lifting a bucket out of a well by a rope tied to the bucket is negative.\nC. Work done by friction on a body sliding down an inclined plane is positive.\nD. Work done by an applied force on a body moving on a rough horizontal plane with uniform velocity is zero.\nE. Work done by the air resistance on an oscillating pendulum is negative.\nChoose the correct answer from the options given below :",
    "options": ["A and C only", "B and D only", "B, D and E only", "B and E only"],
    "correct": 3,
    "solution": "> When a man lifts a bucket out of a well using a rope, work is done by the man and the gravitational force. The work done by the man is positive as he has to exert an upward force to lift the bucket. The work done by the gravitational force is negative because the direction of the force is opposite to the direction of displacement.\n> Therefore, the statement (A) \"Work done by a man in lifting a bucket out of a well by means of rope tied to the bucket is negative.\" is incorrect.\n>\n> Therefore, the statement (B) \"Work done by gravitational force in lifting a bucket out of a well by a rope tied to the bucket is negative.\" is correct.\n>\n> Work is defined as the product of force and displacement in the direction of the force. When a body slides down an inclined plane, the force of friction acts against the motion of the body, opposing its descent.\n>\n> The direction of the force of friction is opposite to the direction of the displacement of the body, which is downwards. Hence, the work done by the force of friction is negative.\n>\n> Therefore, the statement (C) \"Work done by friction on a body sliding down an inclined plane is positive\" is incorrect.\n>\n> If the body is moving on a rough horizontal plane, there will be friction present, which will act in the opposite direction to the applied force. The force of friction will oppose the motion of the body, reducing its velocity. As a result, the net work done on the body will not be zero, as the force of friction and the applied force will not cancel each other out completely.\n>\n> Therefore, the statement (D) \"Work done by an applied force on a body moving on a rough horizontal plane with uniform velocity is zero.\" is incorrect.\n>\n> Statement E: \"Work done by the air resistance on an oscillating pendulum is negative.\"\n>\n> This statement refers to the work done by the air resistance on an oscillating pendulum, which is a physical system that swings back and forth under the influence of gravity.\n>\n> As the pendulum oscillates, it experiences air resistance, which opposes its motion and slows it down. The direction of the air resistance force is opposite to the direction of the displacement of the pendulum, which is back and forth.\n>\n> Hence, the work done by the air resistance force is negative, as the direction of the force and the displacement are opposite.\n>\n> Therefore, the statement (E) \"Work done by the air resistance on an oscillating pendulum is negative\" is correct.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 383,
    "question": "A bullet of mass$0.1 \\mathrm{~kg}$ moving horizontally with speed$400 \\mathrm{~ms}^{-1}$ hits a wooden block of mass$3.9 \\mathrm{~kg}$ kept on a horizontal rough surface. The bullet gets embedded into the block and moves$20 \\mathrm{~m}$ before coming to rest. The coefficient of friction between the block and the surface is __________.\n(Given$g=10 \\mathrm{~m} / \\mathrm{s}^{2}$ )",
    "options": ["0.65", "0.25", "0.50", "0.90"],
    "correct": 1,
    "solution": "> First, we will use conservation of momentum to find the velocity of the bullet-block system just after the bullet gets embedded into the block.\n> The initial momentum of the system is given by the momentum of the bullet (as the block is initially at rest), and the final momentum of the system is the combined momentum of the bullet and the block.\n> Setting initial momentum equal to final momentum:\n> $m_{\\text{bullet}} \\cdot v_{\\text{bullet}} = (m_{\\text{bullet}} + m_{\\text{block}}) \\cdot v_{\\text{final}}$\n> Solving for ($v_{\\text{final}}$):\n> $v_{\\text{final}} = \\frac{m_{\\text{bullet}} \\cdot v_{\\text{bullet}}}{m_{\\text{bullet}} + m_{\\text{block}}}$\n> Substituting the given values:\n> $v_{\\text{final}} = \\frac{0.1 \\, \\text{kg} \\cdot 400 \\, \\text{m/s}}{0.1 \\, \\text{kg} + 3.9 \\, \\text{kg}} = 10 \\, \\text{m/s}$\n> Next, we know the block comes to rest after moving 20 m due to friction. The work done by the friction force is equal to the initial kinetic energy of the block (since it comes to rest, the final kinetic energy is 0). The work done by friction is given by the friction force times the distance, and the friction force is equal to the coefficient of friction times the normal force (which is equal to the weight of the block). \n> So, setting the work done by friction equal to the initial kinetic energy of the block:\n> $\\mu \\cdot (m_{\\text{bullet}} + m_{\\text{block}}) \\cdot g \\cdot d = \\frac{1}{2} \\cdot (m_{\\text{bullet}} + m_{\\text{block}}) \\cdot v_{\\text{final}}^2$\n> Solving for ($\\mu$):\n> $\\mu = \\frac{\\frac{1}{2} \\cdot (m_{\\text{bullet}} + m_{\\text{block}}) \\cdot v_{\\text{final}}^2}{(m_{\\text{bullet}} + m_{\\text{block}}) \\cdot g \\cdot d}$\n> Substituting the given values:\n> $\\mu = \\frac{\\frac{1}{2} \\cdot (0.1 \\, \\text{kg} + 3.9 \\, \\text{kg}) \\cdot (10 \\, \\text{m/s})^2}{(0.1 \\, \\text{kg} + 3.9 \\, \\text{kg}) \\cdot 10 \\, \\text{m/s}^2 \\cdot 20 \\, \\text{m}} = 0.25$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 384,
    "question": "A block of mass$100 \\mathrm{~kg}$ slides over a distance of$10 \\mathrm{~m}$ on a horizontal surface. If the co-efficient of friction between the surfaces is 0.4, then the work done against friction$(\\operatorname{in} J$) is :",
    "options": ["3900", "4500", "4200", "4000"],
    "correct": 3,
    "solution": "> $\\begin{aligned}\n> & \\text { Given } \\mathrm{m}=100 \\mathrm{~kg} \\\\\n> & \\mathrm{~s}=10 \\mathrm{~m} \\\\\n> & \\mu=0.4 \\\\\n> & \\text { As } \\mathrm{f}=\\mu \\mathrm{mg}=0.4 \\times 100 \\times 10=400 \\mathrm{~N} \\\\\n> & \\text { Now } \\mathrm{W}=\\mathrm{f} . \\mathrm{s}=400 \\times 10=4000 \\mathrm{~J}\n> \\end{aligned}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 385,
    "question": "A particle of mass$m$ moves on a straight line with its velocity increasing with distance according to the equation$v=\\alpha \\sqrt{x}$, where$\\alpha$ is a constant. The total work done by all the forces applied on the particle during its displacement from$x=0$ to$x=\\mathrm{d}$, will be :",
    "options": ["$\\frac{\\mathrm{m}}{2 \\alpha^2 \\mathrm{~d}}$", "$\\frac{\\mathrm{md}}{2 \\alpha^2}$", "$\\frac{\\mathrm{m} \\alpha^2 \\mathrm{~d}}{2}$", "$2 \\mathrm{~m} \\alpha^2 \\mathrm{~d}$"],
    "correct": 2,
    "solution": "> To find the total work done by all forces applied on the particle during its displacement, we can use the work-energy theorem which states that the work done by all forces on an object is equal to the change in kinetic energy of the object. So, we first need to find the initial and final kinetic energies of the particle and then calculate the work done.\n>\n> The velocity of the particle is given by$v = \\alpha \\sqrt{x}$,\n>\n> and the kinetic energy$K$ of the particle is given by$K = \\frac{1}{2} m v^2$. We can substitute the expression for$v$ into this formula to get the kinetic energy as a function of position$x$:\n>\n> $K(x) = \\frac{1}{2} m (\\alpha \\sqrt{x})^2 = \\frac{1}{2} m \\alpha^2 x$\n>\n> To find the total work done from$x = 0$ to$x = d$, we need to compute the difference in kinetic energy between these two points:\n>\n> $W = K(d) - K(0)$\n>\n> At$x = d$,\n>\n> $K(d) = \\frac{1}{2} m \\alpha^2 d$\n>\n> At$x = 0$, since the particle starts from this position,\n>\n> $K(0) = \\frac{1}{2} m \\alpha^2 (0) = 0$\n>\n> So, the work done$W$ is simply the kinetic energy at$x = d$,\n>\n> $W = \\frac{1}{2} m \\alpha^2 d - 0 = \\frac{1}{2} m \\alpha^2 d$\n>\n> This matches with Option C:\n>\n> $\\frac{m \\alpha^2 d}{2}$.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 386,
    "question": "A bullet fired into a fixed target loses half of its velocity after penetrating$3 cm.$ How much further it will penetrate before coming to rest assuming that it faces constant resistance to motion?",
    "options": ["$2.0$ $cm$", "$3.0$ $cm$", "$1.0$ $cm$", "$1.5$ $cm$"],
    "correct": 2,
    "solution": "> Let$K$ be the initial kinetic energy and$F$ be the resistive force. Then according to work-energy theorem,  \n>  W = \\Delta K \n> i.e., $3F = {1 \\over 2}m{v^2} - {1 \\over 2}m{\\left( {{v \\over 2}} \\right)^2}...\\left( 1 \\right)$\n> Let the bullet will penetrate x cm more before coming to rest.\n> $\\therefore Fx = {1 \\over 2}m{\\left( {{v \\over 2}} \\right)^2} - {1 \\over 2}m{\\left( 0 \\right)^2}...\\left( 2 \\right)$ \n> Dividing eq. $(1)$ and$(2)$ we get,\n>   ${x \\over 3} = {1 \\over 3}$ or x = 1 cm",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 387,
    "question": "The upper half of an inclined plane with inclination$\\phi$ is perfectly smooth while the lower half is rough. A body starting from rest at the top will again come to rest at the bottom if the coefficient of friction for the lower half is given by",
    "options": ["$2\\,\\cos \\,\\,\\phi $", "$2\\,sin\\,\\,\\phi $", "$\\,\\tan \\,\\,\\phi $", "$2\\,\\tan \\,\\,\\phi $"],
    "correct": 3,
    "solution": "> Let the length of the inclined plane is = $l$. So only${l \\over 2}$ part will have friction.\n> According to work-energy  theorem, $W = \\Delta k = 0$ \n> (Since initial and final speeds are zero) \n> $\\therefore$  Work done by friction + Work done by gravity$=0$\n> i.e., $ - \\left( {\\mu \\,mg\\,\\cos \\,\\phi } \\right){\\ell  \\over 2} + mg\\ell \\,\\sin \\,\\phi  = 0$\n> or${\\mu  \\over 2}\\cos \\,\\phi  = \\sin \\phi$  \n> or$\\mu  = 2\\,\\tan \\,\\phi$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 388,
    "question": "A  spherical ball of mass$20 kg$ is stationary at the top of a hill of height$100 m$. It rolls down a smooth surface to the ground, then climbs up another hill of height$30 m$ and finally rolls down to a horizontal base at a height of$20 m$ above the ground. The velocity attained by the ball is",
    "options": ["$20$ $m/s$", "$40$ $m/s$", "$10\\sqrt {30} \\,\\,\\,m/s$", "$10\\,\\,m/s$"],
    "correct": 1,
    "solution": "> Loss in potential energy$=$ gain in kinetic energy\n> $m \\times g \\times 80 = {1 \\over 2}m{v^2}$\n> $ \\Rightarrow  10 \\times 80 = {1 \\over 2}{v^2}$ \n> $ \\Rightarrow  {v^2} = 1600$ or$v = 40\\,m/s$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 389,
    "question": "A mass of$M kg$ is suspended by a weightless string. The horizontal force that is required to displace it until the string makes an angle of${45^ \\circ }$ with the initial vertical direction is",
    "options": ["$Mg\\left( {\\sqrt 2  + 1} \\right)$", "$Mg\\sqrt 2 $", "${{Mg} \\over {\\sqrt 2 }}$", "$Mg\\left( {\\sqrt 2  - 1} \\right)$"],
    "correct": 3,
    "solution": "> From work energy theorem we can say,\n> Work done by tension$+$ work done by force (applied)$+$ Work done by gravitational force$=$  change in kinetic energy\n> Here Work done by tension is zero\n> $ \\Rightarrow 0 + F \\times AB - Mg \\times AC = 0$\n> $ \\Rightarrow F = Mg\\left( {{{AC} \\over {AB}}} \\right) = Mg\\left[ {{{1 - {1 \\over {\\sqrt 2 }}} \\over {{1 \\over 2}}}} \\right]$\n> [ as$AB = \\ell \\sin {45^ \\circ } = {\\ell  \\over {\\sqrt 2 }}$\n> and$AC = OC - OA = \\ell  - \\ell \\,\\cos \\,{45^ \\circ } = \\ell \\left( {1 - {1 \\over {\\sqrt 2 }}} \\right)$\n> where$\\ell  = $ length of the string. ]\n> $ \\Rightarrow F = Mg\\left( {\\sqrt 2  - 1} \\right)$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 390,
    "question": "A ball of mass$0.2 kg$ is thrown vertically upwards by applying a force by hand. If the hand moves$0.2 m$ while applying the force and the ball goes upto$2 m$ height further, find the magnitude of the force. (consider$g = 10\\,m/{s^2}$).",
    "options": ["$4N$", "$16$ $N$", "$20$ $N$", "$22$ $N$"],
    "correct": 3,
    "solution": "> According to energy conservation law,\n> Work done by the hand and due to gravity = total change in the kinetic energy\n> Initially the the ball is at rest and finally at top its velocity become zero so total change in kinetic energy$\\Delta K$ = 0\n> ${W_{hand}} + {W_{gravity}} = \\Delta K$ \n> [Here distance covered would be 0.2 meter for force by hand as force is applied while ball is in contact with hand.\n> And gravity will still work while ball is in contact with hand so total distance due to gravity would be 2 + 0.2 = 2.2 meter.]\n> $ \\Rightarrow F\\left( {0.2} \\right) - \\left( {0.2} \\right)\\left( {10} \\right)\\left( {2.2} \\right)  = 0 \\Rightarrow F = 22\\,N$\n> $\\therefore$ Option (D) is correct.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 391,
    "question": "A particle of mass$100g$ is thrown vertically upwards with a speed of$5 m/s$. The work done by the force of gravity during the time the particle goes up is",
    "options": ["$-0.5J$", "$-1.25J$", "$1.25J$", "$0.5J$"],
    "correct": 1,
    "solution": "> Kinetic energy at point of throwing is converted into potential energy of the particle during rise.\n> $K.E = {1 \\over 2}m{v^2} = {1 \\over 2} \\times 0.1 \\times 25 = 1.25\\,J$\n> $W =  - mgh =  - \\left( {{1 \\over 2}m{v^2}} \\right) =  - 1.25\\,J$ \n> $\\left[ \\, \\right.$ As we know, $mgh = {1 \\over 2}m{v^2}$ by energy conservation$\\left. \\, \\right]$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 392,
    "question": "The potential energy of a$1 kg$ particle free to move along the$x$-axis is given by$V\\left( x \\right) = \\left( {{{{x^4}} \\over 4} - {{{x^2}} \\over 2}} \\right)J$.\nThe total mechanical energy of the particle is$2J.$ Then, the maximum speed (in$m/s$) is",
    "options": ["${3 \\over {\\sqrt 2 }}$", "${\\sqrt 2 }$", "${1 \\over {\\sqrt 2 }}$", "$2$"],
    "correct": 0,
    "solution": "> Velocity is maximum when kinetic energy is maximum and when kinetic energy is maximum then potential energy should be minimum\n>  For minimum potential energy,\n> ${{dV} \\over {dx}} = 0$\n> $\\Rightarrow {x^3} - x = 0$\n> $\\Rightarrow x =  \\pm 1$\n> $ \\Rightarrow$ Min. Potential energy (P.E.) =$ {1 \\over 4} - {1 \\over 2} =  - {1 \\over 4}J$ \n> $K.E{._{\\left( {\\max .} \\right)}} + P.E{._{\\left( {\\min .} \\right)}} = 2\\,$ (Given)\n> $\\therefore K.E{._{\\left( {\\max .} \\right)}} = 2 + {1 \\over 4} = {9 \\over 4}$\n> $\\therefore {1 \\over 2}mv_{\\max }^2$ = ${9 \\over 4}$\n> $ \\Rightarrow {1 \\over 2} \\times 1 \\times {v^2}_{\\max .} = {9 \\over 4}$\n> $ \\Rightarrow {v_{\\max }} = {3 \\over {\\sqrt 2 }}$ m/s",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 393,
    "question": "A particle is projected at$60^\\circ$ to the horizontal with a kinetic energy K. The kinetic energy at the\nhighest point is",
    "options": ["K/2", "K", "Zero", "K/4"],
    "correct": 3,
    "solution": "> Let$u$ be the velocity with which the particle is thrown and$m$ be the mass of the particle. Then \n> $KE = {1 \\over 2}m{u^2}.\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,...\\left( 1 \\right)$\n> At the highest point the velocity is$u \\cos \\,{60^ \\circ }$ (only the horizontal component remains, the vertical component being zero at the top-most point). \n> Therefore kinetic energy at the highest point,\n> ${\\left( {KE} \\right)_H} = {1 \\over 2}m{u^2}{\\cos ^2}60^\\circ$\n> $\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\, = {K \\over 4}$  [ From  eq$(1)$ ]",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 394,
    "question": "A$2 kg$ block slides on a horizontal floor with a speed of$4m/s.$ It strikes a uncompressed spring, and compress it till the block is motionless. The kinetic friction force is$15N$ and spring constant is$10, 000 N/m.$ The spring compresses by",
    "options": ["$8.5cm$", "$5.5cm$", "$2.5cm$", "$11.0cm$"],
    "correct": 1,
    "solution": "> Let the block compress the spring by$x$ before coming to rest.\n>   Initial kinetic energy of the block$=$ (potential energy of compressed spring)$+$ work done due to friction.\n>   ${1 \\over 2} \\times 2 \\times {\\left( 4 \\right)^2} = {1 \\over 2} \\times 10000 \\times {x^2} + 15 \\times x$\n>  $10,000{x^2} + 30x - 32 = 0$\n>  $ \\Rightarrow 5000{x^2} + 15x - 16 = 0$\n>  $\\therefore x = {{ - 15 \\pm \\sqrt {{{\\left( {15} \\right)}^2} - 4 \\times \\left( {5000} \\right)\\left( { - 16} \\right)} } \\over {2 \\times 5000}}$\n>  $\\,\\,\\,\\,\\, = 0.055m = 5.5cm.$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 395,
    "question": "An athlete in the olympic games covers a distance of$100 m$ in$10 s.$ His kinetic energy can be estimated to be in the range",
    "options": ["$200J-500J$", "$2 \\times {10^5}J - 3 \\times {10^5}J$", "$20,000J - 50,000J$", "$2,000J - 5,000J$"],
    "correct": 3,
    "solution": "> The average speed of the athelete\n> $v = {{100} \\over {10}} = 10m/s\\,\\,\\,\\, \\therefore K.E. = {1 \\over 2}m{v^2}$\n> If mass of athlete is$40 kg$ then, $K.E.  = {1 \\over 2} \\times 40 \\times {\\left( {10} \\right)^2} = 2000J$\n> If mass of athlete is$100 kg$ then, $K.E.  = {1 \\over 2} \\times 100 \\times {\\left( {10} \\right)^2} = 5000J$\n> His kinetic energy can be in the range = 2000 J to 5000 J.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 396,
    "question": "The potential energy function for the force between two atoms in a diatomic molecule is approximately given by$U\\left( x \\right) = {a \\over {{x^{12}}}} - {b \\over {{x^6}}},$ where$a$ and$b$ are constants and$x$ is the distance between the atoms. If the dissociation energy of the molecule is$D = \\left[ {U\\left( {x = \\infty } \\right) - {U_{at\\,\\,equilibrium}}} \\right],\\,\\,D$ is",
    "options": ["${{{b^2}} \\over {2a}}$", "${{{b^2}} \\over {12a}}$", "${{{b^2}} \\over {4a}}$", "${{{b^2}} \\over {6a}}$"],
    "correct": 2,
    "solution": "> Given$U\\left( x \\right) = {a \\over {{x^{12}}}} - {b \\over {{x^6}}}$\n> ${U\\left( {x = \\infty } \\right)}$ = 0\n> We know$F =  - {{dU} \\over {dx}} =  - \\left[ {{{12a} \\over {{x^{13}}}} + {{6b} \\over {{x^7}}}} \\right]$\n> At equilibrium: ${{dU\\left( x \\right)} \\over {dx}} = 0$ \n> $ \\Rightarrow {{ - 12a} \\over {{x^{13}}}} = {{ - 6b} \\over {{x^7}}}$\n> $\\Rightarrow x = {\\left( {{{2a} \\over h}} \\right)^{{1 \\over 6}}}$\n> $\\therefore {U_{at\\,\\,equilibrium\\,}} = {a \\over {{{\\left( {{{2a} \\over b}} \\right)}^2}}} - {b \\over {\\left( {{{2a} \\over b}} \\right)}}$\n> $ =  - {{{b^2}} \\over {4a}}$\n> $\\therefore D = 0 - \\left( { - {{{b^2}} \\over {4a}}} \\right) = {{{b^2}} \\over {4a}}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 397,
    "question": "This question has Statement$1$ and Statement$2.$ Of the four choices given after the Statements, choose the one that best describes the two Statements. \nIf two springs${S_1}$ and${S_2}$ of force constants${k_1}$ and${k_2}$, respectively, are stretched by the same force, it is found that more work is done on spring${S_1}$ than on spring${S_2}$.\nSTATEMENT 1: If stretched by the same amount work done on${S_1}$, Work done on${S_1}$ is more than${S_2}$\nSTATEMENT 2: ${k_1} &lt; {k_2}$",
    "options": ["Statement 1 is false, Statement 2 is true", "Statement 1 is true, Statement 2 is false", "Statement 1 is true, Statement 2 is true, Statement 2 is the correct explanation for Statement 1", "Statement 1 is true, Statement 2 is true, Statement 2 is not the correct explanation for Statement 1"],
    "correct": 0,
    "solution": "> We know force (F) = kx\n> $W = {1 \\over 2}k{x^2}$\n> $W = {{{{\\left( {kx} \\right)}^2}} \\over {2k}} \\,\\,\\,$\n> $\\therefore W = {{{F^2}} \\over {2k}}$ [ as$F=kx$ ]\n> When force is same then,\n> $W \\propto {1 \\over k}$\n> Given that, ${W_1} &gt; {W_2}$\n> $\\therefore {k_1} &lt; {k_2}$\n> Statement-2 is true.\n> For the same extension, x1\n>  = x2\n>  = x\n> Work done on spring S1 is W1 = ${1 \\over 2}{k_1}x_1^2 = {1 \\over 2}{k_1}{x^2}$\n> Work done on spring S2 is W2 = ${1 \\over 2}{k_2}x_2^2 = {1 \\over 2}{k_2}{x^2}$\n> $ \\therefore  {{{W_1}} \\over {{W_2}}} = {{{k_1}} \\over {{k_2}}}$\n> As${k_1} &lt; {k_2}$ then${W_1} &lt; {W_2}$\n> So, Statement-1 is false.",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 398,
    "question": "A person trying to lose weight by burning fat lifts a mass of$10 kg$ upto a height of$1 m 1000$ times. Assume that the potential energy lost each time he lowers the mass  is dissipated.  How much fat will he use up considering the work done only when the weight is lifted up? Fat supplies$3.8 \\times {10^7}J$ of energy per$kg$ which is converted to mechanical energy with a$20\\% $  efficiency rate. Take$g = 9.8\\,m{s^{ - 2}}$ :",
    "options": ["$9.89 \\times {10^{ - 3}}\\,\\,kg$", "$12.89 \\times {10^{ - 3}}\\,kg$", "$2.45 \\times {10^{ - 3}}\\,\\,kg$", "$6.45 \\times {10^{ - 3}}\\,\\,kg$"],
    "correct": 1,
    "solution": "> Assume the amount of fat is used = x kg\n> So total Mechanical energy available through fat\n> = $x \\times 3.8 \\times {10^7} \\times {{20} \\over {100}}$\n> And work done through lifting up\n> =  10$ \\times$ 9.8$ \\times$ 1000 = 98000 J\n> $ \\Rightarrow  x \\times 3.8 \\times {10^7} \\times {{20} \\over {100}}$ = 98000\n> $ \\Rightarrow  x$ = 12.89$ \\times$ 10-3 kg",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 399,
    "question": "A body of mass m = 10\u20132 kg is moving in a medium and experiences a frictional force F = \u2013kv2. Its initial speed is v0 = 10 ms\u20131. If, after 10 s, its energy is${1 \\over 8}mv_0^2$, the value of k will be:",
    "options": ["10-1 kg m-1 s-1", "10-3 kg m-1", "10-3 kg s-1", "10-4 kg m-1"],
    "correct": 3,
    "solution": "> According to the question, final kinetic energy  = ${1 \\over 8}mv_0^2$\n> Let final speed of the body = Vf\n> So final kinetic energy = ${1 \\over 2}mv_f^2$\n> According to question,\n> ${1 \\over 2}mv_f^2$ = ${1 \\over 8}mv_0^2$\n> $ \\Rightarrow {v_f} = {{{v_0}} \\over 2}$ = ${{10} \\over 2}$ = 5 m/s\n> Given that, F = \u2013kv2\n> $ \\Rightarrow  m\\left( {{{dv} \\over {dt}}} \\right)  =  - k{v^2}$\n> $ \\Rightarrow {10^{ - 2}}\\left( {{{dv} \\over {dt}}} \\right) =  - k{v^2}$\n> $ \\Rightarrow \\int\\limits_{10}^5 {{{dv} \\over {{v^2}}}}  =  - 100k\\int\\limits_0^{10} {dt}$\n> $ \\Rightarrow {1 \\over 5} - {1 \\over {10}} = 100k \\times 10$\n> $ \\Rightarrow k = {10^{ - 4}}kg\\,{m^{ - 1}}$",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },
  {
    "id": 400,
    "question": "A time dependent force F = 6t acts on a particle of mass 1 kg. If the particle starts from rest, the work done\nby the force during the first 1 sec. will be:",
    "options": ["18 J", "4.5 J", "22 J", "9 J"],
    "correct": 1,
    "solution": "> Given that, F = 6t\n> We know, F = ma = $m{{dv} \\over {dt}}$\n> $\\therefore m{{dv} \\over {dt}} = 6t$\n> $ \\Rightarrow  1.{{dv} \\over {dt}} = 6t$ [as m = 1]\n> $ \\Rightarrow  \\int\\limits_0^v {dv}  = \\int {6t} dt$\n> $ \\Rightarrow  v = 6\\left[ {{{{t^2}} \\over 2}} \\right]_0^1$\n> $ \\Rightarrow  v = {6 \\over 2} = 3$ m/s [ as given t = 1 sec ] \n> Work done by the body during the first 1 form work-energy theorem,\n> W = $\\Delta$K.E = ${1 \\over 2}m\\left( {{V^2} - {v^2}} \\right)$ \n> = ${1 \\over 2}.1.\\left( {{3^2} - {0^2}} \\right)$ = 4.5 J",
    "chapter": "Work, Power and Energy",
    "topic": "Work-Power-And-Energy"
  },


  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "The absolute difference of the coefficients of $x^{10}$ and $x^{7}$ in the expansion of $\\left(2 x^{2}+\\frac{1}{2 x}\\right)^{11}$ is equal to :",
    "options": [
        "$11^{3}-11$",
        "$13^{3}-13$",
        "$12^{3}-12$",
        "$10^{3}-10$"
    ],
    "correct": 2,
    "solution": "General term of $\\left(2 x\\^2+\\frac{1}{2 x}\\right)^{11}$ is : $ \\begin{aligned} & \\mathrm{T}_{\\mathrm{r}+1}={ }^{11} \\mathrm{C}\\_r\\left(2 x\\^2\\right){ }^{11-r}\\left(\\frac{1}{2 x}\\right)\\^r \\\\\\\\ & ={ }^{11} \\mathrm{C}\\_r 2^{11-r} x^{22-2 r} 2^{-r} x^{-r} \\\\\\\\ & ={ }^{11} \\mathrm{C}\\_r 2^{11-r} x^{22-3 r} \\end{aligned} $ Now, $22-2 r=10$ and $22-3 r=7$ $ \\begin{array}{ll} \\Rightarrow 3 r=12 &&& \\Rightarrow 3 r=15 \\\\\\\\ \\Rightarrow r=4 &&& \\Rightarrow r=5 \\end{array} $ $\\therefore$ Coeff. of $x^{10}={ }^{11} \\mathrm{C}\\_4 \\cdot 2^{11-8}={ }^{11} \\mathrm{C}\\_4 \\times 8$ Coeff. of $x\\^7={ }^{11} C\\_5 \\cdot 2^{11-10}={ }^{11} C\\_4 \\times 2$ Now, required difference $ \\begin{aligned} & ={ }^{11} \\mathrm{C}\\_4 \\times 8-{ }^{11} \\mathrm{C}\\_5 \\times 2 \\\\\\\\ & =\\frac{11 \\times 10 \\times 9 \\times 8 \\times 7 !}...",
    "id": 401
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "For the natural numbers m, n, if${(1 - y)\\^m}{(1 + y)\\^n} = 1 + {a\\_1}y + {a\\_2}{y\\^2} + .... + {a_{m + n}}{y^{m + n}}$ and${a\\_1} = {a\\_2} = 10$, then the value of (m + n) is equal to :",
    "options": [
        "88",
        "64",
        "100",
        "80"
    ],
    "correct": 3,
    "solution": "${(1 - y)\\^m}{(1 + y)\\^n} = 1 + {a\\_1}y + {a\\_2}{y\\^2} + .... + {a_{m + n}}{y^{m + n}}$ Given, (${a\\_1} = {a\\_2} = 10$)$(1 - my + {}\\^m{C\\_2}{y\\^2} + .....)(1 + ny + {}\\^n{C\\_2}{y\\^2} + .....) = 1 + {a\\_1}y + {a\\_2}{y\\^2} + ....  \\Rightarrow n - m = 10$ ..... (i)$ \\Rightarrow {}\\^m{C\\_2} + {}\\^n{C\\_2} - mn = 10$...... (ii)${{m(m - 1)} \\over 2} + {{n(n - 1)} \\over 2} - mn = 10  \\Rightarrow {{{m\\^2} - m} \\over 2} + {{(10 + m)(9 + m)} \\over 2} - m(10 + m) = 10  \\Rightarrow {m\\^2} - m + {m\\^2} + 19m + 90 - 2({m\\^2} + 10m) = 20  \\Rightarrow 18m + 90 - 20m = 20$ $ \\Rightarrow 2m = 70  \\Rightarrow m = 35$ & $n = 45 m + n = 80$",
    "id": 402
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "If the greatest value of the term independent of 'x' in the expansion of${\\left( {x\\sin \\alpha + a{{\\cos \\alpha } \\over x}} \\right)^{10}}$ is${{10!} \\over {{{(5!)}\\^2}}}$, then the value of 'a' is equal to :",
    "options": [
        "$-$1",
        "1",
        "$-$2",
        "2"
    ],
    "correct": 3,
    "solution": "${T_{r + 1}} = {}^{10}{C\\_r}{(x\\sin \\alpha )^{10 - r}}{\\left( {{{a\\cos \\alpha } \\over x}} \\right)\\^r}$ r = 0, 1, 2, ......., 10 Tr + 1 will be independent of x when 10$-$ 2r = 0$\\Rightarrow$ r = 5${T\\_6} = {}^{10}{C\\_5}{(x\\sin \\alpha )\\^5} \\times {\\left( {{{a\\cos \\alpha } \\over x}} \\right)\\^5}  = {}^{10}{C\\_5} \\times {a\\^5} \\times {1 \\over {{2\\^5}}}{(\\sin 2\\alpha )\\^5}$ will be greatest when sin2$\\alpha$ = 1$ \\Rightarrow {}^{10}{C\\_5}{{{a\\^5}} \\over {{2\\^5}}} = {}^{10}{C\\_5} \\Rightarrow a = 2$",
    "id": 403
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "The positive integer just greater than${\\left( {1 + 0.0001} \\right)^{10000}}$ is",
    "options": [
        "4",
        "5",
        "2",
        "3"
    ],
    "correct": 3,
    "solution": "${\\left( {1 + 0.0001} \\right)^{10000}}$ = ${\\left( {1 + {1 \\over {{{10}\\^4}}}} \\right)^{10000}}$ = 1 + 10000${ \\times {1 \\over {{{10}\\^4}}}}$ + ${{10000\\left( {9999} \\right)} \\over {2!}} \\times {\\left( {{1 \\over {{{10}\\^4}}}} \\right)\\^2}$+......$\\infty$ < 1 + 1 + ${1 \\over {2!}}$ + ${1 \\over {3!}}$ + ...... $\\infty$ = e = 2.71828 < 3",
    "id": 404
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "The lowest integer which is greater than ${\\left( {1 + {1 \\over {{{10}^{100}}}}} \\right)^{{{10}^{100}}}}$ is \\_\\__\\_\\__\\_\\__\\_\\__\\__.",
    "options": [
        "3",
        "4",
        "2",
        "1"
    ],
    "correct": 0,
    "solution": "Let $P = {\\left( {1 + {1 \\over {{{10}^{100}}}}} \\right)^{{{10}^{100}}}}$ Let $x = {10^{100}}$ $ \\Rightarrow P = {\\left( {1 + {1 \\over x}} \\right)\\^x}$ $ \\Rightarrow P = 1 + (x)\\left( {{1 \\over x}} \\right) + {{(x)(x - 1)} \\over {\\left| \\!{\\underline {\\, 2 \\,}} \\right. }}.{1 \\over {{x\\^2}}} + {{(x)(x - 1)(x - 2)} \\over {\\left| \\!{\\underline {\\, 3 \\,}} \\right. }}.{1 \\over {{x\\^3}}} + ....$ (upto 10100 + 1 terms) $ \\Rightarrow P = 1 + 1 + \\left( {{1 \\over {\\left| \\!{\\underline {\\, 2 \\,}} \\right. }} - {1 \\over {\\left| \\!{\\underline {\\, 2 \\,}} \\right. {x\\^2}}}} \\right) + \\left( {{1 \\over {\\left| \\!{\\underline {\\, 3 \\,}} \\right. }} - ...} \\right) + ...$ so on $ \\Rightarrow P = 2 + \\left( {Positive\\,value\\,less\\,than\\,{1 \\over {\\left| \\!{\\underline {\\, 2 \\,}} \\right. }} + {1 \\over {\\left| \\...",
    "id": 405
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "Let $m$ and $n$ be the coefficients of seventh and thirteenth terms respectively in the expansion of $\\left(\\frac{1}{3} x^{\\frac{1}{3}}+\\frac{1}{2 x^{\\frac{2}{3}}}\\right)^{18}$. Then $\\left(\\frac{\\mathrm{n}}{\\mathrm{m}}\\right)^{\\frac{1}{3}}$ is :",
    "options": [
        "$\\frac{1}{9}$",
        "$\\frac{1}{4}$",
        "$\\frac{4}{9}$",
        "$\\frac{9}{4}$"
    ],
    "correct": 3,
    "solution": "$\\begin{aligned} & \\mathrm{t}\\_7={ }^{18} \\mathrm{C}\\_6\\left(\\frac{\\mathrm{x}^{\\frac{1}{3}}}{3}\\right)^{12}\\left(\\frac{\\mathrm{x}^{\\frac{-2}{3}}}{2}\\right)\\^6={ }^{18} \\mathrm{C}\\_6 \\frac{1}{(3)^{12}} \\cdot \\frac{1}{2\\^6} \\\\\\\\ & \\mathrm{t}_{13}={ }^{18} \\mathrm{C}_{12}\\left(\\frac{\\mathrm{x}^{\\frac{1}{3}}}{3}\\right)\\^6\\left(\\frac{\\mathrm{x}^{\\frac{-2}{3}}}{2}\\right)^{12}={ }^{18} \\mathrm{C}_{12} \\frac{1}{(3)\\^6} \\cdot \\frac{1}{2^{12}} \\cdot \\mathrm{x}^{-6}\\end{aligned}$ $ \\therefore $ $m={ }^{18} C\\_6\\left(\\frac{1}{3}\\right)^{12}\\left(\\frac{1}{2}\\right)\\^6$ $n={ }^{18} C_{12}\\left(\\frac{1}{3}\\right)\\^6\\left(\\frac{1}{2}\\right)^{12}$ $\\begin{aligned}\\left(\\frac{m}{n}\\right)^{\\frac{1}{3}} & =\\left(\\frac{{ }^{18} C\\_6\\left(\\frac{1}{3}\\right)^{12}\\left(\\frac{1}{2}\\right)\\^6}{{ }^{18} C_{12}\\left(\\frac{1}{...",
    "id": 406
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "The sum of all rational terms in the expansion of$\\left(2^{\\frac{1}{5}}+5^{\\frac{1}{3}}\\right)^{15}$ is equal to :",
    "options": [
        "633",
        "6131",
        "3133",
        "931"
    ],
    "correct": 2,
    "solution": "$\\begin{aligned} & T_{r+1}={ }^{15} \\mathrm{C}\\_r\\left(2^{1 / 5}\\right)^{15-r}\\left(5^{1 / 3}\\right)\\^r \\\\ & ={ }^{15} C\\_r 5^{r / 3} 2^{\\left(3-\\frac{r}{5}\\right)} \\end{aligned}$ For rational terms, $\\frac{r}{3}$ and$\\frac{r}{5}$ must be integer 3 and 5 divide$r \\Rightarrow 15$ divides$r \\Rightarrow r=0$ and$r=15 { }^{15} C\\_0 5\\^0 2\\^3+{ }^{15} C_{15} 5\\^5 2^{(0)} \\begin{aligned} & =8+3125 \\\\ & =3133 \\end{aligned}$",
    "id": 407
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "The remainder left out when${8^{2n}} - {\\left( {62} \\right)^{2n + 1}}$ is divided by 9 is :",
    "options": [
        "2",
        "7",
        "8",
        "0"
    ],
    "correct": 0,
    "solution": "${8^{2n}} - {\\left( {62} \\right)^{2n + 1}}$ = ${\\left( {{8\\^2}} \\right)\\^n} - {\\left( {62} \\right)^{2n + 1}}$ = ${\\left( {1 + 63} \\right)\\^n} - {\\left( {1 - 63} \\right)^{2n + 1}}$ = $\\left( {1 + n.63 + {}\\^n{C\\_2}{{.63}\\^2} + ......} \\right)$ + $\\left( {1 + {}^{2n + 1}{C\\_1}.\\left( { - 63} \\right) + {}^{2n + 1}{C\\_2}.{{\\left( { - 63} \\right)}\\^2} + ......} \\right)$ = 2 + 63$\\left[ {\\left( {n + {}\\^n{C\\_2} + ....} \\right) + \\left( { - {}^{2n + 1}{C\\_1} + {}^{2n + 1}{C\\_2}.63 + ......} \\right)} \\right]$ = 63$ \\times$[Some integral value] + 2 63$ \\times$[Some integral value] + 2 by dividing with 9 we will get 2 as remainder as 63 is multiple of 9.",
    "id": 408
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "If (27)999 is divided by 7, then the remainder is :",
    "options": [
        "1",
        "2",
        "3",
        "6"
    ],
    "correct": 3,
    "solution": "We have, ${{{{\\left( {27} \\right)}^{999}}} \\over 7}$ = ${{{{\\left( {28 - 1} \\right)}^{999}}} \\over 7}$ = ${{28\\,\\lambda - 1} \\over 7}$ = ${{28\\,\\lambda - 7 + 7 - 1} \\over \\lambda }$ = ${{7\\left( {4\\lambda - 1} \\right) + 6} \\over 7}$ $\\therefore\\,\\,\\,$ Remainder = 6",
    "id": 409
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "The greatest positive integer k, for which 49k + 1 is a factor of the sum 49125 + 49124 + ..... + 492 + 49 + 1, is:",
    "options": [
        "32",
        "60",
        "63",
        "65"
    ],
    "correct": 2,
    "solution": "1 + 49 + 492 + ..... + 49125 sum of G.P. = ${{1.\\left( {{{49}^{126}} - 1} \\right)} \\over {49 - 1}}$ = ${{\\left( {{{49}^{63}} + 1} \\right)\\left( {{{49}^{63}} - 1} \\right)} \\over {48}}$ Also 4963 - 1 = (1 + 48)63 - 1 = [63C0$ \\times$1 + 63C1$ \\times$ 48 + 63C2$ \\times$ (48)2 + .... ] - 1 = [1 + 48$\\lambda$] - 1 = 48$\\lambda$ So${{\\left( {{{49}^{63}} - 1} \\right)} \\over {48}}$ = integer$ \\therefore$ 4963 + 1 is a factor. So k = 63.",
    "id": 410
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "Greatest term in the expansion of (1 + t)^2n has greatest\ncoefficient if and only if\n$t \\in \\left( \\frac{9}{10},\\frac{10}{9} \\right)$. The coefficient of\nx^5 in the expansion of (1 + x - 2x^2)^n is",
    "options": [
        "126",
        "120",
        "128",
        "124"
    ],
    "correct": 0,
    "solution": "Greatest term in the expansion of (1 + x)^2n is having\ngreatest coefficient\n$\\$If  x\n$\\in \\left( \\frac{n}{n + 1},\\frac{n + 1}{n} \\right) \\Rightarrow$n = 9\ncoefficient of x^5 in (1 + x - 2x^2)^9\n$= \\left( 1 + x + \\left( - 2x^{2} \\right) \\right)^{9}$\n$= \\frac{9!(1)^{\\alpha_{1}}(x)^{\\alpha_{2}}\\left( - 2x^{2} \\right)^{\\alpha_{3}}}{\\alpha_{1}!\\alpha_{2}!\\alpha_{3}!}$\n ------------------------------------\n ------------ ------------ ------------\n 6 1 2\n 4 5 0\n ------------------------------------\nCoeff = 126",
    "id": 411
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "The sum of\nseries $\\frac{\\ ^{50}C_{0}}{50!50!} + \\frac{\\ ^{50}C_{1}}{49!51!} + \\frac{\\ ^{50}C_{2}}{48!52!}$+.........+$\\frac{\\ ^{50}C_{50}}{100!}$ equal\nto",
    "options": [
        "$\\frac{1}{100!}\\ ^{150}C_{50}$",
        "$\\frac{1}{100!}^{100}C_{50}$",
        "$\\frac{1}{150!}\\ ^{100}C_{50}$",
        "$\\frac{1}{50!}^{150}C_{50}$"
    ],
    "correct": 0,
    "solution": "$\\sum_{r = 0}^{50}\\mspace{2mu}\\frac{\\ ^{50}C_{r}}{(50 - r)!(50 + r)!}$\n$= \\frac{1}{100!}\\sum_{r = 0}^{50}\\mspace{2mu}\\left( \\ ^{50}C_{r}\\ ^{100}C_{50 - r} \\right)$\n$= \\frac{1}{100!}\\left( \\ ^{50}C_{0}\\ ^{100}C_{50} + \\ ^{50}C_{1}\\ ^{100}C_{49} + \\ldots\\ldots\\ldots + \\ ^{50}C_{50}\\ ^{100}C_{0} \\right)$\n$= \\frac{1}{100!}\\left( \\ ^{150}C_{50} \\right)$",
    "id": 412
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "If\n$\\left( C_{0} + C_{1} \\right)\\left( C_{1} + C_{2} \\right)\\ldots\\left( C_{n} - 1 + C_{n} \\right) = mC_{1}C_{2}$......$C_{n - 1}$,\nthen m is",
    "options": [
        "$\\frac{(n + 1)^{n}}{n!}$",
        "$\\frac{(n + 1)^{n - 1}}{(n - 1)!}$",
        "$\\frac{(n + 1)^{n + 1}}{n!}$",
        "$\\frac{n^{n - 1}}{(n - 1)!}$"
    ],
    "correct": 0,
    "solution": "$\\left( C_{0} + C_{1} \\right)\\left( C_{1} + C_{2} \\right)\\left( C_{2} + C_{3} \\right)$.......$\\left( C_{n} - 1 + C_{n} \\right)$\n$= C_{0}\\left( 1 + \\frac{C_{1}}{C_{0}} \\right)C_{1}\\left( 1 + \\frac{C_{2}}{C_{1}} \\right)C_{2}\\left( 1 + \\frac{C_{3}}{C_{2}} \\right)$.......$C_{n - 1}\\left( 1 + \\frac{C_{n}}{C_{n - 1}} \\right)$\n$= C_{0}C_{1}C_{2}$.......$C_{n - 1}\\left( \\frac{n + 1}{1} \\right)\\left( \\frac{n + 1}{2} \\right)\\left( \\frac{n + 1}{3} \\right)$........$\\left( \\frac{n + 1}{n} \\right)$",
    "id": 413
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "The sum of the\nseries $\\ ^{20}C_{0} - \\ ^{20}C_{1} + \\ ^{20}C_{2} - \\ ^{20}C_{3} + \\ldots + \\ ^{20}C_{10}\\ is\\$",
    "options": [
        "$- \\ ^{20}C_{10}$",
        "$\\frac{1}{2}\\ 20C_{10}$",
        "0",
        "$20C_{10}$"
    ],
    "correct": 1,
    "solution": "$(1 + x)^{20} = \\ ^{20}C_{0} + \\ ^{20}C_{1}x + \\ ^{20}C_{2}x^{2} +$.....$\\ ^{20}C_{20}x^{20}$\nis\nPut x = - 1\n$\\Rightarrow 0 = \\ ^{20}C_{0} - \\ ^{20}C_{1} + \\ ^{20}C_{2}$.........$- \\ ^{20}C_{9} + \\ ^{20}C_{10} - \\ ^{20}C_{11} +$.....$+ \\ ^{20}C_{20}$\n$\\Rightarrow 0 = 2\\left( \\ ^{20}C_{0} - \\ ^{20}C_{1} +_{.}\\ldots\\ldots.. - \\ ^{20}C_{9} + \\ ^{20}C_{10} \\right) - \\ ^{20}C_{10}$",
    "id": 414
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "The coefficient of t^4 in the expansion of\n$\\left( \\frac{1 - t^{6}}{1 - t} \\right)^{3}$ is",
    "options": [
        "12",
        "14",
        "10",
        "15"
    ],
    "correct": 3,
    "solution": "coefficient of t^4 in (1 - t^6)^3 (1 - t)^-3\n= coefficient of t^4 in (1 - 3t^6 + 3t^12 - t^18) (1 - t)^-3\n= 1 $×$ ^3 + 4-1^C_4 = ^6C_4 = 15",
    "id": 415
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "If the third term in the binomial expansion of\n$\\left( 1 + x^{\\log_{2}x} \\right)^{5}$ equals 2560, then a possible\nvalue of x is",
    "options": [
        "$4\\sqrt{2}$",
        "$\\frac{1}{8}$",
        "$2\\sqrt{2}$",
        "$\\frac{1}{4}$"
    ],
    "correct": 3,
    "solution": "In the expansion of$\\left( 1 + x^{\\log_{2}x} \\right)^{5}$\nThird term say $T_{3} = \\left( x^{\\log_{2}x} \\right)^{2} = 2560$\n$\\Rightarrow \\left( x^{\\log_{2}x} \\right)^{2} = 256$\nTaking logarithm to the base 2 on both sides\n$\\Rightarrow 2\\left( \\log_{2}x \\right)^{2} = 8 \\Rightarrow \\left( \\log_{2}x \\right) = \\pm 2$\n$\\Rightarrow x = 4,\\frac{1}{4}$\nHere, $x = \\frac{1}{4}$",
    "id": 416
},
  {
    "chapter": "Binomial Theorem",
    "topic": "Binomial Theorem",
    "question": "If numerically greatest term in the expansion of (1- x)^21 has\nthe numerically greatest co-efficient is (x > 0) then complete set of\nvalues of x are.",
    "options": [
        "$\\left\\lbrack \\frac{5}{6},\\frac{6}{5} \\right\\rbrack$",
        "$\\left( \\frac{5}{6},\\frac{6}{5} \\right)$",
        "$\\left( \\frac{6}{7},\\frac{7}{6} \\right)$",
        "$\\left\\lbrack \\frac{6}{7},\\frac{7}{6} \\right\\rbrack$"
    ],
    "correct": 1,
    "solution": "Numerically greatest coefficient is\n$\\ ^{21}C_{10}\\ or\\ \\ ^{21}C_{11}$\n$\\left| \\ ^{21}C_{10}x^{10} \\right| > \\left| \\ ^{21}C_{9}x^{9} \\right| \\Rightarrow x > \\frac{5}{6}$\nSimilarly,\n$x < \\frac{6}{5} \\Rightarrow x \\in \\left( \\frac{5}{6},\\frac{6}{5} \\right)$",
    "id": 417
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols Phenols and Ethers",
    "question": "During dehydration of alcohols to alkenes by heating with conc. H2SO4 the initiation step is",
    "options": [
        "formation of carbocation",
        "elimination of water",
        "formation of an ester",
        "protonation of alcohol molecule"
    ],
    "correct": 3,
    "solution": "The dehydration of alcohol to form alkene occurs in following three step. Step$(1)$ is initiation step.",
    "id": 418
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols Phenols and Ethers",
    "question": "Acid catalyzed hydration of alkenes except ethene leads to the formation of",
    "options": [
        "primary alcohol",
        "secondary or tertiary alcohol",
        "mixture of primary and secondary alcohols",
        "mixture of secondary and tertiary alcohols"
    ],
    "correct": 3,
    "solution": "Water adds directly to the more reactive alkene in presence of a strongly acidic catalyst forming alcohols. Addition occurs according to Markonikov's rule.",
    "id": 419
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols Phenols and Ethers",
    "question": "The best reagent to convert pent -3- en-2-ol into pent -3-en-2-one is",
    "options": [
        "Acidic permanganate",
        "Acidic dichromate",
        "Chromic anhydride in glacial acetic acid",
        "Pyridinium chloro chromate"
    ],
    "correct": 3,
    "solution": "Pyridiminum chloro-chromate$(PCC)$ is specific for the conversion.",
    "id": 420
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols Phenols and Ethers",
    "question": "From amongst the following alcohols the one that would react fastest with conc. HCl and anhydrous ZnCl2, is",
    "options": [
        "2Butanol",
        "2Methylpropan2ol",
        "2Methylpropanol",
        "1Butanol"
    ],
    "correct": 1,
    "solution": "Tertiary alcohols react fastest with conc. $HCl$ and anhydrous$ZnC{l\\_2}$ (lucas reagent) as its mechanism proceeds through the formation of stable tertiary carbocation. Mechanism",
    "id": 421
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols Phenols and Ethers",
    "question": "An unknown alcohol is treated with the Lucas reagent to determine whether the alcohol is primary, secondary or tertiary. Which alcohol reacts fastest and by what mechanism:",
    "options": [
        "tertiary alcohol by SN1",
        "secondary alcohol by SN2",
        "tertiary alcohol by SN2",
        "secondary alcohol by SN1"
    ],
    "correct": 0,
    "solution": "Tertiary alcohols reacts fastest with lucas reagnet as the rate of reaction is directly proportional to the stability of carbocation formed in the reaction. Since most stable${3^ \\circ }$ carbocation is formed in the reaction hence it will react fastest further tetriary alcohols appears to react by${S\\_N}1$ mechanism.",
    "id": 422
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols Phenols and Ethers",
    "question": "The most suitable reagent for the conversion of R - CH2 - OH$\\to$ R - CHO is:",
    "options": [
        "CrO3",
        "PCC (Pyridinium Chlorochromate)",
        "KMnO4",
        "K2Cr2O7"
    ],
    "correct": 1,
    "solution": "An excellent reagent for oxidation of${1^ \\circ }$ alcohols to aldehydes is$PCC.$",
    "id": 423
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols Phenols and Ethers",
    "question": "Bouveault-Blanc reduction reaction involves :",
    "options": [
        "Reduction of an acyl halide with H2/Pd.",
        "Reduction of an ester with Na/C2H5OH.",
        "Reduction of a carbonyl compound with Na/Hg and HCl.",
        "Reduction of an anhydride with LiAlH4."
    ],
    "correct": 1,
    "solution": "BourveaultBlanc reduction involves the reduction of esters to primary alcohols in the presence of sodium and alcohol.",
    "id": 424
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols Phenols and Ethers",
    "question": "The major product of the following reaction is : ${\\rm{C}}{{\\rm{H}}\\_3}{\\rm{CH = CHC}}{{\\rm{O}}\\_2}{\\rm{CH\\_3 }}\\buildrel {LiAl{H\\_4}} \\over \\longrightarrow$",
    "options": [
        "CH3CH2CH2CHO",
        "CH3CH2CH2CO2CH3",
        "CH3CH = CHCH2OH",
        "CH3CH2CH2CH2OH"
    ],
    "correct": 2,
    "solution": "LiAlH4 reduces esters to alcohols but does not reduce C = C. ${\\rm{C}}{{\\rm{H}}\\_3}{\\rm{CH = CHC}}{{\\rm{O}}\\_2}{\\rm{CH\\_3 }}\\buildrel {LiAl{H\\_4}} \\over \\longrightarrow$ CH3CH = CHCH2OH + CH3OH",
    "id": 425
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols Phenols and Ethers",
    "question": "Ceric ammonium nitrate and CHCl3/alc. KOH are used for the identification of functional groups present in \\_\\__\\_\\__\\_\\_\\__ and \\_\\__\\_\\_\\__ respectively.",
    "options": [
        "amine, alcohol",
        "alcohol, phenol",
        "alcohol, amine",
        "amine, phenol"
    ],
    "correct": 2,
    "solution": "Alcohol give positive test with ceric ammonium nitrate and primary amines gives carbyl amine test with CHCl3, KOH.",
    "id": 426
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols Phenols and Ethers",
    "question": "Given below are two statements : one is labelled as Assertion (A) and the other is labelled as Reason (R). Assertion (A) : Treatment of bromine water with propene yields 1-bromopropan-2-ol. Reason (R) : Attack of water on bromonium ion follows Markovnikov rule and results in 1-bromopropan-2-ol. In the light of the above statements, choose the most appropriate answer from the options given below :",
    "options": [
        "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
        "(A) is false but (R) is true",
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "(A) is true but (R) is false"
    ],
    "correct": 2,
    "solution": "Its IUPAC name 1-bromopropan-2-ol A and R are true and (R) is the correct explanation of (A).",
    "id": 427
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols-Phenols-And-Ethers",
    "question": "Given below are two statements :\nStatement I : On heating with$\\mathrm{KHSO}_{4}$, glycerol is dehydrated and acrolein is formed.\nStatement II : Acrolein has fruity odour and can be used to test glycerol's presence.\nChoose the correct option.",
    "options": [
        "Both Statement I and Statement II are correct.",
        "Both Statement I and Statement II are incorrect.",
        "Statement I is correct but Statement II is incorrect.",
        "Statement I is incorrect but Statement II is correct."
    ],
    "correct": 2,
    "solution": "Glycerol, on heating with KHSO4, undergoes\ndehydration to give unsaturated aldehyde called\nacrolein. So, the statement I is correct. \nAcrolein has a piercing unpleasant smell. So,\nstatement II is incorrect.",
    "id": 428
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols-Phenols-And-Ethers",
    "question": "When ethanol is heated with conc. $\\mathrm{H}_{2} \\mathrm{SO}_{4}$, a gas is produced. The compound formed, when this gas is treated with cold dilute aqueous solution of Baeyer's reagent, is",
    "options": [
        "formaldehyde",
        "formic acid",
        "glycol",
        "ethanoic acid"
    ],
    "correct": 2,
    "solution": "$\\mathrm{CH}_{3}-\\mathrm{CH}_{2}-\\mathrm{OH} \\frac{\\text { Conc. } \\mathrm{H}_{2} \\mathrm{SO}_{4}}{\\Delta} \\mathrm{CH}_{2}=\\mathrm{CH}_{2} \\frac{\\text { Cold dil solution of }}{\\text { Bayers reagent }} \\mathrm{OH}-\\mathrm{CH}_{2}-\\mathrm{CH}_{2}-\\mathrm{OH}\\,(\\text {Glycol})$",
    "id": 429
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols-Phenols-And-Ethers",
    "question": "A solution of$\\mathrm{Cr O_5}$ in amyl alcohol has a __________ colour.",
    "options": [
        "Yellow",
        "Orange-Red",
        "Green",
        "Blue"
    ],
    "correct": 3,
    "solution": "CrO$_5$ is blue in colour in amyl alcohol.",
    "id": 430
},
  {
    "chapter": "Alcohols Phenols and Ethers",
    "topic": "Alcohols-Phenols-And-Ethers",
    "question": "Incorrect method of preparation for alcohols from the following is:",
    "options": [
        "Hydroboration-oxidation of alkene.",
        "Reaction of Ketone with$\\mathrm{RMgBr}$ followed by hydrolysis.",
        "Ozonolysis of alkene.",
        "Reaction of alkyl halide with aqueous$\\mathrm{NaOH}$."
    ],
    "correct": 2,
    "solution": "Reductive ozonolysis of alkenes will lead to\nformation of aldehyde or ketones, oxidative\nozonolysis of alkenes will lead to formation of\ncarboxylic acids or ketones.\nSo, alcohol is not formed by ozonolysis of alkenes.",
    "id": 431
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "An arc lamp requires a direct current of\n10 A at 80 V to function. If it is connected\nto a 220 V (rms), 50 Hz AC supply, the\nseries inductor needed for it to work is\nclose to :",
    "options": [
        "0.044 H",
        "0.065 H",
        "80 H",
        "0.08 H"
    ],
    "correct": 1,
    "solution": "<p>From the circuit, we have</p>\n<p><img src=\"https://app-content.cdn.examgoal.net/fly/@width/image/1l36s2v57/7fb9ba2f-2acb-4af2-95e3-05d177745de7/c748d6c0-d404-11ec-b808-5752a3163b13/file-1l36s2v58.png?format=png\" data-orsrc=\"https://app-content.cdn.examgoal.net/image/1l36s2v57/7fb9ba2f-2acb-4af2-95e3-05d177745de7/c748d6c0-d404-11ec-b808-5752a3163b13/file-1l36s2v58.png\" loading=\"lazy\" style=\"max-width: 100%; height: auto; display: block; margin: 0px auto; max-height: 40vh;\" alt=\"JEE Main 2016 (Offline) Physics - Alternating Current Question 142 English Explanation\"></p>\n<p>$R = {{80} \\over {10}} = 8\\,\\Omega$</p>\n<p>$10 = {{220} \\over {\\sqrt {{R^2} + X_L^2} }} \\Rightarrow \\sqrt {64 + X_L^2}  = 22$</p>\n<p>$ \\Rightarrow X_L^2 = 484 - 64 = 420$</p>\n<p>$ \\Rightarrow {X_L} = \\sqrt {420}  = 20.5\\,\\Omega$</p>\n<p>$ \\Rightarrow \\omega L = 20.5$</p>\n<p>$L = {{20.5} \\over {2\\pi  \\times 50}} = {{20.5} \\over {314}} = 0.065\\,H$</p>",
    "id": 440
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "A sinusoidal voltage of peak value 283 V and angular frequency 320/s is applied to a series LCR circuit. Given that R=5$\\Omega$, L=25 mH and C=1000$\\mu$F. The total impedance, and phase difference between the voltage across the source and the current will respectively be :",
    "options": [
        "10$\\Omega$ and tan<sup>$-$1</sup> $\\left( {{5 \\over 3}} \\right)$",
        "$7\\,\\Omega$  and 45<sup>o</sup>",
        "$10\\,\\Omega$ and tan<sup>$-$1</sup>$\\left( {{8 \\over 3}} \\right)$",
        "$7\\,\\Omega$ and tan<sup>$-$1</sup>$\\left( {{5 \\over 3}} \\right)$"
    ],
    "correct": 1,
    "solution": "<p>It is given that e<sub>0</sub> = 283 V; $\\omega$ = 320.</p>\n<p>The inductor reactance is X<sub>L</sub> = 320$\\times$ 25$\\times$ 10<sup>$-$3</sup> = 8$\\Omega$</p>\n<p>The capacitor reactance is</p>\n<p>${X_C} = {1 \\over {\\omega C}} = {1 \\over {320 \\times 1000 \\times {{10}^{ - 6}}}} = {{1000} \\over {320}} = 3.1\\,\\Omega$</p>\n<p>It is given that R = 5$\\Omega$. Therefore, the total impedance is</p>\n<p>$Z = \\sqrt {{R^2} + {{({X_L} - {X_C})}^2}}  = \\sqrt {50}  = 7\\,\\Omega$</p>\n<p>and the phase difference between the voltage across the source and the current is</p>\n<p>$\\tan \\phi  = {{{X_L} - {X_C}} \\over R} = {{8 - 3.1} \\over 5} \\approx 1 \\Rightarrow \\theta  = 45^\\circ$</p>",
    "id": 441
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "In an a.c. circuit, the instantaneous e.m.f. and current are given by <br/>\ne = 100 sin 30 t<br/>\ni = 20 sin$\\left( {30t - {\\pi \\over 4}} \\right)$<br/>\nIn one cycle of a.c., the average power consumed by the circuit and the wattless current are, respectively",
    "options": [
        "50, 0",
        "50, 10",
        "${{1000} \\over {\\sqrt{2} }},10$",
        "${{50} \\over {\\sqrt{2} }}$"
    ],
    "correct": 2,
    "solution": "Wattless current,\n<br><br>here &nbsp;$\\phi$ &nbsp;is the angle between i and e.\n<br><br>Average power,\n<br><br>P<sub>av</sub> = V<sub>rms</sub>&nbsp;I<sub>rms</sub>&nbsp;cos$\\phi$\n<br><br>= ${{100} \\over {\\sqrt{2} }} \\times {{20} \\over {\\sqrt{2} }}$ cos${\\pi \\over 4}$\n<br><br>= ${{1000} \\over {\\sqrt{2} }}$ watt.",
    "id": 442
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "An ideal capacitor of capacitance$0.2\\,\\mu F$ is charged to a potential difference of$10 V.$ The charging battery is then disconnected. The capacitor is then connected to an ideal inductor of self inductance$0.5 mH.$ The current at a time when the potential difference across the capacitor is$5 V,$ is :",
    "options": [
        "$0.34\\,\\,A$",
        "$0.25\\,\\,A$",
        "$0.17\\,\\,A$",
        "$0.15\\,\\,A$"
    ],
    "correct": 2,
    "solution": "Capacitance, C = 0.2$\\mu$F = 0.2$ \\times$ 10<sup>$-$6</sup> F\n<br><br>Inductance, L = 0.5 m H = 0.5  $ \\times$ 10<sup>$-$3</sup> H\n<br><br>Let, current = I.\n<br><br>Using energy conservation,  \n<br><br>U<sub>E</sub> + 0 = U<sub>E</sub><sup>'</sup> + U<sub>b</sub><sup>'</sup> \n<br><br>$ \\Rightarrow$\\,\\,\\,\\, {1 \\over 2}$ cv<sup>2</sup> + 0 = ${1 \\over 2}$ c$v_1^2$ + ${1 \\over 2}$LI<sup>2</sup>\n<br><br>$ \\Rightarrow$\\,\\,\\,\\, {1 \\over 2}  \\times$ 0.2$ \\times$  10<sup>$-$6</sup> $ \\times$ 10<sup>2</sup>\n<br><br>= ${1 \\over 2} \\times$ 0.2$ \\times$ 10<sup>$-$6</sup> $ \\times$ 5<sup>2</sup> + ${1 \\over 2}  \\times$ 0.5$ \\times$ 10<sup>$-$3</sup> $ \\times$ I<sup>2</sup>\n<br><br>By solving this, \n<br><br>I = $\\sqrt{3}  \\times$ 10<sup>$-$1</sup> A \n<br><br>= 0.17 A.",
    "id": 443
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "A circuit connected to an ac source of emf\ne = e<sub>0</sub>sin(100t) with t in seconds, gives a phase\ndifference of$\\pi$/4 between the emf e and\ncurrent i. Which of the following circuits will\nexhibit this ?",
    "options": [
        "RC circuit with R = 1 k$\\Omega$ and C = 1μF",
        "RL circuit with R = 1k$\\Omega$ and L = 1mH",
        "RC circuit with R = 1k$\\Omega$ and C = 10 μF",
        "RL circuit with R = 1 k$\\Omega$ and L = 10 mH"
    ],
    "correct": 2,
    "solution": "Given phase difference = ${\\pi  \\over 4}$ and$\\omega$ = 100 rad/s<br><br>\n$ \\Rightarrow$ Reactance (X) = Resistance (R)\nNow by checking option. <br><br>\nOption (A)<br>\nR = 1000$\\Omega$ and X<sub>c</sub>  = ${1 \\over {{{10}^{ - 6}} \\times 100}} = {10^4}\\Omega$<br><br>\nOption (B)<br>\nR = 10<sup>3</sup> $\\Omega$ and X<sub>L</sub>  = ${10^{ - 3}} \\times 100 = 10^{-1} \\Omega$<br><br>\nOption (C)<br>\nR = 10<sup>3</sup> $\\Omega$ and X<sub>c</sub>  = ${1 \\over {{10 \\times {10}^{ - 6}} \\times 100}} = {10^3}\\Omega$<br><br>\nOption (D)<br>\nR = 10<sup>3</sup> $\\Omega$ and X<sub>L</sub>  = $10 \\times {10^{ - 3}} \\times 100 = 1\\Omega$",
    "id": 444
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "An alternating voltage v(t) = 220 sin 100$\\pi$t volt\nis applied to a purely resistance load of 50$\\Omega$ .\nThe time taken for the current to rise from half\nof the peak value to the peak value is :",
    "options": [
        "5 ms",
        "2.2 ms",
        "3.3 ms",
        "7.2 ms"
    ],
    "correct": 2,
    "solution": "3.3 ms",
    "id": 445
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "A series AC circuit containing an inductor (20 mH), a capacitor (120$\\mu$F) and a resistor (60$\\Omega$) is driven by an AC source of 24V/50 Hz. The energy dissipated in the circuit in 60 s is :",
    "options": [
        "5.65$ \\times$ 10<sup>2</sup>J",
        "2.26$ \\times$ 10<sup>3</sup>J",
        "5.17$ \\times$ 10<sup>2</sup> J",
        "3.39$ \\times$ 10<sup>3</sup> J"
    ],
    "correct": 2,
    "solution": "5.17$ \\times$ 10<sup>2</sup> J",
    "id": 446
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "An inductance coil has a reactance of 100$\\Omega$.\nWhen an AC signal of frequency 1000 Hz is\napplied to the coil, the applied voltage leads\nthe current by 45<sup>o</sup>. The self-inductance of the\ncoil is",
    "options": [
        "6.7$ \\times$ 10<sup>–7</sup> H",
        "1.1$ \\times$ 10<sup>–1</sup> H",
        "5.5$ \\times$ 10<sup>–5</sup> H",
        "1.1$ \\times$ 10<sup>–2</sup> H"
    ],
    "correct": 3,
    "solution": "1.1$ \\times$ 10<sup>–2</sup> H",
    "id": 447
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "A 750 Hz, 20 V (rms) source is connected to a\nresistance of 100$\\Omega$, an inductance of 0.1803 H\nand a capacitance of 10$\\mu$F all in series. The\ntime in which the resistance (heat capacity\n2 J/<sup>o</sup>C) will get heated by 10<sup>o</sup>C. (assume no loss\nof heat to the surroudnings) is close to :",
    "options": [
        "348 s",
        "418 s",
        "245 s",
        "365 s"
    ],
    "correct": 0,
    "solution": "348 s",
    "id": 448
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "An LCR circuit contains resistance of 110$\\Omega$ and a supply of 220 V at 300 rad/s angular frequency. If only capacitance is removed from the circuit, current lags behind the voltage by 45$^\\circ$. If on the other hand, only inductor is removed the current leads by 45$^\\circ$ with the applied voltage. The rms current flowing in the circuit will be :",
    "options": [
        "1 A",
        "2.5 A",
        "2 A",
        "1.5 A"
    ],
    "correct": 2,
    "solution": "2 A",
    "id": 449
},
  {
    "chapter": "Alternating Current",
    "topic": "ac-circuits-and-power-in-ac-circuits",
    "question": "Match List I with List II.<br/><br/><table>\n<thead>\n<tr>\n<th></th>\n<th>List I</th>\n<th></th>\n<th>List II</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>(a)</td>\n<td>Rectifier</td>\n<td>(i)</td>\n<td>Used either for stepping up or stepping down the a.c. voltage</td>\n</tr>\n<tr>\n<td>(b)</td>\n<td>Stabilizer</td>\n<td>(ii)</td>\n<td>Used to convert a.c. voltage into d.c. voltage</td>\n</tr>\n<tr>\n<td>(c)</td>\n<td>Transformer</td>\n<td>(iii)</td>\n<td>Used to remove any ripple in the rectified output voltage</td>\n</tr>\n<tr>\n<td>(d)</td>\n<td>Filter</td>\n<td>(iv)</td>\n<td>Used for constant output voltage even when the input voltage or load current change</td>\n</tr>\n</tbody>\n</table><br/><br/>Choose the correct answer from the options given below :",
    "options": [
        "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
        "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)",
        "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)",
        "(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)"
    ],
    "correct": 0,
    "solution": "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)",
    "id": 450
},
  {
    "id": 451,
    "question": "In the given A.C. circuit, if battery voltage is $V = 200\\sqrt{2}sin(100\\pi t)$, power delivered by battery will have a power factor of",
    "options": [
      "$\\frac{1}{2}$",
      "$\\sqrt{\\frac{3}{10}}$",
      "$\\frac{3}{\\sqrt{10}}$",
      "$\\frac{1}{\\sqrt{10}}$"
    ],
    "correct": 2,
    "solution": "(c)\n\n$i_{1} = \\frac{200\\sqrt{2}}{\\sqrt{30^{2} + 40^{2}}}sin(\\omega t - \\tan^{- 1}(\\frac{40}{30}))$\n$= 4\\sqrt{2}sin(100\\pi t - 53^{\\circ})$\nPhasor diagram\n$\\Rightarrow tan\\theta = \\frac{R_{y}}{R_{x}} = \\frac{1}{3} \\Rightarrow cos\\theta = \\frac{3}{\\sqrt{10}}$\n\n\n[!info]- Figure data (TikZ rebuilt)",
    "chapter": "AC",
    "topic": "JEE Main 2017 PYQ"
  },
  {
    "id": 452,
    "question": "Imagine that a reactor converts all given mass into energy and that it operates at a power level of 109 watt. The mass of the fuel consumed per hour in the reactor will be : (velocity of light, c is 3$×$108 m/s)",
    "options": [
      "0.96 gm",
      "0.8 gm",
      "4 $ \\times $ 10$-$2 gm",
      "6.6 $ \\times $ 10$-$5 gm"
    ],
    "correct": 2,
    "solution": "The power can be calculated by the relation\n$P = {E \\over {\\Delta t}} = {{\\Delta m{c^2}} \\over {\\Delta t}}$ ...... (1)\nTherefore, from Eq. (1), the mass of the fuel consumed per hour in the reactor is\n${{\\Delta m} \\over {\\Delta t}} = {P \\over {{c^2}}} = {{{{10}^9}} \\over {{{(3 \\times {{10}^8})}^2}}} = 4 \\times {10^{ - 12}}$ g",
    "chapter": "Atoms and Nuclei",
    "topic": "JEE Main 2017 PYQ"
  },
  {
    "id": 453,
    "question": "Distance of the center of mass of a solid uniform cone from its vertex is$z{}\\_0$. If the radius of its base is$R$ and its height is$h$ then$z{}\\_0$ is equal to :",
    "options": [
      "${{5h} \\over 8}$",
      "${{3{h\\^2}} \\over {8R}}$",
      "${{{h\\^2}} \\over {4R}}$",
      "${{3h} \\over 4}$"
    ],
    "correct": 3,
    "solution": "Let the density of solid cone$\\rho$. $dm = \\rho \\pi {r\\^2}dy {y_{cm}} = {{\\int {ydm} } \\over {\\int {dm} }}  = {{\\int\\limits\\_0\\^h {\\pi {r\\^2}} dy\\rho \\times y} \\over {{1 \\over 3}\\pi {R\\^2}h\\rho }}  = {{3h} \\over 4}$",
    "chapter": "Center of Mass",
    "topic": "JEE Main 2015 PYQ"
  },
  {
    "id": 454,
    "question": "A car is moving with a constant speed of 20 m/s in a circular horizontal track of radius 40 m. A bob is suspended from the roof of the car by a massless string. The angle made by the string with the vertical will be : (Take g = 10 m/s$^2$)",
    "options": [
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{6}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{3}$"
    ],
    "correct": 2,
    "solution": "In car’s frame, FBD of bob\nwhere$a_{P}=$ Pseudoforce or centrifugal force\n$\\theta=\\tan ^{-1}\\left(\\frac{a_{P}}{g}\\right)=\\tan ^{-1}\\left(\\frac{v^{2}}{R g}\\right)=\\tan ^{-1}\\left(\\frac{400}{40 \\times 10}\\right) =45^{\\circ}$",
    "chapter": "Circular Motion",
    "topic": "JEE Main 2023 PYQ"
  },
  {
    "id": 455,
    "question": "In AM modulation, a signal is modulated on a carrier wave such that maximum and minimum amplitudes are found to be 6 V and 2 V respectively. The modulation index is :",
    "options": [
      "100%",
      "80%",
      "60%",
      "50%"
    ],
    "correct": 3,
    "solution": "Amax = 6 V\nAmin = 2 V\n$\\mu  = {{{A_{\\max }} - {A_{\\min }}} \\over {{A_{\\max }} + {A_{\\min }}}} = {{6 - 2} \\over {6 + 2}} = 0.5$\n$\\mu  = 50\\% $",
    "chapter": "Communication Systems",
    "topic": "JEE Main 2022 PYQ"
  },
  {
    "id": 456,
    "question": "The resistance of a wire is 5$\\Omega$. It's new resistance in ohm if stretched to 5 times of it's original length will be :",
    "options": [
      "25",
      "625",
      "5",
      "125"
    ],
    "correct": 3,
    "solution": "$\n\\mathrm{R}_{\\text {initial }}=\\frac{\\rho \\ell}{A}=5 \\Omega\n$\n$\\because$ Volume of wire is constant in stretching\n$\n\\begin{aligned}\n&amp; \\mathrm{V}_{\\mathrm{i}}=\\mathrm{V}_{\\mathrm{f}} \\\\\\\\\n&amp; \\mathrm{A}_{\\mathrm{i}} \\ell_{\\mathrm{i}}=\\mathrm{A}_{\\mathrm{f}} \\ell_{\\mathrm{f}} \\\\\\\\\n&amp; \\mathrm{A} \\ell=\\mathrm{A}^{\\prime}(5 \\ell) \\\\\\\\\n&amp; \\mathrm{A}^{\\prime}=\\frac{\\mathrm{A}}{5} \\\\\\\\\n&amp; \\mathrm{R}_{\\mathrm{f}}=\\frac{\\rho \\ell_{\\mathrm{f}}}{\\mathrm{A}_{\\mathrm{f}}}=\\frac{\\rho(5 \\ell)}{\\left(\\frac{\\mathrm{A}}{5}\\right)} \\\\\\\\\n&amp; =25\\left(\\frac{\\rho \\ell}{\\mathrm{A}}\\right) \\\\\\\\\n&amp; =25 \\times 5=125 \\Omega\n\\end{aligned}\n$",
    "chapter": "Current Electricity",
    "topic": "JEE Main 2023 PYQ"
  },
  {
    "id": 457,
    "question": "The threshold frequency of a metal is$f_{0}$. When the light of frequency$2 f_{0}$ is incident on the metal plate, the maximum velocity of photoelectrons is$v_{1}$. When the frequency of incident radiation is increased to$5 \\mathrm{f}_{0}$, the maximum velocity of photoelectrons emitted is$v_{2}$. The ratio of$v_{1}$ to$v_{2}$ is :",
    "options": [
      "$\\frac{v_{1}}{v_{2}}=\\frac{1}{2}$",
      "$\\frac{v_{1}}{v_{2}}=\\frac{1}{16}$",
      "$\\frac{v_{1}}{v_{2}}=\\frac{1}{4}$",
      "$\\frac{v_{1}}{v_{2}}=\\frac{1}{8}$"
    ],
    "correct": 0,
    "solution": "$\n\\begin{aligned}\n& \\frac{1}{2} m v^2=h f-h f_0 \\\\\\\\\n& \\Rightarrow \\frac{1}{2} m v_1^2=2 h f_0-h f_0=h f_0 \\\\\\\\\n& \\text { also, } \\frac{1}{2} m v_2^2=5 h f_0-h f_0=4 h f_0\n\\end{aligned}\n$\ntaking ratio,\n$\n\\frac{v_1^2}{v_2^2}=\\frac{1}{4} \\Rightarrow \\frac{v_1}{v_2}=\\frac{1}{2}\n$",
    "chapter": "Dual Nature of Radiation",
    "topic": "JEE Main 2023 PYQ"
  },
  {
    "id": 458,
    "question": "If the electric flux entering and leaving an enclosed surface respectively is${\\phi _1}$ and${\\phi _2},$ the electric charge inside the surface will be",
    "options": [
      "$\\left( {{\\phi _2} - {\\phi _1}} \\right){\\varepsilon _0}$",
      "$\\left( {{\\phi _2} + {\\phi _1}} \\right)/{\\varepsilon _0}$",
      "$\\left( {{\\phi _1} - {\\phi _2}} \\right)/{\\varepsilon _0}$",
      "$\\left( {{\\phi _1} + {\\phi _2}} \\right){\\varepsilon _0}$"
    ],
    "correct": 0,
    "solution": "The flux entering an enclosed surface is taken as negative and the flux leaving the surface is taken as positive, by convention. Therefore the net flux leaving the enclosed surface$ = {\\phi _2} - {\\phi _1}$\n$\\therefore$ the change enclosed in the surface  by Gauss's law is$q = { \\varepsilon _0}\\,\\left( {{\\phi _2} - {\\phi _1}} \\right)$",
    "chapter": "Electrostatics",
    "topic": "JEE Main 2003 PYQ"
  },
  {
    "id": 459,
    "question": "Assertion A : Enol form of acetone [CH3COCH3] exists in < 0.1% quantity. However, the enol form of acetyl acetone [CH3COCH2OCCH3] exists in approximately 15% quantity.Reason R : Enol form of acetyl acetone is stabilized by intramolecular hydrogen bonding, which is not possible in enol form of acetone.Choose the correct statement :",
    "options": [
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
      "Both A and R are true and R is the correct explanation of A"
    ],
    "correct": 3,
    "solution": "Acetyl acetone in enol form have intramolecular\nH-bonding, which is absent in acetone.",
    "chapter": "Aldehydes Ketones and Carboxylic Acids",
    "topic": "JEE Main 2021 PYQ"
  },
  {
    "id": 460,
    "question": "CH3Br + Nu- $\\to$ CH3 - Nu + Br- The decreasing order of the rate of the above reaction with nucleophiles (Nu) A to D is [Nu = (A) PhO, (B) AcO, (C) HO, (D) CH3O]",
    "options": [
      "A > B > C > D",
      "B > D > C > A",
      "D > C > A > B",
      "D > C > B > A"
    ],
    "correct": 2,
    "solution": "TIPS/Formulae : The stronger the acid, the weaker the conjugate base formed. The acid character follows the order : $C{H\\_3}COOH\n{C\\_6}{H\\_5}OH\n{H\\_2}O\nC{H\\_3}OH$ The basic character will follow the order$C{H\\_3}CO{O^ - } < {C\\_6}{H\\_5}{O^ - } < {O^ - }H < C{H\\_3}{O^ - }$",
    "chapter": "Basics of Organic Chemistry",
    "topic": "JEE Main 2006 PYQ"
  },
  {
    "id": 461,
    "question": "Due to the presence of an unpaired electron, free radicals are:",
    "options": [
      "Chemically reactive",
      "Chemically inactive",
      "Anions",
      "Cations"
    ],
    "correct": 0,
    "solution": "Free radicals are electrically neutral, unstable and very reactive on account of the presence of odd electrons.",
    "chapter": "Basics of Organic Chemistry",
    "topic": "JEE Main 2005 PYQ"
  },
  {
    "id": 462,
    "question": "Given below are two statements : Statement I : $\\mathrm{SO}_{2}$ and$\\mathrm{H}_{2} \\mathrm{O}$ both possess V-shaped structure. Statement II : The bond angle of$\\mathrm{SO}_{2}$ is less than that of$\\mathrm{H}_{2} \\mathrm{O}$. In the light of the above statements, choose the most appropriate answer from the options given below:",
    "options": [
      "Both Statement I and Statement II are incorrect",
      "Both Statement I and Statement II are correct",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correct": 2,
    "solution": "Statement I: Both SO and HO have a V-shaped (or bent) molecular structure. SO has a central sulfur atom with two oxygen atoms and one lone pair, while HO has a central oxygen atom with two hydrogen atoms and two lone pairs. In both cases, the repulsion between the lone pairs and the bonded electron pairs leads to a V-shaped structure. Statement II: The bond angle in HO is approximately 104.5^{\\circ} due to the tetrahedral arrangement of electron pairs (including the lone pairs) around the central oxygen atom. In SO, the bond angle is approximately 119^{\\circ}. The presence of a lone pair and the double bonds in SO results in a different electron distribution, leading to a larger bond angle compared to HO.",
    "chapter": "Chemical Bonding and Molecular Structure",
    "topic": "JEE Main 2023 PYQ"
  },
  {
    "id": 463,
    "question": "For the reaction SO2 (g) + ${1 \\over 2} O_2(g) \\leftrightharpoons$ SO3(g). if KP = KC(RT)x where the symbols have usual meaning then the value of x is: (assuming ideality)",
    "options": [
      "-1",
      "-1/2",
      "1/2",
      "1"
    ],
    "correct": 1,
    "solution": "$S{O_2}\\left( g \\right) + {1 \\over 2}{O_2}\\left( g \\right)\\,\\rightleftharpoons\\,S{O_3}\\left( g \\right)$\n${K_p} = {K_C}{\\left( {RT} \\right)^x}$ \nwhere$x = \\Delta {n_g} = $ number of gaseous moles in product \n$\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\, -$ number of gaseous moles in reactant \n$ = 1 - \\left( {1 + {1 \\over 2}} \\right)$ \n$ = 1 - {3 \\over 2} =  - {1 \\over 2}$",
    "chapter": "Chemical Equilibrium",
    "topic": "JEE Main 2014 PYQ"
  },
  {
    "id": 464,
    "question": "The half life period of a first order chemical reaction is 6.93 minutes. The time required for the completion of 99% of the chemical reaction will be (log 2=0.301) :",
    "options": [
      "230.3 minutes",
      "23.03 minutes",
      "46.06 minutes",
      "460.6 minutes"
    ],
    "correct": 2,
    "solution": "For first order reaction\n$k = {{2.303} \\over t}\\log {{100} \\over {100 - 99}}$\n${{0.693} \\over {6.93}} = {{2.303} \\over t}\\log {{100} \\over 1}$\n${{0.693} \\over {6.93}} = {{2.303 \\times 2} \\over t}$\n$ \\Rightarrow t = 46.06\\min$",
    "chapter": "Chemical Kinetics and Nuclear Chemistry",
    "topic": "JEE Main 2009 PYQ"
  },
  {
    "id": 465,
    "question": "The correct order of energy of absorption for the following metal complexes is : A : [Ni(en)3]2+ , B : [Ni(NH3)6]2+ , C : [Ni(H2O)6]2+",
    "options": [
      "C < B < A",
      "B < C < A",
      "C < A < B",
      "A < C < B"
    ],
    "correct": 0,
    "solution": "Stronger is ligand attached to metal ion, greater will be the splitting between$\\mathrm{t}_{2} \\mathrm{g}$ and$e_g$ (hence greater will be$\\Delta \\mathrm{U})  \\therefore$ Greater will be absorption of energy. Hence correct order\n$\\left[\\mathrm{Ni}(\\mathrm{en})_{3}\\right]^{2+}>\\left[\\mathrm{Ni}\\left(\\mathrm{NH}_{3}\\right)_{6}\\right]^{2+}>\\left[\\mathrm{Ni}\\left(\\mathrm{H}_{2} \\mathrm{O}\\right)_{6}\\right]^{2+}$",
    "chapter": "Coordination Compounds",
    "topic": "JEE Main 2022 PYQ"
  },
  {
    "id": 466,
    "question": "The IUPAC name of the coordination compound K3[Fe(CN)6] is",
    "options": [
      "Potassium hexacyanoferrate (II)",
      "Potassium hexacyanoferrate (III)",
      "Potassium hexacyanoiron (II)",
      "Tripotassium hexcyanoiron (II)"
    ],
    "correct": 1,
    "solution": "${K_3}\\left[ {Fe{{\\left( {CN} \\right)}_6}} \\right]\\,\\,\\,$ is potassium hexacyano ferrate$\\left( {{\\rm I}{\\rm I}{\\rm I}} \\right).$",
    "chapter": "Coordination Compounds",
    "topic": "JEE Main 2005 PYQ"
  },
  {
    "id": 467,
    "question": "The equation of the line passing through (-4, 3, 1), parallel to the plane x+2y-z-5=0 and intersecting the line$\\frac{x + 1}{- 3} = \\frac{y - 3}{2} = \\frac{z - 2}{- 1}$ is",
    "options": [
      "$\\frac{x + 4}{1} = \\frac{y - 3}{1} = \\frac{z - 1}{3}$",
      "$\\frac{x + 4}{3} = \\frac{y - 3}{- 1} = \\frac{z - 1}{1}$",
      "$\\frac{x + 4}{- 1} = \\frac{y - 3}{1} = \\frac{z - 1}{1}$",
      "$\\frac{x - 4}{2} = \\frac{y + 3}{1} = \\frac{z + 1}{4}$"
    ],
    "correct": 1,
    "solution": "Let the point of intersection with the line be\n$( - 3\\lambda - 1,2\\lambda + 3, - \\lambda + 2)$\nHence direction ratio of the line is\n$( - 3\\lambda + 3,2\\lambda, - \\lambda + 1)$\nSince this line is parallel to x+2y - z = 5\nSo$\\begin{matrix}\nv_{1} \\cdot v_{2} = 0\\ \\ \\ \\ \\Rightarrow \\ \\ \\ \\ - 3\\lambda + 3 + \\lambda + \\lambda - 1 = 0 \\Rightarrow \\ \\ \\ \\ 2\\lambda + 2 = 0 \\Rightarrow \\lambda = - 2\n\\end{matrix}$\nHence direction ratio 6,-2,2 so\nline$\\frac{x + 4}{3} = \\frac{y - 3}{- 1} = \\frac{z - 1}{1}$",
    "chapter": "3D",
    "topic": "JEE Main PYQ"
  },
  {
    "id": 468,
    "question": "Consider a$\\triangle A B C$ where$A(1,3,2), B(-2,8,0)$ and$C(3,6,7)$. If the angle bisector of$\\angle B A C$ meets the line$B C$ at$D$, then the length of the projection of the vector$\\overrightarrow{A D}$ on the vector$\\overrightarrow{A C}$ is :",
    "options": [
      "$\\frac{37}{2 \\sqrt{38}}$",
      "$\\sqrt{19}$",
      "$\\frac{39}{2 \\sqrt{38}}$",
      "$\\frac{\\sqrt{38}}{2}$"
    ],
    "correct": 0,
    "solution": "$D$ divides$B C$ in ratio$1: 1$\n$\nD:\\left(\\frac{1}{2}, 7, \\frac{7}{2}\\right)\n$\n$\\begin{aligned} &amp; \\overrightarrow{A D}=\\left(\\frac{1}{2}-1\\right) \\hat{i}+(7-3) \\hat{j}+\\left(\\frac{7}{2}-2\\right) \\hat{k} \\\\\\\\ &amp; =-\\frac{1}{2} \\hat{i}+4 \\hat{j}+\\frac{3}{2} \\hat{k} \\\\\\\\ &amp; \\overrightarrow{A C}=2 \\hat{i}+3 \\hat{j}+5 \\hat{k}\\end{aligned}$\nProjection of$\\overrightarrow{A D}$ on$\\overrightarrow{A C}$\n$\n=\\frac{-1+12+\\frac{15}{2}}{\\sqrt{4+9+25}}=\\frac{37}{2 \\sqrt{38}}\n$",
    "chapter": "3D Geometry",
    "topic": "JEE Main 2024 PYQ"
  },
  {
    "id": 469,
    "question": "If the foot of the perpendicular drawn from (1, 9, 7) to the line passing through the point (3, 2, 1) and parallel to the planes$x+2y+z=0$ and$3y-z=3$ is ($\\alpha,\\beta,\\gamma$), then$\\alpha+\\beta+\\gamma$ is equal to :",
    "options": [
      "3",
      "1",
      "$-$1",
      "5"
    ],
    "correct": 3,
    "solution": "Direction of line\n$\n\\begin{aligned}\n\\vec{b} & =\\left|\\begin{array}{ccc}\n\\hat{i} & \\hat{j} & \\hat{k} \\\\\n1 & 2 & 1 \\\\\n0 & 3 & -1\n\\end{array}\\right| \\\\\\\\\n& =\\hat{i}(-5)-\\hat{j}(-1)+\\hat{k}(3) \\\\\\\\\n& =-5 \\hat{i}+\\hat{j}+3 \\hat{k}\n\\end{aligned}\n$\nEquation of line\n$\n\\frac{x-3}{-5}=\\frac{y-2}{1}=\\frac{z-1}{3}\n$\nLet foot of perpendicular be$=(-5 k+3, k+2,3 k+1)$\n$\\Rightarrow(-5 k+2)(-5)+(k-7)(1)+(3 k-6)(3)=0$\nOr$25 k-10+k-7+9 k-18=0$\nOr$k=1$\n$\\alpha+\\beta+\\gamma=-k+6=5$",
    "chapter": "3D Geometry",
    "topic": "JEE Main 2023 PYQ"
  },
  {
    "id": 470,
    "question": "Let$f:R \\to R$ be defined by f\\left( x \\right) = \\left\\{ {\\matrix{ {k - 2x,\\,\\,if} & {x \\le - 1} \\cr {2x + 3,\\,\\,if} & {x > - 1} \\cr } } \\right. If$f$has a local minimum at$x=-1$, then a possible value of$k$ is",
    "options": [
      "$0$",
      "$ - {1 \\over 2}$",
      "$-1$",
      "$1$"
    ],
    "correct": 2,
    "solution": "$f\\left( x \\right) = \\left\\{ {\\matrix{\n   {k - 2x,\\,\\,\\,\\,if\\,\\,\\,\\,x \\le  - 1}  \\cr \n   {2x + 3,\\,\\,\\,\\,if\\,\\,\\,\\,x &gt;  - 1}  \\cr \n } } \\right.$\nThis is true where$k=-1$",
    "chapter": "Application of Derivatives",
    "topic": "JEE Main 2010 PYQ"
  },
  {
    "id": 471,
    "question": "A function$y=f(x)$ has a second order derivative$f''\\left( x \\right) = 6\\left( {x - 1} \\right).$ If its graph passes through the point$(2, 1)$ and at that point the tangent to the graph is$y = 3x - 5$, then the function is :",
    "options": [
      "${\\left( {x + 1} \\right)^2}$",
      "${\\left( {x - 1} \\right)^3}$",
      "${\\left( {x + 1} \\right)^3}$",
      "${\\left( {x - 1} \\right)^2}$"
    ],
    "correct": 1,
    "solution": "$f''\\left( x \\right) = 6\\left( {x - 1} \\right).$ Inegrating, \nwe get$f'\\left( x \\right) = 3{x^2} - 6x + c$\nSlope at  $\\left( {2,1} \\right) = f'\\left( 2 \\right) = c = 3$\n$\\left[ {\\,\\,} \\right.$ As slope of tangent at$(2, 1)$ is$3 \\left. {\\,\\,} \\right]$\n$\\therefore f'\\left( x \\right) = 3{x^2} - 6x + 3 = 3{\\left( {x - 1} \\right)^2}$\nInegrating again, we get \n$f\\left( x \\right) = {\\left( {x - 1} \\right)^3} + D$\nThe curve passes through$(2,1)$ \n$ \\Rightarrow 1 = {\\left( {2 - 1} \\right)^3} + D \\Rightarrow D = 0$\n$\\therefore f\\left( x \\right) = {\\left( {x - 1} \\right)^3}$",
    "chapter": "Application of Derivatives",
    "topic": "JEE Main 2004 PYQ"
  },
  {
    "id": 472,
    "question": "If the area of the region$\\left\\{(x, y): \\frac{\\mathrm{a}}{x^2} \\leq y \\leq \\frac{1}{x}, 1 \\leq x \\leq 2,0<\\mathrm{a}<1\\right\\}$ is$\\left(\\log _{\\mathrm{e}} 2\\right)-\\frac{1}{7}$ then the value of$7 \\mathrm{a}-3$ is equal to :",
    "options": [
      "1",
      "0",
      "2",
      "$-$1"
    ],
    "correct": 3,
    "solution": "$\\left\\{(x, y): \\frac{a}{x^2} \\leq y \\leq \\frac{1}{x}, 1 \\leq x \\leq 2,0< a<1\\right\\}$\n$ \\Rightarrow \\int\\limits_1^2 {\\left( {{1 \\over x} - {a \\over {{x^2}}}} \\right)dx = \\left| {\\ln |x| + {a \\over x}} \\right|_1^2}$\n$\\begin{aligned}\n& \\left(\\ln 2+\\frac{a}{2}\\right)-(\\ln 1+a)=\\ln 2-\\frac{a}{2} \\\\\n& \\Rightarrow \\quad \\frac{a}{2}=\\frac{1}{7} \\\\\n& \\Rightarrow \\quad a=\\frac{2}{7} \\\\\n& \\quad 7 a-3=\\frac{2}{7} \\times 7-3=-1\n\\end{aligned}$",
    "chapter": "Area Under the Curves",
    "topic": "JEE Main 2024 PYQ"
  },
  {
    "id": 473,
    "question": "The differential equation of the family of circles with fixed radius$5$ units and centre on the line$y = 2$ is :",
    "options": [
      "$\\left( {x - 2} \\right){y^2} = 25 - {\\left( {y - 2} \\right)^2}$",
      "$\\left( {y - 2} \\right){y^2} = 25 - {\\left( {y - 2} \\right)^2}$",
      "${\\left( {y - 2} \\right)^2}{y^2} = 25 - {\\left( {y - 2} \\right)^2}$",
      "${\\left( {x - 2} \\right)^2}{y^2} = 25 - {\\left( {y - 2} \\right)^2}$"
    ],
    "correct": 2,
    "solution": "Let the center of the circle be$(h, 2)$\n$\\therefore$ Equation of circle is \n${\\left( {x - h} \\right)^2} + \\left( {y - 2} \\right){}^2 = 25\\,\\,\\,\\,\\,\\,\\,\\,\\,...\\left( 1 \\right)$\nDifferentiating with respect to$x,$ we get \n$2\\left( {x - h} \\right) + 2\\left( {y - 2} \\right){{dy} \\over {dx}} = 0$\n$ \\Rightarrow x - h =  - \\left( {y - 2} \\right){{dy} \\over {dx}}$\nSubstituting in equation$(1)$ we get\n${\\left( {y - 2} \\right)^2}{\\left( {{{dy} \\over {dx}}} \\right)^2} + {\\left( {y - 2} \\right)^2} = 25$\n$ \\Rightarrow {\\left( {y - 2} \\right)^2}{\\left( {y'} \\right)^2} = 25 - {\\left( {y - 2} \\right)^2}$",
    "chapter": "Circle",
    "topic": "JEE Main 2008 PYQ"
  },
  {
    "id": 474,
    "question": "Let the tangents at two points$\\mathrm{A}$ and$\\mathrm{B}$ on the circle$x^{2}+\\mathrm{y}^{2}-4 x+3=0$ meet at origin$\\mathrm{O}(0,0)$. Then the area of the triangle$\\mathrm{OAB}$ is :",
    "options": [
      "$\\frac{3 \\sqrt{3}}{2}$",
      "$\\frac{3 \\sqrt{3}}{4}$",
      "$\\frac{3}{2 \\sqrt{3}}$",
      "$\\frac{3}{4 \\sqrt{3}}$"
    ],
    "correct": 1,
    "solution": "${x^2} + {y^2} - 4x + 3 = 0$\n$ \\Rightarrow {(x - 2)^2} + {y^2} = 1$\n$AO = \\sqrt {{{(OC)}^2} - {{(AC)}^2}}$\n$ = \\sqrt {4 - 1}  = \\sqrt 3$\n$\\sin \\theta  = {1 \\over 2} \\Rightarrow \\theta  = {\\pi  \\over 6}$\nAlso, $AO = BO$\nArea of$\\Delta OAB = {1 \\over 2}\\,.\\,OA\\,.\\,OB\\sin 60^\\circ$\n$ = {1 \\over 2} \\times \\sqrt 3 \\,.\\,\\sqrt 3 \\,.\\,{{\\sqrt 3 } \\over 2} = {{3\\sqrt 3 } \\over 4}$",
    "chapter": "Circle",
    "topic": "JEE Main 2022 PYQ"
  },
  {
    "id": 475,
    "question": "A hypothetical gas expands adiabatically such that its volume changes from 08 litres to 27 litres. If the ratio of final pressure of the gas to initial pressure of the gas is$\\frac{16}{81}$. Then the ratio of$\\frac{\\mathrm{Cp}}{\\mathrm{Cv}}$ will be.",
    "options": [
      "$\\frac{3}{1}$",
      "$\\frac{4}{3}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{2}$"
    ],
    "correct": 1,
    "solution": "(b)\nLet$\\gamma$ be the ratio of$\\frac{C_{p}}{C_{v}}$\n\nThen for adiabatic process\n\n$\n\\begin{aligned}\n& P V^{\\gamma}=\\text { Constant } \\\\\\\\\n& \\Rightarrow \\frac{P_{i}}{P_{f}}=\\left(\\frac{V_{f}}{V_{i}}\\right)^{\\gamma} \\\\\\\\\n& \\Rightarrow \\frac{81}{16}=\\left(\\frac{27}{8}\\right)^{\\gamma} \\\\\\\\\n& \\Rightarrow \\gamma=\\frac{4}{3}\n\\end{aligned}\n$",
    "chapter": "Heat-And-Thermodynamics",
    "topic": "Heat-And-Thermodynamics"
  },
  {
    "id": 476,
    "question": "Two polaroide$\\mathrm{A}$ and$\\mathrm{B}$ are placed in such a way that the pass-axis of polaroids are perpendicular to each other. Now, another polaroid$\\mathrm{C}$ is placed between$\\mathrm{A}$ and$\\mathrm{B}$ bisecting angle between them. If intensity of unpolarized light is$\\mathrm{I}_{0}$ then intensity of transmitted light after passing through polaroid$\\mathrm{B}$ will be:",
    "options": [
      "$\\frac{I_{0}}{4}$",
      "$\\frac{I_{0}}{8}$",
      "Zero",
      "$\\frac{I_{0}}{2}$"
    ],
    "correct": 1,
    "solution": "(b)\n$\\mathrm{I}_{\\mathrm{A}}=\\frac{\\mathrm{I}_{\\mathrm{o}}}{2}$\n\n$\\mathrm{I_C}=\\frac{\\mathrm{I}_{\\mathrm{o}}}{2} \\cos ^{2} 45=\\frac{\\mathrm{I}_{\\mathrm{o}}}{4}$\n\n$\\mathrm{I}_{\\mathrm{B}}=\\mathrm{I}_{\\mathrm{C}} \\cos ^{2} 45=\\frac{\\mathrm{I}_{\\mathrm{o}}}{8}$",
    "chapter": "Wave-Optics",
    "topic": "Wave-Optics"
  },
  {
    "id": 477,
    "question": "Identify the pair of physical quantities which have different dimensions:",
    "options": [
      "Wave number and Rydberg's constant",
      "Stress and Coefficient of elasticity",
      "Coercivity and Magnetisation",
      "Specific heat capacity and Latent heat"
    ],
    "correct": 3,
    "solution": "(d)\n$[S] = {{[C]} \\over {[m] \\times [\\Delta T]}}$\nand, $[L] = {{[Q]} \\over {[m]}}$\n$\\Rightarrow$ They have different dimensions.",
    "chapter": "Units-And-Measurements",
    "topic": "Units-And-Measurements"
  },
  {
    "id": 478,
    "question": "Two discs have moments of inertia I1 and I2 about their respective axes perpendicular to the plane and passing through the centre. They are rotating with angular speeds, $\\omega$1 and$\\omega$2 respectively and are brought into contact face to face with their axes of rotation coaxial. The loss in kinetic energy of the system in the process is given by :",
    "options": [
      "${{{I_1}{I_2}} \\over {({I_1} + {I_2})}}{({\\omega _1} - {\\omega _2})^2}$",
      "${{{{({I_1} - {I_2})}^2}{\\omega _1}{\\omega _2}} \\over {2({I_1} + {I_2})}}$",
      "${{{I_1}{I_2}} \\over {2({I_1} + {I_2})}}{({\\omega _1} - {\\omega _2})^2}$",
      "${{{{({\\omega _1} - {\\omega _2})}^2}} \\over {2({I_1} + {I_2})}}$"
    ],
    "correct": 2,
    "solution": "(c)\nFrom conservation of angular momentum we get${I_1}{\\omega _1} + {I_2}{\\omega _2} = ({I_1} + {I_2})\\omega$\\omega  = {{{I_1}{\\omega _1} + {I_2}{\\omega _2}} \\over {{I_1} + {I_2}}}${k_i} = {1 \\over 2}{I_1}\\omega _1^2 + {1 \\over 2}{I_2}\\omega _2^2${k_f} = {1 \\over 2}({I_1} + {I_2}){\\omega ^2}${k_i} - {k_f} = {1 \\over 2}\\left[ {{I_1}\\omega _1^2 + {I_2}\\omega _2^2 - {{{{({I_1}{\\omega _1} + {I_2}{\\omega _2})}^2}} \\over {{I_1} + {I_2}}}} \\right]$Solving above we get${k_i} - {k_f} = {1 \\over 2}\\left( {{{{I_1}{I_2}} \\over {{I_1} + {I_2}}}} \\right){({\\omega _1} - {\\omega _2})^2}$",
    "chapter": "Rotational-Motion",
    "topic": "Rotational-Motion"
  },
  {
    "id": 479,
    "question": "A uniform electric field and a uniform magnetic field are acting along the same direction in a certain region. If an electron is projected along the direction of the fields with a certain velocity then",
    "options": [
      "its velocity will increase",
      "Its velocity will decrease",
      "it will turn towards left of a direction of motion",
      "it will turn  towards right of direction of motion"
    ],
    "correct": 1,
    "solution": "(b)\nDue to electric field, it experiences force and decelerates i.e. its velocity decreases.",
    "chapter": "Magnetics",
    "topic": "Magnetics"
  },
  {
    "id": 480,
    "question": "A radar has a power of$1kW$ and is operating at a frequency of$10 GHz.$ It is located on a mountain top of height$500 m.$ The maximum distance upto which it can detect object located on the surface of the earth (Radius of earth$ = 6.4 \\times {10\\^6}m$) is :",
    "options": [
      "$80$ $km$",
      "$16$ $km$",
      "$40$ $km$",
      "$64$ $km$"
    ],
    "correct": 0,
    "solution": "(a)\nLet$d$ is the maximum distance, upto it the objects From$\\Delta AOC O{C\\^2} = A{C\\^2} + A{O\\^2} {\\left( {h + R} \\right)\\^2} = {d\\^2} + {R\\^2}  \\Rightarrow {d\\^2} = {\\left( {h + R} \\right)\\^2} - {R\\^2} d = \\sqrt {{{\\left( {h + R} \\right)}\\^2} - {R\\^2}}  d = \\sqrt {{h\\^2} + 2hR}  d = \\sqrt {{{500}\\^2} + 2 \\times 6.4 \\times {{10}\\^6}} = 80km$",
    "chapter": "Communication Systems",
    "topic": "Communication Systems"
  },
  {
    "id": 481,
    "question": "A box weight 196 N on a spring balance at the north pole. Its weight recorded on the same\nbalance if it is shifted to the equator is close to (Take g = 10 ms<sup>–2</sup> at the north pole and the radius\nof the earth = 6400 km) :",
    "options": [
      "194.32 N",
      "195.66 N",
      "195.32 N",
      "194.66 N"
    ],
    "correct": 2,
    "solution": "(c)\nAt equator, weight\n<br><br>W = Mg - M${\\omega ^2}$R\n<br><br>= 196 - $\\left( {19.6} \\right){\\left( {{{2\\pi } \\over {24 \\times 3600}}} \\right)^2} \\times 6400 \\times {10^3}$\n<br><br>= 195.32 N",
    "chapter": "Acceleration Due To Gravity And Its Variation",
    "topic": "Acceleration Due To Gravity And Its Variation"
  },
  {
    "id": 482,
    "question": "If E, L, M and G denote the quantities as energy, angular momentum, mass and constant of gravitation respectively, then the dimensions of P in the formula P = EL2M$-$5G$-$2 are :",
    "options": [
      "[M0 L1 T0]",
      "[M$-$1 L$-$1 T2]",
      "[M1 L1 T$-$2]",
      "[M0 L0 T0]"
    ],
    "correct": 3,
    "solution": "(d)\nE = ML2T$-$2L = ML2T$-$1m = MG = M$-$1L+3T$-$2P = ${{E{L^2}} \\over {{M^5}{G^2}}}$[P] = ${{(M{L^2}{T^{ - 2}})({M^2}{L^4}{T^{ - 2}})} \\over {{M^5}({M^{ - 2}}{L^6}{T^{ - 4}})}} = {M^0}{L^0}{T^0}$",
    "chapter": "Units-And-Measurements",
    "topic": "Units-And-Measurements"
  },
  {
    "id": 483,
    "question": "Group-13 elements react with$\\mathrm{O}_{2}$ in amorphous form to form oxides of type$\\mathrm{M}_{2} \\mathrm{O}_{3}~(\\mathrm{M}=$ element). Which among the following is the most basic oxide?",
    "options": [
      "Al$_2$O$_3$",
      "TI$_2$O$_3$",
      "B$_2$O$_3$",
      "Ga$_2$O$_3$"
    ],
    "correct": 1,
    "solution": "(b)\nAs electropositive character increases basic character of oxide increases.\n$\n\\underbrace{\\mathrm{B}_2 \\mathrm{O}_3}_{\\text {acidic }}<\\underbrace{\\mathrm{Al}_2 \\mathrm{O}_3<\\mathrm{Ga}_2 \\mathrm{O}_3}_{\\text {amphoteric }}<\\underbrace{\\mathrm{In}_2 \\mathrm{O}_3<\\mathrm{Tl}_2 \\mathrm{O}_3}_{\\text {basic }}\n$",
    "chapter": "Periodic-Table-And-Periodicity",
    "topic": "Periodic-Table-And-Periodicity"
  },
  {
    "id": 484,
    "question": "The magnetic moment is measured in Bohr Magneton (BM).\nSpin only magnetic moment of$\\mathrm{Fe}$ in$\\left[\\mathrm{Fe}\\left(\\mathrm{H}_{2} \\mathrm{O}\\right)_{6}\\right]^{3+}$ and$\\left[\\mathrm{Fe}(\\mathrm{CN})_{6}\\right]^{3-}$ complexes respectively is :",
    "options": [
      "3.87 B.M. and 1.732 B.M.",
      "5.92 B.M. and 1.732 B.M.",
      "6.92 B.M. in both",
      "4.89 B.M. and 6.92 B.M."
    ],
    "correct": 1,
    "solution": "(b)\nFor spin-only magnetic moment, we use the formula:\n$\\mathrm{Magnetic ~moment} = \\sqrt{n(n+2)} \\cdot \\mathrm{BM}$\nwhere$n$ is the total number of unpaired electrons.\nFor$\\left[\\mathrm{Fe}\\left(\\mathrm{H}_{2} \\mathrm{O}\\right)_{6}\\right]^{3+}$, the electronic configuration of$\\mathrm{Fe^{3+}}$ is$\\mathrm{d^5}$. Here, all the five electrons will be unpaired due to the high spin nature of Fe$^{3+}$. Hence, $n=5$ and magnetic moment$= \\sqrt{5(5+2)} \\cdot \\mathrm{BM} \\approx 5.92 \\mathrm{BM}$\nFor$\\left[\\mathrm{Fe}(\\mathrm{CN})_{6}\\right]^{3-}$, the$\\mathrm{Fe^{3+}}$ ion has electronic configuration$\\mathrm{d^5}$. In this case, the strong field ligand cyanide ($\\mathrm{CN}^{-}$) will pair up the electrons in the$\\mathrm{d}$ orbital. So, there will be only one unpaired electron. Hence, $n=1$ and magnetic moment$= \\sqrt{1(1+2)} \\cdot \\mathrm{BM} \\approx 1.732 \\mathrm{BM}$\nTherefore, the answer is 5.92 B.M. and 1.732 B.M.",
    "chapter": "Coordination-Compounds",
    "topic": "Coordination-Compounds"
  },
  {
    "id": 485,
    "question": "The following reaction is performed at 298 K\n2NO(g) +  O2 (g)$\\leftrightharpoons$ 2NO2 (g) \nThe standard free energy of formation of NO(g) is 86.6 kJ/mol at 298 K. What is the standard free energy\nof formation of NO2(g) at 298 K? (KP = 1.6 $×$ 1012)",
    "options": [
      "86600 + R(298) ln(1.6 $\\times$ 1012)",
      "86600 - $ln (1.6 \\times 10^{12}) \\over R (298)$",
      "0.5[2$×$86,600 – R(298) ln(1.6$×$1012)]",
      "R(298) ln(1.6$×$1012) – 86600"
    ],
    "correct": 2,
    "solution": "(c)\n$\\Delta {G^ \\circ }_{NO\\left( g \\right)}$ \n$\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\, = 86.6kJ/mol = 86600J/mol;$ \n$\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\, {G^ \\circ }_{N{O_2}\\left( g \\right)} = x\\,J/mol$\n$T = 298,\\,{K_p} = 1.6 \\times {10^{12}}$\n$\\Delta {G^ \\circ } =  - RT\\,\\ln \\,{K_p}$\nGiven equation,\n$2NO\\left( g \\right) + {O_2}\\left( g \\right)\\,\\rightleftharpoons\\,2N{O_2}\\left( g \\right)$\n$2\\Delta {G^ \\circ }_{N{O_2}} - 2\\Delta {G^ \\circ }_{NO}$\n$\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\, =  - R\\left( {298} \\right)\\ln \\left( {1.6 \\times {{10}^{12}}} \\right)$\n$2\\Delta {G^ \\circ }_{N{O_2}} - 2 \\times 86600$\n$\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\, =  - R\\left( {298} \\right)\\ln \\left( {1.6 \\times {{10}^{12}}} \\right)$\n$2\\Delta {G^ \\circ }_{N{O_2}}$ \n$\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,  = 2 \\times 86600 - R\\left( {298} \\right)\\ln \\left( {1.6 \\times {{10}^{12}}} \\right)$ \n$\\Delta {G^ \\circ }_{N{O_2}}$ \n$\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,  = {1 \\over 2}\\left[ {2 \\times 86600 - R\\left( {298} \\right)\\ln \\left( {1.6 \\times {{10}^{12}}} \\right)} \\right]$\n$\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,  = 0.5\\left[ {2 \\times 86600 - R\\left( {298} \\right)\\ln \\left( {1.6 \\times {{10}^{12}}} \\right)} \\right]$",
    "chapter": "Thermodynamics",
    "topic": "Thermodynamics"
  },
  {
    "id": 486,
    "question": "The rate of chemisorption",
    "options": [
      "decreases with increase of pressure",
      "increases with increase of pressure",
      "is independent of pressure",
      "is independent of temperature"
    ],
    "correct": 1,
    "solution": "(b)\n\n\n\nOn increasing pressure more molecule will into contact with the\nsurface of solid adsorbent.",
    "chapter": "Physical Chemistry",
    "topic": "Physical Chemistry"
  },
  {
    "id": 487,
    "question": "Match List-I with List-II\n\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n\n\n\n\n\n\n\n\n\n\n\nList - I\n\nList - II\n\n\n\n\n(A)\nLyophilic colloid\n(I)\nLiquid-liquid colloid\n\n\n(B)\nEmulsion\n(II)\nProtective colloid\n\n\n(C)\nPositively charged colloid\n(III)\nFeCl$_3$ + NaOH\n\n\n(D)\nNegatively charged colloid\n(IV)\nFeCl$_3$ + hot water\n\n\n\nChoose the correct answer from the options given below :",
    "options": [
      "(A) - (II), (B) - (I), (C) - (IV), (D) - (III)",
      "(A) - (III), (B) - (I), (C) - (IV), (D) - (II)",
      "(A) - (II), (B) - (I), (C) - (III), (D) - (IV)",
      "(A) - (III), (B) - (II), (C) - (I), (D) - (IV)"
    ],
    "correct": 0,
    "solution": "(a)\n(A) Protective colloids are lyophilic colloids\n (B) Emulsions are liquid in liquid colloidal\nsolutions\n (C) FeCl3 + hot water forms positively charged\ncolloidal solution of hydrated ferric oxide.\n (D) FeCl3 + NaOH forms negatively charged\ncolloidal solution due to preferential adsorption of\nOH- ions",
    "chapter": "Surface-Chemistry",
    "topic": "Surface-Chemistry"
  },
  {
    "id": 488,
    "question": "Choose the factor that is responsible for ozone layer depletion.",
    "options": [
      "CFCs",
      "CBrCs",
      "CH_2Br_2",
      "all are correct"
    ],
    "correct": 0,
    "solution": "(a)\nExplanation: Chlorofluorocarbons (CFCs) that are produced by\nair conditioners, refrigerators etc. are responsible for ozone layer\ndepletion. It is also known as Freon and its life in the atmosphere is\nabout 20 - 100 years.",
    "chapter": "Inorganic Chemistry",
    "topic": "Inorganic Chemistry"
  },
  {
    "id": 489,
    "question": "Which of the following compounds is not colored yellow?",
    "options": [
      "K3[Co(NO2)6]",
      "(NH4)3[As(Mo3O10)4]",
      "BaCrO4",
      "Zn2[Fe(CN)6]"
    ],
    "correct": 3,
    "solution": "(d)\nZn2[Fe(CN)6] is white in color as it does not have unpaired\nelectrons.",
    "chapter": "Coordination-Compounds",
    "topic": "Coordination-Compounds"
  },
  {
    "id": 490,
    "question": "Given\n$E_{C{r^{2 + }}/Cr}^o$ = -0.74 V; $E_{MnO_4^ - /M{n^{2 + }}}^o$ = 1.51 V\n$E_{C{r_2}O_7^{2 - }/C{r^{3 + }}}^o$ = 1.33 V; $E_{Cl/C{l^ - }}^o$ = 1.36 V\nBased on the data given above, strongest oxidising agent will be :",
    "options": [
      "Cr3+",
      "Mn2+",
      "$MnO_4^ - $",
      "Cl-"
    ],
    "correct": 2,
    "solution": "(c)\nIn electrochemistry, the strongest oxidizing agent will be the one with the highest standard electrode potential (E°), because a higher E° value means a greater tendency to gain electrons, i.e., get reduced. An oxidizing agent gains electrons and in doing so, oxidizes another species.\nFrom the provided data, the species with the highest standard electrode potential (E°) is MnO₄⁻, with an E° of 1.51 V. This means that MnO₄⁻ has the greatest tendency to gain electrons and thus is the strongest oxidizing agent.\nTherefore, the correct answer is :\nOption C : $MnO_4^ - $ .",
    "chapter": "Electrochemistry",
    "topic": "Electrochemistry"
  },
  {
    "id": 491,
    "question": "If 5x + 9 = 0 is the directrix of the hyperbola 16x2 9y2 = 144, then its corresponding focus is :",
    "options": [
      "$\\left( {{5 \\over 3},0} \\right)$",
      "(5, 0)",
      "(- 5, 0)",
      "$\\left( { - {5 \\over 3},0} \\right)$"
    ],
    "correct": 2,
    "solution": "(c)\n${{{x\\^2}} \\over 9} - {{{y\\^2}} \\over {16}} = 1  \\therefore$ a = 3 and b = 4${e\\^2} = 1 + {{{b\\^2}} \\over {{a\\^2}}}  \\Rightarrow {e\\^2} = 1 + {{16} \\over 9}  \\Rightarrow$ e = $5 \\over 3  \\therefore$ focus is (ae, 0) = (5, 0)",
    "chapter": "Hyperbola",
    "topic": "Hyperbola"
  },
  {
    "id": 492,
    "question": "For all$z \\in C$ on the curve$C_{1}:|z|=4$, let the locus of the point$z+\\frac{1}{z}$ be the curve$\\mathrm{C}_{2}$. Then :",
    "options": [
      "the curves$C_{1}$ and$C_{2}$ intersect at 4 points",
      "the curve$C_{2}$ lies inside$C_{1}$",
      "the curve$C_{1}$ lies inside$C_{2}$",
      "the curves$C_{1}$ and$C_{2}$ intersect at 2 points"
    ],
    "correct": 0,
    "solution": "(a)\nLet$\\mathrm{w}=\\mathrm{z}+\\frac{1}{\\mathrm{z}}=4 \\mathrm{e}^{\\mathrm{i} \\theta}+\\frac{1}{4} \\mathrm{e}^{-\\mathrm{i} \\theta} \\Rightarrow \\mathrm{w}=\\frac{17}{4} \\cos \\theta+\\mathrm{i} \\frac{15}{4} \\sin \\theta$ So locus of$w$ is ellipse$\\frac{x^{2}}{\\left(\\frac{17}{4}\\right)^{2}}+\\frac{y^{2}}{\\left(\\frac{15}{4}\\right)^{2}}=1$ Locus of$\\mathrm{z}$ is circle$\\mathrm{x}^{2}+\\mathrm{y}^{2}=16$ So intersect at 4 points.",
    "chapter": "Complex Numbers",
    "topic": "Complex Numbers"
  },
  {
    "id": 493,
    "question": "If$\\lambda$ be the ratio of the roots of the quadratic equation in x, 3m2x2 + m(m – 4)x + 2 = 0, then the least value of m for which$\\lambda  + {1 \\over \\lambda } = 1,$ is",
    "options": [
      "$ - 2 + \\sqrt 2 $",
      "4$-$3$\\sqrt 2 $",
      "2 $-$ $\\sqrt 3 $",
      "4 $-$ 2$\\sqrt 3 $"
    ],
    "correct": 1,
    "solution": "(b)\n3m2x2 + m(m$-$ 4) x + 2 = 0\n$\\lambda  + {1 \\over \\lambda } = 1,{\\alpha  \\over \\beta } + {\\beta  \\over \\alpha } = 1,{\\alpha ^2} + {\\beta ^2} = \\alpha \\beta$\n($\\alpha$ + $\\beta$)2 = 3$\\alpha  \\beta$\n${\\left( { - {{m\\left( {m - 4} \\right)} \\over {3{m^2}}}} \\right)^2} = {{3\\left( 2 \\right)} \\over {3{m^2}}},{{{{\\left( {m - 4} \\right)}^2}} \\over {9{m^2}}} = {6 \\over {3m}}$\n${\\left( {m - 4} \\right)^2} = 18,m = 4 \\pm \\sqrt {18,} \\,\\,4 \\pm 3\\sqrt 2$",
    "chapter": "Quadratic-Equation-And-Inequalities",
    "topic": "Quadratic-Equation-And-Inequalities"
  },
  {
    "id": 494,
    "question": "Consider a region R = {(x, y)$ \\in$ R : x2$ \\le$ y$ \\le$ 2x}.\nif a line y = $\\alpha$ divides the area of region R into\ntwo equal parts, then which of the following is\ntrue?",
    "options": [
      "3$\\alpha $2 - 8$\\alpha $ + 8 = 0",
      "$\\alpha $3 - 6$\\alpha $3/2 - 16 = 0",
      "3$\\alpha $2 - 8$\\alpha $3/2 + 8 = 0",
      "$\\alpha $3 - 6$\\alpha $2 + 16 = 0"
    ],
    "correct": 2,
    "solution": "(c)\ny$ \\ge$ x2$ \\Rightarrow$ upper region of y = x2\ny$ \\le$ 2x$ \\Rightarrow$ lower region of y = 2x\n According to question, area of OABC = 2$ \\times$ area of OAC\n$ \\Rightarrow  \\int\\limits^{4}_{0} \\left( \\sqrt{y} -\\frac{y}{2} \\right)  dy$ = 2$\\int\\limits^{\\alpha }_{0} \\left( \\sqrt{y} -\\frac{y}{2} \\right)  dy$\n$\\Rightarrow \\left[ {{2 \\over 3}{y^{{3 \\over 2}}} - {{{y^2}} \\over 4}} \\right]_0^4 = 2\\left[ {{2 \\over 3}{y^{{3 \\over 2}}} - {{{y^2}} \\over 4}} \\right]_0^\\alpha$\n$ \\Rightarrow {{16} \\over 3} - 4 = 2\\left[ {{2 \\over 3}{{\\left( \\alpha  \\right)}^{{3 \\over 2}}} - {{{\\alpha ^2}} \\over 4}} \\right]$\n$ \\Rightarrow {4 \\over 3} = 2\\left[ {{2 \\over 3}{\\alpha ^{{3 \\over 2}}} - {{{\\alpha ^2}} \\over 4}} \\right]$\n$ \\Rightarrow {2 \\over 3} = {2 \\over 3}{\\alpha ^{{3 \\over 2}}} - {{{\\alpha ^2}} \\over 4}$\n$ \\Rightarrow 8 = 8{\\alpha ^{{3 \\over 2}}} - 3{\\alpha ^2}$\n$ \\Rightarrow 3{\\alpha ^2} - 8{\\alpha ^{{3 \\over 2}}} + 8 = 0$",
    "chapter": "Area-Under-The-Curves",
    "topic": "Area-Under-The-Curves"
  },
  {
    "id": 495,
    "question": "Let$f(x) = \\int {{{2x} \\over {({x^2} + 1)({x^2} + 3)}}dx}$. If$f(3) = {1 \\over 2}({\\log _e}5 - {\\log _e}6)$, then$f(4)$ is equal to",
    "options": [
      "${\\log _e}19 - {\\log _e}20$",
      "${\\log _e}17 - {\\log _e}18$",
      "${1 \\over 2}({\\log _e}19 - {\\log _e}17)$",
      "${1 \\over 2}({\\log _e}17 - {\\log _e}19)$"
    ],
    "correct": 3,
    "solution": "(d)\n$f(x)=\\int \\frac{2 x}{\\left(x^{2}+1\\right)\\left(x^{2}+3\\right)} d x$\n\n$\n\\begin{aligned}\n& \\text { Put } x^{2}=t \\Rightarrow 2 x d x=d t \\\\\\\\\n& f(x)=\\int \\frac{d t}{(t+1)(t+3)}=\\int \\frac{d t}{(t+2)^{2}-1} \\\\\\\\\n& =\\frac{1}{2} \\log _{e}\\left|\\frac{t+1}{t+3}\\right|+C \\\\\\\\\n& f(x)=\\frac{1}{2} \\log _{e}\\left(\\frac{x^{2}+1}{x^{2}+3}\\right)+C \\Rightarrow \\\\\\\\\n& f(3)=\\frac{1}{2} \\log _{e}\\left(\\frac{10}{12}\\right)+C \\\\\\\\\n& \\because f(3)+\\frac{1}{2}\\left(\\log _{e} 5-\\log _{e} 6\\right) \\Rightarrow C=0 \\\\\\\\\n& f(x)=\\frac{1}{2} \\log _{e}\\left(\\frac{x^{2}+1}{x^{2}+3}\\right) \\Rightarrow \\\\\\\\\n& f(4)=\\frac{1}{2}\\left(\\log _{e} 17-\\log _{e} 19\\right)\n\\end{aligned}\n$",
    "chapter": "Indefinite-Integrals",
    "topic": "Indefinite-Integrals"
  },
  {
    "id": 496,
    "question": "Let S be a non-empty subset of R. Consider the following statement:\nP : There is a rational number x $∈$ S such that x &gt; 0.\nWhich of the following statements is the negation of the statement P?",
    "options": [
      "There is no rational number x $∈$ S such that x $≤$ 0",
      "Every rational number x $∈$ S satisfies x $≤$ 0",
      "x ∈ S and x ≤ 0 $ \\Rightarrow $ x is not rational",
      "There is a rational number x $∈$ S such that x $≤$ 0"
    ],
    "correct": 1,
    "solution": "(b)\nGiven that S is a non-empty subset of R.\n$\\bullet$ P : There is a rational number x$\\in$ S such that x > 0.\nNow, we need to find the negation of P. Clearly, P is equivalent to saying that \"There is a positive rational number in S.\nSo, its negation ($\\sim$ P) is \"There is no positive rational number in S\".\nThus, for$\\sim$ P : There exists no positive rational number in S.\n$\\bullet \\Leftrightarrow \\sim$ P : Every rational number x$\\in$ S satisfies x$\\le$ 0.",
    "chapter": "Mathematical-Reasoning",
    "topic": "Mathematical-Reasoning"
  },
  {
    "id": 497,
    "question": "The number of values of$k$, for which the system of equations :  \\matrix{\n   {\\left( {k + 1} \\right)x + 8y = 4k}  \\cr \n   {kx + \\left( {k + 3} \\right)y = 3k - 1}  \\cr \n\n } \nhas no solution, is",
    "options": [
      "infinite",
      "1",
      "2",
      "3"
    ],
    "correct": 1,
    "solution": "(b)\nFrom the given system, we have \n${{k + 1} \\over k} = {8 \\over {k + 3}} \\ne {{4k} \\over {3k - 1}}$\n( as System has no solution)\n$ \\Rightarrow {k^2} + 4k + 3 = 8k$\n$ \\Rightarrow k = 1,3$\nIf$k = 1$ then${8 \\over {1 + 3}} \\ne {{4.1} \\over 2}$ which is false\nAnd if$k = 3$\nThen${8 \\over 6} \\ne {{4.3} \\over {9 - 1}}$ which is true, therefore$k=3$\nHence for only one value of$k.$ System has no solution.",
    "chapter": "Matrices-And-Determinants",
    "topic": "Matrices-And-Determinants"
  },
  {
    "id": 498,
    "question": "The value of '$a$' for which one root of the quadratic equation \n \\left( {{a^2} - 5a + 3} \\right){x^2} + \\left( {3a - 1} \\right)x + 2 = 0 \nis twice as large as the other is",
    "options": [
      "$ - {1 \\over 3}$",
      "$  {2 \\over 3}$",
      "$ - {2 \\over 3}$",
      "$  {1 \\over 3}$"
    ],
    "correct": 1,
    "solution": "(b)\nLet the roots of given equation be$\\alpha$ and$2 \\alpha$ then \n$\\alpha  + 2\\alpha  = 3\\alpha  = {{1 - 3a} \\over {{a^2} - 5a + 3}}$\nand$\\alpha .2\\alpha  = 2{\\alpha ^2} = {2 \\over {{a^2} - 5a + 3}}$\n$ \\Rightarrow \\alpha  = {{1 - 3a} \\over {3\\left( {{a^2} - 5a + 3} \\right)}}$\n$\\therefore 2\\left[ {{1 \\over 9}{{{{\\left( {1 - 3a} \\right)}^2}} \\over {{{\\left( {{a^2} - 5a + 3} \\right)}^2}}}} \\right]$\n$ = {2 \\over {{a^2} - 5a + 3}}$\n${{{{\\left( {1 - 3a} \\right)}^2}} \\over {\\left( {{a^2} - 5a + 3} \\right)}} = 9$\nor$9{a^2} - 6a + 1$\n$ = 9{a^2} - 45a + 27$\nor$39a = 26$ or$a = {2 \\over 3}$",
    "chapter": "Quadratic-Equation-And-Inequalities",
    "topic": "Quadratic-Equation-And-Inequalities"
  },
];


function PracticeOverlay({ onClose }: { onClose: () => void }) {
  const questions = useMemo(() => {
    const shuffled = [...MICRO_QUESTIONS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isHoverPrev, setIsHoverPrev] = useState(false);
  const [isHoverNext, setIsHoverNext] = useState(false);

  const currentQRef = useRef(currentQ);
  const selectedAnswerRef = useRef(selectedAnswer);
  const answersRef = useRef(answers);
  const showResultsRef = useRef(showResults);
  const onCloseRef = useRef(onClose);

  useEffect(() => { currentQRef.current = currentQ; }, [currentQ]);
  useEffect(() => { selectedAnswerRef.current = selectedAnswer; }, [selectedAnswer]);
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
        <button onClick={onClose} className="nomad-btn">⟨ exit ⟩</button>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>practice mode</div>
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
            <button onClick={handleRestart} className="nomad-btn active" style={{ border: '1px solid rgba(255,255,255,0.3)', padding: '0.75rem 1.5rem', borderRadius: 4 }}>⟨ begin again ⟩</button>
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
              </motion.div>
            )}
          </AnimatePresence>
        )}
        </div>
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 100, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
          { key: 'enableVoice' as keyof Settings, label: 'Enable Voices (Welcome / Paranoia)' },
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
  const readingStartRef = useRef<number | null>(null);
  const currentNoteRef = useRef<string | null>(null);

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
  const [browseLimit, setBrowseLimit] = useState(24);
  const [questionLimit, setQuestionLimit] = useState(24);
  const browseContainerRef = useRef<HTMLDivElement | null>(null);
  
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
  const [introStage, setIntroStage] = useState<number | null>(() => {
    try { return localStorage.getItem('nomad-intro-done') ? null : 0; } catch { return 0; }
  });
  const introStageRef = useRef<number | null>(introStage);
  useEffect(() => { introStageRef.current = introStage; }, [introStage]);
  const introActive = introStage !== null;
  const introRunRef = useRef(false);
  // True once a given intro stage (or normal mode) has been reached.
  const introShow = (min: number) => !introActive || (introStage as number) >= min;
  const searching = query.trim().length > 0;
  const welcomeAudioRef = useRef<HTMLAudioElement | null>(null);
  const paranoiaAudioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayedWelcomeRef = useRef(false);

  // Play welcome voice after user interaction once settings are known.
  // During the first-boot intro the sequencer owns the welcome line instead.
  useEffect(() => {
    if (introStageRef.current !== null) { hasPlayedWelcomeRef.current = true; return; }
    if (!settings.enableVoice || !welcomeAudioRef.current || hasPlayedWelcomeRef.current) return;
    hasPlayedWelcomeRef.current = true;
    welcomeAudioRef.current.play().catch(() => {});
  }, [settings.enableVoice]);

  // Play paranoia voice whenever multi-eye mode triggers (intro stage 6 plays
  // its own reminder line instead, so it is suppressed there).
  useEffect(() => {
    if (introStageRef.current !== null) return;
    if (!settings.enableVoice || !paranoiaAudioRef.current || !isMultiEye) return;
    paranoiaAudioRef.current.currentTime = 0;
    paranoiaAudioRef.current.play().catch(() => {});
  }, [settings.enableVoice, isMultiEye]);
  const questionFuse = useMemo(() => {
    if (!isTargetMode) return null;
    return new Fuse(TARGET_QUESTIONS, {
      keys: [
      { name: 'chapter', weight: 3 },
      { name: 'topic', weight: 2 },
      { name: 'question', weight: 1 }
    ],
      threshold: 0.4,
      ignoreLocation: true,
    });
  }, [isTargetMode]);
  
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
      // Fetch concepts
      const res = await fetch('/all-concepts.json');
      const data = await res.json();
      setConcepts(data);
      setFuse(new Fuse(data, {
        keys: [ { name: 'title', weight: 2.0 }, { name: 'section', weight: 1.0 }, { name: 'content', weight: 0.5 } ],
        threshold: 0.35, ignoreLocation: true,
      }));

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
  useEffect(() => {
    if (introStageRef.current === null || introRunRef.current) return;
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
        a.play().catch(() => wait(fallbackMs).then(finish));
        setTimeout(finish, fallbackMs + 8000); // safety net
      });
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
      // Stage 0 → 1: eye finishes opening, then the title appears.
      if (!await advance(1, 2600, 800)) return;
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
  }, [inputControls, gazeAtElement, pupilX, pupilY]);

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
      `}</style>
      <audio ref={welcomeAudioRef} src={asset("welcome_to_nomad.mp3")} preload="auto" />
      <audio ref={paranoiaAudioRef} src={asset("paranoia_activated.mp3")} preload="auto" />

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

      {/* Exit Browse Concepts Button */}
      {isBrowsingConcepts && (
        <button
          onClick={() => setIsBrowsingConcepts(false)}
          className="nomad-btn"
          style={{
            position: 'fixed',
            top: '1.5rem',
            left: '1.5rem',
            zIndex: 100,
          }}
        >
          ⟨ exit ⟩
        </button>
      )}

      <AnimatePresence>
        {isPractice && <PracticeOverlay onClose={() => setIsPractice(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {isSettingsOpen && <SettingsOverlay settings={settings} setSettings={setSettings} onClose={() => setIsSettingsOpen(false)} isMobile={isMobile} concepts={concepts} />}
      </AnimatePresence>

      <AnimatePresence>
        {isStatsOpen && <StatsOverlay onClose={() => setIsStatsOpen(false)} isMobile={isMobile} />}
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

      {introShow(6) && !selected && !selectedQuestion && !isBrowsingConcepts && <JEECountdown isMobile={isMobile} gazingAt={gazingAt} isMultiEye={isMultiEye} alwaysGlow={settings.alwaysGlow} />}

      {/* Pinned DATABASE footer only on mobile; desktop shows it below the search bar */}
      {isMobile && introShow(5) && !searching && !selected && !selectedQuestion && !isBrowsingConcepts && !isBrowsingQuestions && <Footer alwaysGlow={settings.alwaysGlow} isMultiEye={isMultiEye} count={isTargetMode ? TARGET_QUESTIONS.length : concepts.length} unit={isTargetMode ? 'QUESTIONS' : undefined} isMobile={isMobile} gazingAt={gazingAt} onConceptClick={() => { if (introActive) return; if (isTargetMode) { setTargetBrowseResults(TARGET_QUESTIONS); setQuestionLimit(24); setIsBrowsingQuestions(true); setIsBrowsingConcepts(false); setSelectedQuestion(null); setSelected(null); } else { setIsBrowsingConcepts(true); setSelectedQuestion(null); setSelected(null); } }} />}

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
                        {isTargetMode ? `${r.chapter.toUpperCase()} · ${r.topic.toUpperCase()}` : (r as any).isFullChapter ? `${r.section} · FULL CHAPTER` : r.section}
                      </span>
                    </div>
                  )) : <div style={{ padding: '1.5rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>{isTargetMode ? "no questions found" : "no concepts found"}</div>}
                </div>
              )}

              {/* DATABASE entry — sits directly below the search bar on desktop web */}
              {!isMobile && introShow(5) && !searching && (
                <Footer alwaysGlow={settings.alwaysGlow} isMultiEye={isMultiEye} count={isTargetMode ? TARGET_QUESTIONS.length : concepts.length} unit={isTargetMode ? 'QUESTIONS' : undefined} isMobile={isMobile} gazingAt={gazingAt} inline onConceptClick={() => { if (introActive) return; if (isTargetMode) { setTargetBrowseResults(TARGET_QUESTIONS); setQuestionLimit(24); setIsBrowsingQuestions(true); setIsBrowsingConcepts(false); setSelectedQuestion(null); setSelected(null); } else { setIsBrowsingConcepts(true); setSelectedQuestion(null); setSelected(null); } }} />
              )}
            </motion.div>
          ) : isBrowsingConcepts ? (
            <motion.div 
              ref={browseContainerRef}
              onScroll={(e) => {
                const el = e.currentTarget;
                if (el.scrollTop + el.clientHeight >= el.scrollHeight - 200) {
                  setBrowseLimit(prev => Math.min(prev + 24, concepts.length));
                }
              }}
              className="nomad-browse-container"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ width: '100%', marginTop: isMobile ? '-1rem' : '2rem', maxHeight: '65vh', overflowY: 'auto', paddingRight: '0.5rem', paddingBottom: '4rem', scrollbarWidth: 'thin' as any, scrollbarColor: 'rgba(255,255,255,0.25) transparent' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {concepts.slice(0, browseLimit).map((c, i) => (
                  <div 
                    key={c.id || i}
                    onClick={() => handleSelect(c)}
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
                    <div style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }} dangerouslySetInnerHTML={{ __html: renderInlineLatex(c.title) }} />
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.section}</div>
                  </div>
                ))}
              </div>
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
                    dangerouslySetInnerHTML={{ __html: renderInlineLatex((selectedQuestion as any).solution || '') }}
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
