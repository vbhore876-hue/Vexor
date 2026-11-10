const path = require('path');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050b12',
        cyan: '#06b6d4',
        ice: '#bfe8ff',
        frost: '#dff7ff',
      },
      boxShadow: {
        glow: '0 0 30px rgba(6, 182, 212, 0.35)',
      },
      backgroundImage: {
        'cyan-radial': 'radial-gradient(circle at center, rgba(6, 182, 212, 0.28), transparent 62%)',
      },
    },
  },
  plugins: [],
};
