import { footerMenu } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MobileFooter = () => {
  return (
    <div className="block md:hidden py-14 relative">
      <Image
        src="/assets/images/blue-pattern.jpg"
        alt="Marquee"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 right-0 top-0 bottom-0"
      />

      <div className="container mx-auto relative flex flex-col">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/logo-colored.svg"
            width={112}
            height={30}
            alt="logo"
          />

          <div className="flex items-center gap-6 my-6">
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100063880632273&mibextid=ZbWKwL"
            >
              <Image
                className="cursor-pointer"
                alt="facebook"
                src="/assets/icons/facebook.svg"
                width={20}
                height={20}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/speakfrenchfast?igsh=bXFwcG14eTI4NGwz"
            >
              <Image
                className="cursor-pointer"
                alt="linkedin"
                src="/assets/icons/linkedin.svg"
                width={20}
                height={20}
              />
            </Link>
            <Link target="_blank" href="https://wa.me/9075555748">
              <Image
                className="cursor-pointer"
                alt="whatsapp"
                src="/assets/icons/whatsapp.svg"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h6 className="text-white text-xl">Contact</h6>

            <div className="mt-4 flex flex-col gap-4">
              <div>
                <Link
                  className="text-white/70 font-light hover:text-white"
                  href="mailto:speakfrenchfast67@gmail.com"
                >
                  speakfrenchfast67@gmail.com
                </Link>
              </div>
              <div>
                <Link
                  className="text-white/70 font-light hover:text-white"
                  href="tel:+2349028005572"
                >
                  +234 902 8005 572
                </Link>
              </div>
            </div>
          </div>
          {footerMenu.map((menu, index) => {
            return (
              <div key={menu?.title}>
                <h6
                  className={`text-white text-xl ${
                    index === 0 || index === 2 ? "text-right" : "text-left"
                  }`}
                >
                  {menu?.title}
                </h6>

                <div className="mt-4 flex flex-col gap-4">
                  {menu?.links?.map((link) => (
                    <div key={link.title}>
                      <Link
                        className={`text-white/70 font-light hover:text-white block  ${
                          index === 0 || index === 2
                            ? "text-right"
                            : "text-left"
                        }`}
                        href={link.href}
                      >
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
