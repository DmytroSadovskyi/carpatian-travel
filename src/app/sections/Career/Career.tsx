import { motion } from 'framer-motion';
import CareerForm from '@/app/components/CareerForm';
import { careerInfo } from '@/app/lib/careerInfo';
export default function Career() {
  return (
    <section className="md:bg-careerTab lg:bg-careerDesc bg-cover bg-center  smMax:py-0 md:py-[64px] lg:py-[104px]">
      <div className="md:container">
        <div className="flex flex-col">
          <div className="smMax:bg-career smMax:py-14 smMax:bg-center smMax:bg-cover  relative">
            <div className="smMax:container">
              <div className="md:flex md:flex-row md:justify-between lg:items-center">
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="uppercase text-[40px] smMax:mb-6 md:text-[67px] md:leading-none md:tracking-[-2.68px]  lg:text-[98px] lg:leading-none lg-tracking-[-3.92px] whitespace-nowrap font-thin"
                >
                  Choose <span className="font-medium"> US</span>
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="text-sm leading-[20px] font-extralight smMax:mb-9 max-w-[179px] smMax:ml-auto md:max-w-[221px] md:text-[13px] lg:max-w-[293px] lg:text-[18px] lg:leading-[24px]"
                >
                  Your chance to join our passionate team in Carpathian tourism.
                  Seeking talented professionals to share our common mission.
                </motion.p>
              </div>
              <h3 className="uppercase text-[30px] font-extralight max-w-[179px] smMax:ml-auto smMax:mb-9 md:hidden">
                Why us ?
              </h3>
              <div className="max-w-[181px] text-xs leading-[20px] text-right flex flex-col gap-4 md:hidden">
                {careerInfo.map(item => (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -100 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    key={item.title}
                  >
                    <h3 className="text-sm mb-2">{item.title}</h3>
                    <p className="font-extralight">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="smMax:bg-career smMax:py-14 smMax:bg-center smMax:bg-cover  relative">
            <div className="smMax:container">
              <div className="lg:flex lg:flex-row lg:mb-[11px]">
                <h3 className=" smMax:hidden uppercase text-[30px] font-extralight max-w-[179px] mb-14 ml-20 lg:mr-[333px] lg:ml-[135px] lg:mb-0 lg:text-[36px] lg:leading-[39px]">
                  Why us ?
                </h3>
                <p className="text-sm leading-[20px] font-extralight mb-6 max-w-[179px] smMax:ml-auto md:max-w-[221px] lg:w-[290px] md:mb-8 md:text-[13px] lg:text-[18px] lg:leading-[24px] lg:max-w-[234px] lg:mb-[14px] lg:block hidden">
                  {`Don't miss your opportunity!`}
                  <span className="block">
                    Fill out the form right now and join our team!
                  </span>
                </p>
              </div>
              <div className="md:flex md:flex-row md:gap-5 lg:justify-between">
                <div className="smMax:hidden">
                  <div className="max-w-[181px] text-xs leading-[20px] text-right flex flex-col gap-4  md:max-w-[231px] lg:max-w-max md:gap-6 md:leading-[20px] lg:gap-[21px]">
                    {careerInfo.map(item => (
                      <div
                        key={item.title}
                        className="lg:flex lg:flex-row lg:justify-between lg:gap-6"
                      >
                        <h3 className="text-sm mb-2 md:text-base whitespace-nowrap lg:max-w-[253px] lg:w-full lg:text-[18px] lg:leading-[24px] flex-shrink-0">
                          {item.title}
                        </h3>
                        <p className="font-extralight lg:w-[285px] lg:text-left flex-shrink-0">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm leading-[20px] font-extralight mb-6 max-w-[179px] smMax:ml-auto md:max-w-[221px] lg:w-[290px] md:mb-8 md:text-[13px] lg:text-[18px] lg:leading-[24px] lg:max-w-[234px] lg:mb-[14px] lg:hidden">
                    {`Don't miss your opportunity!`}
                    <span className="block">
                      Fill out the form right now and join our team!
                    </span>
                  </p>
                  <CareerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
