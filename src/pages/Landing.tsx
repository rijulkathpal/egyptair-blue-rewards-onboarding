import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BrandLockup from '../components/BrandLockup';
import Button from '../components/Button';
import Header from '../components/Header';
import PhoneInput from '../components/PhoneInput';
import StatusBar from '../components/StatusBar';
import { useAppContext } from '../context/useAppContext';
import { checkRegistration, requestOtp } from '../utils/mockApi';
import { isValidPhoneNumber } from '../utils/validators';

export default function Landing() {
  const navigate = useNavigate();
  const { phoneCountry, phoneNumber, setPhoneCountry, setPhoneNumber, fullPhoneNumber } = useAppContext();
  const [submitting, setSubmitting] = useState(false);
  const [notRegistered, setNotRegistered] = useState(false);

  const valid = isValidPhoneNumber(phoneNumber);

  async function handleClaimReward() {
    if (!valid || submitting) return;
    setSubmitting(true);
    setNotRegistered(false);

    const { recognized } = await checkRegistration(fullPhoneNumber);
    if (!recognized) {
      setSubmitting(false);
      setNotRegistered(true);
      return;
    }

    await requestOtp(fullPhoneNumber);
    setSubmitting(false);
    navigate('/verify');
  }

  return (
    <div className="hero-gradient flex min-h-full flex-col">
      <StatusBar />
      <Header variant="browser" onBack={() => navigate(-1)} />

      <div className="flex-1 px-6 pt-4">
        <h1 className="font-display text-[26px] font-bold leading-tight text-white">
          Earn rewards on your flight booking with Blue Rewards.
        </h1>

        <div className="mt-8">
          <BrandLockup />
        </div>

        <div className="mt-10">
          <PhoneInput
            country={phoneCountry}
            value={phoneNumber}
            onCountryChange={setPhoneCountry}
            onValueChange={setPhoneNumber}
          />
        </div>

        <div className="mt-6">
          <Button onClick={handleClaimReward} disabled={!valid} loading={submitting}>
            Claim Reward
          </Button>
        </div>

        {notRegistered && (
          <div className="mt-8 rounded-2xl bg-white/95 p-5">
            <p className="text-[14px] font-semibold leading-relaxed text-brand-ink">
              Please enter the mobile number linked to your Blue Rewards account or download and register.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Button onClick={() => window.open('https://example.com', '_blank')}>Download Blue Rewards</Button>
              <Button variant="outline" onClick={() => setNotRegistered(false)}>
                Try Again
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="h-2" />
    </div>
  );
}
