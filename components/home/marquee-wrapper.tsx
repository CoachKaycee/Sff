"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export const MarqueeWrapper = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
    <section id="marquee" className="py-8 md:py-14 relative">
      <Image
        src="/assets/images/blue-pattern.jpg"
        alt="Marquee"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 right-0 top-0 bottom-0"
      />

      <div className="container px-0 mx-auto relative">
        <h3 className="text-white text-sm max-w-[326px] md:max-w-auto mx-auto md:text-2xl text-center">
          With very high success rate in various international examinations
        </h3>

        <Marquee>
          <div className="flex gap-16 mt-8 md:mt-12 mr-12 items-center">
            <Image
              src="/assets/icons/tef.svg"
              alt="tef"
              width={isDesktop ? 200 : 124}
              height={isDesktop ? 40 : 24}
            />
            <Image
              src="/assets/icons/delf.svg"
              alt="delf"
              width={isDesktop ? 54 : 32}
              height={isDesktop ? 40 : 24}
            />
            <Image
              src="/assets/icons/cloe.svg"
              alt="cloe"
              width={isDesktop ? 175 : 104}
              height={isDesktop ? 40 : 24}
            />
            <Image
              src="/assets/icons/dilf.svg"
              alt="dilf"
              width={isDesktop ? 78 : 46}
              height={isDesktop ? 40 : 24}
            />
            <Image
              src="/assets/icons/dcl.svg"
              alt="dcl"
              width={isDesktop ? 196 : 118}
              height={isDesktop ? 40 : 24}
            />
            <Image src="/assets/icons/tcf.svg" alt="tcf" width={isDesktop ? 66 : 40} height={isDesktop ? 40 : 24} />
            <Image
              src="/assets/icons/cloe.svg"
              alt="cloe"
              width={isDesktop ? 175 : 104}
              height={isDesktop ? 40 : 24}
            />
            <Image
              src="/assets/icons/delf.svg"
              alt="delf"
              width={isDesktop ? 54 : 32}
              height={isDesktop ? 40 : 24}
            />
            <Image
              src="/assets/icons/tef.svg"
              alt="tef"
              width={isDesktop ? 200 : 124}
              height={isDesktop ? 40 : 24}
            />
            <Image
              src="/assets/icons/dilf.svg"
              alt="dilf"
              width={isDesktop ? 78 : 46}
              height={isDesktop ? 40 : 24}
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};
