module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This is crucial
  theme: {
    extend: {
      backgroundColor: {
        'dark-primary': '#121212',
        'dark-secondary': '#1e1e1e',
        'dark-tertiary': '#2d2d2d',
        'dark-page-1': '#0f172a', // Custom dark background for page 1
        'dark-page-2': '#1a202c', // Custom dark background for page 2
        'dark-page-3': '#111827', // Custom dark background for page 3
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'fadeIn': 'fadeIn 1s ease forwards',
        'slideInFromBottom': 'slideInFromBottom 0.8s ease-out forwards',
        'rotateIn': 'rotateIn 0.8s ease-out forwards',
        'bounce': 'bounce 2s infinite',
        'slideInFromLeft': 'slideInFromLeft 0.8s ease-out forwards',
        'slideInFromRight': 'slideInFromRight 0.8s ease-out forwards',
        'scaleIn': 'scaleIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromBottom: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-15deg) scale(0.9)' },
          '100%': { opacity: '1', transform: 'rotate(0) scale(1)' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-20px)' },
          '60%': { transform: 'translateY(-10px)' },
        },
        slideInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInFromRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      },
      transformOrigin: {
        'perspective-1000': 'perspective(1000px)',
      },
      rotate: {
        'y-5': 'rotateY(5deg)',
        'y-0': 'rotateY(0deg)',
      },
      flex: {
        '1.5': '1.5 1 0%',
      }
    },
  },
  plugins: [],
}