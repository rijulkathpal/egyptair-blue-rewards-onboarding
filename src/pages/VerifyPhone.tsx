import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BrandLockup from '../components/BrandLockup';
import Header from '../components/Header';
import OTPInput from '../components/OTPInput';
import StatusBar from '../components/StatusBar';
import { useAppContext } from '../context/useAppContext';
import { useCountdown } from '../hooks/useCountdown';
import { requestOtp, verifyOtp } from '../utils/mockApi';
import { formatCountdown, maskPhoneNumber } from '../utils/validators';

type Status = 'idle' | 'verifying' | 'verified' | 'error';

export default function VerifyPhone() {
  const navigate = useNavigate();
  const { fullPhoneNumber, setUserKind } = useAppContext();
  const [digits, setDigits] = useState<string[]>(Array(6).fill(''));
  const [status, setStatus] = useState<Status>('idle');
  const countdown = useCountdown(49);

  // Triggered from the OTPInput change handler (not an effect) as soon as the 6th digit
  // lands — auto-submitting from a user-driven event keeps this a direct response to
  // input rather than a derived effect, which avoids cascading-render side effects.
  async function handleDigitsChange(next: string[]) {
    setDigits(next);
    const code = next.join('');
    if (code.length === 6 && status === 'idle') {
      await runVerification(code);
    }
  }

  async function runVerification(code: string) {
    setStatus('verifying');
    const result = await verifyOtp(code, fullPhoneNumber);
    if (!result.ok) {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
        setDigits(Array(6).fill(''));
      }, 900);
      return;
    }
    setUserKind(result.userKind);
    setStatus('verified');
    setTimeout(() => navigate('/redirect'), 700);
  }

  async function handleResend() {
    setDigits(Array(6).fill(''));
    setStatus('idle');
    countdown.restart();
    await requestOtp(fullPhoneNumber);
  }

  return (
    <div className="hero-gradient flex min-h-full flex-col">
      <StatusBar />
      <Header variant="browser" onBack={() => navigate(-1)} />

      <div className="flex-1 px-6 pt-6 text-center">
        <BrandLockup />

        <h1 className="mt-8 font-display text-[19px] font-bold text-white">Verify your number</h1>
        <p className="mt-2 text-[13px] text-text-onDarkMuted">
          Your code has been sent to the mobile number {maskPhoneNumber(fullPhoneNumber)} via SMS/WhatsApp
        </p>

        <div className="mt-8">
          <OTPInput value={digits} onChange={handleDigitsChange} status={status === 'idle' ? 'idle' : status} />
        </div>

        <div className="mt-6 text-[13px] text-text-onDarkMuted">
          {countdown.isDone ? (
            <button onClick={handleResend} className="font-semibold text-white underline">
              Resend Code
            </button>
          ) : (
            <>
              Code hasn&apos;t arrived?{' '}
              <span className="font-semibold text-white">You can retry in {formatCountdown(countdown.remaining)}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
