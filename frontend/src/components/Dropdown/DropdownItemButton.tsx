import clsx from "clsx";

import { DropdownItem } from ".";

interface IDropdownItem {
  item: DropdownItem;
  value?: DropdownItem["value"];
  handleClick: (val: DropdownItem["value"]) => void;
}
const DropdownItemButton: React.FC<IDropdownItem> = ({
  item,
  value,
  handleClick,
}) => (
  <button
    className={clsx(
      "w-full rounded-lg text-left py-3 px-4",
      value === item.value
        ? "text-primary-blue bg-background-2"
        : "text-secondary-text",
      "hover:text-primary-blue hover:bg-background-2 cursor-pointer"
    )}
    onClick={() => handleClick(item.value)}
  >
    {item.key}
  </button>
);

export default DropdownItemButton;
