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
      "w-full rounded-lg px-4 py-3 text-left",
      value === item.value
        ? "bg-background-2 text-primary-blue"
        : "text-secondary-text",
      "cursor-pointer hover:bg-background-2 hover:text-primary-blue",
    )}
    onClick={() => handleClick(item.value)}
  >
    {item.key}
  </button>
);

export default DropdownItemButton;
