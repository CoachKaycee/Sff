import { coolvetica } from "@/app/fonts";
import React from "react";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs } from "@/contants";
import Link from "next/link";

export const Faq = () => {
  return (
    <section id="faqs" className="bg-white py-8 md:py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 justify-between">
          <div className="w-full max-w-[560px]">
            <h4
              className={
                coolvetica.className +
                " text-3xl md:text-6xl text-center md:text-left"
              }
            >
              Frequently <span className="text-primary">Asked</span> Questions
            </h4>
            <p className="hidden md:block text-2xl text-text mt-6 mb-8">
              We know you’ve got one or two questions. Check our response to
              some of the common questions we have been asked before. If you
              have other questions that we have not addressed here, kindly send
              us a mail.
            </p>

            <Link
              className="text-md text-text-gray font-medium"
              href="https://wa.me/9075555748"
            >
              <Button
                className="hidden md:inline-flex"
                variant="outline"
                size="lg"
              >
                Contact Us
                <MoveUpRight className="ml-2" width={12} height={12} />
              </Button>
            </Link>
          </div>

          <div>
            <Accordion type="single" defaultValue={faqs[0].title} collapsible>
              {faqs?.map(({ title, description }) => (
                <AccordionItem key={title} value={title}>
                  <AccordionTrigger className="text-md text-left">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="font-light text-[1rem]">
                    {description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <p className="block md:hidden text-md text-text mb-8">
              We know you’ve got one or two questions. Check our response to
              some of the common questions we have been asked before. If you
              have other questions that we have not addressed here, kindly send
              us a mail.
            </p>

            <Link
              className="text-md text-text-gray font-medium"
              href="https://wa.me/9075555748"
            >
              <Button
                className=" inline-flex md:hidden"
                variant="outline"
                size="lg"
              >
                Contact Us
                <MoveUpRight className="ml-2" width={12} height={12} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
