import { ShoppingCart } from "lucide-react";
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
    <nav className="bg-[#141414] text-white">
      <section className="max-w-[1110px] mx-auto pt-8 pb-9 border-b border-white/20 w-full flex items-center justify-between">
        <Link href="/">
          <Image src={audiophile} width={143} height={25} alt="audiophile" />
        </Link>
        <ul className="flex gap-[34px] font-bold text-[13px] leading-[25px] *:tracking-[2px] *:hover:text-brand-primary *:transition-colors *:duration-300">
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
