import { ChevronLeft, Plus } from 'lucide-react';
import type { ReactNode } from 'react';

interface BrowserHeaderProps {
  variant: 'browser';
  tone?: 'light' | 'dark';
  onBack?: () => void;
  url?: string;
}

interface PageHeaderProps {
  variant: 'page';
  title: string;
  onBack?: () => void;
  right?: ReactNode;
}

type HeaderProps = BrowserHeaderProps | PageHeaderProps;

export default function Header(props: HeaderProps) {
  if (props.variant === 'browser') {
    const tone = props.tone ?? 'light';
    const textColor = tone === 'light' ? 'text-white' : 'text-brand-ink';
    const pillBorder = tone === 'light' ? 'border-white/40' : 'border-surface-border';
    return (
      <div className={`flex items-center gap-3 px-5 pb-3 pt-1 ${textColor}`}>
        <button
          aria-label="Go back"
          onClick={props.onBack}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${pillBorder}`}
        >
          <ChevronLeft size={18} />
        </button>
        <div className={`flex-1 truncate rounded-full border ${pillBorder} px-4 py-2 text-center text-[13px]`}>
          {props.url ?? 'mybluerewards.com'}
        </div>
        <button
          aria-label="Add"
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${pillBorder}`}
        >
          <Plus size={18} />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 px-5 pb-3 pt-2">
      <button aria-label="Go back" onClick={props.onBack} className="flex h-8 w-8 items-center justify-center">
        <ChevronLeft size={22} className="text-brand-ink" />
      </button>
      <h1 className="flex-1 font-display text-[19px] font-semibold text-brand-ink">{props.title}</h1>
      {props.right}
    </div>
  );
}
