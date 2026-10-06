import React, { useEffect, useState } from 'react';
import { useGlowBodyClass } from '../lib/glow';

const BASE = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');

export default function GraphMenu() {
  const [counts, setCounts] = useState<Record<string, { nodes: number; edges: number }>>({});
  // Always Glow → body.always-glow (global.css lights the links + counts)
  useGlowBodyClass();
  useEffect(() => {
    ['organic-chemistry', 'inorganic-chemistry', 'physical-chemistry'].forEach((slug) => {
      fetch(`${BASE}graph/${slug}.json`, { cache: 'no-cache' })
        .then((r) => (r.ok ? r.json() : null))
        .then((g) => g && setCounts((c) => ({ ...c, [slug]: { nodes: g.nodes?.length ?? 0, edges: g.edges?.length ?? 0 } })))
        .catch(() => {});
    });
  }, []);
  // every item is a slug in public/graph/<slug>.json; adding one more just needs one more entry here
  const items = [
    { slug: 'organic-chemistry', label: 'organic chemistry' },
    { slug: 'inorganic-chemistry', label: 'inorganic chemistry' },
    { slug: 'physical-chemistry', label: 'physical chemistry' },
    { slug: 'sets-and-relations', label: 'Sets and Relations' },
    { slug: 'functions-graphs', label: 'Functions, Graphs and Binary Relations' },
    { slug: 'complex-numbers', label: 'Complex Numbers' },
    { slug: 'quadratic-polynomial-theory', label: 'Quadratic Equations and Polynomial Theory' },
    { slug: 'sequences-series', label: 'Sequences, Series and Progressions' },
    { slug: 'permutations-combinations', label: 'Permutations, Combinations and Combinatorics' },
    { slug: 'trigonometry', label: 'Trigonometry' },
    { slug: 'probability-distributions', label: 'Probability, Distributions and Statistics' },
    { slug: 'coordinate-geometry', label: 'Coordinate Geometry' },
    { slug: 'matrices-determinants', label: 'Matrices and Determinants' },
    { slug: 'vectors-3d-geometry', label: 'Vectors and 3D Geometry' },
    { slug: 'binomial-theorem', label: 'Binomial Theorem' },
    { slug: 'limits-continuity-differentiability', label: 'Limits, Continuity and Differentiability' },
    { slug: 'differentiation', label: 'Differentiation' },
    { slug: 'integration', label: 'Integration' },
    { slug: 'differential-equations', label: 'Differential Equations' },
    { slug: 'kinematics', label: 'Kinematics' },
    { slug: 'newton-laws', label: "Newton's Laws of Motion and Friction" },
    { slug: 'work-energy-power', label: 'Work, Energy and Power' },
    { slug: 'centre-of-mass-momentum', label: 'Centre of Mass, Momentum and Collisions' },
    { slug: 'circular-motion', label: 'Circular Motion' },
    { slug: 'gravitation', label: 'Gravitation' },
    { slug: 'rotational-motion', label: 'Rotational Motion' },
    { slug: 'fluid-mechanics', label: 'Fluid Mechanics' },
    { slug: 'waves-sound', label: 'Waves and Sound' },
    { slug: 'ray-optics', label: 'Ray Optics and Optical Instruments' },
    { slug: 'wave-optics', label: 'Wave Optics and Interference' },
    { slug: 'electrostatics', label: 'Electrostatics and Capacitance' },
    { slug: 'current-electricity', label: 'Current Electricity' },
    { slug: 'magnetism', label: 'Magnetic Effects of Current and Magnetism' },
    { slug: 'electromagnetic-induction', label: 'Electromagnetic Induction' },
    { slug: 'alternating-current', label: 'Alternating Current' },
    { slug: 'communication-systems', label: 'Communication Systems' },
    { slug: 'thermodynamics', label: 'Thermodynamics' },
    { slug: 'kinetic-theory-gases', label: 'Kinetic Theory of Gases' },
    { slug: 'photoelectric-modern-physics', label: 'Photoelectric and Modern Physics' },
    { slug: 'simple-harmonic-motion', label: 'Simple Harmonic Motion' },
  ];
  return (
    <div style={{ position: 'fixed', inset: 0, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <a href={BASE} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 300 }}>⟨ exit ⟩</a>
      <div style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.85)', fontWeight: 300, marginBottom: '3rem' }}>CONCEPT GRAPH</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '100%', maxWidth: '440px', maxHeight: '70vh', overflowY: 'auto', padding: '0 2rem', textAlign: 'center' }}>
        {items.map((it) => (
          <a key={it.slug} href={`${BASE}graph/${it.slug}`} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 300, letterSpacing: '0.08em', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}>
            ⟨ {it.label} ⟩
            {counts[it.slug] && <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', marginTop: '0.35rem' }}>{counts[it.slug].nodes} CONCEPTS · {counts[it.slug].edges} LINKS</span>}
          </a>
        ))}
      </div>
    </div>
  );
}
