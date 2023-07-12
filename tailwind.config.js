/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        601: "37.563rem",
        360: "22.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        theme: "#11101A",
        red: "#E31221",
        modalTheme: "#222030",
        input: "#CED4DA",
      },
      colors: {
        DCA: "#DCA",
        subtitle: "#6C757D",
        error: "#DC3545",
      },
      borderRadius: {
        4.8: "0.3rem",
      },
    },
  },
  plugins: [],
};
