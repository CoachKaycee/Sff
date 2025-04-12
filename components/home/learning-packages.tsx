"use client";
import { coolvetica } from "@/app/fonts";
import React, { useState } from "react";
import { PackageCard } from "./package-card";
import { learningPackages } from "@/contants";

export interface Package {
  _id: string;
  country: string;
  subscriptionModel: string;
  price: {
    $numberDecimal: number;
  };
  packageName: string;
  currency: string;
  features?: string[];
  isPreferred?: boolean;
  link?: string;
}

interface LearningPackagesProps {
  packages: Package[]
}

export const LearningPackages = (props: LearningPackagesProps) => {
  const [activeTab] = useState(1);

  const { packages } = props;

  const getPackages = (tab: number) => {
    switch (tab) {
      case 1:
        return packages?.filter(
          (product) => product?.subscriptionModel === "month"
        );
      case 3:
        return packages?.filter(
          (product) => product?.subscriptionModel === "3 months"
        );
      case 6:
        return packages?.filter(
          (product) => product?.subscriptionModel === "6 months"
        );
      default:
        return packages?.filter(
          (product) => product?.subscriptionModel === "month"
        );
    }
  };

  const getLearningPackages = (tab: number) => {
    return learningPackages[tab];
  };

  const getRegularPackage = (packages: Package[], packageType: string): Package => {
    return packages.find((pack: Package) => pack.packageName === packageType)!
  }

  return (
    <section
      id="packages"
      className="bg-background-secondary"
      style={{
        overflow: "visible",
      }}
    >
      <div className="container mx-auto py-8 md:py-16">
        <h2
          className={
            coolvetica.className + " text-center text-3xl md:text-6xl text-text"
          }
        >
          Our Learning Packages
        </h2>

        <div className="w-full max-w-[1144px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          
          <PackageCard
            {...(getRegularPackage(getPackages(activeTab), "Regular"))}
            features={getLearningPackages(activeTab)[0].features}
            isPreferred={getLearningPackages(activeTab)[0].isPreferred}
            link={getLearningPackages(activeTab)[0].link}
          />
          <PackageCard
            {...(getRegularPackage(getPackages(activeTab), "VIP"))}
            features={getLearningPackages(activeTab)[1].features}
            isPreferred={getLearningPackages(activeTab)[1].isPreferred}
            link={getLearningPackages(activeTab)[1].link}
          />
          <PackageCard
            {...(getRegularPackage(getPackages(activeTab), "VVIP"))}
            features={getLearningPackages(activeTab)[2].features}
            isPreferred={getLearningPackages(activeTab)[2].isPreferred}
            link={getLearningPackages(activeTab)[2].link}
          />
          
        </div>
      </div>
    </section>
  );
};
