import { coolvetica } from "@/app/fonts";
import { navItems } from "@/contants";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface MobileMenuProps {
  onClose: VoidFunction;
}

export const MobileMenu = (props: MobileMenuProps) => {
  const { onClose } = props;
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 h-[100vh] bg-black/40" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="absolute right-0 top-0 button-0 w-[85%] h-[100vh] px-6 py-3 bg-white">
        <div className="flex items-center justify-between">
          <h4 className={coolvetica.className + "  text-lg"}>Quick Links</h4>

          <div
            onClick={onClose}
            className="w-10 h-10 flex md:hidden items-center justify-center hover:bg-gray-50"
          >
            <X className="text-primary" />
          </div>
        </div>

        <div className="flex flex-col mt-16 gap-8 items-center justify-center">
          {navItems.map((item, index) => (
            <Link
              className=" text-lg text-gray-700"
              onClick={onClose}
              key={index}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-8">
            <Button variant="outline" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
