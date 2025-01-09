import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useLockBodyScroll } from "react-use";

import DownArrowIcon from "@/assets/svgs/icons/down-arrow.svg";
import {
  AppsSection,
  NavLink,
  ResourceSection,
  Social,
} from "@/queries/navbar";

import AppsDropdownContent from "./AppsDropdownContent";
import ResourcesDropdownContent from "./ResourcesDropdownContent";

interface DesktopNavigationProps {
  pathname: string;
  navLinks: NavLink[];
  appsSection: AppsSection;
  resourceSections: ResourceSection[];
  socials: Social[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  pathname,
  navLinks,
  appsSection,
  resourceSections,
  socials,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  useLockBodyScroll(openDropdownIndex !== null);

  return (
    <div className="hidden md:flex flex-row gap-x-8 my-2 whitespace-nowrap">
      {navLinks?.map((navLink, index) => (
        <div
          key={navLink.path_name || navLink.title}
          className="relative text-base"
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
                className="flex items-center"
                onClick={() =>
                  setOpenDropdownIndex(
                    openDropdownIndex === index ? null : index
                  )
                }
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

              {openDropdownIndex === index && navLink.is_dropdown ? (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-slideInFromTop"
                  onClick={() => setOpenDropdownIndex(null)}
                >
                  <div
                    className="relative bg-background-2 mt-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {navLink?.title === "Apps" ? (
                      <AppsDropdownContent {...{ appsSection }} />
                    ) : null}
                    {navLink?.title === "Resources" ? (
                      <ResourcesDropdownContent
                        {...{ resourceSections, socials }}
                      />
                    ) : null}
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNavigation;
