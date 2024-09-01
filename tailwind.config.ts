import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  separator: '',
  prefix: '', presets: undefined,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}'  // This covers all files in the app directory
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))'
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB'
        }
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)'
        }
      }
    }
  },
  plugins: [forms]
};

export default config;