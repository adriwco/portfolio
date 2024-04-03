/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display SC"', 'Georgia'],
      },
      colors: {
        primeira: '#f56260',
        segunda: '#ff817f',
        terceira: '#980bb4',
        'fundo-0': '#000000',
        'fundo-1': '#ffffff',
        'fundo-2': '#141414',
        'fundo-3': '#f5f5f5',
        'fundo-4': '#efefef',
        'fonte-cor-1': '#141414',
        'fonte-cor-2': '#525252',
        'fonte-cor-3': '#141414',
        'fundo-0-d': '#ffffff',
        'fundo-1-d': '#181a1b',
        'fundo-2-d': '#0f1011',
        'fundo-3-d': '#1e2021',
        'fundo-4-d': '#4d4d4d',
        'fonte-cor-1-d': '#cacaca',
        'fonte-cor-2-d': '#b4aea4',
        'fonte-cor-3-d': '#e8e6e3',
      },
      backgroundImage: {
        'link-icon': "url('./link-preto.svg')",
        logo: "url('./src/assets/marcaA.svg')",
        'link-icon-d': "url('./link-branco.svg')",
        'logo-d': "url('./src/assets/marcaB.svg')",
        detalhe: "url('./src/assets/detalhe.svg')",
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
