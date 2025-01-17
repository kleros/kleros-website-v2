import React, { HTMLAttributes } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";

interface IExternalLink {
  text: string;
  url: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}
const ExternalLink: React.FC<IExternalLink> = ({ text, url, className }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "flex w-max items-center gap-4 hover:brightness-[1.2]",
        className,
      )}
    >
      <span className="text-center text-base text-primary-blue lg:text-lg">
        {text}
      </span>
      <Image
        src={LinkArrow}
        width="24"
        height="24"
        alt="Arrow link image"
        className="inline"
      />
    </Link>
  );
};
export default ExternalLink;
