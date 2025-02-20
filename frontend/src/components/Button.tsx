import React from "react";

import clsx from "clsx";

const primaryStyle = clsx(
  "bg-primary-blue",
  "hover:bg-primary-blue/90",
  "disabled:bg-stroke",
);

const secondaryStyle = clsx(
  "bg-transparent border-2 border-white text-primary-text",
  "hover:bg-primary-blue hover:border-primary-blue hover:text-background-2",
);

const tertiaryStyle = clsx(
  "bg-transparent border-2 border-white",
  "hover:bg-white/10",
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
      "rounded-full px-8 py-2 transition duration-75",
      variant === "primary" && primaryStyle,
      variant === "secondary" && secondaryStyle,
      variant === "tertiary" && tertiaryStyle,
      className,
    )}
    {...{ onClick, ...props }}
  >
    {children}
  </button>
);

export default Button;
