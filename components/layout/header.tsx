"use client";
import { navItems } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AlignJustify } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleCloseMenu () {
    setIsOpenMenu(false)
  }

  return (
    <div className=" h-20 md:h-18 bg-white/60 backdrop-blur-md border-b border-b-gray-200 sticky top-0 z-30">
      <div className="container px-4 mx-auto flex items-center justify-between h-full w-full">
        <Link href="/">
          <Image
            src="/assets/images/logo-new.svg"
            alt="speak french fast logo"
            width={isDesktop ? 80 : 66}
            height={isDesktop ? 55 : 50}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navItems.map((item, index) => (
              <Link className=" text-lg text-gray-700" key={index} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          
          <Link href="/#packages">
            <Button variant="outline" size="lg">Get Started</Button>
          </Link>
        </nav>

        <div className="w-10 h-10 flex md:hidden items-center justify-center hover:bg-gray-50" onClick={() => setIsOpenMenu(true)}>
          <AlignJustify size={32} className="text-primary" /> 
        </div>
      </div>

      {isOpenMenu ? (
        <MobileMenu onClose={handleCloseMenu} />
      ) : null}
    </div>
  );
};
