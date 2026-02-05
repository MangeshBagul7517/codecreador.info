/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "primary" : {
        //   50: "rgb(247, 238, 250)",  // #F7EEFA
        //   100: "rgb(236, 201, 239)", // #E8C9EF
        //   200: "rgb(212, 149, 224)", // #D495E0
        //   300: "rgb(191, 95, 207)",  // #BF5FCF
        //   400: "rgb(142, 69, 153)",  // #8E4599
        //   500: "rgb(95, 44, 103)",   // #5F2C67
        //   900: "rgb(52, 21, 57)" ,    // #341539
        //   base: "rgb(142, 69, 153)"
        // }, // Deep Purple (Primary color)
        primary: {
          50: "#c2feff",
          base: "#00438b", // link
          100: "#60a5fa",
          200: "#66a8ff", // hover
          300: "#0061af",
          400: "#00438b",
          500: "#002668",
          "high-light": "#66a8ff",

        }, // Deep Purple (Primary color)
        third: {

         base: "#7cb6b2",
         100: "#188580",
         200: "#334b4a"
        },
        
        secondary: {
          50: "#c69eca", // #F7EEFA
          100: "#e9c0ed", // #E8C9EF
          200: "#b892bc", // #D495E0
          300: "#8a658e", // #BF5FCF
          400: "#5d3b62", // #8E4599
          500: "#341539", // #5F2C67
          base: "#341539",
          dark: "#17011B",
        },
        gray: {
          base: "#434656",
          100: "#a7aabc",
        },
        silver: {
          base: "#c0c0c0",
          50: "#f1f1e6",
          75: "#fff7d6",
          100: "#969696",
          200: "#6e6e6e",
          300: "#494949",
          400: "#272727",
          switch: "#2f2f2f"
        },
        background: "rgb(255, 255, 255)", // White (Background color)
        foreground: "rgb(51, 51, 51)", // Dark Gray (Text color)
        muted: "rgb(243, 244, 246)", // Light Gray (Used for borders, hover states)
        dark: "#011326", // Dark color for headers or footers
        light: "rgb(249, 250, 251)", // Light color for softer background sections
        success: "rgb(16, 185, 129)", // Green (For success messages, buttons)
        warning: "rgb(245, 158, 11)", // Orange (For warnings, alerts)
        error: "rgb(239, 68, 68)", // Red (For error messages, danger)
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"], // Modern sans-serif font for readability
        serif: ["Georgia", "serif"], // Optional, for typography elements like quotes
      },
      spacing: {
        128: "32rem", // Custom spacing value for larger gaps
      },
      borderRadius: {
        xl: "1.5rem", // Custom rounded corners
      },
      boxShadow: {
        "soft-lg": "0 10px 20px rgba(0, 0, 0, 0.1)", // Custom shadow for a soft look
        "hard-md": "0 4px 8px rgba(0, 0, 0, 0.2)", // A deeper shadow for cards
      },
      backgroundImage: {
        "gradient-r-b":    
          "linear-gradient(to right bottom, #002145, #0061af, #00438b,#002145, #000000);",
        "gradient-r-t":
          "linear-gradient(to right top, #00438b, #382c60, #341b39, #22111b, #000000);",
        "gradient-l-t":
          "linear-gradient(to left top, #00438b, #2f4591, #494695, #604698, #744699, #7c509e, #8459a4, #8c63a9, #8d77b2, #9189b7, #9a9abb, #a7aabc);",
      },
    },
  },
  darkMode: "media", // Enable dark mode based on the user's system preference
  plugins: [
    // require('@tailwindcss/forms'), // Plugin for form elements styling
    // require('@tailwindcss/typography'), // Plugin for typography (e.g., prose for articles)
    // require('@tailwindcss/aspect-ratio'), // Aspect ratio utilities for images & videos
    // require('@tailwindcss/container-queries'), // Responsive container queries for layout
  ],
  corePlugins: {
    preflight: true, // Enable/prevent Tailwind's default styles (preflight)
  },
  safelist: [
    // Safe-list certain classes for production build
    "bg-primary",
    "bg-secondary",
    "text-primary",
    "text-secondary",
    "hover:bg-primary",
    "hover:bg-secondary",
  ],
};


// dominant: primary base
// second: white, light
// accent : silver 50
// text dark , foreground
// button blue
// highlight silver 50 75