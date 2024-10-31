import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const klerosLogo = navbarData?.klerosLogo;
  const navLinks = navbarData?.navbarNavlinksSection?.Navlink;
  const navbarButton = navbarData?.navbarButton;
  const resourceSections = navbarData?.navbarResourcesSection?.Section;
  const solutions = navbarData?.solutions;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop >= 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] pt-[8px] pb-[8px] w-full flex justify-between items-center text-white text-[18px] shadow-sm ${
        isScrolled ? "bg-[#220050]" : "bg-transparent"
      }`}
      style={{
        paddingLeft: responsiveSize(24, 256, 1024, 1920),
        paddingRight: responsiveSize(24, 256, 1024, 1920),
      }}
    >
      <Link href="/" className="flex items-center">
        <Image
          alt="Kleros"
          src={klerosLogo?.logo_svg.url}
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
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
