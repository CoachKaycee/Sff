"use client";
import React, { useState } from "react";
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
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
});

interface DialogMessageProps {
    open: boolean;
    onClose: VoidFunction;
  }

export const WaitingListDialog = (props: DialogMessageProps) => {
  const [loading, setLoading] = useState(false);

  const {open, onClose } = props;

  // Function to close the modal
  const closeModal = () => {
    onClose();
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(false);
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/kid`,
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
            Join Waiting List
          </DialogTitle>
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
                  size="lg"
                  disabled={!form.formState.isValid}
                  type="submit"
                >
                  {loading && <Loader2 className={`mr-4 h-4 w-4 animate-spin`} />}
                  Continue
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
