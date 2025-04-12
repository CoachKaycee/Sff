import React from "react";

interface MobileTabItemProps {
  title: string;
  packages: number;
  isActive: boolean;
  setActiveTab: (tab: number) => void;
}

export const MobileTabItem = (props: MobileTabItemProps) => {
  const { title, packages, isActive, setActiveTab } = props;
  return (
    <span
      className={`px-4 py-2 cursor-pointer text-lg font-medium rounded-full ${
        isActive
          ? "bg-primary/20 border border-primary text-primary backdrop-blur-md"
          : "bg-gray-100 text-gray-500 border"
      }`}
      onClick={() => setActiveTab(packages)}
    >
      {title}
    </span>
  );
};
