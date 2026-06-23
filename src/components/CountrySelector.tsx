import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { Country } from '../types';
import { COUNTRIES, flagEmoji, groupByFirstLetter } from '../utils/countries';
import Button from './Button';

interface CountrySelectorProps {
  title: string;
  selectedIso2?: string;
  countries?: Country[];
  onSelect: (country: Country) => void;
  onClose: () => void;
  /** When provided, a Confirm button is shown and tapping a row only stages the selection. */
  confirmLabel?: string;
  renderTrailing?: (country: Country) => React.ReactNode;
}

export default function CountrySelector({
  title,
  selectedIso2,
  countries = COUNTRIES,
  onSelect,
  onClose,
  confirmLabel,
  renderTrailing,
}: CountrySelectorProps) {
  const [query, setQuery] = useState('');
  const [staged, setStaged] = useState<string | undefined>(selectedIso2);

  const filtered = useMemo(
    () => countries.filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase())),
    [countries, query]
  );
  const groups = useMemo(() => groupByFirstLetter(filtered), [filtered]);
  const letters = useMemo(() => Array.from(groups.keys()), [groups]);

  function handleRowTap(country: Country) {
    if (confirmLabel) {
      setStaged(country.iso2);
    } else {
      onSelect(country);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
      <div className="flex h-[85%] w-full max-w-mobile flex-col rounded-t-3xl bg-white">
        <div className="flex justify-center pt-3">
          <div className="h-1 w-10 rounded-full bg-surface-border" />
        </div>

        <div className="flex items-center justify-between px-5 pt-3">
          <h2 className="flex-1 text-center font-display text-[17px] font-semibold text-brand-ink">{title}</h2>
          <button aria-label="Close" onClick={onClose} className="absolute right-4 top-4 text-text-muted">
            <X size={20} />
          </button>
        </div>

        <div className="px-5 pt-4">
          <div className="flex items-center gap-2 rounded-2xl bg-surface-subtle px-4 py-3">
            <Search size={18} className="text-text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-transparent text-[15px] text-brand-ink placeholder:text-text-muted outline-none"
            />
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto pb-4 pr-7">
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <div className="bg-surface-app px-5 py-1 text-[12px] font-semibold text-text-muted">{letter}</div>
                {groups.get(letter)!.map((country) => {
                  const isSelected = confirmLabel ? staged === country.iso2 : selectedIso2 === country.iso2;
                  return (
                    <button
                      key={country.iso2}
                      onClick={() => handleRowTap(country)}
                      className="flex w-full items-center gap-3 border-b border-surface-border px-5 py-3 text-left"
                    >
                      <span className="text-xl leading-none">{flagEmoji(country.iso2)}</span>
                      <span className="flex-1 text-[15px] text-brand-ink">{country.name}</span>
                      {renderTrailing?.(country)}
                      {isSelected && <CheckIcon />}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="no-scrollbar absolute right-0 top-0 flex h-full flex-col items-center justify-center gap-[2px] overflow-y-auto pr-2 text-[10px] font-semibold text-brand-cta-blue">
            {letters.map((letter) => (
              <a key={letter} href={`#letter-${letter}`} className="px-1">
                {letter}
              </a>
            ))}
          </div>
        </div>

        {confirmLabel && (
          <div className="px-5 pb-6 pt-3">
            <Button
              onClick={() => {
                const country = countries.find((c) => c.iso2 === staged);
                if (country) onSelect(country);
              }}
              disabled={!staged}
            >
              {confirmLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9.5L7 13.5L15 5" stroke="#16213A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
