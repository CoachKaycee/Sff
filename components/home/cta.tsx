import { coolvetica, sourceSerifPro } from "@/app/fonts";
import React from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Cta = () => {
  return (
    <section id="cta" className="bg-white py-8 md:py-14">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-5 md:gap-10 justify-between">
        <div className="max-w-[704px]">
          <h4 className={coolvetica.className + " text-3xl md:text-6xl leading-tight"}>
            Unleash your inner{" "}
            <span className={sourceSerifPro.className + " italic text-primary"}>
              “Francophile”
            </span>{" "}
            with us
          </h4>

          <div className="block md:hidden mt-3">
          <Image
            src="/assets/images/cta-image.jpg"
            alt="cta image"
            width={500}
            height={520}
            className="rounded-2xl"
          />
        </div>

          <p className=" text-md md:text-xl mt-4 pb-12">
            Our promise to you is that if you don’t speak the french language
            fluently in 3 months, we will refund you your investment and even
            write you an apology letter.
            <br />
            <br /> Looking to see you at the other side!
          </p>

          <Link href="/#packages">
            <Button size="lg">
              Get Started
              <MoveUpRight className="ml-2" width={18} height={18} />
            </Button>
          </Link>
        </div>

        <div className="hidden md:block relative">
          <Image src="/assets/images/image-part.png" width={325} height={650} alt="background-tag" className="absolute -right-16 -top-8" />
          <Image
            src="/assets/images/cta-image.jpg"
            alt="cta image"
            width={500}
            height={520}
            className="rounded-2xl relative"
          />
        </div>
      </div>
    </section>
  );
};
