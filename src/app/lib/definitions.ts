const servicesTitles = [
  'ATVs Traveling',
  'Rock climbing',
  'Hot air ballooning',
  'Skydiving',
  'Rafting',
];

export type Service = {
  id: number;
  bg: string;
  image: string;
  slogan: string;
  description: string;
  title: string;
  titles: string[];
};

export type GalleryItem = {
  id?: number;
  url: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: 1,
    bg: '/images/bg/offers/slide-1.png',
    image: '/images/offers/slide-1-min.jpg',
    slogan: 'Feel the adrenaline rush',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    titles: servicesTitles,
    title: servicesTitles[0],
  },
  {
    id: 2,
    bg: '/images/bg/offers/slide-2.png',
    image: '/images/offers/slide-2-min.jpg',
    slogan: 'Destroy your limitations',
    description:
      'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
    titles: servicesTitles,
    title: servicesTitles[1],
  },
  {
    id: 3,
    bg: '/images/bg/offers/slide-3.png',
    image: '/images/offers/slide-3-min.jpg',
    slogan: 'Get Inspired',
    description:
      'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
    titles: servicesTitles,
    title: servicesTitles[2],
  },
  {
    id: 4,
    bg: '/images/bg/offers/slide-4.png',
    image: '/images/offers/slide-4-min.jpg',
    slogan: 'Overcome your fears',
    description:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
    titles: servicesTitles,
    title: servicesTitles[3],
  },
  {
    id: 5,
    bg: '/images/bg/offers/slide-5.png',
    image: '/images/offers/slide-5-min.jpg',
    slogan: 'Trust the flow',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    titles: servicesTitles,
    title: servicesTitles[4],
  },
];

export interface MobileMenuProps {
  onClose: () => void;
}

export interface OffersSliderProps {
  slides: Service[];
}

export interface OffersSlideProps extends Service {
  slideTo: (index: number) => void;
}

export interface GalleryListProps {
  images: GalleryItem[];
}
