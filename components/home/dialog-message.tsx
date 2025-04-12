"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { coolvetica } from "@/app/fonts";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import Image from "next/image";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  number: z.string(),
});

interface CurrencyDialog {
  currency: string;
}

export const DialogMessage = (props: CurrencyDialog) => {
  const [open, setOpen] = useState(false);
  const [idleTime, setIdleTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const idleLimit = 90;

  const { currency } = props;

  // Function to reset idle time
  const resetIdleTime = () => {
    setIdleTime(0);
  };

  // Function to show the modal after being idle
  useEffect(() => {
    if (localStorage.getItem("dialogOpened") === "true") return;
    const handleActivity = () => resetIdleTime();

    // Add event listeners for user activity
    window.addEventListener("keypress", handleActivity);

    const idleInterval = setInterval(() => {
      setIdleTime((prevTime) => prevTime + 1);
    }, 1000); // Increment idle time every second

    // If idle time exceeds the limit, open the modal
    if (idleTime >= idleLimit) {
      setOpen(true);
    }

    // Cleanup function to remove event listeners and clear the interval
    return () => {
      window.removeEventListener("keypress", handleActivity);
      clearInterval(idleInterval);
    };
  }, [idleTime]);

  // Function to close the modal
  const closeModal = () => {
    setOpen(false);
    resetIdleTime();
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(false);
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/sitevisitor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
          }),
        }
      );
    } catch (e) {
      console.log("error", JSON.stringify(e))
    } finally {
      const text = currency === 'NGN' ? 'Send%20my%20free%20ebook%20now' : 'send%20my%20free%20gift%20now';
      window.open(
        `https://wa.me/9075555748?text=${text}`,
        "_blank"
      );
      localStorage.setItem("dialogOpened", "true");
      closeModal();
    }

  }

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-sm max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle
            className={coolvetica.className + " text-3xl text-center"}
          >
            Master French Verb Conjugations in{" "}
            <span className="text-primary">24 Hours</span>
          </DialogTitle>
          <DialogDescription className="text-lg pt-2 text-center">
            Get this free ebook and kick-start your journey to French language
            fluency like a pro!
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 items-center justify-center">
          <div>
            <Image
              width={333}
              height={250}
              alt="cover book"
              src="/assets/images/cover-book.png"
            />
          </div>
          <div className="w-[280px] mx-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="w-full"
                  size="lg"
                  disabled={!form.formState.isValid}
                  type="submit"
                >
                  {loading && <Loader2 className={`mr-4 h-4 w-4 animate-spin`} />}
                  Send my copy now!
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
