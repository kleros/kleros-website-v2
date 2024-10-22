import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { NavLink } from "@/pages/queries";
import DownArrowIcon from "@/assets/svgs/icons/down-arrow.svg";
import { HeaderButton } from "@/pages/queries";

interface MobileMenuProps {
  pathname: string;
  navLinks: NavLink[];
  headerButton: HeaderButton;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  pathname,
  navLinks,
  headerButton,
}) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="fixed w-[200px] top-20 right-0 bg-black p-6 rounded-lg shadow-lg z-50">
      <nav className="flex flex-col gap-y-4">
        {navLinks.map((navLink, index) => (
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
                {openDropdownIndex === index && navLink.is_dropdown && (
                  <div className="mt-2 pl-4">content goes here</div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-6">
        <a href={headerButton.url} rel="noopener noreferrer" target="_blank">
          <button className="w-[122px] px-4 py-2 bg-blue-500 text-white rounded-full">
            {headerButton.name}
          </button>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
