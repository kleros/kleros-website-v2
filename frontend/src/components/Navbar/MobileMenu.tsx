"use client";

import { useState } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import DownArrowIcon from "@/assets/svgs/icons/down-arrow.svg";
import Button from "@/components/Button";
import {
  AppsSection,
  NavbarButton,
  NavLink,
  ResourceSection,
  Social,
} from "@/queries/navbar";

import CustomLink from "../CustomLink";

import AppsDropdownContent from "./AppsDropdownContent";
import ResourcesDropdownContent from "./ResourcesDropdownContent";

const menuContainerStyle = clsx(
  "z-50 fixed w-screen top-20 right-0 bg-background-2 p-6",
  "rounded-lg shadow-lg overflow-y-auto animate-slideInFromRight",
);

const linkStyle = clsx("text-white block");

interface MobileMenuProps {
  pathname: string;
  navLinks: NavLink[];
  appsSection: AppsSection;
  resourceSections: ResourceSection[];
  socials: Social[];
  navbarButton: NavbarButton;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  pathname,
  navLinks,
  appsSection,
  resourceSections,
  socials,
  navbarButton,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );

  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className={menuContainerStyle}>
      <nav className="flex flex-col gap-y-4">
        {navLinks?.map((navLink, index) => (
          <div key={navLink.path_name || navLink.title} className="relative">
            {!navLink.is_dropdown ? (
              <Link
                href={`/${navLink.path_name}`}
                className={clsx(
                  linkStyle,
                  pathname === `/${navLink.path_name}` && "font-bold",
                )}
              >
                {navLink.title}
              </Link>
            ) : (
              <>
                <button
                  className="flex items-center justify-between gap-2 text-white"
                  onClick={() => handleDropdownClick(index)}
                >
                  {navLink.title}
                  <Image
                    src={DownArrowIcon}
                    alt="Down Arrow"
                    width={12}
                    height={12}
                  />
                </button>
                <div
                  className={clsx(
                    "transition-accordionHeight h-auto overflow-y-auto",
                    openDropdownIndex === index && "accordionOpen",
                  )}
                >
                  {navLink?.title === "Apps" ? (
                    <AppsDropdownContent {...{ appsSection }} />
                  ) : navLink?.title === "Resources" ? (
                    <ResourcesDropdownContent
                      {...{ resourceSections, socials }}
                    />
                  ) : null}
                </div>
              </>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-6">
        <CustomLink href={navbarButton?.link.url}>
          <Button className="text-background-2">
            {navbarButton?.link.name}
          </Button>
        </CustomLink>
      </div>
    </div>
  );
};

export default MobileMenu;
