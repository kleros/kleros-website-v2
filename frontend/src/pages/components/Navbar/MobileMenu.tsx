import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import {
  NavbarButton,
  NavLink,
  ResourceSection,
  Solution,
} from "@/queries/navbar";
import DownArrowIcon from "@/assets/svgs/icons/down-arrow.svg";

import AppsDropdownContent from "./AppsDropdownContent";
import ResourcesDropdownContent from "./ResourcesDropdownContent";

interface MobileMenuProps {
  pathname: string;
  navLinks: NavLink[];
  solutions: Solution[];
  resourceSections: ResourceSection[];
  navbarButton: NavbarButton;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  pathname,
  navLinks,
  solutions,
  resourceSections,
  navbarButton,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="z-50 fixed w-[250px] top-[80px] right-0 bg-[#220050] p-6 rounded-lg shadow-lg overflow-y-auto">
      <nav className="flex flex-col gap-y-4">
        {navLinks?.map((navLink, index) => (
          <div key={navLink.path_name || navLink.title} className="relative">
            {!navLink.is_dropdown ? (
              <Link
                href={`/${navLink.path_name}`}
                className={`${
                  pathname === `/${navLink.path_name}` ? "font-bold" : ""
                } block text-white`}
              >
                {navLink.title}
              </Link>
            ) : (
              <>
                <button
                  className="flex items-center justify-between gap-[8px] text-white"
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
                {openDropdownIndex === index && navLink.is_dropdown ? (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end"
                    onClick={() => setOpenDropdownIndex(null)}
                  >
                    <div
                      className="relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {navLink?.title === "Apps" ? (
                        <AppsDropdownContent
                          solutions={solutions}
                        />
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
      </nav>

      <div className="mt-6">
        <a
          href={navbarButton?.link.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="w-[122px] px-4 py-2 bg-blue-500 text-white rounded-full">
            {navbarButton?.link.name}
          </button>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
