import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { NavLink } from "@/pages/queries";
import DownArrowIcon from "@/assets/svgs/icons/down-arrow.svg";

interface DesktopNavigationProps {
  pathname: string;
  navLinks: NavLink[];
}

const DesktopNavigation = ({ pathname, navLinks }: DesktopNavigationProps) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const handleDropdownClick = (index: number) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  return (
    <div className="hidden md:flex flex-row gap-x-[32px] my-2 whitespace-nowrap">
      {navLinks.map((navLink, index) => (
        <div key={navLink.path_name || navLink.title} className="relative">
          {!navLink.is_dropdown ? (
            <Link
              href={`/${navLink.path_name}`}
              className={`${
                pathname === `/${navLink.path_name}` ? "font-bold" : ""
              }`}
            >
              {navLink.title}
            </Link>
          ) : (
            <button
              className="flex items-center"
              onClick={() => handleDropdownClick(index)}
            >
              {navLink.title}
              <Image
                src={DownArrowIcon}
                alt="Down Arrow"
                width={12}
                height={12}
                className="ml-2"
              />
            </button>
          )}

          {openDropdownIndex === index && navLink.is_dropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded p-4">
              <p>content here</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNavigation;
