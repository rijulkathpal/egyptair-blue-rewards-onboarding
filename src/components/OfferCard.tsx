import { Heart } from 'lucide-react';
import { useState } from 'react';
import type { Offer } from '../types';

interface OfferCardProps {
  offer: Offer;
  onClick?: () => void;
}

export default function OfferCard({ offer, onClick }: OfferCardProps) {
  const [favorited, setFavorited] = useState(false);

  return (
    <button onClick={onClick} className="flex w-full items-start gap-3 border-b border-surface-border px-5 py-4 text-left">
      <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold ${offer.swatchClassName}`}>
        {offer.brand.split(' ')[0].slice(0, 2)}
      </div>
      <div className="flex-1">
        <p className="text-[11px] font-semibold tracking-wide text-brand-ink">{offer.brand}</p>
        <p className="text-[14px] font-bold text-brand-ink">{offer.headline}</p>
        <p className="mt-0.5 text-[13px] leading-snug text-text-secondary">{offer.description}</p>
      </div>
      <button
        aria-label="Save offer"
        onClick={(e) => {
          e.stopPropagation();
          setFavorited((f) => !f);
        }}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-surface-border"
      >
        <Heart size={15} className={favorited ? 'fill-brand-cta-blue text-brand-cta-blue' : 'text-text-muted'} />
      </button>
    </button>
  );
}
