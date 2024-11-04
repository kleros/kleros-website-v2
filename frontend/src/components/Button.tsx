import React from "react";

import clsx from "clsx";

const baseStyle = clsx("px-8 py-2 rounded-full transition duration-75");

const primaryStyle = clsx(
  baseStyle,
  "bg-primary-blue",
  "hover:bg-primary-blue/90"
);

const secondaryStyle = clsx(
  baseStyle,
  "bg-transparent border-2 border-white",
  "hover:bg-white/10"
);


interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  className,
  variant = "primary"
}) => (
  <button
    className={
        clsx(variant === "primary" ? primaryStyle : secondaryStyle, className)
      }
    {...{ onClick }}
  >
    {children}
  </button>
);

export default Button;
