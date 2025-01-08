import React from "react";

import clsx from "clsx";

const baseStyle = clsx("px-8 py-2 rounded-full transition duration-75");

const primaryStyle = clsx(
  baseStyle,
  "bg-primary-blue",
  "hover:bg-primary-blue/90",
  "disabled:bg-stroke"
);

const secondaryStyle = clsx(
  baseStyle,
  "bg-transparent border-2 border-white",
  "hover:bg-primary-blue hover:border-primary-blue hover:text-background-2"
);

const tertiaryStyle = clsx(
  baseStyle,
  "bg-transparent border-2 border-white",
  "hover:bg-white/10"
);


interface IButton extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  className,
  variant = "primary",
  ...props
}) => (
  <button
    className={clsx(
      variant === "primary" && primaryStyle,
      variant === "secondary" && secondaryStyle,
      variant === "tertiary" && tertiaryStyle,
      className
    )}
    {...{ onClick, ...props }}
  >
    {children}
  </button>
);

export default Button;
