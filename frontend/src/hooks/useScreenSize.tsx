"use client";

import { useEffect, useState } from "react";

type ScreenSize = "sm" | "md" | "lg";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("sm");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setScreenSize("md");
      } else if (window.innerWidth >= 1024) {
        setScreenSize("lg");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenSize;
};
