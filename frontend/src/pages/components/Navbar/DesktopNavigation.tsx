import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (openDropdownIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openDropdownIndex]);

  return (
    <div className="hidden md:flex flex-row gap-x-[32px] my-2 whitespace-nowrap">
      {navLinks?.map((navLink, index) => (
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
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setOpenDropdownIndex(null)}
                >
                  <div
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {navLink?.title === "Apps" ? (
                      <AppsDropdownContent solutions={solutions} />
                    ) : null}
                    {navLink?.title === "Resources" ? (
                      <ResourcesDropdownContent
                        resourceSections={resourceSections}
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
