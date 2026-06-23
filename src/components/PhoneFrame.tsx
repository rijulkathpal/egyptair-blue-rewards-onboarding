import type { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  /** Background applied behind the status bar / header so it can match a gradient or solid screen. */
  topBackgroundClassName?: string;
}

/**
 * On small viewports this renders edge-to-edge like a real mobile web app.
 * On tablet/desktop it centers a fixed-width "device" column with a bezel-style shadow,
 * per the brief's "desktop centered mobile frame" requirement.
 */
export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen w-full bg-[#d9dde2] flex items-center justify-center sm:py-8">
      <div className="relative flex h-screen w-full max-w-mobile flex-col overflow-hidden bg-white sm:h-[844px] sm:rounded-[40px] sm:shadow-device">
        <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
      </div>
    </div>
  );
}
