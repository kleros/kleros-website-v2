import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { responsiveSize } from "@/styles/responsiveSize";
import HamburgerIcon from "@/assets/svgs/icons/hamburger.svg";
import { NavbarQueryType } from "@/queries/navbar";

import Link from "next/link";
import { usePathname } from "next/navigation";

import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";

interface INavbar {
  navbarData: NavbarQueryType;
}

const Navbar: React.FC<INavbar> = ({ navbarData }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const klerosLogo = navbarData?.klerosLogo;
  const navLinks = navbarData?.navbarNavlinksSection?.Navlink;
  const navbarButton = navbarData?.navbarButton;
  const resourceSections = navbarData?.navbarResourcesSection?.Section;
  const solutions = navbarData?.solutions;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className="min-h-[80px] pt-[8px] pb-[8px] w-full flex justify-between items-center text-white text-[18px] bg-transparent shadow-sm relative"
      style={{
        paddingLeft: responsiveSize(24, 256, 1024, 1920),
        paddingRight: responsiveSize(24, 256, 1024, 1920),
      }}
    >
      <Link href="/" className="flex items-center">
        <Image
          alt="Kleros"
          src={klerosLogo.logo_svg.url}
          width={184}
          height={48}
        />
      </Link>

      <button
        className="block lg:hidden ml-auto text-white"
        onClick={toggleMenu}
      >
        <Image
          src={HamburgerIcon}
          alt="Hamburger Icon"
          width={24}
          height={24}
        />
      </button>

      <div className="hidden lg:flex">
        <DesktopNavigation
          {...{ pathname, navLinks, solutions, resourceSections }}
        />
      </div>

      <div className="hidden lg:flex items-center">
        <a
          href={navbarButton?.link.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="w-[122px] px-4 py-2 bg-blue-500 rounded-full">
            {navbarButton?.link.name}
          </button>
        </a>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
          <div ref={menuRef}>
            <MobileMenu
              {...{
                pathname,
                navLinks,
                solutions,
                resourceSections,
                navbarButton,
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
