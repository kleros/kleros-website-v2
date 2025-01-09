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
    [callback]
  );

  return (
    <div role="tablist" className={`h-fit w-full flex ${className}`}>
      {items.map((item, i) => (
        <div
          role="tab"
          tabIndex={i}
          aria-selected={item.value === currentValue}
          key={item.text}
          className={clsx(
            "min-h-14",
            "hover:text-primary-blue hover:border-b-[3px] hover:border-b-primary-blue hover:cursor-pointer transition-all",
            "flex items-center justify-center flex-grow pb-6",
            "text-lg text-center font-medium",
            item.value === currentValue
              ? "text-primary-blue border-b-[3px] border-b-primary-blue"
              : "text-secondary-text border-b border-b-stroke"
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
