import type { Country } from '../types';

/**
 * A curated subset of countries (not the full ISO-3166 list of ~195) — enough to demonstrate
 * the alphabetical, sectioned country/nationality picker shown in the screenshot, including
 * every country visible in the reference image (Uganda → Vietnam, plus UAE, Egypt, Singapore).
 *
 * Dial codes below are widely-known, stable public data, but this list is not exhaustive or
 * guaranteed error-free — for production, swap this in for a verified package such as
 * `world-countries` or `country-codes-list` rather than relying on this hand-written sample.
 */
export const COUNTRIES: Country[] = [
  { iso2: 'AE', name: 'United Arab Emirates', dialCode: '+971' },
  { iso2: 'EG', name: 'Egypt', dialCode: '+20' },
  { iso2: 'SA', name: 'Saudi Arabia', dialCode: '+966' },
  { iso2: 'SG', name: 'Singapore', dialCode: '+65' },
  { iso2: 'GB', name: 'United Kingdom', dialCode: '+44' },
  { iso2: 'US', name: 'United States', dialCode: '+1' },
  { iso2: 'FR', name: 'France', dialCode: '+33' },
  { iso2: 'DE', name: 'Germany', dialCode: '+49' },
  { iso2: 'IN', name: 'India', dialCode: '+91' },
  { iso2: 'JO', name: 'Jordan', dialCode: '+962' },
  { iso2: 'KW', name: 'Kuwait', dialCode: '+965' },
  { iso2: 'QA', name: 'Qatar', dialCode: '+974' },
  { iso2: 'OM', name: 'Oman', dialCode: '+968' },
  { iso2: 'BH', name: 'Bahrain', dialCode: '+973' },
  { iso2: 'TR', name: 'Turkey', dialCode: '+90' },
  { iso2: 'UG', name: 'Uganda', dialCode: '+256' },
  { iso2: 'UA', name: 'Ukraine', dialCode: '+380' },
  { iso2: 'UY', name: 'Uruguay', dialCode: '+598' },
  { iso2: 'UZ', name: 'Uzbekistan', dialCode: '+998' },
  { iso2: 'VU', name: 'Vanuatu', dialCode: '+678' },
  { iso2: 'VA', name: 'Vatican City', dialCode: '+379' },
  { iso2: 'VE', name: 'Venezuela', dialCode: '+58' },
  { iso2: 'VN', name: 'Vietnam', dialCode: '+84' },
  { iso2: 'ZA', name: 'South Africa', dialCode: '+27' },
  { iso2: 'CA', name: 'Canada', dialCode: '+1' },
  { iso2: 'AU', name: 'Australia', dialCode: '+61' },
  { iso2: 'NZ', name: 'New Zealand', dialCode: '+64' },
  { iso2: 'NL', name: 'Netherlands', dialCode: '+31' },
  { iso2: 'ES', name: 'Spain', dialCode: '+34' },
  { iso2: 'IT', name: 'Italy', dialCode: '+39' },
];

/** Builds a flag emoji from an ISO-2 code by offsetting into the Unicode regional-indicator block. */
export function flagEmoji(iso2: string): string {
  const codePoints = iso2
    .toUpperCase()
    .split('')
    .map((char) => 0x1f1e6 - 65 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export function sortedByName(countries: Country[]): Country[] {
  return [...countries].sort((a, b) => a.name.localeCompare(b.name));
}

export function groupByFirstLetter(countries: Country[]): Map<string, Country[]> {
  const sorted = sortedByName(countries);
  const groups = new Map<string, Country[]>();
  for (const country of sorted) {
    const letter = country.name[0].toUpperCase();
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(country);
  }
  return groups;
}

export const DEFAULT_COUNTRY: Country = COUNTRIES[0]; // United Arab Emirates
