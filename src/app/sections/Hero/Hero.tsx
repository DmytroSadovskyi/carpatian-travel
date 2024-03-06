import bg from '../../../../public/images/bg/sections/hero-bg.jpg';

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)),
url(${bg.src})`,

        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        backgroundColor: 'rgba(2, 15, 8, 0.50)',
      }}
      className=" pt-[106px] pb-[56px] md:pt-[124px] lg:pt-[130px] lg:pb-[104px]"
    >
      <div className="container flex flex-col gap-6 md:grid md:grid-cols-[426px_230px]  md:gap-y-0 md:grid-rows-[78px_56px_160px_28px_0px] lg:grid-cols-[646px_294px] lg:grid-rows-[112px_181px_200px_28px_0px] justify-between">
        <p className="flex self-end flex-col md:col-start-2 ">
          <span className="text-[37px]/[80%] uppercase font-thin tracking-[3.665px] md:text-[67px]/[80%] md:tracking-[5.71px] lg:tracking-[0.71px] lg:text-[98px]/[80%]">
            <span className="font-medium">7</span>days
          </span>
          <span className="text-sm uppercase font-thin tracking-[9.48px] md:tracking-[24.9px] lg:tracking-[35.48px] lg:text-base">
            journey
          </span>
        </p>
        <h1 className="text-[40px] leading-[1.4] tracking-[-1.6px] font-thin uppercase  md:text-[67px] md:leading-none  md:col-start-1 md:row-start-1 md:row-end-4 md:tracking-[-2.68px] lg:text-[98px] lg:leading-none">
          <span className="font-medium">Uncover</span> Carpathian’s Secrets
        </h1>
        <p className="text-[10px] leading-4 font-thin md:col-start-1  md:tracking-[1.26px] w-[70%] md:w-2/3 md:text-sm md:leading-4 lg:w-full">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <div className="md:col-start-2 md:row-start-3">
          <p className="text-sm  font-extralight text-justify md:text-base md:leading-5 md:w-[230px] mb-6 lg:w-[294px] lg:text-lg lg:leading-6">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>

          <a
            href=""
            className="button text-center md:self-end uppercase font-bold text-lg leading-[2.7] lg:text-2xl lg:py-4"
          >
            <span>join now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
