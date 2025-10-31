import Image from "next/image";
import AudioGear from "@/assets/homepage/gear.svg";
import React from "react";

const Gear = () => {
  return (
    <section className="brand-width mx-auto px-6 mb-[133px] flex items-center justify-between">
      <div className="space-y-8 max-w-[445px]">
        <h2>
          best Bringing you the <span className="text-brand-primary">best</span>{" "}
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
        className="rounded-md"
        alt="audio gear image"
      />
    </section>
  );
};

export default Gear;
