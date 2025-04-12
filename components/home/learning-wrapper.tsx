"use client";

import { useCallback, useEffect, useState } from "react";
import { DialogMessage } from "./dialog-message";
import { LearningPackages, Package } from "./learning-packages";

async function getIpAddress() {
  const response = await fetch("https://ipapi.co/json/", {
    method: "GET",
    cache: "no-cache",
  });

  const data = await response.json();

  const currency = data?.currency === "NGN" ? "NGN" : "USD";

  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products?currency=${currency}`
  );
  return await productsResponse.json();
}

export const LearningWrapper = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  const fetchLearningPackages = useCallback(async () => {
    const products = await getIpAddress();
    const packages = await products.responseObject;
    setPackages(packages);
  }, []);

  useEffect(() => {
    fetchLearningPackages();
  }, [fetchLearningPackages]);

  return (
    <>
      <LearningPackages packages={packages} />
      <DialogMessage currency={packages[0]?.currency || ""} />
    </>
  );
};
