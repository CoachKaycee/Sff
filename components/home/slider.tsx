"use client";
import { whatFor } from "@/contants/video-testimonial";
import Image from "next/image";
import React, { useState } from "react";
// Import Swiper React components
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="relative flex overflow-hidden md:max-w-[800px] mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {whatFor?.map((card, idx) => (
          <SwiperSlide key={idx} virtualIndex={idx}>
            <div className="w-full relative pt-5 md:pt-10 px-4 md:px-2 rounded-3xl overflow-hidden flex-shrink-0">
              <Image
                src="/assets/images/blue-pattern.jpg"
                alt="pattern"
                layout="fill"
                objectFit="cover"
                className="absolute left-0 right-0 top-0 bottom-0"
                draggable={false}
              />
              <div className="relative flex flex-col md:flex-row gap-6">
                <Image
                  width={318}
                  height={260}
                  alt={card.title}
                  src={card.src}
                  className="order-2 md:order-1"
                  draggable={false}
                />

                <div className="flex flex-col justify-center gap-2 max-w-[388px] order-1 md:order-2">
                  <h4 className="text-xl text-white font-normal">
                    {card.title}
                  </h4>
                  <p className=" text-md text-gray-400 font-light">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-2">
                    {whatFor.map((item, index) => (
                      <div
                        key={item.title}
                        className={`${activeIndex === index ? 'bg-primary' : 'bg-primary/20'} w-2 h-2 rounded-full`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
