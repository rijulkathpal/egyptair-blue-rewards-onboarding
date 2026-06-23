interface StatusBarProps {
  tone?: 'light' | 'dark';
  time?: string;
}

/**
 * Purely decorative recreation of the iOS status bar seen in every frame of the reference
 * screenshot. A real deployed app does not render this — the operating system does — so this
 * component exists only so the in-browser preview reads like the design mock.
 */
export default function StatusBar({ tone = 'light', time = '9:41' }: StatusBarProps) {
  const color = tone === 'light' ? 'text-white' : 'text-brand-ink';
  return (
    <div className={`flex items-center justify-between px-6 pt-3 pb-1 text-[13px] font-semibold ${color}`}>
      <span>{time}</span>
      <div className="flex items-center gap-1.5">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="7" width="3" height="5" rx="0.5"/><rect x="5" y="5" width="3" height="7" rx="0.5"/><rect x="10" y="3" width="3" height="9" rx="0.5"/><rect x="15" y="0" width="3" height="12" rx="0.5"/></svg>
        <svg width="15" height="12" viewBox="0 0 15 12" fill="currentColor"><path d="M7.5 10.8a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zM4.2 7.4a4.7 4.7 0 016.6 0l-1.1 1.1a3.2 3.2 0 00-4.4 0L4.2 7.4zM1.5 4.7a8.5 8.5 0 0112 0L12.4 5.8a7 7 0 00-9.8 0L1.5 4.7z"/></svg>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="currentColor"/><rect x="2" y="2" width="17" height="8" rx="1.5" fill="currentColor"/><rect x="21.5" y="4" width="1.5" height="4" rx="0.7" fill="currentColor"/></svg>
      </div>
    </div>
  );
}
