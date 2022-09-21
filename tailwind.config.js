/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        hv: "var(--hv-color)",
        customlight: "var(--customlight)",
        text: "var(--text)",
        darkgray: "var(--darkgray)",
        lightgray: "var(--lightgray)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
      },
      container2xl: {
        maxWidth: "1280px",
      },

      grayscale: {
        50: "50%",
        100: "100%",
      },
      inset: {
        timelineCircle: "calc(50% - 0.5em)",
      },
      boxShadow: {
        case: "0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24)",
        "case-hover": "0 10px 28px rgba(0,0,0,.25), 0 8px 10px rgba(0,0,0,.22)",
      },

      minHeight: {
        "screen-2rem": "calc(100vh - 2rem)",
        "screen-without-nav": "calc(100vh - 4rem)",
        "screen-incl-footer": "calc(100vh - 10rem)",
      },

      rotate: {
        135: "135deg",
        "-135": "-135deg",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
