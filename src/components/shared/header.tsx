"use client";
import React from "react";
import { motion } from "motion/react";

const Header = ({ heading }: { heading: string }) => {
  return (
    <header className="bg-black text-white">
      <div className="max-sm:pb-8 sm:pt-[98px] text-center px-6 max-sm:min-h-48 sm:min-h-[336px] h-full flex max-sm:items-end sm:items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {heading}
        </motion.h2>
      </div>
    </header>
  );
};

export default Header;
