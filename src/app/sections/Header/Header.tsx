'use client';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../../../public/images/logo.svg';
import MobileMenu from '@/app/components/MobileMenu';

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
    <header className="w-full py-9 z-10 absolute">
      <div className="container">
        <nav className="flex items-center justify-between">
          <a href="/">
            <Image src={logo} alt="logo" />
          </a>

          <ul className="hidden md:flex gap-[24px]">
            <li>
              <a href="" className="">
                About
              </a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
          <button
            type="button"
            className="md:hidden uppercase"
            onClick={handleOpen}
          >
            Menu
          </button>
        </nav>
      </div>
      {isOpen && <MobileMenu onClose={handleClose} />}
    </header>
  );
}
