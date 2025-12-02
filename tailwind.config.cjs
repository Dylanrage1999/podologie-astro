module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5B9BD5',        // licht medisch blauw
        'primary-dark': '#25548dff', // donkerder blauw voor hover etc.
        'medisch-blauw': '#5B9BD5',
      },
    },
  },
  plugins: [],
};