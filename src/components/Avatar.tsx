import { useEffect, useReducer, useRef, useCallback } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

type AvatarPhase = 'idle' | 'greeting' | 'guiding' | 'speaking' | 'paused' | 'collapsed';

type GuideItem = {
  id: string;
  label: string;
  answer: string;
  link?: { href: string; text: string };
};

type Action =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'COLLAPSE' }
  | { type: 'EXPAND' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'SELECT'; id: string }
  | { type: 'SPEAKING_DONE' };

type State = {
  phase: AvatarPhase;
  activeId: string | null;
  panelOpen: boolean;
};

// ─── State machine ───────────────────────────────────────────────────────────

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'OPEN':
      return { ...state, phase: 'greeting', panelOpen: true };
    case 'CLOSE':
      return { ...state, phase: 'idle', panelOpen: false, activeId: null };
    case 'COLLAPSE':
      return { ...state, phase: 'collapsed', panelOpen: false };
    case 'EXPAND':
      return { ...state, phase: 'idle' };
    case 'PAUSE':
      return { ...state, phase: 'paused' };
    case 'RESUME':
      return { ...state, phase: state.activeId ? 'guiding' : 'idle' };
    case 'SELECT':
      return { ...state, phase: 'speaking', activeId: action.id };
    case 'SPEAKING_DONE':
      return { ...state, phase: 'guiding' };
    default:
      return state;
  }
}

const initialState: State = { phase: 'idle', activeId: null, panelOpen: false };

// ─── Guide content ───────────────────────────────────────────────────────────

const GUIDE_ITEMS: GuideItem[] = [
  {
    id: 'intro',
    label: 'Introduce yourself',
    answer: "Hi! I'm Ahmed — a Full-Stack Software Engineer with 3+ years building production-grade web applications. I specialise in ASP.NET Core (C#) and React/TypeScript, with a strong focus on multi-tenant SaaS architecture, RBAC, and RESTful API design. Currently leading full-stack development of the Scholly platform at StudyNet.",
  },
  {
    id: 'projects',
    label: 'Show backend projects',
    answer: 'Three backend-focused projects are showcased here: TimeSlot (C# / ASP.NET Core + React + PostgreSQL — timezone-aware booking with concurrency control), DataBridge Inspector (Python / FastAPI + React — CSV normalisation with duplicate detection), and WorkflowDesk (PHP / Laravel + Vue + MySQL — multi-tenant enquiry management with roles and SLA tracking). WorkflowDesk and DataBridge Inspector have hosted demos and public source on GitHub; TimeSlot is in development.',
    link: { href: '/projects', text: 'Browse projects →' },
  },
  {
    id: 'arch',
    label: 'Explain an architecture decision',
    answer: "At work I apply Clean Architecture and Repository Pattern to keep domain logic decoupled from infrastructure. For Scholly I introduced tenant isolation at the service layer — every query is scoped to a tenant context enforced server-side, not just in the UI. For the portfolio itself: Astro static output with React islands gives zero server runtime and fast load times.",
  },
  {
    id: 'tour',
    label: 'Take a quick tour',
    answer: "Start here for the overview and skills snapshot — C#, TypeScript, React, .NET 8, PostgreSQL, and more. Head to About for the full experience timeline. Projects has three case studies with architecture notes, tests, and browser demos. Reach me via the Contact section at the bottom.",
    link: { href: '/about', text: 'View experience →' },
  },
  {
    id: 'contact',
    label: 'How can I contact you?',
    answer: 'Email me at ahm3dxb@gmail.com or connect on LinkedIn — both links are in the Contact section on this page.',
    link: { href: '#contact', text: 'Go to Contact →' },
  },
];

// ─── Avatar SVG (with DOM refs for cursor tracking) ──────────────────────────

interface AvatarSVGProps {
  phase: AvatarPhase;
  leftPupilRef: React.RefObject<SVGCircleElement | null>;
  rightPupilRef: React.RefObject<SVGCircleElement | null>;
  headGroupRef: React.RefObject<SVGGElement | null>;
}

