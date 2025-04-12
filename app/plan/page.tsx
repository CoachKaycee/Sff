import React from "react";
import { coolvetica } from "../fonts";
import Image from "next/image";
import { plans } from "@/contants/plans";
import { Faq } from "@/components/home/faq";
import { PlanCta } from "@/components/plan/cta";

const Plan = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const type = searchParams?.type || ("basic" as string);

  function getPlans() {
    switch (type) {
      case "basic":
        return plans.basic;
      case "standard":
        return plans.standard;
      case "advance":
        return plans.advance;
      default:
        return plans.basic;
    }
  }

  function getTitle() {
    switch (type) {
      case "basic":
        return "Regular";
      case "standard":
        return "VIP";
      case "advance":
        return "VVIP";
      default:
        return "Regular";
    }
  }

  return (
    <section className="w-full bg-background-secondary relative">
      <div className="container py-12 md:py-24 relative">
        <h2
          className={coolvetica.className + " text-3xl md:text-6xl text-text"}
        >
          <span className="text-primary">{getTitle()}</span> Plan
        </h2>

        <div className="mt-8 flex flex-col gap-8">
          {getPlans().map((plan) => (
            <div key={plan?.title} className="w-full gap-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/icons/check-mark.svg"
                  alt="check mark"
                  width={24}
                  height={24}
                />
                <h5 className="text-lg md:text-2xl">{plan.title}</h5>
              </div>
              <p className="text-md md:text-lg font-light">
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <PlanCta />
      </div>
      <Faq />
    </section>
  );
};

export default Plan;
