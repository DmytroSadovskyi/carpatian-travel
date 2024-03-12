import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { MobileMenuProps } from '@/lib/definitions';

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: '-100%' }}
      className="fixed top-0 left-0 w-screen h-screen bg-mobMenuBg backdrop-blur-xl "
    >
      <div className="container relative flex items-center justify-center w-full h-screen">
        <div className="absolute top-11 right-5">
          <button
            className="underline uppercase text-[14px] leading-none tracking-[1.4px]"
            type="button"
            onClick={onClose}
          >
            close
          </button>
        </div>
        <ul className="flex flex-col justify-center gap-12 items-center">
          <li>
            <Link
              className="underline text-[18px] leading-none"
              to="about"
              smooth={true}
              onClick={onClose}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="underline text-[18px] leading-none"
              to="services"
              smooth={true}
              onClick={onClose}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="underline text-[18px] leading-none"
              to="career"
              smooth={true}
              onClick={onClose}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              className="underline text-[18px] leading-none"
              to="gallery"
              smooth={true}
              onClick={onClose}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="underline text-[18px] leading-none"
              to="contacts"
              smooth={true}
              onClick={onClose}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}