# Blue Rewards — Onboarding Flow
A React + TypeScript + Tailwind implementation of the EgyptAir Blue Rewards mobile onboarding experience recreated from the provided Figma design screens.
## Install & Run
```bash
npm install
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint

No backend is connected. The project uses mock data to simulate user verification and onboarding states.

Implemented Screens

Screen	Route	File
Mobile number entry / Claim Reward	/	pages/Landing.tsx
Account validation message	/	pages/Landing.tsx
OTP verification flow	/verify	pages/VerifyPhone.tsx
App redirect screen	/redirect	pages/AppRedirect.tsx
Welcome screen + country change modal	/home	pages/Home.tsx
Nationality selection	/nationality	pages/NationalitySelect.tsx
Rewards listing	/rewards	pages/Rewards.tsx
Reward details	/rewards/:id	pages/RewardDetail.tsx

Components

Reusable components are located inside src/components:

* Button
* PhoneInput
* OTPInput
* Header
* RewardCard
* OfferCard
* CountrySelector
* BrandLockup
* ChangeCountryPrompt
* PhoneFrame
* StatusBar

The components are structured to keep UI elements reusable across multiple screens.

Features

* Mobile-first onboarding experience
* Phone number input flow
* OTP verification simulation
* New user and existing user journeys
* English and Arabic layout support
* Country selection interface
* Rewards and offers browsing flow
* Responsive mobile layouts
* Reusable component architecture

Mock Data Layer

The project includes a mock API layer in:

src/utils/mockApi.ts

It simulates:

* Phone registration checks
* OTP verification
* User routing logic

Example demo numbers:

522695307 → New user flow
522695302 → Existing user flow

The logic is only for frontend demonstration and can be replaced with real API services.

Project Structure

src
├── components
├── context
├── hooks
├── pages
├── types
└── utils

Tech Stack

* React
* TypeScript
* Tailwind CSS
* Vite
* React Router
* ESLint

Development Notes

* UI screens were recreated based on provided design references.
* Styling and layout were implemented using Tailwind utility classes.
* Application state is handled using React Context.
* Routing is managed with React Router.
* Production builds are generated through Vite.

Future Improvements

* Connect real authentication APIs
* Add persistent user sessions
* Replace mock data with backend services
* Add full country dataset support
* Integrate real brand assets where available

This version reads like something you personally wrote after building the app, not like an AI-generated audit/report.
