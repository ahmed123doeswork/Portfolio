import { useEffect, useRef, useState } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'light' || attr === 'dark') return attr;
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { finished: Promise<void> };
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  const apply = (next: Theme) => {
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch {}
    setTheme(next);
  };

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const doc = document as ViewTransitionDoc;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!doc.startViewTransition || reduce || !buttonRef.current) {
      apply(next);
      return;
    }

    // Circular reveal anchored to the toggle itself
    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const root = document.documentElement;
    root.style.setProperty('--theme-x', `${x}px`);
    root.style.setProperty('--theme-y', `${y}px`);
    root.style.setProperty('--theme-r', `${r}px`);
    root.classList.add('theme-switching');

    const transition = doc.startViewTransition(() => apply(next));
    transition.finished.finally(() => root.classList.remove('theme-switching'));
  };

  const isDark = theme === 'dark';
  const label = theme === null ? 'Toggle colour theme' : isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      ref={buttonRef}
      type="button"
      className="btn btn-ghost btn-icon theme-btn"
      onClick={toggle}
      aria-label={label}
      title={label}
      data-dark={isDark ? 'true' : 'false'}
      disabled={theme === null}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="theme-icon">
        <mask id="theme-moon-mask">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <circle className="theme-moon-cut" cx="24" cy="2" r="8" fill="black" />
        </mask>
        <circle className="theme-core" cx="12" cy="12" r="5" mask="url(#theme-moon-mask)" fill="currentColor" stroke="none" />
        <g className="theme-rays">
          <line x1="12" y1="1.5" x2="12" y2="3.5" />
          <line x1="12" y1="20.5" x2="12" y2="22.5" />
          <line x1="4.6" y1="4.6" x2="6" y2="6" />
          <line x1="18" y1="18" x2="19.4" y2="19.4" />
          <line x1="1.5" y1="12" x2="3.5" y2="12" />
          <line x1="20.5" y1="12" x2="22.5" y2="12" />
          <line x1="4.6" y1="19.4" x2="6" y2="18" />
          <line x1="18" y1="6" x2="19.4" y2="4.6" />
        </g>
      </svg>
    </button>
  );
}
