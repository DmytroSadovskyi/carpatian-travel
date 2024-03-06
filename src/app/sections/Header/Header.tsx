'use client';

import { useState } from 'react';
import LogoIcon from '../../../../public/images/logo.svg';
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
    <header className="w-full py-9 z-10 absolute md:py-6">
      <div className="container">
        <nav className="flex items-center justify-between">
          <a href="/">
            <LogoIcon />
          </a>

          <ul className="hidden md:flex gap-6">
            <li>
              <a
                href=""
                className="underline text-[14px] leading-none tracking-[1.4px]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="underline text-[14px] leading-none tracking-[1.4px]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href=""
                className="underline text-[14px] leading-none tracking-[1.4px]"
              >
                Career
              </a>
            </li>
            <li>
              <a
                href=""
                className="underline text-[14px] leading-none tracking-[1.4px]"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href=""
                className="underline text-[14px] leading-none tracking-[1.4px]"
              >
                Contacts
              </a>
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
      {isOpen && <MobileMenu onClose={handleClose} />}
    </header>
  );
}
