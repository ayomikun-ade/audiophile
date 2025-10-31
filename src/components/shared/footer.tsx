import Image from "next/image";
import Link from "next/link";
import audiophile from "@/assets/homepage/audiophile.svg";
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Headphones", href: "/headphones" },
    { name: "Speakers", href: "/speakers" },
    { name: "Earphones", href: "/earphones" },
  ];

  return (
    <footer className="bg-brand-secondary text-white pt-[75px] pb-12 relative">
      <section className="brand-width mx-auto px-6">
        <div className="w-[101px] h-1 bg-brand-primary absolute top-0" />
        <section className="max-w-[1110px] mx-auto w-full flex items-center justify-between">
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
        </section>

        <section className="mt-9 mb-14 flex justify-between items-end">
          <p className="opacity-50 max-w-[540px] font-medium">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex gap-4 *:hover:text-brand-primary *:transition-colors *:duration-300  cursor-pointer">
            <Link href={""}>
              <Facebook />
            </Link>
            <Link href={""}>
              <Twitter />
            </Link>
            <Link href={""}>
              <Instagram />
            </Link>
          </div>
        </section>

        <p className="opacity-50 font-bold">
          Copyright 2021. All Rights Reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
