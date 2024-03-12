import { galleryItemsMobile } from '@/lib/galleryItemsMobile';
import { galleryItems } from '@/lib/gallerItems';
import GalleryList from '../../components/GalleryList';
import GallerySlider from '../..//components/GallerySlider';

export default function Gallery() {
  return (
    <section
      className="bg-background-gallery bg-gallery bg-cover bg-center bg-no-repeat py-[54px] md:py-[64px] lg:py-[104px] md:bg-galleryTab lg:bg-galleryDesc"
      id="gallery"
    >
      <div className="container">
        <h2 className="uppercase font-thin text-[40px] tracking-[-1.6px] mb-5 md:text-[67px] md:tracking-[-2.68px] md:text-center md:mb-[65px] lg:text-[98px] lg:tracking-[-3.92px] lg:mb-5 lg:text-left">
          Our <span className="font-medium">gallery</span>
        </h2>
        <GalleryList images={galleryItemsMobile} />
        <GallerySlider images={galleryItems} />
      </div>
    </section>
  );
}
