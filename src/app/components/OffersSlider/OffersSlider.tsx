'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { useState } from 'react';

import { OffersSliderProps } from '@/app/lib/definitions';
import OfferSlide from '../OfferSlide';

export default function OffersSlider({ slides }: OffersSliderProps) {
  const [swiperRef, setSwiperRef] = useState<typeof Swiper | null>(null);

  const handleSlideTo = (index: number) => {
    if (swiperRef) {
      (swiperRef as any).slideTo(index - 1, 0);
    }
  };

  const handleSwiper = (swiper: any) => setSwiperRef(swiper);
  return (
    <Swiper
      onSwiper={handleSwiper}
      modules={[EffectFade]}
      wrapperTag="ul"
      grabCursor={false}
      loop={true}
      effect={'fade'}
      speed={1000}
      fadeEffect={{
        crossFade: true,
      }}
      allowTouchMove={false}
    >
      {slides.map(slide => (
        <SwiperSlide
          key={slide.id}
          tag="li"
          className="m-0 w-full h-full bg-cover"
        >
          <OfferSlide
            id={slide.id}
            bg={slide.bg}
            image={slide.image}
            slogan={slide.slogan}
            description={slide.description}
            title={slide.title}
            titles={slide.titles}
            slideTo={handleSlideTo}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
