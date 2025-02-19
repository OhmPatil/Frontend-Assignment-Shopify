import remToPxPlugin from 'tailwindcss-rem-to-px';

/** @type {import('tailwindcss').Config} */
export default {
  // Use prefix tw- to avoid conflicts with other Dawn styles
  // prefix: 'tw-',
  content: ['./**/*.liquid'],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['garamond'],
        alpina: ['alpina'],
      },
    },
  },
  plugins: [remToPxPlugin({ baseFontSize: 16 })],
};
