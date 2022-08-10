module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "390px", max: "414px" },
      // => @media (min-width: 390px and max-width: 414px) { ... }

      md: { min: "539px", max: "1023px" },
      // => @media (min-width: 539px and max-width: 1023px") { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        img: "url(/src/assets/pattern-bg.png)",
      },
      fontFamily: {
        sans: "'Rubik', sans-serif",
      },
    },
  },
  plugins: [],
};
