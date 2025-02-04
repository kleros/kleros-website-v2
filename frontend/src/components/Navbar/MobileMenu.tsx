"use client";

import { useState } from "react";

import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

import DownArrowIcon from "@/assets/svgs/icons/down-arrow.svg";
import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import {
  AppsSection,
  NavbarButton,
  NavLink,
  ResourceSection,
  Social,
} from "@/queries/navbar";

import AppsDropdownContent from "./AppsDropdownContent";
import ResourcesDropdownContent from "./ResourcesDropdownContent";

interface IMobileMenu {
  pathname: string;
  navLinks: NavLink[];
  appsSection: AppsSection;
  resourceSections: ResourceSection[];
  socials: Social[];
  navbarButton: NavbarButton;
  closeFn: () => void;
  className?: string;
}

const MobileMenu: React.FC<IMobileMenu> = ({
  pathname,
  navLinks,
  appsSection,
  resourceSections,
  socials,
  navbarButton,
  closeFn,
  className,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );

  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div
      className={clsx(
        className,
        "z-50 w-screen overflow-y-auto rounded-b-lg",
        "bg-background-2 p-6 shadow-lg",
      )}
    >
      <nav className="flex flex-col gap-y-4">
        {navLinks?.map((navLink, index) => (
          <div key={navLink.path_name || navLink.title} className="relative">
            {!navLink.is_dropdown ? (
              <CustomLink
                href={`/${navLink.path_name}`}
                className={clsx(
                  "block text-white",
                  pathname === `/${navLink.path_name}` && "font-bold",
                )}
                onClick={closeFn}
              >
                {navLink.title}
              </CustomLink>
            ) : (
              <>
                <button
                  className="flex items-center justify-between gap-2 text-white"
                  onClick={() => handleDropdownClick(index)}
                >
                  {navLink.title}
                  <Image
                    className={clsx("transition", {
                      "rotate-180": openDropdownIndex === index,
                    })}
                    src={DownArrowIcon}
                    alt="Down Arrow"
                    width={12}
                    height={12}
                  />
                </button>
                <AnimatePresence>
                  {openDropdownIndex === index ? (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="mt-2 max-h-[30dvh] overflow-y-scroll pl-2 pr-4"
                    >
                      {navLink?.title === "Apps" ? (
                        <AppsDropdownContent
                          {...{ appsSection, closeFn }}
                          className="mt-2"
                        />
                      ) : navLink?.title === "Resources" ? (
                        <ResourcesDropdownContent
                          {...{ resourceSections, socials, closeFn }}
                        />
                      ) : null}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
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
