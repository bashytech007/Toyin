/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navBg:
          "linear-gradient(0deg, rgba(129, 172, 183, 0.25) 0%, rgba(129, 172, 183, 0.25) 100%), #FFF;",
        prey: "linear-gradient(90deg, #FFEEEE, #DDEFBB)",
      },
    },
  },
  plugins: [],
};
