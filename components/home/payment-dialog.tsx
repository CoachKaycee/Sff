"use client";
import React, { useState } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { coolvetica } from "@/app/fonts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { formatCurrency } from "./package-card";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  number: z.string(),
});

interface PaymentDialog {
  open: boolean;
  onClose: VoidFunction;
}

export const PaymentDialog = (props: PaymentDialog) => {
  const { open, onClose } = props;

  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const productId = searchParams.get("id");
  const amount = searchParams.get("amount");
  const currency = searchParams.get("currency");
  const plan = searchParams.get("plan");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const productsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customer: {
              name: values.name,
              email: values.email,
              phonenumber: values.number,
            },
            productId: productId,
            amount: Number(amount),
          }),
        }
      );

      const { responseObject } = await productsResponse.json();

      if (responseObject?.checkoutLink) {
        window.open(responseObject?.checkoutLink, "_blank");
      }
    } catch (e) {
      console.log("error", JSON.stringify(e));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle
            className={coolvetica.className + " text-3xl text-center"}
          >
            Make Payment
          </DialogTitle>
          <DialogDescription className="text-lg pt-2 text-center">
            Proceed with{" "}
            <span className={coolvetica.className + " text-gray-800"}>
              {plan}
            </span>{" "}
            by paying{" "}
            <span className={coolvetica.className + " text-gray-800"}>
              {formatCurrency(Number(amount), currency || '', {
                showCurrency: true,
              })}
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 items-center justify-center">
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
                  disabled={!form.formState.isValid || isLoading}
                  type="submit"
                  size="lg"
                >
                  {isLoading && (
                    <Loader2 className={`mr-4 h-4 w-4 animate-spin`} />
                  )}
                  Continue Payment
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
