import { useEffect, useState } from "react";
import Image from "next/image";
import { responsiveSize } from "@/styles/responsiveSize";
import HamburgerIcon from "@/assets/svgs/icons/hamburger.svg";
import { NavbarQueryType } from "@/queries/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";
import clsx from "clsx";

export const buttonStyle = clsx(
  "px-4 py-2 bg-primary-blue text-background-1 rounded-full"
);

export const overlayStyle = clsx(
  "fixed inset-0 bg-black bg-opacity-50 z-40 flex"
);

const headerBaseStyle = clsx(
  "fixed top-0 left-0 right-0 z-50 h-20 w-full flex justify-between items-center text-white shadow-sm py-2 text-base"
);

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
  const resourceSections = navbarData?.navbarResourcesSection.Section;
  const appsSection = navbarData?.navbarAppsSection;
  const socials = navbarData?.socials;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={clsx(
        headerBaseStyle,
        isScrolled ? "bg-background-2" : "bg-transparent"
      )}
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
          {...{ pathname, navLinks, resourceSections, appsSection, socials }}
        />
      </div>

      <div className="hidden lg:flex items-center">
        <a
          href={navbarButton?.link.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className={clsx(buttonStyle, "w-32")}>
            {navbarButton?.link.name}
          </button>
        </a>
      </div>

      {menuOpen && (
        <div className={overlayStyle} onClick={() => setMenuOpen(false)}>
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
