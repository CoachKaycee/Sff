import { coolvetica } from "@/app/fonts";
import { approaches } from "@/contants";
import React from "react";
import { ApproachCard } from "./approach-card";
import Image from "next/image";

export const Approach = () => {
  return (
    <section id="approach" className="bg-white py-8 md:py-14 relative">
      <Image
        src="/assets/images/what-you-get.jpg"
        alt="Marquee"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 right-0 top-0 bottom-0 opacity-30"
      />
      <div className="container mx-auto relative">
        <h2
          className={coolvetica.className + " text-center text-3xl md:text-6xl"}
        >
          What do you get?
        </h2>
        <p className="text-center text-xl text-text-gray mt-2">
          Our unconventional learning methods have proven to work over time, and
          we are confident in it.
        </p>

        <div className="max-w-[1241px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {approaches?.map(({ title, description, imgUrl }) => (
            <ApproachCard
              key={title}
              title={title}
              description={description}
              imgUrl={imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
