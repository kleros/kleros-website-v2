"use client";

import React from "react";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

interface IOverlayScrollbarBody extends React.ComponentProps<"body"> {
  children: React.ReactNode;
}

const OverlayScrollbarBody: React.FC<IOverlayScrollbarBody> = ({
  children,
  className,
}) => (
  <OverlayScrollbarsComponent
    element="body"
    {...{ className }}
    defer
    data-overlayscrollbars-initialize
    options={{
      scrollbars: { autoHide: "move" },
      overflow: { y: "visible" },
    }}
  >
    {children}
  </OverlayScrollbarsComponent>
);

export default OverlayScrollbarBody;
