import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'gradient' | 'outline-on-dark';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  solid: 'bg-brand-ink text-white disabled:bg-state-disabled disabled:text-white/80',
  outline: 'bg-transparent border border-surface-border text-brand-ink',
  gradient: 'cta-gradient text-white shadow-md disabled:opacity-50',
  'outline-on-dark': 'bg-transparent border border-white/30 text-white',
};

export default function Button({
  variant = 'solid',
  loading = false,
  disabled,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={`h-14 w-full rounded-2xl font-display text-[15px] font-semibold tracking-wide
        transition active:scale-[0.98] disabled:cursor-not-allowed disabled:active:scale-100
        flex items-center justify-center gap-2
        ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
      {children}
    </button>
  );
}
