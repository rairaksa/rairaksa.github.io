function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-normal bg-dark-60/80 border border-silk/15 text-silk/85 hover:text-oceanic hover:border-oceanic/60 transition-all duration-200 shadow-sm"
    >
      {isDark ? (
        <>
          <svg
            className="w-4 h-4 text-flare"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m8.66-13.66l-.7.7M4.04 19.96l-.7.7M21 12h-1M4 12H3m16.66 7.66l-.7-.7M4.04 4.04l-.7-.7M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Light</span>
        </>
      ) : (
        <>
          <svg
            className="w-4 h-4 text-oceanic"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <span>Dark</span>
        </>
      )}
    </button>
  );
}

export default ThemeToggle;
