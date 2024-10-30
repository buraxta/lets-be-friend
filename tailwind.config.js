/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        outfit: "outfit",
        "outfit-medium": "outfit-medium",
        "outfit-bold": "outfit-bold",
      },
      colors: {
        primary: "#E8B20E",
        gray: "#8F8e8d",
      },
    },
  },
  plugins: [],
};
