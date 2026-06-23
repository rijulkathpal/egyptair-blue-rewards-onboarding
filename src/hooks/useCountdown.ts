import { useEffect, useRef, useState } from 'react';

/**
 * Counts down from `seconds` to 0. Call `restart()` to reset it (e.g. on "Resend code").
 */
export function useCountdown(seconds: number) {
  const [remaining, setRemaining] = useState(seconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRemaining((current) => (current > 0 ? current - 1 : 0));
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function restart() {
    setRemaining(seconds);
  }

  return { remaining, isDone: remaining === 0, restart };
}
