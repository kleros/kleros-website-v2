import React from "react";

import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/Button";
import { ArrowLink } from "@/queries/navbar";

import CustomLink from "./CustomLink";

interface ILearnMore {
  title: string;
  button: ArrowLink;
  background: {
    url: string;
  };
  className?: string;
}

const LearnMore: React.FC<ILearnMore> = ({
  title,
  button,
  background,
  className,
}) => {
  return (
    <div
      className={clsx(
        "relative mt-16 flex w-full flex-col items-center justify-center p-8",
        className,
      )}
    >
      <h2 className="z-[1] mb-8 text-center text-lg text-primary-text lg:text-xl">
        {title}
      </h2>
      <CustomLink href={button.link.url} className="z-[1]">
        <Button>
          <span className="text-background-2">{button.text}</span>
        </Button>
      </CustomLink>
      <Image
        src={background.url}
        alt="Learn more Image Background"
        fill
        priority
        className="rounded-2xl object-cover"
      />
    </div>
  );
};
export default LearnMore;
