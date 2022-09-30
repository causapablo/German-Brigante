/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        IBM: ['IBM Plex Mono', 'monospace']
      },

      animation: {
        scrolling: 'scrolling 40s linear infinite',
        scrolling2: 'scrolling2 40s linear infinite'
      },
      keyframes: {
        scrolling: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        scrolling2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' }
        }
      },
      animationDelay: {
        1: "-10ms",
        3: "-30ms",
        2: "-20s",
        4: "-40s"
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
