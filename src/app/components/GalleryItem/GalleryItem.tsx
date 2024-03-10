import { GalleryItem } from '@/app/lib/definitions';
import Image from 'next/image';
export default function GalleryItem({ url, alt }: GalleryItem) {
  return (
    <Image
      src={url}
      alt={alt}
      fill
      sizes="(max-width: 480px) 280px, (max-width: 1279px) 463px, 606px"
      quality={90}
      priority
      className="object-cover"
    />
  );
}
