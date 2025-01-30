"use client";

import { useState } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLockBodyScroll } from "react-use";

import HamburgerIcon from "@/assets/svgs/icons/hamburger.svg";
import Button from "@/components/Button";
import { NavbarQueryType } from "@/queries/navbar";
import { responsiveSize } from "@/styles/responsiveSize";

import CustomLink from "../CustomLink";

import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";

interface INavbar {
  navbarData: NavbarQueryType;
}

const Navbar: React.FC<INavbar> = ({ navbarData }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const klerosLogo = navbarData?.klerosLogo;
  const navLinks = navbarData?.navbarNavlinksSection?.Navlink;
  const navbarButton = navbarData?.navbarButton;
  const resourceSections = navbarData?.navbarResourcesSection.Section;
  const appsSection = navbarData?.navbarAppsSection;
  const socials = navbarData?.socials;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useLockBodyScroll(menuOpen);

  return (
    <header
      className={clsx(
        "fixed left-0 right-0 top-0 z-50 flex h-20 w-full",
        "items-center justify-between bg-black/35 px-2 py-2",
        "text-base text-white backdrop-blur-md",
      )}
      style={{
        paddingLeft: responsiveSize(24, 128, 1024, 1920),
        paddingRight: responsiveSize(24, 128, 1024, 1920),
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
        className="ml-auto block text-white lg:hidden"
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
          {...{ pathname, navLinks, resourceSections, appsSection, socials }}
        />
      </div>

      <div className="hidden items-center lg:flex">
        <CustomLink href={navbarButton?.link.url}>
          <Button className="text-background-2">
            {navbarButton?.link.name}
          </Button>
        </CustomLink>
      </div>

      {menuOpen && (
        <div
          className={"fixed inset-0 z-40 flex bg-black bg-opacity-50"}
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <MobileMenu
              {...{
                pathname,
                navLinks,
                resourceSections,
                appsSection,
                socials,
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
