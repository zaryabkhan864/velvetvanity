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
        "40px": "2.5rem",
        "44px": "2.75rem",
        "46px": "2.875rem",
        "48px": "3rem",
        "64px": "4rem",
        "72px": "4.5rem",
        "600px": "37.5rem",
      },
      fontWeight: {
        LightItalic: 300,
        Regular: 400,
        Medium: 500,
        "SemiBold ": 600,
        Bold: 700,
        ExtraBold: 800, // Adjust based on your needs
        Black: 900,
      },
      fontFamily: {
        Sen: ["Sen", "sans-serif"],
      },
      colors: {
        lavender: "#e1aeff",
        vividpink: "#ff78c4",
        lightpink: "#ffbdf7",
      },
    },
  },
  plugins: [],
};
