import React, { HTMLAttributes } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";

interface IExternalLink {
  text: string;
  url: string;
  className?: HTMLAttributes<HTMLDivElement>["className"]
}
const ExternalLink: React.FC<IExternalLink> = ({ text, url, className }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "flex gap-4 items-center hover:brightness-[1.2]",
        className
      )}
    >
      <span className="text-lg text-primary-blue text-center">{text}</span>
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
