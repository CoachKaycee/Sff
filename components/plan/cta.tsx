"use client";
import React from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export const PlanCta = () => {
  const searchParams = useSearchParams();
  const currency = searchParams.get("currency");

  return (
    <div className="flex items-center mt-12">
      <Button size="lg" asChild>
        <Link
          href={`${
            currency === "NGN"
              ? "https://wa.link/4sbfnu"
              : "https://wa.link/tfmtop"
          }`}
          target="_blank"
        >
          Get Started
          <MoveUpRight className="ml-2" width={12} height={12} />
        </Link>
      </Button>
    </div>
  );
};
