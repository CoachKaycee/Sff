import { coolvetica, sourceSerifPro } from "@/app/fonts";
import { MoveUpRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { AvatarStack } from "../ui/avatar-stack";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full bg-background-secondary relative">
      <Image
        src="/assets/images/hero-pattern.png"
        alt="Marquee"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 right-0 top-0 bottom-0 opacity-50"
      />
      <div className="container px-4 pt-12 md:pt-24 relative">
        <div className="flex flex-col justify-center max-w-[1026px] mx-auto">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-badge text-badge-text border-[0.8px] rounded-[8px] border-badge-border text-[11px] sm:text-xs md:text-sm py-1 px-2">
              <span className="inline-flex items-center justify-center bg-primary/40 border-[1.5px] border-primary w-4 md:w-5 h-4 md:h-5 rounded-full ">
                <MoveUpRight className="text-primary w-2 h-2" />
              </span>
              THE FIRST REVOLUTIONARY LANGUAGE SCHOOL IN THE WORLD 
            </span>
          </div>

          <h2 className={coolvetica.className + " text-4xl max-w-[340px] mx-auto md:max-w-[1200px] md:text-7xl text-center mt-2"}>
          Speak fluent French in{" "}
            <span className={sourceSerifPro.className + " text-primary italic"}>
              3 months
            </span>{" "}
            or get your money back!
          </h2>
          <p className="text-center text-lg md:text-xl text-text mt-6 mb-8">
            Our unique learning approach guarantees you fluency in French within
            a period of three months, or we will refund you 100% with an
            apology. Yes, we are that confident!
          </p>

          <div className="flex items-center justify-center">
            <Link href="/#packages">
              <Button size="lg">
                Get Started
                <MoveUpRight className="ml-2" width={18} height={18} />
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center pt-10 gap-2">
            <AvatarStack
                avatars={[
                "/assets/images/avatar-1.png",
                "/assets/images/avatar-2.png",
                "/assets/images/avatar-3.png",
                "/assets/images/avatar-4.png",
                ]}
            />

            <p className="text-sm md:text-md text-gray-500">10,000+ students across the globe</p>
          </div>

          <Image 
            src="/assets/images/world.png"
            alt="World"
            width={1055}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};
