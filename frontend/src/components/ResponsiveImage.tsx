"use client";
import Image from "next/image";

import { useScreenSize } from "@/hooks/useScreenSize";

interface IResponsiveImage {
  mobileProps: React.ComponentProps<typeof Image>;
  desktopProps: React.ComponentProps<typeof Image>;
}

const ResponsiveImage: React.FC<IResponsiveImage> = ({
  mobileProps,
  desktopProps,
}) => {
  const screenSize = useScreenSize();
  return screenSize === "lg" ? (
    <Image {...desktopProps} />
  ) : (
    <Image {...mobileProps} />
  );
};

export default ResponsiveImage;
