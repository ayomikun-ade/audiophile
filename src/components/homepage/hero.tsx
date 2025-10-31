import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import HeroImage from "@/assets/homepage/hero.svg";

const Hero = () => {
  return (
    <section className="bg-[#141414] min-h-[800px] flex items-center">
      <div className="max-w-[1110px] h-full mx-auto px-6 text-white flex justify-between items-center gap-2">
        <div className="max-w-[398px] z-10">
          <p className="brand-overline opacity-50">NEW PRODUCT</p>
          <h1 className="my-6">XX99 Mark II Headphones</h1>
          <p className="max-w-[350px] mb-10 opacity-75 font-medium">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button className="">SEE PRODUCT</Button>
        </div>
        <div className="">
          <div className="absolute inset-0 h-fit z-10 bg-[#0e0e0e]/10" />
          <Image
            src={HeroImage}
            width={708}
            height={886}
            className="h-full w-auto"
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
