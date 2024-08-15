/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      transparant:"transparent",
      current: "currentColor",
      white:"#ffffff",
      black: "#000000",
      lightgrey: "#444245",
      grey: 'rgba(0, 0, 0, 0.55)',
      lightpink:'#F8f7f7',
      pink:'#DF6751',
      bgpink: 'rgba(223, 103, 81, 0.15)',
      darkpink: '#FEEDEA',
      lightblack:'#333333',
      textbl: "#363636",
      footerlinks: 'rgba(54, 54, 54, 0.9)',
      bordertop:'rgba(105, 120, 131, 0.16)',
      darkgrey:'rgba(44, 9, 11, 0.8)'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      xs:["0.75rem", {lineHeight:"1rem"}],
      sm: ["0.875rem",{lineHeight:"1.25rem"}],
      base:["1rem", {lineHeight:"1.5rem"}],
      lg: ["1.125rem",{lineHeight:"1.75rem"}],
      xl: ["1.25rem",{lineHeight:"1.75rem"}],
      "2xl":["1.5rem", {lineHeight:"2rem"}],
      "3xl": ["1.875rem",{lineHeight:"2.25rem"}],
      "4xl":["2.25rem", {lineHeight:"2.5rem"}],
      "5xl": ["3rem",{lineHeight:"4.25"}],
      "6xl":["3.75rem", {lineHeight:"1"}],
      "7xl": ["4.5rem",{lineHeight:"6.75rem"}],
      "8xl":["6rem", {lineHeight:"1"}],
      "9xl": ["8rem",{lineHeight:"1"}],
    },
  },
  plugins: [],
};
