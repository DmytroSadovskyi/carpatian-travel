'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GalleryListProps } from '@/lib/definitions';
import cn from 'classnames';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import GalleryItem from '../GalleryItem';

export default function GallerySlider({ images }: GalleryListProps) {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="smMax:hidden relative">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        wrapperTag="ul"
        className="flex gap-6 h-[294px] lg:h-[429px]"
        slidesPerView={3}
        spaceBetween={24}
        breakpoints={{
          768: {
            coverflowEffect: {
              rotate: 0,
              stretch: -44,
              depth: 0,
              modifier: 1,
              scale: 0.35,
            },
          },

          1280: {
            coverflowEffect: {
              rotate: 0,
              stretch: -44,
              depth: 0,
              modifier: 1,
              scale: 0.5,
            },
          },
        }}
      >
        {images.map(image => (
          <SwiperSlide tag="li" key={image.id}>
            {({ isActive }) => (
              <div
                className={cn(
                  'wrapper  relative right-[80px] w-[415px] lg:w-[606px] h-[294px] lg:h-[429px]',
                  isActive ? 'before:hidden right-[90px] lg:right-[95px]' : ''
                )}
              >
                <GalleryItem url={image.url} alt={image.alt} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-10 flex justify-between flex-row bottom-4 left-[45px] right-[25px] lg:left-[211px] lg:right-[184px]">
        <button
          className="font-thin text-[33px] leading-none uppercase hover:opacity-[0.5] focus:opacity-[0.5] duration-300"
          onClick={() => swiperRef.current?.slidePrev()}
          type="button"
        >
          Back
        </button>
        <button
          className="font-thin text-[33px] leading-none uppercase hover:opacity-[0.5] focus:opacity-[0.5] duration-300"
          onClick={() => swiperRef.current?.slideNext()}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
