import { createContext } from 'react';
import type { Country, OnboardingState, UserKind } from '../types';

export interface AppContextValue extends OnboardingState {
  setPhoneCountry: (country: Country) => void;
  setPhoneNumber: (number: string) => void;
  setUserKind: (kind: UserKind) => void;
  setNationality: (country: Country) => void;
  setHomeCountry: (country: Country) => void;
  fullPhoneNumber: string;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);
