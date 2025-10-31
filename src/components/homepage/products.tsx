import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Headphones from "@/assets/homepage/headphones-1.svg";
import Speakers from "@/assets/homepage/speakers-1.svg";
import SpeakerMain from "@/assets/homepage/speaker-main.png";
import Earphones from "@/assets/homepage/earphones-1.svg";
import SpeakerZX7 from "@/assets/homepage/speaker-zx7.svg";
import SpeakerZX7Tablet from "@/assets/homepage/speaker-zx7-tablet.jpg";
import SpeakerZX7Mobile from "@/assets/homepage/speaker-zx7-mobile.jpg";
import EarphonesYX1 from "@/assets/homepage/earphones-yx1.svg";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  const quickLinks = [
    { name: "Headphones", href: "/headphones", image: Headphones },
    { name: "Speakers", href: "/speakers", image: Speakers },
    { name: "Earphones", href: "/earphones", image: Earphones },
  ];
  return (
    <section className="max-sm:pt-[92px] max-sm:pb-[120px] max-md:py-[148px] md:py-[200px] brand-width mx-auto px-6 max-sm:space-y-6 max-md:space-y-8 md:space-y-12">
      <div className="flex max-sm:flex-col max-sm:gap-[68px] gap-[30px]">
        {quickLinks.map((link) => (
          <div
            key={link.name}
            className="group hover:cursor-pointer bg-brand-neutral-200 flex-1 flex justify-center items-end pb-[30px] rounded-md max-sm:min-h-[165px] min-h-[204px] relative"
          >
            <div className="flex flex-col items-center gap-[15px]">
              <h6>{link.name}</h6>
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

      <div className="max-sm:mt-[120px] max-md:mt-[96] md:mt-[168px] md:px-[95px] md:h-[560px] md:bg-[url(/home/speaker-circles.svg)] max-md:bg-[url(/home/speaker-circles-mobile.svg)] max-sm:bg-contain bg-no-repeat bg-brand-primary rounded-xl flex max-md:flex-col justify-between max-md:items-center relative overflow-hidden">
        <figure className="max-md:w-[200px] lg:transform lg:translate-y-24 mt-6 lg:mb-0 lg:mt-0">
          <Image
            src={SpeakerMain}
            width={410}
            height={493}
            className=""
            alt="headphones image"
          />
        </figure>
        <div className="max-sm:px-6 md:py-[130px] max-md:py-16 max-md:flex flex-col max-md:items-center max-md:text-center text-white max-w-[350px] w-full">
          <h1>ZX9 SPEAKER</h1>
          <p className="opacity-75 mt-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button className="mt-10 bg-black hover:bg-[#4c4c4c]">
            SEE PRODUCT
          </Button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={SpeakerZX7}
          alt="speaker-zx7 background"
          width={1110}
          height={320}
          className="w-full rounded-lg h-auto max-md:hidden"
        />
        <Image
          src={SpeakerZX7Tablet}
          alt="speaker-zx7 background"
          width={689}
          height={320}
          className="w-full rounded-lg h-auto hidden sm:flex md:hidden"
        />
        <Image
          src={SpeakerZX7Mobile}
          alt="speaker-zx7 background"
          width={327}
          height={320}
          className="w-full rounded-lg h-auto sm:hidden"
        />

        <div className="max-sm:pl-6 max-md:pl-[62px] md:pl-[95px] absolute top-1/2 left-1/3 sm:left-1/5 lg:left-1/6 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-8">
          <h2 className="">zx7 speaker</h2>
          <Link href="speakers/zx7-speaker">
            <Button variant="outline">see product</Button>
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 max-sm:gap-6 max-md:gap-[11px] md:gap-[30px]">
        <Image
          src={EarphonesYX1}
          width={540}
          height={320}
          alt="earphones-yx1"
          className="rounded-xl h-full"
        />
        <div className="bg-brand-neutral-200 space-y-8 rounded-xl py-[101px] max-md:px-10 md:px-[95px]">
          <h4>yx1 earphones</h4>
          <Link href="/earphones/yx1-earphones">
            <Button variant="outline">see product</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
