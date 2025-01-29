import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import { ArrowLink } from "@/queries/navbar";

interface ILearnMore {
  title: string;
  button: ArrowLink;
  background: {
    url: string;
  };
}

const LearnMore: React.FC<ILearnMore> = ({ title, button, background }) => {
  return (
    <div
      className={
        "relative mt-16 flex w-full flex-col items-center justify-center p-8"
      }
    >
      <h2 className="z-[1] mb-8 text-center text-lg text-primary-text lg:text-xl">
        {title}
      </h2>
      <Link
        href={button.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="z-[1]"
      >
        <Button>
          <span className="text-background-2">{button.text}</span>
        </Button>
      </Link>
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
