import React from "react";

import Image from "next/image";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import CustomLink from "@/components/CustomLink";
import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface ILearnMore {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const LearnMore: React.FC<ILearnMore> = ({ useCasesData }) => {
  return (
    <CustomLink
      href={useCasesData.arrowLink.link.url}
      className="mt-16 block text-center"
    >
      <span className="mr-4 text-lg text-primary-blue">
        {useCasesData.arrowLink.text}
      </span>
      <Image
        src={LinkArrow}
        width="24"
        height="24"
        alt="Arrow link image"
        className="inline"
      />
    </CustomLink>
  );
};
export default LearnMore;
