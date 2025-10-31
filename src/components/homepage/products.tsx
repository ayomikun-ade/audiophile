import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Headphones from "@/assets/homepage/headphones-1.svg";
import Speakers from "@/assets/homepage/speakers-1.svg";
import SpeakerMain from "@/assets/homepage/speaker-main.png";
import Earphones from "@/assets/homepage/earphones-1.svg";
import SpeakerZX7 from "@/assets/homepage/speaker-zx7.svg";
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
    <section className="py-[200px] brand-width mx-auto px-6 space-y-12">
      <div className="flex max-md:flex-col gap-[30px]">
        {quickLinks.map((link) => (
          <div
            key={link.name}
            className="group hover:cursor-pointer bg-brand-neutral-200 flex-1 flex justify-center items-end pb-[30px] rounded-md min-h-[204px] relative"
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
                className="absolute -translate-y-1/2 h-full w-auto top-5 left-1/2 -translate-x-1/2"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[168px] px-[95px] h-[560px] bg-[url(/home/speaker-circles.svg)] bg-no-repeat bg-brand-primary rounded-xl flex max-md:flex-col justify-between relative overflow-hidden">
        <figure className="mb-12 lg:transform lg:translate-y-24 mt-6 lg:mb-0 lg:mt-0">
          <Image
            src={SpeakerMain}
            width={410}
            height={493}
            className=""
            alt="headphones image"
          />
        </figure>
        <div className="py-[130px] self-end  text-white max-w-[350px] w-full">
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
          className="w-full rounded-lg h-auto"
        />

        <div className="pl-[95px] absolute top-1/2 left-1/3 md:left-1/5 lg:left-1/6 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-8">
          <h2 className="">zx7 speaker</h2>
          <Link href="speakers/zx7-speaker">
            <Button variant="outline">see product</Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-[30px]">
        <Image
          src={EarphonesYX1}
          width={540}
          height={320}
          alt="earphones-yx1"
          className="rounded-xl h-full"
        />
        <div className="bg-brand-neutral-200 space-y-8 rounded-xl py-[101px] px-[95px]">
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
