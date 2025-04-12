import { WhoIsThisFor } from "@/components/home";
import { About } from "@/components/home/about";
import { Approach } from "@/components/home/approach";
import { Cta } from "@/components/home/cta";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { LearningWrapper } from "@/components/home/learning-wrapper";
import { MarqueeWrapper } from "@/components/home/marquee-wrapper";
import { SFFFOrKids } from "@/components/home/sff-for-children";
import { StillDoubting } from "@/components/home/still-doubting";
import { Testimonial } from "@/components/home/testimonial";
import "next-cloudinary/dist/cld-video-player.css";

export default async function Home() {
  return (
    <main>
      <Hero />
      <MarqueeWrapper />
      <Approach />
      <About />
      <Testimonial />
      <LearningWrapper />
      <WhoIsThisFor />
      <StillDoubting />
      <SFFFOrKids />
      <Faq />
      <Cta />
    </main>
  );
}
