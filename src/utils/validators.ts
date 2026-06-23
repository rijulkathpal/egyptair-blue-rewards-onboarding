/**
 * Very lightweight phone validation for demo purposes: requires 7-12 digits.
 * This intentionally does NOT attempt full E.164 / libphonenumber-grade validation —
 * for production, use a real library (e.g. `libphonenumber-js`) rather than this regex.
 */
export function isValidPhoneNumber(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 12;
}

export function formatPhoneInput(raw: string): string {
  return raw.replace(/[^\d\s]/g, '');
}

/** Masks all but the last 4 digits, matching the "•••• 2652" style shown on the verify screen. */
export function maskPhoneNumber(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length <= 4) return digits;
  const last4 = digits.slice(-4);
  return `${'•'.repeat(Math.min(digits.length - 4, 6))} ${last4}`;
}

export function formatCountdown(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
