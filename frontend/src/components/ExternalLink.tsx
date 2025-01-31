import React, { HTMLAttributes } from "react";

import clsx from "clsx";
import Image from "next/image";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";

import CustomLink from "./CustomLink";

interface IExternalLink {
  text: string;
  url: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}
const ExternalLink: React.FC<IExternalLink> = ({ text, url, className }) => {
  return (
    <CustomLink
      href={url}
      className={clsx(
        "flex items-center gap-4 hover:brightness-[1.2]",
        className,
      )}
    >
      <span className="text-center text-primary-blue md:text-lg">{text}</span>
      <Image
        src={LinkArrow}
        width="24"
        height="24"
        alt="Arrow link image"
        className="inline aspect-square w-4 md:w-6"
      />
    </CustomLink>
  );
};
export default ExternalLink;
