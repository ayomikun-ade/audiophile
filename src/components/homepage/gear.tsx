"use client";
import Image from "next/image";
import AudioGear from "@/assets/homepage/gear.svg";
import AudioGearTablet from "@/assets/homepage/gear-mobile.svg";
import AudioGearMobile from "@/assets/homepage/image-best-gear.jpg";
import React from "react";
import { useIsDesktop, useIsTablet } from "@/hooks/useMediaQuery";
import { motion } from "motion/react";

const Gear = () => {
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  return (
    <motion.section
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="brand-width mx-auto px-6 max-sm:mb-[120px] max-md:mb-24 md:mb-[133px] flex max-lg:flex-col-reverse max-lg:gap-[63px] items-center justify-between"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
        className="space-y-8 max-md:max-w-[573px] md:max-w-[445px] max-md:flex flex-col items-center max-lg:text-center"
      >
        <h2>
          best Bringing you the{" "}
          <span className="text-brand-primary">best </span>
          audio gear
        </h2>
        <p className="text-black opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </motion.div>
      <Image
        src={
          isDesktop ? AudioGear : isTablet ? AudioGearTablet : AudioGearMobile
        }
        width={540}
        height={588}
        className="rounded-md "
        alt="audio gear image"
      />
    </motion.section>
  );
};

export default Gear;
