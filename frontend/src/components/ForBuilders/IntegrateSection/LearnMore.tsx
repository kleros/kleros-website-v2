import React from "react";

import Link from "next/link";
import Image from "next/image";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";

import { IntegrateQueryType } from "@/queries/for-builders/integrate";

interface ILearnMore {
  integrateData: IntegrateQueryType["forBuildersPageIntegrateSection"];
}

const LearnMore: React.FC<ILearnMore> = ({ integrateData }) => {
  return (
    <Link
      href={integrateData.arrowLink.link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-16 text-center"
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
    </Link>
  );
};
export default LearnMore;
