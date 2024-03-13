'use client';
import { Link } from 'react-scroll';
import { useState } from 'react';

import LogoIcon from '../../../public/images/logo.svg';
import MobileMenu from '../../components/MobileMenu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className="w-full py-9 z-10 absolute md:py-6">
      <div className="container">
        <nav className="flex items-center justify-between">
          <a href="/">
            <LogoIcon aria-label="logo" />
          </a>

          <ul className="hidden md:flex gap-6">
            <li>
              <Link
                to="about"
                smooth={true}
                className="underline text-[14px] leading-none tracking-[1.4px]"
                href="#"
                ignoreCancelEvents={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                className="underline text-[14px] leading-none tracking-[1.4px]"
                href="#"
                ignoreCancelEvents={true}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="career"
                smooth={true}
                className="underline text-[14px] leading-none tracking-[1.4px]"
                href="#"
                ignoreCancelEvents={true}
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                smooth={true}
                className="underline text-[14px] leading-none tracking-[1.4px]"
                href="#"
                ignoreCancelEvents={true}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                smooth={true}
                className="underline text-[14px] leading-none tracking-[1.4px]"
                href="#"
                ignoreCancelEvents={true}
              >
                Contacts
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="underline text-[14px] leading-none tracking-[1.4px] md:hidden uppercase"
            onClick={handleOpen}
          >
            Menu
          </button>
        </nav>
      </div>

      <MobileMenu isOpen={isOpen} onClose={handleClose} />
    </header>
  );
}
