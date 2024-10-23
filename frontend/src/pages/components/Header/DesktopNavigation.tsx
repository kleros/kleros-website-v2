import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { NavLink } from "@/pages/queries";
import DownArrowIcon from "@/assets/svgs/icons/down-arrow.svg";

import AppsDropdownContent from "./AppsDropdownContent";
import ResourcesDropdownContent from "./ResourcesDropdownContent";

interface DesktopNavigationProps {
  pathname: string;
  navLinks: NavLink[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  pathname,
  navLinks,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
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
            <>
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

              {openDropdownIndex === index && navLink.is_dropdown && (
                <>
                  {navLink?.solutions && navLink?.solutions.length > 0 && (
                    <AppsDropdownContent solutions={navLink.solutions} />
                  )}

                  {navLink?.resource_sections &&
                  navLink?.resource_sections.length > 0 ? (
                    <ResourcesDropdownContent
                      resourceSections={navLink.resource_sections}
                    />
                  ) : null}
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
