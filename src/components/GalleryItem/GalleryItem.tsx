import Image from 'next/image';
import { GalleryItem } from '@/lib/definitions';

export default function GalleryItem({ url, alt }: GalleryItem) {
  return (
    <Image src={url} alt={alt} width={606} height={429} className="w-full" />
  );
}
