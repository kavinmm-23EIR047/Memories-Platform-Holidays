/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        edu: ['"Edu NSW ACT Hand Pre"', 'cursive'],
        hmu: ['"Permanent Marker"', 'cursive'],
        mui: ['"Merienda"', 'cursive'],
        cui: ['"Alegreya Sans SC"', 'sans-serif'],
        pai: ['"Nosifer"', 'sans-serif'],
        mai: ['"Quantico"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      borderWidth: {
        3: '3px',
      },
      colors: {
        silver: '#C0C0C0',
      },
      animation: {
        'spin-very-slow': 'spin 20s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'title-glow': 'title-glow 3s ease-in-out infinite alternate',
        'text-float': 'text-float 4s ease-in-out infinite',
        'text-float-delayed': 'text-float 4s ease-in-out infinite 1s',
        'blink-fast': 'blink 0.4s ease-in-out infinite',
        'blink-medium': 'blink 0.8s ease-in-out infinite',
        'blink-slow': 'blink 1.2s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'orbit': 'orbit 10s linear infinite',
        'wheel-spin': 'wheel-spin 0.3s linear infinite',
        'glow-yellow': 'glowYellow 1.8s ease-in-out infinite',
        'glow-white': 'glowWhite 1.8s ease-in-out infinite',
        'float-bus': 'float-bus 3s ease-in-out infinite',
        'bounce-right': 'bounce-right 1.2s infinite',
        'slide-up': 'slideUp 1s ease-out forwards', // ✅ include here
      },
      keyframes: {
        'title-glow': {
          '0%': {
            textShadow: '0 0 10px rgba(217, 119, 6, 0.5), 0 0 20px rgba(217, 119, 6, 0.3)',
          },
          '100%': {
            textShadow: '0 0 20px rgba(217, 119, 6, 0.8), 0 0 30px rgba(217, 119, 6, 0.6)',
          },
        },
        'text-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.8)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbit: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        'wheel-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glowYellow: {
          '0%, 100%': {
            boxShadow: '0 0 10px #facc15, 0 0 20px #facc15',
            textShadow: '0 0 5px #facc15, 0 0 10px #facc15',
          },
          '50%': {
            boxShadow: '0 0 20px #facc15, 0 0 40px #facc15',
            textShadow: '0 0 10px #facc15, 0 0 20px #facc15',
          },
        },
        glowWhite: {
          '0%, 100%': {
            boxShadow: '0 0 8px #ffffff',
            textShadow: '0 0 5px #ffffff',
          },
          '50%': {
            boxShadow: '0 0 16px #ffffff',
            textShadow: '0 0 10px #ffffff',
          },
        },
        'float-bus': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-right': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(8px)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px) scale(0.9)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
