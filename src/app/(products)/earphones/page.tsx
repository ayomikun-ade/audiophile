"use client";
import Header from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { useIsDesktop, useIsTablet } from "@/hooks/useMediaQuery";
import { earphonesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const EarphonesPage = () => {
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const earphones = earphonesData ?? [];
  return (
    <main>
      <Header heading="Earphones" />
      <section className="max-sm:space-y-[120px] sm:space-y-40 max-lg:mt-16 lg:mt-40 lg:mb-[120px] brand-width mx-auto px-6">
        {earphones.map((earphone, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            {...(index === 0
              ? { animate: { opacity: 1, y: 0 } }
              : {
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.2, margin: "0px 0px -100px 0px" }
                }
            )}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            key={earphone.id}
            className={`flex max-sm:gap-8 max-lg:flex-col max-lg:items-center max-lg:gap-[52px] lg:items-center lg:justify-between lg:gap-4 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <Image
              src={
                isDesktop
                  ? earphone.desktopUrl
                  : isTablet
                  ? earphone.tabletUrl
                  : earphone.mobileUrl
              }
              width={540}
              height={560}
              alt={earphone.name}
              className={isTablet ? "w-full h-auto rounded-xl" : "rounded-xl"}
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              {...(index === 0
                ? { animate: { opacity: 1, x: 0 } }
                : {
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true, amount: 0.2, margin: "0px 0px -100px 0px" }
                  }
              )}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
              className="sm:max-w-[572px] max-lg:text-center lg:max-w-[445px]"
            >
              <p
                className={`${
                  index == 0
                    ? "brand-overline text-brand-primary mb-4"
                    : "hidden"
                }`}
              >
                New Product
              </p>
              <h2 className="max-sm:mb-6 mb-8">{earphone.name}</h2>
              <p className="max-sm:mb-6 mb-10 opacity-50">
                {earphone.description}
              </p>
              <Link href={`/earphones/${earphone.id}`}>
                <Button>See Product</Button>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default EarphonesPage;
