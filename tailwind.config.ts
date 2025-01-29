import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F8FCFF",
        "bg-primary": "#FFF",
        "bg-secondary":"#0084FF",
        "primary-text-color":"#0D2052",
        "secondary-text-color":"#666666",
        "tertiary-text-color":"#fff",
        "border-primary":"#287DFF",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(92deg, rgb(82, 168, 255) -0.81%, rgb(0, 132, 255) 24%, rgb(0, 132, 255) 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
