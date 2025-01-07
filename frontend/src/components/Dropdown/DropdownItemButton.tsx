import clsx from "clsx";
import { DropdownItem } from ".";

const dropwdownItemBaseStyle = clsx(
  "w-full rounded-lg text-secondary-text text-left py-3 px-4"
);
const selectedStyle = clsx("!text-primary-blue bg-background-2");
const dropdownItemHoverStyle = clsx(
  "hover:text-primary-blue hover:bg-background-2 cursor-pointer"
);

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
      dropwdownItemBaseStyle,
      dropdownItemHoverStyle,
      value === item.value ? selectedStyle : ""
    )}
    onClick={() => handleClick(item.value)}
  >
    {item.key}
  </button>
);

export default DropdownItemButton;
