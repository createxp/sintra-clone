import React from "react";
import Image from "next/image";

const navLinks = [
  { label: "Products", hasDropdown: true },
  { label: "Features", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "Careers", hasDropdown: false },
];

const ChevronDown = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1"
  >
    <path
      d="M3 4.5L6 7.5L9 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M4 8h16M4 16h16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const NavbarLight = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 lg:px-10 xl:px-[120px]">
      <div className="flex h-[72px] w-full items-center justify-between">
        {/* sm / md: menu left, logo center/left, button right */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center justify-center text-gray-900 hover:opacity-80"
              aria-label="Open menu"
            >
              <HamburgerIcon />
            </button>
            <a href="/" className="shrink-0">
              <Image
                src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/66253c9440f55447fcfdc8d7_logo.webp"
                alt="Sintra"
                width={90}
                height={28}
                priority
              />
            </a>
          </div>
          <a
            href="#"
            className="bg-[#3371E4] text-white font-walsham font-medium text-[15px] rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
          >
            Buy now
          </a>
        </div>

        {/* lg+: full desktop bar */}
        <div className="hidden w-full items-center justify-between lg:flex">
          <div className="flex items-center gap-4">
            <a href="/" className="shrink-0">
              <Image
                src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/66253c9440f55447fcfdc8d7_logo.webp"
                alt="Sintra"
                width={90}
                height={28}
                priority
              />
            </a>
            <ul className="flex items-center gap-8 pl-14">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    className="flex items-center text-gray-900 font-walsham font-medium text-[17px] leading-none hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="bg-[#3371E4] text-white font-walsham font-medium text-[17px] rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLight;
