import Image from "next/image";
import React from "react";

interface ApproachCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

export const ApproachCard = (props: ApproachCardProps) => {
  const { imgUrl, title, description } = props;
  return (
    <div className="w-full rounded-md bg-approach border-2 border-approach-border p-6">
      <Image src={imgUrl} alt={title} width={40} height={40} />
      <h4 className="text-2xl text-text pt-6 pb-4">{title}</h4>
      <p className=" text-md text-text-gray">{description}</p>
    </div>
  );
};
