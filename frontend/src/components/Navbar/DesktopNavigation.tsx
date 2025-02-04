"use client";

import { useState } from "react";

import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
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
              onClick={() => setOpenDropdownIndex(null)}
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

              <AnimatePresence>
                {openDropdownIndex === index && navLink.is_dropdown ? (
                  <motion.div
                    className={clsx(
                      "fixed inset-0 top-20 z-40 h-[calc(100dvh-5rem)]",
                      "bg-black/50",
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpenDropdownIndex(null)}
                  >
                    <motion.div
                      className={clsx(
                        "absolute top-0 max-h-full w-full overflow-y-auto",
                        "bg-background-2",
                      )}
                      initial={{ translateY: "-5%" }}
                      animate={{ translateY: 0 }}
                      exit={{ translateY: "-5%" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {navLink?.title === "Apps" ? (
                        <AppsDropdownContent
                          className="px-6 py-12"
                          {...{ appsSection }}
                          closeFn={() => setOpenDropdownIndex(null)}
                        />
                      ) : null}
                      {navLink?.title === "Resources" ? (
                        <ResourcesDropdownContent
                          {...{ resourceSections, socials }}
                          closeFn={() => setOpenDropdownIndex(null)}
                        />
                      ) : null}
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DesktopNavigation;
