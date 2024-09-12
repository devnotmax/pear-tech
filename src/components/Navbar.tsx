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
      <div className="bg-stone-50 text-black font-bold text-base h-16 p-2 flex items-center justify-between">
        <div className="container mx-auto flex items-center space-x-4">
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
          <nav className="flex flex-1">
            <ul className="flex space-x-4 flex-1 items-center justify-center">
              {links.map((link) => (
                <li key={link.name} className="hover:text-green-500">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex-shrink-0">
            <UserWidget />
          </div>
        </div>
      </div>
      <div className="bg-[#D9D9D9] font-medium w-full mb-4">
        <div className="py-1 mx-auto text-sm max-w-screen-xl flex justify-between">
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
