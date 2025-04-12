"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import React, { useState } from "react";
import { CldVideoPlayer } from "next-cloudinary";

interface SingleVideoProps {
  testimonial: {
    src: string;
    title: string;
    name: string;
    imageUrl: string;
  };
}

export const SingleVideo = (props: SingleVideoProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [openVideo, setOpenVideo] = useState(false);
  const { testimonial } = props;
  return (
    <div className="w-full" key={testimonial.src}>
      <div className="rounded-lg overflow-hidden relative">
        <Image
          src={testimonial.imageUrl}
          width={388}
          height={350}
          alt={testimonial.title}
          layout="cover"
        />

        <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
          <div
            onClick={() => setOpenVideo(true)}
            className="flex-shrink-0 w-10 md:w-20 h-10 md:h-20 rounded-full bg-gray-200/30 flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/assets/icons/play.svg"
              width={isDesktop ? 32 : 16}
              height={isDesktop ? 32 : 16}
              alt="play icon"
            />
          </div>
        </div>

        {openVideo ? (
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-red-500">
            <div className="w-full h-full flex items-center bg-blue-600 relative">
              <CldVideoPlayer
                id={testimonial.src}
                src={testimonial.src}
                autoPlay={true}
                onEnded={() => setOpenVideo(false)}
              />

              <div className="absolute top-4 w-full">
                <div className="pt-4 px-6 pr-10 w-full flex items-center justify-between">
                  <h5 className="uppercase font-bold text-white/50 text-sm md:text-md">
                    STUDENT STORIES
                  </h5>

                  <Image
                    src="/assets/images/logo-compact.svg"
                    width={62}
                    height={40}
                    alt="logo compact"
                    className=" opacity-30"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <h5 className=" text-2xl mt-3 font-semibold">{testimonial.title}</h5>
      <p className="text-md text-primary font-medium mt-2">
        {testimonial.name}
      </p>
    </div>
  );
};
