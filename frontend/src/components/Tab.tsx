"use client";

import { useCallback } from "react";

import clsx from "clsx";

type TabItem<T> = {
  text: string;
  value: T;
};

interface ITab<T> {
  items: TabItem<T>[];
  currentValue: T;
  callback: (value: T) => void;
  className?: string;
}

const Tab = <T,>({ items, currentValue, callback, className }: ITab<T>) => {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, value: T) => {
      if (event.key === "Enter" || event.key === " ") {
        callback(value);
      }
    },
    [callback],
  );

  return (
    <div role="tablist" className={`flex h-fit w-full ${className}`}>
      {items.map((item, i) => (
        <div
          role="tab"
          tabIndex={i + 1}
          aria-selected={item.value === currentValue}
          key={item.text}
          className={clsx(
            "min-h-14",
            "transition-all hover:cursor-pointer hover:border-b-[3px] hover:border-b-primary-blue hover:text-primary-blue",
            "flex flex-grow items-center justify-center pb-6",
            "text-center text-lg font-medium",
            item.value === currentValue
              ? "border-b-[3px] border-b-primary-blue text-primary-blue"
              : "border-b border-b-stroke text-secondary-text",
          )}
          onClick={() => callback(item.value)}
          onKeyDown={(e) => handleKeyDown(e, item.value)}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default Tab;
