/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-deep':  '#1a4f72',
        'blue-mid':   '#2b7bb9',
        'blue-light': '#5ba8d8',
        'blue-pale':  '#d6ecf8',
        'blue-mist':  '#eef6fc',
        teal:         '#2ba8a0',
        sand:         '#f7f4ef',
        'text-dark':  '#1a2a35',
        'text-mid':   '#3d5566',
        'text-light': '#7a96a8',
        pink:         '#d45d8a',
        brown:        '#8B6C4E',
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        card: '0 2px 16px rgba(27,79,114,0.10)',
      },
    },
  },
  plugins: [],
}

