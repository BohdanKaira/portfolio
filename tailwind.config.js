module.exports = {
  darkMode: 'class',
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out'
      }
    },
  },
  plugins: [],
}