import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import audiophile from "@/assets/homepage/audiophile.svg";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Headphones", href: "/headphones" },
    { name: "Speakers", href: "/speakers" },
    { name: "Earphones", href: "/earphones" },
  ];

  return (
    <nav className="md:bg-[#141414] max-md:bg-[#101010] text-white max-sm:px-0 max-lg:px-10">
      <section className="max-w-[1110px] mx-auto pt-8 max-md:pb-8 md:pb-9 max-sm:px-6 lg:px-6 border-b border-white/20 w-full flex items-center justify-between">
        <Menu size={20} className="text-white sm:hidden" />

        <div className="flex items-center gap-[42px]">
          <Menu size={20} className="text-white md:hidden max-sm:hidden" />
          <Link href="/">
            <Image src={audiophile} width={143} height={25} alt="audiophile" />
          </Link>
        </div>
        <ul className="max-md:hidden flex gap-[34px] font-bold text-[13px] leading-[25px] *:tracking-[2px] *:hover:text-brand-primary *:transition-colors *:duration-300">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="uppercase">
              {link.name}
            </Link>
          ))}
        </ul>
        <ShoppingCart
          size={24}
          className="hover:text-brand-primary cursor-pointer transition-colors duration-300"
        />
      </section>
    </nav>
  );
};

export default Navbar;
