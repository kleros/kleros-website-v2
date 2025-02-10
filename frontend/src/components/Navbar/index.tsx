"use client";

import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useToggle } from "react-use";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import { NavbarQueryType } from "@/queries/navbar";

import DesktopNavigation from "./DesktopNavigation";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

interface INavbar {
  navbarData: NavbarQueryType;
}

const Navbar: React.FC<INavbar> = ({ navbarData }) => {
  const [menuOpen, toggleMenuOpen] = useToggle(false);
  const pathname = usePathname();

  const klerosLogo = navbarData?.klerosLogo;
  const navLinks = navbarData?.navbarNavlinksSection?.Navlink;
  const navbarButton = navbarData?.navbarButton;
  const resourceSections = navbarData?.navbarResourcesSection.Section;
  const appsSection = navbarData?.navbarAppsSection;
  const socials = navbarData?.socials;

  return (
    <header
      className={clsx(
        "fixed left-0 right-0 top-0 z-50 h-20 w-full min-w-80 bg-black/35",
        "backdrop-blur-md",
      )}
    >
      <div className="mx-auto h-full max-w-7xl px-2 md:px-16 xl:px-32">
        <div
          className={clsx(
            "flex h-full items-center justify-between",
            "text-base text-white",
          )}
        >
          <CustomLink
            href="/home"
            className="flex items-center"
            onClick={() => toggleMenuOpen(false)}
          >
            <Image
              alt="Kleros"
              src={klerosLogo?.logo_svg.url}
              width={184}
              height={48}
            />
          </CustomLink>

          <button
            className="ml-auto block text-white lg:hidden"
            onClick={toggleMenuOpen}
          >
            <HamburgerButton className="h-5 w-6" isOpen={menuOpen} />
          </button>

          <div className="hidden lg:flex">
            <DesktopNavigation
              {...{
                pathname,
                navLinks,
                resourceSections,
                appsSection,
                socials,
              }}
            />
          </div>

          <div className="hidden items-center lg:flex">
            <CustomLink href={navbarButton?.link.url}>
              <Button className="text-background-2">
                {navbarButton?.link.name}
              </Button>
            </CustomLink>
          </div>

          <AnimatePresence>
            {menuOpen ? (
              <motion.div
                className={clsx(
                  "fixed inset-0 top-20 z-40 h-[calc(100dvh-5rem)] bg-black/50",
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => toggleMenuOpen(false)}
              >
                <motion.div
                  className="absolute bottom-0 top-0"
                  initial={{ right: "-100%" }}
                  animate={{ right: 0 }}
                  exit={{ right: "-100%" }}
                >
                  <MobileMenu
                    {...{
                      pathname,
                      navLinks,
                      resourceSections,
                      appsSection,
                      socials,
                      navbarButton,
                    }}
                    className="h-full overflow-y-auto md:h-auto"
                    closeFn={() => toggleMenuOpen(false)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
