/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Updated Brand Palette for Rivaaz
        rivaaz: {
          primary: "#3B82F6", // Main Action Blue (Trust & Vendors)
          dark: "#0F172A", // Elegant Deep Slate (Headers)
          bg: "#F8FAFC", // Clean Page Background

          // Wedding Accents
          pink: "#F472B6", // Vibrant Pink (Pink 400)
          rose: "#FDF2F8", // Soft Blush Background (Pink 50)
          red: "#E11D48", // Elegant Crimson (Rose 600)
          accent: "#FDA4AF", // Soft Rose/Peach
        },

        // Category colors for Schedule & Cost Guide
        category: {
          beauty: "#FCE7F3",
          attire: "#ECFCCB",
          social: "#FFEDD5",
          food: "#F3E8FF",
          venue: "#E0F2FE",
        },
      },
      fontFamily: {
        // Traditional Serif (Playfair Display) for Titles
        tradition: ['"Playfair Display"', "serif"],
        // Modern Sans (Plus Jakarta Sans) for UI/Dashboard data
        modern: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      boxShadow: {
        // Soft romantic shadows for cards
        romantic:
          "0 20px 25px -5px rgba(244, 114, 182, 0.1), 0 10px 10px -5px rgba(244, 114, 182, 0.04)",
      },
      // Added Shimmer Keyframes and Animations for Skeleton Loaders
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [],
};
