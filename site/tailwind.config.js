// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0a1f63',
          yellow: '#ffe66d',
        },
      },
      keyframes: {
        waveFlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        waveFlow: 'waveFlow 12s linear infinite',
      },
    },
  },
  plugins: [],
};
