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
        primary: "#0056D6",
        "primary-dark": "#003C99",
        accent: "#D4AF37",
        "text-dark": "#1E293B",
        "text-muted": "#64748B",
        background: "#EFE7D3", // ⇦ New Light Gold
  "background-dark": "#E3DAC3",
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626",
        "bg-light": "#F8FAFC",
      },
    },
  },
  plugins: [],
};