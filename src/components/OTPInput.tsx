import { useEffect, useRef } from 'react';

interface OTPInputProps {
  length?: number;
  value: string[];
  onChange: (value: string[]) => void;
  status: 'idle' | 'verifying' | 'verified' | 'error';
}

export default function OTPInput({ length = 6, value, onChange, status }: OTPInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (status === 'idle') inputsRef.current[0]?.focus();
  }, [status]);

  function setDigit(index: number, digit: string) {
    const next = [...value];
    next[index] = digit;
    onChange(next);
    if (digit && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    if (!pasted) return;
    e.preventDefault();
    const next = Array.from({ length }, (_, i) => pasted[i] ?? '');
    onChange(next);
    inputsRef.current[Math.min(pasted.length, length - 1)]?.focus();
  }

  const half = Math.ceil(length / 2);
  const groups = [value.slice(0, half), value.slice(half)];

  return (
    <div className={`flex items-center justify-center gap-3 ${status === 'error' ? 'animate-shake' : ''}`}>
      {groups.map((group, groupIndex) => (
        <div className="flex items-center gap-2" key={groupIndex}>
          {groupIndex === 1 && <span className="mr-1 h-[2px] w-2 bg-white/70" />}
          {group.map((digit, i) => {
            const index = groupIndex * half + i;

            if (status === 'verified') {
              return (
                <div
                  key={index}
                  className="flex h-14 w-12 items-center justify-center rounded-xl bg-white shadow-sm"
                >
                  <CheckMark />
                </div>
              );
            }

            return (
              <input
                key={index}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                disabled={status === 'verifying'}
                value={digit}
                onChange={(e) => setDigit(index, e.target.value.replace(/\D/g, '').slice(-1))}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`h-14 w-12 rounded-xl bg-white text-center text-[20px] font-semibold text-brand-ink shadow-sm outline-none focus:ring-2 focus:ring-brand-cta-blue
                  ${status === 'error' ? 'ring-2 ring-red-400' : ''}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function CheckMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 9.5L7 13.5L15 5" stroke="#16213A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
