import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import { CooperativeLearnMoreSection } from "@/queries/cooperative/member-section";

const LearnMore: React.FC<CooperativeLearnMoreSection> = ({
  title,
  button,
  background,
}) => {
  return (
    <div className={
      "relative w-full flex flex-col items-center justify-center mt-16 p-8"
    }>
      <h2 className="text-primary-text text-xl mb-8 z-[1]">{title}</h2>
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
        className="object-cover rounded-2xl"
      />
    </div>
  );
};
export default LearnMore;
