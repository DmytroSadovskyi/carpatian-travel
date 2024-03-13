export const servicesTitles = [
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

type CareerInfoItem = {
  id: number;
  title: string;
  description: string;
};

export type GalleryItem = {
  id?: number;
  url: string;
  alt: string;
};

export interface MobileMenuProps {
  onClose: () => void;
  isOpen: boolean;
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

export interface CareerProps {
  items: CareerInfoItem[];
}
