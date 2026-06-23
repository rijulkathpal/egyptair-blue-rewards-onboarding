import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BrandLockup from '../components/BrandLockup';
import Button from '../components/Button';
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import { useAppContext } from '../context/useAppContext';

export default function AppRedirect() {
  const navigate = useNavigate();
  const { userKind } = useAppContext();
  const isExisting = userKind === 'existing';
  const destination = isExisting ? '/home' : null;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (destination) navigate(destination);
    }, 1600);
    return () => clearTimeout(timer);
  }, [destination, navigate]);

  return (
    <div className="hero-gradient flex min-h-full flex-col">
      <StatusBar />
      <Header variant="browser" onBack={() => navigate(-1)} />

      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <BrandLockup />
        <div className="mt-6 h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        <h1 className="mt-6 font-display text-[19px] font-bold leading-snug text-white">
          {isExisting ? 'Redirecting now to Blue Rewards app…' : 'Redirecting now to App store, Download Blue Rewards app…'}
        </h1>
      </div>

      <div className="px-6 pb-8">
        <Button
          onClick={() => {
            if (isExisting) {
              navigate('/home');
            } else {
              // In production this would deep-link to the App Store / Play Store listing.
              window.open('https://example.com', '_blank');
            }
          }}
        >
          Open Blue Rewards
        </Button>
      </div>
    </div>
  );
}
