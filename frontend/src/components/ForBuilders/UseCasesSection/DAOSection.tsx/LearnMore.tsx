import React from "react";

import Link from "next/link";
import Image from "next/image";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface ILearnMore {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const LearnMore: React.FC<ILearnMore> = ({ useCasesData }) => {
  return (
    <Link
      href={useCasesData.arrowLink.link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-16 text-center"
    >
      <span className="mr-4 text-lg text-primary-blue">{useCasesData.arrowLink.text}</span>
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
export default LearnMore;
