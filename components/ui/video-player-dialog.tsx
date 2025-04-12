import React from "react";
import { Dialog, DialogContent } from "./dialog";
import { CldVideoPlayer } from "next-cloudinary";
import Image from "next/image";

interface VideoPlayerDialogProp {
  open: boolean;
  onClose: VoidFunction;
  src: string;
  width?: string;
}

export const VideoPlayerDialog = (props: VideoPlayerDialogProp) => {
  const { open, onClose, src, width } = props;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-[${width || '1200'}px]`}>
        <div className="relative">
          <CldVideoPlayer id="sea-turtle-color" src={src} autoPlay={true} />

          <div className="absolute top-4 w-full">
            <div className="pt-4 px-6 pr-10 w-full flex items-center justify-between">
              <h5 className="uppercase font-bold text-white/50 text-sm md:text-md">
                STUDENT STORIES
              </h5>

              <Image
                src="/assets/images/logo-compact.svg"
                width={62}
                height={40}
                alt="logo compact"
                className=" opacity-30"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
