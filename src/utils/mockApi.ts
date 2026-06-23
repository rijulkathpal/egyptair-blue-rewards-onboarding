import type { UserKind } from '../types';

/**
 * Stand-in for a real backend. There is no server here — this file exists so the UI has
 * something realistic to await (loading states, error states) and is the single place to
 * wire up real endpoints later. Replace each function body with an actual fetch() call.
 */

const DELAY_MS = 900;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function requestOtp(_fullPhoneNumber: string): Promise<{ ok: true }> {
  await wait(DELAY_MS);
  return { ok: true };
}

/**
 * Demo-only heuristic: numbers ending in "000" simulate a phone number with no associated
 * Blue Rewards account, so the "not registered" error state is reachable without a backend.
 * Replace with a real lookup.
 */
export async function checkRegistration(fullPhoneNumber: string): Promise<{ recognized: boolean }> {
  await wait(DELAY_MS / 1.5);
  const digits = fullPhoneNumber.replace(/\D/g, '');
  return { recognized: !digits.endsWith('000') };
}

/**
 * Demo-only heuristic so both branches of the flow (new vs. existing user) are reachable
 * without a backend: phone numbers whose last digit is even are treated as "existing"
 * accounts, odd as "new". This has no real-world meaning — replace with an actual
 * lookup against your user database.
 */
export async function verifyOtp(
  code: string,
  fullPhoneNumber: string
): Promise<{ ok: boolean; userKind: UserKind }> {
  await wait(DELAY_MS);
  const digits = fullPhoneNumber.replace(/\D/g, '');
  const lastDigit = Number(digits[digits.length - 1] ?? 0);
  const userKind: UserKind = lastDigit % 2 === 0 ? 'existing' : 'new';
  const ok = code.length === 6;
  return { ok, userKind };
}
