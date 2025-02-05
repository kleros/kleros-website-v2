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
      className={clsx("block w-fit hover:brightness-[1.2]", className)}
    >
      <span className="text-center text-primary-blue md:text-lg">
        <span className="mr-4"> {text} </span>
        <Image
          src={LinkArrow}
          width="24"
          height="24"
          alt="Arrow link image"
          className="inline-block aspect-square w-4 md:w-6"
        />
      </span>
    </CustomLink>
  );
};
export default ExternalLink;
