"use client";
import React from "react";
import { coolvetica } from "../fonts";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";

const Welcome = () => {
  function handleSendToWhatsapp() {
    window.open(
      "https://wa.me/9075555748?text=Hello%20coach,%20I've%20just%20made%20payment%20for%20my%20French%20class",
      "_blank"
    );
  }

  return (
    <section className="w-full bg-background-secondary relative">
      <div className="container py-12 md:py-24">
        <h2
          className={
            coolvetica.className + " text-3xl md:text-6xl text-text text-center"
          }
        >
          Welcome Abroad!
        </h2>
        <p className=" text-md md:text-3xl text-text-gray text-center">
          You are one step closer to your French goals.
        </p>

        <div className="mt-12 max-w-[600px] mx-auto">
          <div className="flex flex-col justify-center gap-2 md:gap-4">
            <h3
              className={
                coolvetica.className + " text-2xl md:text-4xl text-primary"
              }
            >
              What next?
            </h3>
            <p className="text-text-gray text-md md:text-lg max-w-[600px]">
              Kindly kickstart your onboarding process by clicking on the button
              below. Once you are done with your onboarding, you will be
              provided with the next directives on your French learning journey.
            </p>

            <div className="flex flex-col gap-4 mt-4 md:mt-0">
              <div>
                <Button onClick={() => handleSendToWhatsapp()} size="lg">
                  Onboard with Coach Kaycee
                  <Image
                    src="/assets/icons/whatsapp-new.svg"
                    width={18}
                    height={18}
                    alt="whatsapp"
                    className="ml-2"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
