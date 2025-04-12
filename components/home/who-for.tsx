"use client";
import { coolvetica } from "@/app/fonts";
import React from "react";
import { CustomSlider } from "./slider";


export const WhoIsThisFor = () => {
  return (
    <section id="who" className="bg-white py-8 md:py-14">
      <div  className="container mx-auto">
        <h4
          className={coolvetica.className + " text-3xl md:text-6xl text-center"}
        >
          Who is this for?
        </h4>
        <p className="text-lg md:text-2xl text-gray-500 mt-6 mb-8 text-center">
          You can sign up with us if you belong to any of these category of
          people
        </p>

        <CustomSlider />
      </div>
    </section>
  );
};
