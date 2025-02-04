"use client";

import { useCallback, useState } from "react";

import clsx from "clsx";

type TabItem = {
  text: string;
  children: React.ReactNode;
};

interface ITab {
  items: TabItem[];
  className?: string;
}

const Tab = ({ items, className }: ITab) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, value: number) => {
      if (event.key === "Enter" || event.key === " ") {
        setActiveTab(value);
      }
    },
    [],
  );

  return (
    <>
      <div role="tablist" className={`flex h-fit w-full ${className}`}>
        {items.map((item, i) => (
          <div
            role="tab"
            tabIndex={i + 1}
            aria-selected={i === activeTab}
            key={item.text}
            className={clsx(
              "min-h-14",
              "transition-all hover:cursor-pointer hover:border-b-[3px] hover:border-b-primary-blue hover:text-primary-blue",
              "flex flex-grow items-center justify-center pb-6",
              "text-center font-medium lg:text-lg",
              i === activeTab
                ? "border-b-[3px] border-b-primary-blue text-primary-blue"
                : "border-b border-b-stroke text-secondary-text",
            )}
            onClick={() => setActiveTab(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          >
            {item.text}
          </div>
        ))}
      </div>
      {items[activeTab].children}
    </>
  );
};

export default Tab;
