/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled directly from the reference screenshot (see README "Design tokens" section
        // for how these were derived and which ones are estimates vs. measured pixels).
        brand: {
          'gradient-top': '#4FA3DE',
          'gradient-mid': '#3B82C2',
          'gradient-deep': '#357FBE',
          'cta-blue': '#367CED',
          'cta-blue-light': '#73ACF3',
          ink: '#1F1F1F',
          navy: '#0D294F',
        },
        surface: {
          app: '#F5F5F7',
          subtle: '#ECEEF0',
          border: '#E5E7EB',
        },
        text: {
          primary: '#16213A',
          secondary: '#6B7280',
          muted: '#9CA3AF',
          onDark: '#FFFFFF',
          onDarkMuted: '#CBD8E6',
        },
        state: {
          disabled: '#9B9B9B',
        },
      },
      fontFamily: {
        // Exact brand typeface can't be determined with certainty from a raster screenshot —
        // Poppins is used as the closest widely-available rounded-geometric match. Verify
        // against the real design system if pixel-exact type matters.
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        mobile: '430px',
      },
      borderRadius: {
        xl2: '20px',
      },
      boxShadow: {
        device: '0 0 0 1px rgba(0,0,0,0.04), 0 24px 48px -12px rgba(15,23,42,0.25)',
      },
    },
  },
  plugins: [],
}

