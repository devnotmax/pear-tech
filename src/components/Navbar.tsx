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
      <div className="bg-stone-50 text-black font-bold text-base h-15 p-2 flex space-x-4 items-center justify-between">
        <div className="logo">
          <Image src="/logo.svg" alt="logo" width={150} height={150}></Image>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 items-center">
            {links.map((link) => (
              <li key={link.name} className="hover:text-green-500">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex items-center justify-center space-x-4  w-[10%]">
          <UserWidget></UserWidget>
        </nav>
      </div>
      <div className="bg-[#D9D9D9] font-medium w-full mb-4">
        <div className="py-1 mx-1 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center font-bold">
              <p>&quot;Bienvenido a Peartech&quot;</p>
            </div>
            <div className="flex items-center justify-center gap-2 mx-9">
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
      </div>
    </>
  );
};

export default Navbar;