function AvatarSVG({ phase, leftPupilRef, rightPupilRef, headGroupRef }: AvatarSVGProps) {
  const isSpeaking = phase === 'speaking';
  const isIdle = phase === 'idle' || phase === 'paused' || phase === 'greeting' || phase === 'guiding';

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`avatar-svg avatar-svg--${phase}`}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Body / shirt */}
      <ellipse cx="60" cy="108" rx="32" ry="14" fill="#0d1b2e" />
      <rect x="34" y="74" width="52" height="36" rx="8" fill="#1a2744" />

      {/* Collar accent */}
      <polygon points="60,74 49,88 71,88" fill="#14b8a6" opacity="0.85" />
      <polygon points="60,74 52,82 60,93 68,82" fill="white" opacity="0.12" />

      {/* Head group — tracked by headGroupRef for tilt */}
      <g ref={headGroupRef}>
        {/* Head */}
        <ellipse cx="60" cy="50" rx="26" ry="27" fill="#c8956c" />

        {/* Hair */}
        <ellipse cx="60" cy="25" rx="26" ry="11" fill="#1a0800" />
        <rect x="34" y="25" width="7" height="18" rx="3.5" fill="#1a0800" />
        <rect x="79" y="25" width="7" height="18" rx="3.5" fill="#1a0800" />

        {/* Beard */}
        <ellipse cx="60" cy="68" rx="13" ry="7" fill="#2d1500" opacity="0.65" />
        <ellipse cx="60" cy="73" rx="9" ry="4.5" fill="#2d1500" opacity="0.45" />

        {/* Ears */}
        <ellipse cx="34" cy="51" rx="4" ry="5" fill="#b07c50" />
        <ellipse cx="86" cy="51" rx="4" ry="5" fill="#b07c50" />

        {/* Eyes (whites) */}
        <ellipse cx="50" cy="49" rx="5" ry="5.5" fill="white" />
        <ellipse cx="70" cy="49" rx="5" ry="5.5" fill="white" />

        {/* Pupils — moved by cursor tracking */}
        <circle ref={leftPupilRef}  cx="51" cy="50" r="3" fill="#1a0800" />
        <circle ref={rightPupilRef} cx="71" cy="50" r="3" fill="#1a0800" />

        {/* Eye shine */}
        <circle cx="52" cy="48" r="1" fill="white" opacity="0.9" />
        <circle cx="72" cy="48" r="1" fill="white" opacity="0.9" />

        {/* Blink eyelids */}
        {isIdle && (
          <>
            <rect x="45" y="44" width="10" height="5.5" rx="2.75" fill="#c8956c" className="eyelid eyelid-l" />
            <rect x="65" y="44" width="10" height="5.5" rx="2.75" fill="#c8956c" className="eyelid eyelid-r" />
          </>
        )}

        {/* Eyebrows */}
        <path d="M45 42 Q50 39 55 42" stroke="#1a0800" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M65 42 Q70 39 75 42" stroke="#1a0800" strokeWidth="1.8" strokeLinecap="round" />

        {/* Nose */}
        <ellipse cx="60" cy="58" rx="2.5" ry="2" fill="#a0703d" />

        {/* Mouth */}
        {isSpeaking ? (
          <ellipse cx="60" cy="66" rx="6" ry="3.5" fill="#7a3a1a" className="mouth-speaking" />
        ) : (
          <path d="M54 65 Q60 70 66 65" stroke="#7a3a1a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        )}

        {/* Glasses */}
        <rect x="43" y="45" width="13" height="9" rx="2.5"
              stroke="#14b8a6" strokeWidth="1.4" fill="none" opacity="0.75" />
        <rect x="64" y="45" width="13" height="9" rx="2.5"
              stroke="#14b8a6" strokeWidth="1.4" fill="none" opacity="0.75" />
        <line x1="56" y1="49.5" x2="64" y2="49.5" stroke="#14b8a6" strokeWidth="1.4" opacity="0.75" />
        <line x1="43"  y1="49.5" x2="38" y2="49" stroke="#14b8a6" strokeWidth="1.4" opacity="0.75" />
        <line x1="77"  y1="49.5" x2="82" y2="49" stroke="#14b8a6" strokeWidth="1.4" opacity="0.75" />
      </g>

      {/* Laptop surface */}
      <rect x="30" y="100" width="60" height="5" rx="2.5" fill="#243454" />
      <rect x="34" y="96" width="52" height="9" rx="2" fill="#1a2744" />
    </svg>
  );
}

