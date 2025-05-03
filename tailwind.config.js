/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // For React projects
    "./public/index.html", // If you're using a plain HTML file
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['MyFont', 'sans-serif'],
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinFast: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 20s linear infinite',
        spinFast: 'spinFast 10s linear infinite',
      },
    },
  },
  plugins: [],
}


