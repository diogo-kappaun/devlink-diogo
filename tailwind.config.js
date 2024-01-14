/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      width: {
        card: 'min(20rem, 100%)',
        img: 'clamp(7.5rem, 5.462rem + 8.1522vw, 9.375rem)',
      },
      fontSize: {
        cxl: 'clamp(1.5rem, 2.174vw + 0.957rem, 2rem)',
        csm: 'clamp(0.875rem, 0.543vw + 0.739rem, 1rem)',
        cmd: 'clamp(1rem, 1.087vw + 0.728rem, 1.25rem)',
      },
      borderRadius: {
        sml: '4px',
      },
      boxShadow: {
        inner: 'inset 0 0 0 2px rgb(244 244 245) ',
        'inner-dark': 'inset 0 0 0 2px rgb(9 9 11) ',
      },
      padding: {
        button: 'clamp(0.75rem, 1.087vw + 0.478rem, 1rem)',
      },
    },
  },
  plugins: [],
}
