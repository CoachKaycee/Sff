import React from "react";

interface TabItemProps {
  title: string;
  packages: number;
  isActive: boolean;
  setActiveTab: (tab: number) => void;
}

export const TabItem = (props: TabItemProps) => {
  const { title, packages, isActive, setActiveTab } = props;
  return (
    <span
      className={`${
        isActive ? "text-tab-active" : "text-tab-inactive"
      } text-2xl font-semibold py-3 cursor-pointer hover:text-tab-active relative before:absolute before:content-[''] before:bottom-0 before:left-0 before:w-full before:h-[${
        isActive ? "4px" : "0"
      }] before:rounded-t-sm before:bg-tab-active before:transition-all before:duration-300 before:ease-in-out`}
      onClick={() => setActiveTab(packages)}
    >
      {isActive ? (
        <span className="absolute bottom-0 w-full h-1 bg-red-500 rounded-t-sm" />
      ) : null}
      {title}
    </span>
  );
};
