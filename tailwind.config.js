/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "cherry-blossom-pink": "#EDAFB8",
        "champagne-pink": "#F7E1D7",
        "timberwolf": "#DEDBD2",
        "ash-gray": "#B0C4B1",
        "outer-space": "#4A5759",
        "feldgrau": "#4C594A",
        "celadon": "#ADD0AB",
        "cambridge-blue": "#96B595",
        "snow": "#FFF9F6",
        "westar": "#e4e2db",
        "clam-shell": "#c9b6ab",
      },
    },
  },
  plugins: [],
};
