"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="bg-[#141414] max-md:min-h-[729px] md:min-h-[800px] flex items-center relative">
      <div className="lg:hidden absolute inset-0 bg-[url(/home/hero-mobile.svg)] bg-no-repeat bg-center" />
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/home/image-hero.jpg"
          alt="hero image desktop"
          fill
          priority
          className="hidden lg:block w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1110px] h-full w-full mx-auto md:px-6 text-white flex justify-between items-center gap-2">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:max-w-[398px] z-10 max-md:px-6 max-lg:flex flex-col max-lg:items-center max-lg:text-center"
        >
          <p className="brand-overline opacity-50">NEW PRODUCT</p>
          <h1 className="my-6">XX99 Mark II Headphones</h1>
          <p className="max-w-[350px] mb-10 opacity-75 font-medium">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href={"/headphones/xx99-mark-two"}>
            <Button className="">SEE PRODUCT</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
