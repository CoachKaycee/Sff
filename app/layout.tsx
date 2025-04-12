import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { sourceSansPro } from "./fonts";
import { Footer } from "@/components/layout/footer";
import { MobileFooter } from "@/components/layout/mobile-footer";

export const metadata: Metadata = {
  title: "Speak fluent French in 3 months or get your money back!",
  description:
    "Our unique learning approach guarantees you fluency in French within a period of three months, or we will refund you 100% with an apology. Yes, we are that confident!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSansPro.className + " w-[100vw] overflow-x-hidden"}>
        <Header />
        {children}
        <Footer />
        <MobileFooter />
      </body>
    </html>
  );
}
