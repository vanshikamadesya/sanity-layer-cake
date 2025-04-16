import type {Config} from 'tailwindcss';

export default {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      ".sr/components/**/*.{js,ts,jsx,tsx,mdx}",
      ".src/app/**/*.{js,ts,jsx,tsx,mdx}", 
      ".sr/sanity/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {},
    plugins: [],
} satisfies Config;
  