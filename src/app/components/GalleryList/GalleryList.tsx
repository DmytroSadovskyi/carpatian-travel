import { GalleryListProps } from '@/app/lib/definitions';
import Image from 'next/image';
import GalleryItem from '../GalleryItem';

export default function GalleryList({ images }: GalleryListProps) {
  return (
    <ul className="flex flex-col gap-6 md:hidden">
      {images.map(image => (
        <li key={image.id}>
          {' '}
          <GalleryItem url={image.url} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}
