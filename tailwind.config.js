/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "100px",
        sm: "100px",
        lg: "100px",
        xl: "100px",
        "2xl": "100px",
      },
      center: true,
    },
    colors: {
      blueDark: "#2E4E92",
      blueLight: "#93C1F9",
      grayBlue: "#3C567B",
      bluePrimary: "#458FF6",
      white: "#FFFFFF",
      black: "#000000",
      greyDark: "#7D7987",
      greyLight: "#CCD2E9",
      violetDark: "#462E6A",
      violetLight: "#1F1534",
    },
  },
  plugins: [],
};
