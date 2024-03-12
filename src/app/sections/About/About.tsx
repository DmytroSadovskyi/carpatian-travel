export default function About() {
  return (
    <section className="bg-background-about bg-about bg-cover bg-[20%_50%] bg-no-repeat py-[54px] md:py-[64px] md:bg-aboutTab lg:bg-aboutDesc  lg:py-[104px]">
      <div className="container grid gap-2 md:grid-cols-[218px_266px_220px] md:grid-rows-[295px_215px_117px] md:gap-x-0 md:gap-y-4 lg:grid-cols-[50%_25%_25%] lg:grid-rows-[250px_192px_120px]">
        <h2 className="mb-[5px] font-thin text-4xl leading-[1.4] tracking-[-1.6px] md:col-start-1 md:col-end-3 md:text-[67px] md:leading-none md:tracking-[-2.68px] lg:text-[98px] lg:leading-none lg:tracking-[-3.92px]  lg:col-end-2 lg:mb-0">
          WHO <span className="font-medium">WE ARE</span>
        </h2>
        <p className="text-left w-[180px] font-extralight text-sm mb-[20px] md:w-full md:col-start-3 md:mb-0 md:text-base leading-5 lg:col-start-2 lg:text-lg lg:leading-6 lg:pl-[24px] lg:pt-[6px]">
          <span className="font-normal">a team of enthusiasts</span> who are
          fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p className="text-left w-[180px] font-extralight text-sm mb-[40px] md:w-full md:col-start-3 md:mb-0 md:text-base leading-5 lg:col-start-2 lg:text-lg lg:leading-6 lg:pl-[24px]">
          <span className="font-normal">We believe</span> that nature has the
          power to inspire, strengthen character and provide new perspectives.
          Therefore, each of our tours is aimed at unlocking your potential,
          enriching your spiritual world and creating unforgettable memories.
        </p>
        <div className=" mb-[40px]  justify-self-end  md:row-start-2 md:self-end md:mb-0 md:pt-[70px] md:text-base leading-5 lg:row-start-3 lg:col-start-3">
          <p className="font-normal uppercase">From vacationers</p>
          <p className="font-normal text-right uppercase">
            to active travelers
          </p>
          <p className=" font-extralight tracking-[-0.14px] w-full">
            we have a tour for everyone.
          </p>
        </div>
        <p className="font-extralight text-sm text-justify md:text-base leading-5 md:w-[463px] md:row-start-3 md:col-start-2 md:self-end lg:col-start-1 lg-col-end-2">
          <span className="font-normal"> We use methods</span> that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </section>
  );
}
