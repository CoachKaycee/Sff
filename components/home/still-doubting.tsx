import { coolvetica } from "@/app/fonts";
import { videoTestimonials } from "@/contants/video-testimonial";
import Image from "next/image";
import React from "react";
import { SingleVideo } from "./single-video";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";

export const StillDoubting = () => {
  return (
    <section id="still-doubting" className="w-full bg-white">
      <div className="container mx-auto py-8 md:py-12">
        <h3
          className={
            coolvetica.className + " text-text text-4xl md:text-6xl text-center"
          }
        >
          Still doubting?
        </h3>
        <p className="pt-2 text-text-gray text-center text-lg md:text-lg leading-relaxed pb-12">
          These are evidence from people we’ve given results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {videoTestimonials.map((testimonial) => (
            <SingleVideo key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex items-center md:justify-center pt-8 md:pt-24">
          <Link href="/#packages">
            <Button size="lg">
              Get Started
              <MoveUpRight className="ml-2" width={18} height={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
