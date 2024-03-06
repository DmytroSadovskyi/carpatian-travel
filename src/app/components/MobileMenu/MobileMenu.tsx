interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div
      style={{
        background: 'rgba(1, 10, 5, 0.75)',
      }}
      className="fixed top-0 left-0 w-screen h-screen backdrop-blur-xl"
    >
      <div className="container relative flex items-center justify-center w-full h-screen">
        <button
          className=" absolute top-11 right-5 uppercase text-[14px] leading-none tracking-[1.4px]"
          type="button"
          onClick={onClose}
        >
          close
        </button>
        <ul className="flex flex-col justify-center gap-12 items-center">
          <li>
            <a
              className="underline text-[18px] leading-none"
              href=""
              onClick={onClose}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="underline text-[18px] leading-none"
              href=""
              onClick={onClose}
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="underline text-[18px] leading-none"
              href=""
              onClick={onClose}
            >
              Career
            </a>
          </li>
          <li>
            <a
              className="underline text-[18px] leading-none"
              href=""
              onClick={onClose}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              className="underline text-[18px] leading-none"
              href=""
              onClick={onClose}
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
