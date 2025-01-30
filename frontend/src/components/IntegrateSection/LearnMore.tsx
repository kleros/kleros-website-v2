import React from "react";

import Image from "next/image";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import { IntegrateQueryType } from "@/queries/integrate";

import CustomLink from "../CustomLink";

interface ILearnMore {
  integrateData: IntegrateQueryType["forBuildersPageIntegrateSection"];
}

const LearnMore: React.FC<ILearnMore> = ({ integrateData }) => {
  return (
    <CustomLink
      href={integrateData.arrowLink.link.url}
      className="mt-16 block text-center"
    >
      <span className="mr-4 text-lg text-primary-blue">
        {integrateData.arrowLink.text}
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
