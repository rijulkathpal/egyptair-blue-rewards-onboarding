import type { Offer } from '../types';

/**
 * Placeholder offer data. The reference screenshot shows real brand logos and lifestyle
 * photography (EgyptAir, Kiabi, Waitrose, Ted Baker, Converse, Tommy Hilfiger). Those are
 * each other companies' trademarks/photography, so this app renders neutral colour
 * swatches with the brand's initial instead of reproducing the actual logos — swap in
 * your own licensed assets in `Offer.swatchClassName` / a real `imageUrl` field.
 */
export const OFFERS: Offer[] = [
  {
    id: 'egyptair',
    brand: 'EGYPTAIR',
    headline: 'Special Offer — 40% off!',
    description: 'Price drop on over summer tickets with extra luggage.',
    swatchClassName: 'bg-white text-[#0a2351] border border-surface-border',
    discountLabel: '40% Discount',
    subject: 'Summer flight booking',
    validity: 'Available 01 June 2026 – 31 Aug 2026',
    longDescription:
      'Get an extra cashback boost on selected summer routes booked through the Blue Rewards app this season. Exclusions apply.',
  },
  {
    id: 'kiabi',
    brand: 'KIABI KIDSWEAR',
    headline: 'Special Offer — 40% off!',
    description: 'Price drop on over 2500 summer living room furniture and accessories.',
    swatchClassName: 'bg-sky-100 text-sky-900',
    discountLabel: '40% Discount',
    subject: "Kids' summer wardrobe",
    validity: 'Available 01 June 2026 – 31 Aug 2026',
    longDescription: 'Refresh the kids\u2019 wardrobe for summer with an extra discount at checkout. Exclusions apply.',
  },
  {
    id: 'waitrose',
    brand: 'WAITROSE',
    headline: 'Special Offer — 40% off!',
    description: 'Price drop on over 2500 summer living room furniture and accessories.',
    swatchClassName: 'bg-rose-100 text-rose-900',
    discountLabel: '40% Discount',
    subject: 'Summer picnic essentials',
    validity: 'Available 01 June 2026 – 31 Aug 2026',
    longDescription: 'Stock up the picnic basket for less this summer. Exclusions apply.',
  },
  {
    id: 'tedbaker',
    brand: 'TED BAKER',
    headline: 'Special Offer — 40% off!',
    description: 'Price drop on over 2500 summer living room furniture and accessories.',
    swatchClassName: 'bg-lime-100 text-lime-900',
    discountLabel: '40% Discount',
    subject: 'New-season pieces',
    validity: 'Available 01 June 2026 – 31 Aug 2026',
    longDescription: 'New-season pieces, marked down for Blue Rewards members. Exclusions apply.',
  },
  {
    id: 'converse',
    brand: 'CONVERSE',
    headline: 'Special Offer — 40% off!',
    description: 'Price drop on over 2500 summer living room furniture and accessories.',
    swatchClassName: 'bg-blue-100 text-blue-900',
    discountLabel: '40% Discount',
    subject: 'Classic styles',
    validity: 'Available 01 June 2026 – 31 Aug 2026',
    longDescription: 'Classic styles discounted for a limited time. Exclusions apply.',
  },
  {
    id: 'tommyhilfiger',
    brand: 'TOMMY HILFIGER',
    headline: 'Special Offer — 40% off!',
    description: 'Price drop on over 2500 summer living room furniture and accessories.',
    swatchClassName: 'bg-red-100 text-red-900',
    discountLabel: '40% Discount',
    subject: 'Selected summer lines',
    validity: 'Available 01 June 2026 – 31 Aug 2026',
    longDescription: 'The after-party begins now: an extra cashback boost on selected lines. Exclusions apply.',
  },
];
