import { footerMenu } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <section id="footer" className="hidden md:block py-14 relative">
      <Image
        src="/assets/images/blue-pattern.jpg"
        alt="Marquee"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 right-0 top-0 bottom-0"
      />

      <div className="container mx-auto relative flex flex-col md:flex-row items-start justify-between">
        <div>
          <Image
            src="/assets/images/logo-colored.svg"
            width={112}
            height={30}
            alt="logo"
          />

          <div className="flex items-center gap-6 my-6">
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=100063880632273&mibextid=ZbWKwL">
              <Image
                className="cursor-pointer"
                alt="facebook"
                src="/assets/icons/facebook.svg"
                width={20}
                height={20}
              />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/speakfrenchfast?igsh=bXFwcG14eTI4NGwz">
              <Image
                className="cursor-pointer"
                alt="linkedin"
                src="/assets/icons/linkedin.svg"
                width={20}
                height={20}
              />
            </Link>
            <Link target="_blank" href='https://wa.me/9075555748'>
            <Image
              className="cursor-pointer"
              alt="whatsapp"
              src="/assets/icons/whatsapp.svg"
              width={20}
              height={20}
            />
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              className="text-white font-light"
              href="mailto:speakfrenchfast67@gmail.com"
            >
              speakfrenchfast67@gmail.com
            </Link>
            <Link
              className="text-white font-light"
              href="tel:+2349028005572"
            >
              +234 902 8005 572
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {footerMenu.map((menu) => {
            return (
              <div key={menu?.title}>
                <h6 className="text-white text-xl">{menu?.title}</h6>

                <div className="mt-4 flex flex-col gap-4">
                  {menu?.links?.map((link) => (
                    <div key={link.title}>
                      <Link
                        className="text-white/70 font-light hover:text-white"
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

        <div>
            <p className="font-light text-white/80">©2024 Speak French Fast Academy</p>
            <p className="font-light text-white/80">All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};
