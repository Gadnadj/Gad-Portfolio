/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
      poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
        lg: '3rem'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
        experience: '"Experience"',
        skills: '"Skills"'
      },
      colors: {
        primary: '#0a0a0a',
        secondary: '#131316',
        tertiary: '#1d1d1d',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b'
        },
        paragraph: '#878e99'
      }
    }
  },
  plugins: []
};