// ─── Main Avatar component ────────────────────────────────────────────────────

export default function Avatar() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const triggerRef    = useRef<HTMLButtonElement>(null);
  const panelRef      = useRef<HTMLDivElement>(null);
  const liveRef       = useRef<HTMLDivElement>(null);
  const figureRef     = useRef<HTMLDivElement>(null);
  const speakingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // DOM refs for cursor tracking (no re-renders)
  const leftPupilRef  = useRef<SVGCircleElement>(null);
  const rightPupilRef = useRef<SVGCircleElement>(null);
  const headGroupRef  = useRef<SVGGElement>(null);
  const rafRef        = useRef<number | null>(null);
  const targetEye     = useRef({ x: 0, y: 0 });
  const currentEye    = useRef({ x: 0, y: 0 });
  const targetTilt    = useRef(0);
  const currentTilt   = useRef(0);

  const activeItem = GUIDE_ITEMS.find(g => g.id === state.activeId) ?? null;

  // ── Cursor tracking ──────────────────────────────────────────────────────

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer  = window.matchMedia('(pointer: fine)').matches;
    if (prefersReduced || !isFinePointer) return;

    const onMouseMove = (e: MouseEvent) => {
      const fig = figureRef.current;
      if (!fig) return;
      const rect = fig.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = e.clientX - cx;
      const dy   = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const MAX_EYE  = 2.8;
      const MAX_TILT = 3;      // degrees
      const scale    = Math.min(1, dist / 350);
      targetEye.current  = { x: (dx / (dist || 1)) * scale * MAX_EYE, y: (dy / (dist || 1)) * scale * MAX_EYE };
      targetTilt.current = Math.max(-MAX_TILT, Math.min(MAX_TILT, (dx / 100)));
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      // Smooth interpolation
      currentEye.current.x    = lerp(currentEye.current.x,    targetEye.current.x,  0.09);
      currentEye.current.y    = lerp(currentEye.current.y,    targetEye.current.y,  0.09);
      currentTilt.current     = lerp(currentTilt.current,     targetTilt.current,   0.05);

      const ex = currentEye.current.x;
      const ey = currentEye.current.y;

      // Direct DOM updates — no React re-render cost
      leftPupilRef.current?.setAttribute('cx', String(51 + ex));
      leftPupilRef.current?.setAttribute('cy', String(50 + ey));
      rightPupilRef.current?.setAttribute('cx', String(71 + ex));
      rightPupilRef.current?.setAttribute('cy', String(50 + ey));

      if (headGroupRef.current) {
        headGroupRef.current.style.transform      = `rotate(${currentTilt.current}deg)`;
        headGroupRef.current.style.transformOrigin = '60px 50px';
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Speaking timer ───────────────────────────────────────────────────────

  useEffect(() => {
    if (state.phase !== 'speaking') {
      if (speakingTimer.current) { clearTimeout(speakingTimer.current); speakingTimer.current = null; }
      return;
    }
    speakingTimer.current = setTimeout(() => dispatch({ type: 'SPEAKING_DONE' }), 2000);
    return () => { if (speakingTimer.current) clearTimeout(speakingTimer.current); };
  }, [state.phase, state.activeId]);

  // ── Focus management ─────────────────────────────────────────────────────

  useEffect(() => {
    if (state.panelOpen && panelRef.current) {
      const first = panelRef.current.querySelector<HTMLElement>('button[data-guide]');
      first?.focus();
    }
  }, [state.panelOpen]);

  // ── Screen-reader announcement ───────────────────────────────────────────

  useEffect(() => {
    if (!liveRef.current || !activeItem) return;
    liveRef.current.textContent = '';
    requestAnimationFrame(() => { if (liveRef.current) liveRef.current.textContent = activeItem.answer; });
  }, [activeItem]);

  // ── Escape key ───────────────────────────────────────────────────────────

  useEffect(() => {
    if (!state.panelOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { dispatch({ type: 'CLOSE' }); triggerRef.current?.focus(); }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [state.panelOpen]);

  const handleSelect = useCallback((id: string) => dispatch({ type: 'SELECT', id }), []);

  // ── Collapsed state ──────────────────────────────────────────────────────

  if (state.phase === 'collapsed') {
    return (
      <button
        className="avatar-expand-btn"
        onClick={() => dispatch({ type: 'EXPAND' })}
        aria-label="Show portfolio guide"
      >
        <span aria-hidden="true" style={{ fontSize: '1.2rem' }}>👨‍💻</span>
        <span>Guide</span>
      </button>
    );
  }

  // ── Main widget ──────────────────────────────────────────────────────────

  return (
    <div className="avatar-root">
      {/* Live region for screen readers */}
      <div ref={liveRef} role="status" aria-live="polite" aria-atomic="true" className="visually-hidden" />

      {/* Guide panel — opens above the widget */}
      {state.panelOpen && (
        <div
          id="avatar-panel"
          ref={panelRef}
          className="avatar-panel"
          role="dialog"
          aria-label="Portfolio guide"
          aria-modal="false"
        >
          <h3 className="avatar-panel-title">Ask me anything</h3>
          <ul className="guide-list" role="list">
            {GUIDE_ITEMS.map(item => (
              <li key={item.id}>
                <button
                  data-guide={item.id}
                  className={`guide-btn${state.activeId === item.id ? ' guide-btn--active' : ''}`}
                  onClick={() => handleSelect(item.id)}
                  aria-pressed={state.activeId === item.id}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {activeItem && (
            <div className="guide-answer" aria-live="polite">
              <p className={`guide-answer-text${state.phase === 'speaking' ? ' guide-answer-text--speaking' : ''}`}>
                {activeItem.answer}
              </p>
              {activeItem.link && (
                <a href={activeItem.link.href} className="btn btn-outline guide-answer-link">
                  {activeItem.link.text}
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {/* Avatar widget (figure + controls) */}
      <div className="avatar-widget">
        <div ref={figureRef} className={`avatar-figure avatar-figure--${state.phase}`}>
          <AvatarSVG
            phase={state.phase}
            leftPupilRef={leftPupilRef}
            rightPupilRef={rightPupilRef}
            headGroupRef={headGroupRef}
          />
        </div>

        <div className="avatar-controls">
          <button
            ref={triggerRef}
            className="btn btn-primary avatar-guide-btn"
            onClick={() => state.panelOpen ? dispatch({ type: 'CLOSE' }) : dispatch({ type: 'OPEN' })}
            aria-expanded={state.panelOpen}
            aria-controls="avatar-panel"
          >
            {state.panelOpen ? 'Close' : 'Guide'}
          </button>
          <button
            className="btn btn-ghost avatar-ctrl-btn"
            onClick={() => dispatch({ type: state.phase === 'paused' ? 'RESUME' : 'PAUSE' })}
            aria-label={state.phase === 'paused' ? 'Resume animation' : 'Pause animation'}
            title={state.phase === 'paused' ? 'Resume' : 'Pause'}
          >
            {state.phase === 'paused' ? '▶' : '⏸'}
          </button>
          <button
            className="btn btn-ghost avatar-ctrl-btn"
            onClick={() => dispatch({ type: 'COLLAPSE' })}
            aria-label="Collapse guide"
            title="Collapse"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
