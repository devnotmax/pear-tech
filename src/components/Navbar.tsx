import React from "react";
import Link from "next/link";
import Image from "next/image";
import UserWidget from "./UserWidget";

interface NavBarProps {
  links: { name: string; href: string }[];
}

const Navbar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <>
      <div className="bg-stone-50 text-black font-bold text-base h-auto p-4 flex flex-col items-center md:flex-row md:justify-between">
        <Image src="/logo.svg" alt="logo" width={150} height={150} className="mb-2 md:mb-0" />
        <nav className="flex flex-col md:flex-row md:items-center md:justify-center w-full">
          <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 items-center justify-center">
            {links.map((link) => (
              <li key={link.name} className="hover:text-green-500">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-shrink-0 mt-2 md:mt-0">
          <UserWidget />
        </div>
      </div>

      <div className="bg-[#D9D9D9] font-medium w-full mb-4">
        <div className="py-1 mx-auto text-sm max-w-screen-xl flex justify-between flex-wrap">
          <p>&quot;Bienvenido a Peartech&quot;</p>
          <div className="flex items-center gap-2">
            <p>
              <i className="bx bxs-store-alt text-[18px]"></i> Calle falsa
              123, Buenos Aires
            </p>
            <span>||</span>
            <p>
              <i className="bx bxs-package text-[18px]"></i> Rastrea tus
              envios
            </p>
            <span>||</span>
            <p>
              <i className="bx bxs-offer text-[18px]"></i> Ofertas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
