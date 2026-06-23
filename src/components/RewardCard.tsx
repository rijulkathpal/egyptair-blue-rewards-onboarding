import type { Offer } from '../types';

interface RewardCardProps {
  offer: Offer;
}

export default function RewardCard({ offer }: RewardCardProps) {
  return (
    <div className="px-6 pb-8 pt-2 text-center">
      <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm ${offer.swatchClassName}`}>
        <span className="text-[13px] font-bold">{offer.brand.split(' ')[0].slice(0, 2)}</span>
      </div>

      <h2 className="mt-4 font-display text-[19px] font-bold leading-snug text-brand-ink">{offer.discountLabel}</h2>
      <p className="font-display text-[19px] font-bold leading-snug text-brand-ink">on {offer.subject}</p>
      <p className="mt-1 text-[13px] text-text-secondary">{offer.validity}</p>

      <div className="mt-5 flex h-40 items-center justify-center rounded-2xl border border-surface-border bg-surface-app">
        <span className="text-[13px] text-text-muted">{offer.brand} artwork</span>
      </div>

      <p className="mt-5 text-[13px] leading-relaxed text-text-secondary">{offer.longDescription}</p>

      <button className="mt-8 text-[13px] font-medium text-brand-ink underline">Terms &amp; Conditions</button>
    </div>
  );
}
