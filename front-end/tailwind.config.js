const config = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        Sora: ['Sora'],
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },

  plugins: [require('@tailwindcss/aspect-ratio')],
};

module.exports = config;