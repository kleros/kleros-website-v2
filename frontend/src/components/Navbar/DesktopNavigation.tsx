"use client";

import { useState } from "react";

import clsx from "clsx";
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
    null,
  );

  useLockBodyScroll(openDropdownIndex !== null);

  return (
    <div className="my-2 hidden flex-row gap-x-8 whitespace-nowrap md:flex">
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
                    openDropdownIndex === index ? null : index,
                  )
                }
              >
                {navLink.title}
                <Image
                  src={DownArrowIcon}
                  alt="Down Arrow"
                  width={12}
                  height={12}
                  className={clsx("ml-2 transition", {
                    "rotate-180": openDropdownIndex === index,
                  })}
                />
              </button>

              {openDropdownIndex === index && navLink.is_dropdown ? (
                <div
                  className="fixed inset-0 z-40 h-dvh bg-black bg-opacity-50"
                  onClick={() => setOpenDropdownIndex(null)}
                >
                  <div
                    className={
                      "animate-slideInFromTop relative mt-20 bg-background-2"
                    }
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
