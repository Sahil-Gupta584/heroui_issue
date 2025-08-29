import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#FD366E",   // <– base color
              foreground: "#ffffff" // <– text on primary
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FD366E",   // <– base color
              foreground: "#ffffff"
            },
          },
        },
      },
    }),
  ],
};
