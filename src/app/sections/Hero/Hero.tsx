import bg from '../../../../public/images/bg/sections/hero.jpg';

export default function Hero() {
  return (
    <section
      // style={{
      //   backgroundImage: `url(${bg.src})`,
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      //   backgroundPosition: '50%',
      // }}
      className=" pt-[106px] md:pt-[124px] xl:pt-[130px] pb-[54px] bg-hero-pattern"
    >
      <div className="container flex flex-col gap-6 md:grid md:grid-cols-[426px_230px]  md:gap-y-0 md:grid-rows-[98px_56px_150px_28px_64px] xl:grid-cols-[646px_294px] xl:grid-rows-[123px_181px_165px_28px_64px] justify-between">
        <p className="flex self-end flex-col md:col-start-2 ">
          <span className="text-[37px]/[80%] uppercase font-thin tracking-[2.665px] md:text-[67px]/[normal] md:tracking-[4.71px] xl:text-[98px]/[normal]">
            <span className="font-medium">7</span>days
          </span>
          <span className="text-[14px] uppercase font-thin tracking-[9.48px] md:tracking-[25.9px] xl:tracking-[36.48px] xl:text-[16px]">
            journey
          </span>
        </p>
        <h1 className="text-[40px]/[56px] font-thin uppercase  md:text-[67px]/[normal] md:w-[426px] md:col-start-1 md:row-start-1 md:row-end-4 md:tracking-[-2.68px] xl:text-[98px]/[normal]">
          <span className="font-medium">Uncover</span> Carpathian’s Secrets
        </h1>
        <p className="text-[10px]/[16px] font-thin md:col-start-1  md:tracking-[1.26px] w-[70%] md:w-[262px] md:text-[14px]/[16px] xl:w-full">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <div className="md:col-start-2 md:row-start-3">
          <p className="text-[13px]/[20px] font-thin text-justify  md:text-[16px]/[normal] md:w-[230px] mb-6 xl:w-[294px] xl:text-[18px]/[24px]">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <div className="text-center">
            <a href="" className="uppercase md:self-end text-center">
              join now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
