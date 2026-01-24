import { Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          400: "var(--color-accent-400)",
          500: "var(--color-accent-500)",
        },
        warn: {
          DEFAULT: "var(--color-warn)",
          600: "var(--color-warn-600)",
          700: "var(--color-warn-700)",
        },
      },
    },
  },
} satisfies Config;
