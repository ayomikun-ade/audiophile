import Image from "next/image";
import AudioGear from "@/assets/homepage/gear.svg";
import AudioGearMobile from "@/assets/homepage/gear-mobile.svg";
import React from "react";

const Gear = () => {
  return (
    <section className="brand-width mx-auto px-6 max-sm:mb-[120px] max-md:mb-24 md:mb-[133px] flex max-md:flex-col-reverse max-md:gap-[63px] items-center justify-between">
      <div className="space-y-8 max-md:max-w-[573px] md:max-w-[445px] max-md:flex flex-col items-center max-md:text-center">
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
      </div>
      <Image
        src={AudioGear}
        width={540}
        height={588}
        className="rounded-md max-md:hidden max-sm:flex"
        alt="audio gear image"
      />
      <Image
        src={AudioGearMobile}
        width={689}
        height={300}
        className="rounded-md md:hidden max-sm:hidden"
        alt="audio gear image"
      />
    </section>
  );
};

export default Gear;
