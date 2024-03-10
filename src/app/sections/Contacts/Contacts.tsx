import { motion } from 'framer-motion';
import { socials } from '@/app/lib/socials';
import ContactForm from '@/app/components/ContactForm';

export default function Contacts() {
  return (
    <section className="bg-contacts bg-cover bg-center bg-no-repeat md:bg-contactsTab lg:bg-contactsDesc py-[54px] md:py-[64px] lg:py-[104px]">
      <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="uppercase text-[40px] mb-9 md:text-[67px] md:leading-none md:tracking-[-2.68px]  lg:text-[98px] lg:leading-none lg-tracking-[-3.92px] whitespace-nowrap font-thin"
        >
          Contact <span className="font-medium">US</span>
        </motion.h2>
        <div className="lg:flex flex-row">
          <div className="md:flex md:flex-row lg:flex-col">
            <div>
              <div className="flex flex-row gap-5 mb-6 text-sm md:text-base lg:text-[18px] lg:mb-16 ">
                <div className="flex flex-col ml-[25px]  md:ml-[64px] lg:ml-[141px]">
                  <a
                    href=" tel:+38 (098) 12 34 567"
                    className="smMax:leading-[24px]"
                  >
                    +38 (098) 12 34 567
                  </a>
                  <a
                    href="tel:+38 (073) 12 34 567"
                    className="smMax:leading-[24px]"
                  >
                    +38 (073) 12 34 567
                  </a>
                </div>
                <p className="text-[12px] font-extralight smMax:pt-[4px]">
                  Phone number
                </p>
              </div>
              <div className="flex flex-row gap-5 ml-[2px] items-center mb-6 md:ml-[34px] lg:mb-[124px] lg:ml-[107px] text-sm md:text-base lg:text-[18px] ">
                <a
                  href="mailto:support@carptravel.com"
                  className="smMax:leading-[24px] underline"
                >
                  support@carptravel.com
                </a>
                <p className="text-[12px] font-extralight">E-mail</p>
              </div>
            </div>
            <div className="text-sm  md:text-base lg:text-[18px] flex flex-row gap-5 mb-6 lg:flex-row-reverse">
              <p className="text-[12px] font-extralight ml-[127px] whitespace-nowrap md:ml-[90px] lg:ml-0 lg:mr-[30px] smMax:pt-[2px]">
                Follow us
              </p>
              <ul className="flex flex-col smMax:leading-[24px] lg:text-right">
                {socials.map(social => (
                  <motion.li
                    key={social.text}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 100 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <a
                      href={social.link}
                      className="underline"
                      aria-label="contact-link"
                    >
                      {social.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
