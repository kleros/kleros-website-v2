"use client";

import React from "react";

import clsx from "clsx";
import { motion, Variants } from "motion/react";

interface IHamburgerButton {
  className?: string;
  isOpen: boolean;
}

const variants: Variants = {
  topClose: {
    top: [null, "50%", "50%"],
    translateY: [null, "-50%", "-50%"],
    rotate: [null, 0, "45deg"],
    transition: { duration: 0.3 },
  },
  botClose: {
    bottom: [null, "50%", "50%"],
    translateY: [null, "50%", "50%"],
    rotate: [null, 0, "-45deg"],
    transition: { duration: 0.3 },
  },
  topOpen: {
    top: ["50%", "50%", 0],
    translateY: ["-50%", 0, 0],
    rotate: ["45deg", "0deg", "0deg"],
    transition: { duration: 0.3 },
  },
  midOpen: {
    bottom: ["50%", "50%", "50%"],
    translateY: ["50%", "50%", "50%"],
    rotate: ["-45deg", "0deg", "0deg"],
    transition: { duration: 0.3 },
  },
  botOpen: {
    bottom: ["50%", "50%", 0],
    translateY: ["50%", 0, 0],
    rotate: ["-45deg", "0deg", "0deg"],
    transition: { duration: 0.3 },
  },
};

const HamburgerButton: React.FC<IHamburgerButton> = ({ className, isOpen }) => {
  return (
    <div className={clsx("relative", className)}>
      <motion.div
        {...{ variants }}
        animate={isOpen ? "topClose" : "topOpen"}
        initial={false}
        className={clsx("absolute h-1 w-full bg-white transition")}
      />
      <motion.div
        {...{ variants }}
        animate={isOpen ? "botClose" : "midOpen"}
        initial={false}
        className={clsx("absolute h-1 w-full bg-white transition")}
      />
      <motion.div
        {...{ variants }}
        animate={isOpen ? "botClose" : "botOpen"}
        initial={false}
        className={clsx("absolute h-1 w-full bg-white transition")}
      />
    </div>
  );
};

export default HamburgerButton;
