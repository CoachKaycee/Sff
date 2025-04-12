"use client";
import { coolvetica } from "@/app/fonts";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import { WaitingListDialog } from "./waiting-list";

export const SFFFOrKids = () => {
  const [open, setOpen] = useState(false); 
  return (
    <section className="bg-secondary py-8 md:py-14 relative">
      <div className="container mx-auto relative flex flex-col md:flex-row gap-6 md:gap-16">
        <h2
          className={
            coolvetica.className +
            " text-3xl md:text-6xl uppercase text-text block md:hidden"
          }
        >
          SFF for Children
        </h2>
        <Image
          src="/assets/images/sff-for-kids.png"
          alt="sff for kids"
          width={468}
          height={481}
          className="flex-shrink-0"
        />

        <div className="flex flex-col justify-center">
          <h2
            className={
              coolvetica.className +
              " text-3xl md:text-6xl uppercase text-text hidden md:block"
            }
          >
            SFF for Children
          </h2>

          <p className="mt-2 md:mt-6 text-md md:text-lg text-text-gray">
            At Speak French Fast Academy, our mission is to break linguistic
            barriers and transform lives by providing a dynamic and immersive
            online learning experience. We are committed to enabling individuals
            from all corners of the globe to study French and authentically
            speak it fluently and confidently within the space of 3 months —or,
            we refund you 100% and with an apology letter.
            <br />
            <br />
            Our methods and results are the backbone for our confidence.
          </p>
          <div className="mt-8">
            <Button onClick={() => setOpen(true)} size="lg">
              Coming Soon
              <MoveUpRight className="ml-2" width={18} height={18} />
            </Button>
          </div>
        </div>
        <WaitingListDialog open={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
};
