/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "#256F67 transparent",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
            paddingRight: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#256F67",
            borderRadius: "100px",
            border: "1px solid transparent",
            backgroundClip: "padding-box",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#226B61",
            cursor: "pointer",
          },
          "&::-webkit-scrollbar-thumb:active": {
            background: "#1E6356",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
