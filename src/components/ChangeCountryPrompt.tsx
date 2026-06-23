import { Check } from 'lucide-react';
import type { Country } from '../types';
import { flagEmoji } from '../utils/countries';
import Button from './Button';

interface ChangeCountryPromptProps {
  currentCountry: Country;
  targetCountry: Country;
  onKeepCurrent: () => void;
  onChangeCountry: () => void;
}

export default function ChangeCountryPrompt({
  currentCountry,
  targetCountry,
  onKeepCurrent,
  onChangeCountry,
}: ChangeCountryPromptProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
      <div className="w-full max-w-mobile rounded-t-3xl bg-brand-navy px-6 pb-8 pt-3 text-center">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20" />

        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-cta-blue-light">
          <Check size={22} className="text-white" />
        </div>

        <h2 className="mt-4 font-display text-[18px] font-bold text-white">Change Your Country</h2>
        <p className="mt-2 text-[13px] leading-relaxed text-text-onDarkMuted">
          Exclusive offers are available only for {flagEmoji(targetCountry.iso2)} {targetCountry.name}. You can go
          back to the profile section and change anytime.
        </p>

        <p className="mt-4 text-[13px] text-text-onDarkMuted">
          Current Country {flagEmoji(currentCountry.iso2)} <span className="font-semibold text-white">{currentCountry.name}</span>
        </p>

        <div className="mt-5 flex flex-col gap-3">
          <Button variant="outline-on-dark" onClick={onKeepCurrent}>
            Keep current country
          </Button>
          <Button variant="gradient" onClick={onChangeCountry}>
            Change to {targetCountry.name === 'United Arab Emirates' ? 'U.A.E' : targetCountry.name}
          </Button>
        </div>
      </div>
    </div>
  );
}
