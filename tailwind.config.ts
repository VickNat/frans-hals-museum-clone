import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-3150px)' },
        },
      },
      animation: {
        'marquee-infinite': 'marquee 75s linear infinite',
      },
      colors: {
        primaryColor: '#fce373',
        secondaryColor: '#cca69a',
        others: {
          100: "#f37449",
          200: "#a385bd",
        },
      },
    },
    fontFamily: {
      secondaryFont: ['Twentieth Century', 'sans-serif'],
      primaryFont: ['Raisonne', 'sans-serif'],
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
export default config
