/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Regular"],
        poppinsMedium: ["Poppins-Medium"],
        poppinsSemiBold: ["Poppins-SemiBold"],
        poppinsBold: ["Poppins-Bold"],
      },
      colors: {
        primary: "#3B82F6",     // Bright blue (mirip Traveloka)
        navy: "#003D87",        // Judul seperti “Find Your Favorite Place”
        grayText: "#6B7280",
        background: "#F5F7FA",
      },
    },
  },
  plugins: [],
};