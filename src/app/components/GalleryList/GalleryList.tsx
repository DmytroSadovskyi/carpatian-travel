import { GalleryListProps } from '@/app/lib/definitions';
import Image from 'next/image';

export default function GalleryList({ images }: GalleryListProps) {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}></li>
      ))}
    </ul>
  );
}
