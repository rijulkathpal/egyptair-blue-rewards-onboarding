# Blue Rewards — Onboarding Flow

A React + TypeScript + Tailwind recreation of the onboarding flow shown in the supplied
screenshot (`EN - Onboarding`, "New user" and "Existing user" rows).

## Install & run

```bash
npm install
npm run dev      # local dev server, default http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build locally
npm run lint      # eslint
```

No backend is required — see **Mock data layer** below.

## What's implemented

| Screen in screenshot | Route | File |
|---|---|---|
| Enter mobile number / Claim Reward (empty, filled, disabled/enabled button) | `/` | `pages/Landing.tsx` |
| "Please enter the mobile number linked to your account…" error card | `/` (inline state) | `pages/Landing.tsx` |
| Verify your number — OTP entry, countdown, checkmarks-on-verify | `/verify` | `pages/VerifyPhone.tsx` |
| "Redirecting now to App store…" / "…to Blue Rewards app…" | `/redirect` | `pages/AppRedirect.tsx` |
| Welcome to Blue! + "Change Your Country" sheet | `/home` | `pages/Home.tsx` |
| Nationality picker (search, A–Z sections, index rail, Confirm) | `/nationality` | `pages/NationalitySelect.tsx` |
| Exclusive Offers list | `/rewards` | `pages/Rewards.tsx` |
| Offer detail sheet ("40% Discount on Summer flight booking") | `/rewards/:id` | `pages/RewardDetail.tsx` |

Reusable components live in `src/components` (`Button`, `PhoneInput`, `OTPInput`, `Header`,
`OfferCard`, `RewardCard`, `CountrySelector`, plus `BrandLockup`, `ChangeCountryPrompt`,
`PhoneFrame`, `StatusBar`, which the brief's example skeleton didn't name but the screenshot
required). `CountrySelector` is shared by both the dial-code dropdown on `Landing` and the
full nationality sheet — same list/search/index-rail UI, different data and confirm behaviour.

## Things I deliberately did not reproduce pixel-for-pixel, and why

Being upfront about this rather than shipping something that looks "done" but overclaims
accuracy:

1. **Exact colors**: the hex values in `tailwind.config.js` (gradient stops, button colors,
   the dark navy modal, etc.) were obtained by programmatically sampling pixels from your
   screenshot, not eyeballed — so they should be close. But a raster screenshot isn't a
   design file, so treat them as a strong approximation, not a guaranteed match to whatever
   the original source-of-truth hex values are.
2. **Font family**: I cannot reliably identify the exact typeface from a raster image.
   Poppins (headings) + Inter (body) are used as the closest widely-available rounded
   sans-serif match. Verify against the real design system if exact type matters, and swap
   the `@import` in `src/index.css` / `fontFamily` in `tailwind.config.js` accordingly.
3. **Exact spacing/sizing in px**: padding, radii, and component heights are close visual
   approximations against the screenshot's proportions, not exact dev-handoff values — I
   don't have the original Figma file's measurements or auto-layout specs.
4. **Brand logos & photography**: the screenshot shows real trademarks (EgyptAir, Tommy
   Hilfiger, Converse, Ted Baker, Waitrose, Kiabi) and a real lifestyle photo. Those belong
   to other companies, so this build uses a neutral placeholder lockup (`BrandLockup.tsx`),
   colored initial-swatches for offer thumbnails, and a gradient in place of the welcome
   screen's photo. Swap in your own licensed assets.
5. **OS-level chrome**: the status bar, the native numeric keypad that pops up under the
   phone/OTP inputs, the SMS "from Messages" autofill suggestion, and the actual App Store
   listing page are all rendered by the operating system / App Store, not by a web app —
   so they're either omitted, or (status bar only, for in-browser preview fidelity)
   recreated as a purely cosmetic, non-functional component (`StatusBar.tsx`).
6. **Country/dial-code list**: `utils/countries.ts` is a curated ~30-country list — enough
   to demo the sectioned/search UI, and includes every country visible in your screenshot —
   not the full ISO-3166 set of ~195. Swap in a verified package such as `world-countries`
   for production use.

## Mock data layer (`src/utils/mockApi.ts`)

There's no backend, so this file stands in for one with `setTimeout`-delayed promises:

- `checkRegistration(phone)` — numbers ending in `000` simulate "no account found" so the
  error card is reachable in the demo. Replace with a real lookup.
- `verifyOtp(code, phone)` — any 6-digit code "succeeds"; whether you're routed to the
  new-user (App Store redirect) or existing-user (Rewards dashboard) branch is decided by
  whether the phone number's last digit is even/odd. That rule has no real-world meaning —
  it exists purely so both branches of the flow are reachable without a server. Try
  `522695307` (new user) vs. `522695302` (existing user) on the Landing screen.

## Architecture decisions

- **Vite + React 19 + TypeScript** for fast local DX and type safety throughout.
- **Tailwind** with a small custom theme (`tailwind.config.js`) rather than ad-hoc inline
  styles, so the sampled brand colors are reusable design tokens, not magic strings.
- **React Router** (`react-router-dom`) for the multi-screen flow with real, bookmarkable
  URLs per step.
- **React Context** (`src/context`) for the small amount of cross-page state (phone number,
  selected country, verified user type) instead of prop-drilling or a heavier state library —
  there isn't enough state here to justify Redux/Zustand. The context value, the provider
  component, and the `useAppContext` hook are split into three files purely so Vite's
  fast-refresh lint rule (`react-refresh/only-export-components`) stays satisfied.
- **No localStorage/session persistence** — state is in-memory only and resets on refresh.
  There's no backend in this demo, so persistence would be cosmetic; wire up real auth/session
  handling alongside a real API instead.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` all pass cleanly (zero errors or
  warnings) as of this writing — re-run them yourself after any changes, and double-check
  current library/API syntax (Tailwind, React Router, etc.) against the official docs before
  relying on it, since package APIs can change after this project was generated.
