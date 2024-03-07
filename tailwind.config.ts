import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      smMax: { max: '767.98px' },
      mdMax: { min: '768px', max: '1279.98px' },
    },
    extend: {
      container: {
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '32px',
          lg: '24px',
        },
        center: true,
      },
    },

    backgroundImage: {
      gradient: 'linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5))',
      hero: "image-set(url('/images/bg/sections/hero/hero-min.png') 1x, url('/images/bg/sections/hero/hero@2x-min.png') 2x)",
      heroTab:
        "image-set(url('/images/bg/sections/hero/heroTab-min.png') 1x, url('/images/bg/sections/hero/heroTab@2x-min.png') 2x)",
      heroDesc:
        "image-set(url('/images/bg/sections/hero/heroDesc-min.png') 1x, url('/images/bg/sections/hero/heroDesc@2x-min.png') 2x)",
      about:
        "image-set(url('/images/bg/sections/about/who-min.png') 1x, url('/images/bg/sections/about/who@2x-min.png') 2x)",
      aboutTab:
        "image-set(url('/images/bg/sections/about/whoTab-min.png') 1x, url('/images/bg/sections/about/whoTab@2x-min.png') 2x)",
      aboutDesc:
        "image-set(url('/images/bg/sections/about/whoDesc-min.png') 1x, url('/images/bg/sections/about/whoDesc@2x-min.png') 2x)",
      career:
        "image-set(url('/images/bg/sections/career/career-min.png') 1x, url('/images/bg/sections/career/career@2x-min.png') 2x)",
      careerTab:
        "image-set(url('/images/bg/sections/career/careerTab-min.png') 1x, url('/images/bg/sections/career/careerTab@2x-min.png') 2x)",
      careerDesc:
        "image-set(url('/images/bg/sections/career/careerDesc-min.png') 1x, url('/images/bg/sections/career/careerDesc@2x-min.png') 2x)",
      gallery:
        "image-set(url('/images/bg/sections/gallery/gallery-min.png') 1x, url('/images/bg/sections/gallery/gallery@2x-min.png') 2x)",
      galleryTab:
        "image-set(url('/images/bg/sections/gallery/galleryTab-min.png') 1x, url('/images/bg/sections/gallery/galleryTab@2x-min.png') 2x)",
      galleryDesc:
        "image-set(url('/images/bg/sections/gallery/galleryDesc-min.png') 1x, url('/images/bg/sections/gallery/galleryDesc@2x-min.png') 2x)",
      contacts:
        "image-set(url('/images/bg/sections/contacts/contacts-min.png') 1x, url('/images/bg/sections/contacts/contacts@2x-min.png') 2x)",
      contactsTab:
        "image-set(url('/images/bg/sections/contacts/contactsTab-min.png') 1x, url('/images/bg/sections/contacts/contactsTab@2x-min.png') 2x)",
      contactsDesc:
        "image-set(url('/images/bg/sections/contacts/contactsDesc-min.png') 1x, url('/images/bg/sections/contacts/contactsDesc@2x-min.png') 2x)",
    },
  },
  plugins: [],
};
export default config;
