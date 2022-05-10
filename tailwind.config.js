module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        main: "#ffd100",
        sec: "#0090e3",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
