import DownArrowIcon from "@/assets/svgs/icons/down-arrow-blue.svg";

import clsx from "clsx";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import DropdownItemButton from "./DropdownItemButton";

const dropwdownContainerBaseStyle = clsx(
  "absolute bg-background-1 z-10 mt-2 rounded-2xl border border-stroke"
);
const dropdownContainerContentStyle = clsx(
  "flex flex-col gap-4 p-[10px] overflow-scroll w-[200px] md:w-[348px]"
);

export type DropdownItem = {
  key: string | number;
  value: string | number;
};

interface IDropwdownProps {
  items: DropdownItem[];
  value?: DropdownItem["value"];
  onChange: (value: DropdownItem["value"]) => void;
}

const Dropdown: React.FC<IDropwdownProps> = ({ items, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const keyFromValue = useMemo(
    () => items.find((item) => item.value === value)?.key ?? "Select",
    [items, value]
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = useCallback(
    (value: DropdownItem["value"]) => {
      onChange(value);
      toggleDropdown();
    },
    [toggleDropdown, onChange]
  );

  return (
    <div className="relative h-fit" ref={dropdownRef}>
      <button
        className="flex flex-row gap-2 items-center"
        onClick={toggleDropdown}
      >
        <span className="text-primary-blue text-lg">{keyFromValue}</span>
        <Image
          src={DownArrowIcon}
          alt="Down Arrow"
          width={16}
          height={16}
          className="ml-1 fill-primary-blue"
        />
      </button>
      <div
        className={clsx(
          dropwdownContainerBaseStyle,
          dropdownContainerContentStyle,
          isOpen ? "visible" : "hidden"
        )}
      >
        {items.map((item) => (
          <DropdownItemButton
            key={item.key}
            {...{ item, value, handleClick }}
          />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
