/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "w-pic": "650px",
        "h-pic": "496px",
        // Add more custom widths as needed
      },
    },
  },
  plugins: [],
};
