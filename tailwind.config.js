/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF6EE",
        paper: "#FFFDF9",
        ink: "#24331F",
        rose: {
          DEFAULT: "#A3164F",
          soft: "#F4DCE2",
          deep: "#7A0F3B",
        },
        sage: {
          DEFAULT: "#6B8F52",
          deep: "#3F5A31",
          pale: "#E7EEDD",
        },
        gold: {
          DEFAULT: "#B98A3D",
          soft: "#F1E3C6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        organic: "2rem 2rem 2rem 0.5rem",
        "organic-r": "2rem 2rem 0.5rem 2rem",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
