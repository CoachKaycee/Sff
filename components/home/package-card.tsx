import React from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { Package } from "./learning-packages";

export const formatCurrency = (
  amount: number,
  currency: string,
  settings?: {
    decimals?: number;
    showCurrency?: boolean;
  }
): any => {
  if (isNaN(amount)) return false;

  let finalAmount: number = amount;

  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: settings?.decimals ?? 2,
    maximumFractionDigits: settings?.decimals ?? 2,
  };

  if (settings?.showCurrency) {
    options.style = "currency";
    options.currency = currency;
  }

  return new Intl.NumberFormat("en-NG", options).format(finalAmount);
};

export const PackageCard = (props: Package) => {
  const { price, features, isPreferred, link, packageName, currency, _id } =
    props;

  return (
    <div
      className={`w-full max-w-[332px] max-w-auto mx-auto py-8 px-6 rounded-2xl bg-white border-2 ${
        isPreferred ? "border-primary" : "border-border-light"
      } shadow-[0_4px_90px_-5px_rgba(0, 0, 0, 0.07)]`}
    >
      <div className="flex justify-center pb-4">
        <span className="bg-[#FFE7E5] text-lg text-primary py-1 px-3 rounded-sm">
          {packageName}
        </span>
      </div>

      <Link
        href={
          link +
            `&id=${props?._id}&amount=${price?.$numberDecimal}&currency=${currency}&plan=${packageName}` ||
          ""
        }
      >
        <Button
          size="lg"
          variant={isPreferred ? "default" : "outline"}
          className="w-full"
        >
          Get Started
        </Button>
      </Link>

      <div className="w-full flex flex-col gap-4 mt-6">
        {features?.map((feature) => (
          <div key={feature} className="flex items-center gap-4">
            <Check className="flex-shrink-0" color="#ED4137" />
            <p className="text-md md:text-lg">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
