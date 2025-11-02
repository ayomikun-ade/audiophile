import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Headphones from "@/assets/homepage/headphones-1.svg";
import Speakers from "@/assets/homepage/speakers-1.svg";
import Earphones from "@/assets/homepage/earphones-1.svg";
import Link from "next/link";

const QuickProducts = () => {
  const quickLinks = [
    { name: "Headphones", href: "/headphones", image: Headphones },
    { name: "Speakers", href: "/speakers", image: Speakers },
    { name: "Earphones", href: "/earphones", image: Earphones },
  ];
  return (
    <div className="brand-width mx-auto flex max-sm:flex-col max-sm:gap-[68px] gap-[30px] px-6">
      {quickLinks.map((link) => (
        <div
          key={link.name}
          className="group hover:cursor-pointer bg-brand-neutral-200 flex-1 flex justify-center items-end pb-[30px] rounded-md max-sm:min-h-[165px] min-h-[204px] relative"
        >
          <div className="flex flex-col items-center gap-[15px]">
            <h6>{link.name}</h6>
            <Link href={link.href}>
              <Button
                variant={"secondary"}
                className="p-0 h-fit group-hover:text-brand-primary group-hover:opacity-100"
              >
                Shop{" "}
                <ChevronRight
                  size={16}
                  className="text-brand-primary opacity-100!"
                />
              </Button>
            </Link>
            <Image
              src={link.image}
              width={125}
              height={163}
              alt={`${link.name} image`}
              className="absolute -translate-y-1/2 max-sm:h-[120px] h-full w-auto top-5 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickProducts;
