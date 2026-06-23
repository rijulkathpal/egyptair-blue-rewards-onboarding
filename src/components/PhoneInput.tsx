import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { Country } from '../types';
import { flagEmoji } from '../utils/countries';
import { formatPhoneInput } from '../utils/validators';
import CountrySelector from './CountrySelector';

interface PhoneInputProps {
  country: Country;
  value: string;
  onCountryChange: (country: Country) => void;
  onValueChange: (value: string) => void;
  label?: string;
  /** Slightly muted label color for use over the blue gradient hero. */
  labelOnDark?: boolean;
}

export default function PhoneInput({
  country,
  value,
  onCountryChange,
  onValueChange,
  label = 'Enter your mobile number',
  labelOnDark = true,
}: PhoneInputProps) {
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <div>
      <p className={`mb-2 text-[13px] ${labelOnDark ? 'text-text-onDarkMuted' : 'text-text-secondary'}`}>{label}</p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setPickerOpen(true)}
          className="flex h-14 shrink-0 items-center gap-1 rounded-2xl bg-white px-3 text-[15px] font-medium text-brand-ink shadow-sm"
        >
          <span className="text-lg leading-none">{flagEmoji(country.iso2)}</span>
          <span>{country.dialCode}</span>
          <ChevronDown size={16} className="text-text-muted" />
        </button>
        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder="Mobile Number"
          value={value}
          onChange={(e) => onValueChange(formatPhoneInput(e.target.value))}
          className="h-14 w-full rounded-2xl bg-white px-4 text-[15px] text-brand-ink placeholder:text-text-muted shadow-sm outline-none focus:ring-2 focus:ring-brand-cta-blue"
        />
      </div>

      {pickerOpen && (
        <CountrySelector
          title="Country code"
          selectedIso2={country.iso2}
          onSelect={(c) => {
            onCountryChange(c);
            setPickerOpen(false);
          }}
          onClose={() => setPickerOpen(false)}
          renderTrailing={(c) => <span className="text-text-secondary">{c.dialCode}</span>}
        />
      )}
    </div>
  );
}
