interface BrandLockupProps {
  tone?: 'light' | 'dark';
}

/**
 * The reference screenshot shows the real EgyptAir wordmark and a "Blue" rewards mark.
 * Those are registered trademarks, so this component renders a generic placeholder lockup
 * with the same layout (airline mark · divider · rewards mark) instead of reproducing the
 * actual logos. Replace with your licensed SVG assets.
 */
export default function BrandLockup({ tone = 'light' }: BrandLockupProps) {
  const color = tone === 'light' ? 'text-white' : 'text-brand-ink';
  return (
    <div className={`flex items-center justify-center gap-3 ${color}`}>
      <span className="font-display text-[15px] font-extrabold italic tracking-wide">AIRLINE</span>
      <span className="h-4 w-px bg-current opacity-50" />
      <span className="flex items-center gap-1 text-[15px] font-semibold">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-[11px] font-bold">
          B
        </span>
        Blue
      </span>
    </div>
  );
}
