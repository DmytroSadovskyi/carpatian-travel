import Image from 'next/image';
import cn from 'classnames';
import { OffersSlideProps } from '@/app/lib/definitions';
import RectIcon from '../../../../public/icons/rect.svg';

export default function OfferSlide({
  id,
  bg,
  image,
  slogan,
  description,
  title,
  titles,
  slideTo,
}: OffersSlideProps) {
  return (
    <div className="w-full h-full relative">
      <Image
        src={bg}
        alt={title}
        fill
        quality={100}
        sizes="100vw"
        className="absolute top-0 left-0 bottom-0 right-0 -z-10 object-cover object-center"
      />
      <div className="container pt-[54px] md:pt-16 lg:pt-[104px]">
        <div className="md:flex md:flex-row md:justify-between md:pb-6 lg:pb-5 lg:justify-normal lg:gap-[162px]">
          <h2 className="uppercase font-thin text-[40px] [max-width: pb-6 md:mb-0 md:pb-0 md:text-[67px] leading-none lg:text-[98px] whitespace-nowrap">
            we <span className="font-medium">offer</span>
          </h2>
          <div className="font-thin text-[43px] md:text-titleMd text-right pb-4 md:pb-0 lg:text-[98px] lg:leading-none">
            {id.toString().padStart(2, '0')}/
            <span className="opacity-20">
              {titles.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        <div className="md:flex md:flex-row md:gap-5 pb-[56px] md:pb-[64px] lg:justify-center">
          <div className="w-full h-[213px] relative md:h-[370px] lg:h-[429px]">
            <Image
              src={image}
              alt={title}
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-center pb-2 md:pb-0"
            />
          </div>
          <p className="text-xs font-extralight pb-6 text-right md:hidden">
            {slogan}
          </p>
          <div className="w-full h-[320px] xl:h-[429px] flex flex-col justify-between md:max-w-[221px] md:h-[370px] lg:max-w-[605px]">
            <ul className="pb-[34px] md:pb-0 flex flex-col gap-4 lg:pb-[104px]">
              {titles.map((titleItem, index) => (
                <li
                  key={titleItem}
                  className={cn(
                    'flex flex-row items-center gap-4 text-xl md:text-[22px] md:leading-[18px] leading-[17px] md:gap-2 lg:max-w-[500px] lg:w-full lg:flex lg:flex-row lg:justify-between cursor-pointer hover:opacity-100 duration-300',
                    titleItem === title
                      ? 'font-medium'
                      : 'font-extralight opacity-50'
                  )}
                  onClick={() => slideTo(index + 1)}
                >
                  <div className="flex flex-row gap-4 md:gap-2 items-center">
                    {titleItem === title ? (
                      <RectIcon className="w-[6px] h-[6px]" />
                    ) : null}
                    <span className="uppercase">{titleItem}</span>
                  </div>
                  {titleItem === title ? (
                    <p className="text-xs font-extralight hidden xl:block md:leading-[24px] tracking-[2.4px] capitalize">
                      {slogan}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="text-xs font-extralight hidden mdOnly:block md:leading-[24px]">
              {slogan}
            </p>
            <p className="text-sm font-extralight md:text-[13px] xl:max-w-[293px] lg:ml-auto lg:text-lg lg:leading-[24px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
