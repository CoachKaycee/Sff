import { coolvetica } from "@/app/fonts";
import React from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <section id="about" className="w-full bg-background-secondary">
      <div className="container mx-auto py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-[781px]">
          <h3 className={coolvetica.className + " text-text text-3xl md:text-6xl pb-4 md:pb-0"}>
            Learn in style, and <span className="text-primary">fast!</span>
          </h3>
          
          <Image className="block md:hidden" src="/assets/images/about.png" width={424} height={481} alt="about" />

          <p className="pt-4 md:pt-8 text-text-gray text-md md:text-lg leading-relaxed pb-12">
            At Speak French Fast Academy, our mission is to break linguistic
            barriers and transform lives by providing a dynamic and immersive
            online learning experience. We are committed to enabling individuals
            from all corners of the globe to study French and authentically
            speak it fluently and confidently within the space of 3 months —or,
            we refund you 100% and with an apology letter.
            <br /> <br />
            Our methods and results are the backbone for our confidence.
          </p>

          <Link href="/#packages">
            <Button size="lg">
              Get Started
              <MoveUpRight className="ml-2" width={18} height={18} />
            </Button>
          </Link>
        </div>

        <Image className="hidden md:block" src="/assets/images/about.png" width={424} height={481} alt="about" />
      </div>
    </section>
  );
};
