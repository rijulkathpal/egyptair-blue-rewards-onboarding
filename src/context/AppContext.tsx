import { useMemo, useState, type ReactNode } from 'react';
import type { Country, UserKind } from '../types';
import { DEFAULT_COUNTRY } from '../utils/countries';
import { AppContext, type AppContextValue } from './context';

export function AppProvider({ children }: { children: ReactNode }) {
  const [phoneCountry, setPhoneCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userKind, setUserKind] = useState<UserKind | null>(null);
  const [nationality, setNationality] = useState<Country | null>(null);
  const [homeCountry, setHomeCountry] = useState<Country>(
    () => ({ iso2: 'SG', name: 'Singapore', dialCode: '+65' })
  );

  const fullPhoneNumber = `${phoneCountry.dialCode} ${phoneNumber}`;

  const value = useMemo<AppContextValue>(
    () => ({
      phoneCountry,
      phoneNumber,
      userKind,
      nationality,
      homeCountry,
      fullPhoneNumber,
      setPhoneCountry,
      setPhoneNumber,
      setUserKind,
      setNationality,
      setHomeCountry,
    }),
    [phoneCountry, phoneNumber, userKind, nationality, homeCountry, fullPhoneNumber]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
