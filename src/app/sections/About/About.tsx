import bg from '../../../../public/images/bg/sections/about.jpg';

export default function About() {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '20% 50%',
      }}
      className="pt-[55px] pb-[54px]"
    >
      <div className="container grid gap-2">
        <h2 className="mb-[20px] font-thin text-[40px]/[56px] ">
          WHO <span className="font-medium">WE ARE</span>
        </h2>
        <p className="text-left w-[180px] font-thin text-[14px]/[20px] mb-[20px]">
          <span className="font-light">a team of enthusiasts</span> who are
          fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p className="text-left w-[180px] font-thin text-[14px]/[20px] mb-[40px]">
          <span className="font-light">We believe</span> that nature has the
          power to inspire, strengthen character and provide new perspectives.
          Therefore, each of our tours is aimed at unlocking your potential,
          enriching your spiritual world and creating unforgettable memories.
        </p>
        <div className="font-thin mb-[40px]  justify-self-end">
          <p className="font-light uppercase">From vacationers</p>
          <p className="font-light text-right uppercase">to active travelers</p>
          <p className="tracking-[-0.14px] w-full">
            we have a tour for everyone.
          </p>
        </div>
        <p className="font-thin text-[14px]/[20px] text-justify">
          <span className="font-light"> We use methods</span> that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </section>
  );
}
