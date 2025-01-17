import { useCallback, useMemo, useRef } from "react";

import clsx from "clsx";
import Image from "next/image";
import { useToggle, useClickAway } from "react-use";

import DownArrowIcon from "@/assets/svgs/icons/down-arrow-blue.svg";

import DropdownItemButton from "./DropdownItemButton";

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
  const [isOpen, toggleDropdown] = useToggle(false);

  const keyFromValue = useMemo(
    () => items.find((item) => item.value === value)?.key ?? "Select",
    [items, value],
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickAway(dropdownRef, () => {
    toggleDropdown(false);
  });

  const handleClick = useCallback(
    (value: DropdownItem["value"]) => {
      onChange(value);
      toggleDropdown();
    },
    [toggleDropdown, onChange],
  );

  return (
    <div className="relative h-fit" ref={dropdownRef}>
      <button
        className="flex flex-row items-center gap-2"
        onClick={toggleDropdown}
      >
        <span className="text-lg text-primary-blue">{keyFromValue}</span>
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
          "absolute z-10 mt-2 rounded-2xl border border-stroke bg-background-1",
          "flex max-h-[300px] w-[200px] flex-col gap-4 overflow-scroll p-[10px] md:w-[348px]",
          isOpen ? "visible" : "hidden",
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
