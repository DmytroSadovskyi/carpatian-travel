import { GalleryItem } from '@/app/lib/definitions';
import Image from 'next/image';
export default function GalleryItem({ url, alt }: GalleryItem) {
  return (
    <Image src={url} alt={alt} width={606} height={429} className="w-full" />
  );
}
