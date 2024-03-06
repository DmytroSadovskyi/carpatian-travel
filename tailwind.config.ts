import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1280px',
    },
    container: {
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '32px',
        lg: '24px',
      },
      center: true,
    },
    backgroundImage: {
      'hero-pattern': "url('/images/bg/sections/hero.jpg')",
    },
  },
  plugins: [],
};
export default config;
