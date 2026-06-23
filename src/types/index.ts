/**
 * Shared domain types for the Blue Rewards onboarding flow.
 */

export interface Country {
  /** ISO 3166-1 alpha-2 code, e.g. "AE" */
  iso2: string;
  name: string;
  /** International dial code, e.g. "+971" */
  dialCode: string;
}

export type UserKind = 'new' | 'existing';

export type VerificationStatus = 'idle' | 'sending' | 'sent' | 'verifying' | 'verified' | 'error';

export interface Offer {
  id: string;
  brand: string;
  headline: string;
  description: string;
  /** Tailwind classes used to render a placeholder thumbnail (no real brand logos are bundled — see README). */
  swatchClassName: string;
  discountLabel: string;
  /** Short phrase completing "{discountLabel} on {subject}" on the detail screen. */
  subject: string;
  validity: string;
  longDescription: string;
}

export interface OnboardingState {
  phoneCountry: Country;
  phoneNumber: string;
  userKind: UserKind | null;
  nationality: Country | null;
  homeCountry: Country;
}
