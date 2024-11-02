/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "12px": "0.75rem",
        "14px": "0.875rem",
        "16px": "1rem",
        "18px": "1.125rem",
        "20px": "1.25rem",
        "24px": "1.5rem",
        "32px": "2rem",
        "48px": "3rem",
        "64px": "4rem",
      },
      fontFamily: {
        Sen: ["Sen", "sans-serif"],
      },
      color: {
        lavender: "#e1aeff",
        vividpink: "ff78c4",
        lightpink: "ffbdf7",
      },
    },
  },
  plugins: [],
};
