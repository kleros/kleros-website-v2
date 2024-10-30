import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Image from "next/image";

import { NavLink, ResourceSection, Solution } from "@/queries/navbar";
import DownArrowIcon from "@/assets/svgs/icons/down-arrow.svg";

import AppsDropdownContent from "./AppsDropdownContent";
import ResourcesDropdownContent from "./ResourcesDropdownContent";

interface DesktopNavigationProps {
  pathname: string;
  navLinks: NavLink[];
  solutions: Solution[];
  resourceSections: ResourceSection[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  pathname,
  navLinks,
  solutions,
  resourceSections,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      openDropdownIndex !== null &&
      dropdownRefs.current[openDropdownIndex] &&
      buttonRefs.current[openDropdownIndex]
    ) {
      const dropdownElement = dropdownRefs.current[openDropdownIndex];
      const buttonElement = buttonRefs.current[openDropdownIndex];

      if (
        dropdownElement &&
        !dropdownElement.contains(event.target as Node) &&
        buttonElement &&
        !buttonElement.contains(event.target as Node)
      ) {
        setOpenDropdownIndex(null);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownIndex]);

  return (
    <div className="hidden md:flex flex-row gap-x-[32px] my-2 whitespace-nowrap">
      {navLinks?.map((navLink, index) => (
        <div
          key={navLink.path_name || navLink.title}
          className="relative"
          ref={(el) => {
            dropdownRefs.current[index] = el;
          }}
        >
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
            <>
              <button
                ref={(el) => {
                  buttonRefs.current[index] = el;
                }}
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

              {openDropdownIndex === index && navLink.is_dropdown && (
                <>
                  {navLink.title === "Apps" && (
                    <AppsDropdownContent {...{ solutions }} />
                  )}
                  {navLink.title === "Resources" && (
                    <ResourcesDropdownContent {...{ resourceSections }} />
                  )}
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNavigation;
