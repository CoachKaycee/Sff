"use client";
import { coolvetica } from "@/app/fonts";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import React, { useState } from "react";
import { VideoPlayerDialog } from "../ui/video-player-dialog";
import { CldVideoPlayer } from "next-cloudinary";

export const Testimonial = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <section id="testimonials" className="bg-white py-8 md:py-14">
      <div className="container mx-auto">
        <h3
          className={coolvetica.className + " text-center text-3xl md:text-6xl"}
        >
          Hear from our students
        </h3>

        <div className="max-w-[1112px] h-full mx-auto mt-8 flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5 flex-shrink-0">
            <div className="overflow-hidden h-auto rounded-lg relative flex-shrink-0">
              <Image
                src="/assets/images/story.jpg"
                alt="story"
                width={772}
                height={372}
                className="cover hidden md:block"
              />
              <Image
                src="/assets/images/our-student-story-mobile.jpg"
                alt="story"
                width={388}
                height={400}
                className="cover block md:hidden"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 py-3 md:py-6 px-4 md:px-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
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

                <div className="flex items-end justify-between">
                  <div>
                    <h5 className="text-white font-semibold text-2xl md:text-4xl max-w-[539px]">
                      “I learnt French at SFF within 7 months and passed my TCF
                      exam in one sitting”
                    </h5>
                    <p className="text-white text-md mt-4">Amarachi Abor</p>
                  </div>

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
              </div>

              {openVideo ? (
                <div className="absolute top-0 right-0 left-0 bottom-0">
                  <div className="w-full h-full flex items-center bg-blue-600 relative">
                    <CldVideoPlayer
                      id="Main Testimonial -  TCF"
                      src="Main Testimonial -  TCF"
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
            <div className="w-full md:max-w-[320px] min-h-[300px] md:min-h-[372px] h-full rounded-lg flex-shrink-0 relative overflow-hidden">
              <Image
                className="absolute top-0 right-0 left-0 bottom-0"
                src="/assets/images/primary-pattern.png"
                alt="story"
                layout="fill"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 py-6 px-8 flex flex-col justify-between">
                <p className="text-white/50 font-bold uppercase">Figures</p>

                <div>
                  <h2
                    className={
                      coolvetica.className + " text-white text-6xl md:text-8xl"
                    }
                  >
                    10,000+
                  </h2>
                  <p className="text-xl md:text-2xl text-white mt-2">
                    students are evidence to our working methods
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-6 px-5 md:px-8 bg-blue-400 rounded-lg overflow-hidden relative">
            <Image
              className="absolute top-0 right-0 left-0 bottom-0"
              src="/assets/images/testimonial-pattern.jpg"
              alt="testimonial pattern"
              layout="fill"
            />
            <div className="w-full h-full relative">
              <Image
                className="absolute bottom-7 right-4"
                src="/assets/images/quote.png"
                alt="quote"
                width={198}
                height={188}
              />
              <h6 className="font-bold uppercase text-text-testimonial/50">
                Review &lsquo;O Clock
              </h6>
              <h4
                className={
                  coolvetica.className +
                  " pt-4 text-xl md:text-3xl text-text-testimonial"
                }
              >
                SFF is the perfect online academy for everyone who desires to
                learn how to speak French with ease. The course outline is 100%
                simplified and the coaches are well-informed about the course
                and they pass that knowledge dutifully and energetically.
              </h4>

              <p className=" text-lg font-medium text-gray-800 mt-6 md:mt-4">
                Oseni Oyekemisola
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
