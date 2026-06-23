import { Bell } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangeCountryPrompt from '../components/ChangeCountryPrompt';
import StatusBar from '../components/StatusBar';
import { useAppContext } from '../context/useAppContext';
import { DEFAULT_COUNTRY } from '../utils/countries';

export default function Home() {
  const navigate = useNavigate();
  const { homeCountry, setHomeCountry } = useAppContext();
  const [showCountryPrompt, setShowCountryPrompt] = useState(true);

  return (
    <div className="flex min-h-full flex-col bg-surface-app">
      {/*
        The reference screenshot uses a real lifestyle photograph behind this header.
        That photo isn't ours to redistribute, so a brand-colour gradient placeholder
        stands in for it here — drop in your own licensed image via a background-image style.
      */}
      <div className="hero-gradient relative flex h-64 flex-col justify-between px-5 pb-6">
        <StatusBar />
        <div className="flex items-center justify-between">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">
            <Bell size={18} />
          </button>
          <div className="flex items-center gap-1 rounded-full bg-black/30 px-3 py-1.5 text-[13px] font-semibold text-white">
            <span>0.00</span>
          </div>
        </div>
        <div>
          <h1 className="font-display text-[24px] font-bold text-white">Welcome to Blue!</h1>
          <p className="mt-1 text-[13px] text-text-onDarkMuted">Earn points for every purchase you make with AlFuttaim brands.</p>
        </div>
      </div>

      <div className="flex-1 px-5 py-6">
        <button
          onClick={() => navigate('/rewards')}
          className="w-full rounded-2xl border border-surface-border bg-white p-4 text-left shadow-sm"
        >
          <p className="font-display text-[15px] font-semibold text-brand-ink">Exclusive Offers</p>
          <p className="mt-1 text-[13px] text-text-secondary">See this week&apos;s partner discounts →</p>
        </button>

        <button
          onClick={() => navigate('/nationality')}
          className="mt-4 w-full rounded-2xl border border-surface-border bg-white p-4 text-left shadow-sm"
        >
          <p className="font-display text-[15px] font-semibold text-brand-ink">Complete your profile</p>
          <p className="mt-1 text-[13px] text-text-secondary">Choose your nationality →</p>
        </button>
      </div>

      {showCountryPrompt && (
        <ChangeCountryPrompt
          currentCountry={homeCountry}
          targetCountry={DEFAULT_COUNTRY}
          onKeepCurrent={() => setShowCountryPrompt(false)}
          onChangeCountry={() => {
            setHomeCountry(DEFAULT_COUNTRY);
            setShowCountryPrompt(false);
          }}
        />
      )}
    </div>
  );
}
