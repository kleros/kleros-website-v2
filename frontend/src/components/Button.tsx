import React from "react";

import clsx from "clsx";

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<IButton> = ({ children, onClick, className }) => (
  <button
    className={
      clsx(
        "bg-primary-blue py-2 px-8 rounded-full",
        "hover:bg-primary-blue/90 transition duration-75",
        className)}
    {...{ onClick }}
  >
    {children}
  </button>
);

export default Button;
