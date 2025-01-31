import React from "react";

import Image from "next/image";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface IHeader {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const Header: React.FC<IHeader> = ({ useCasesData }) => {
  return (
    <div className="mb-12 lg:mb-16">
      <h2 className="mb-6 text-lg text-primary-purple lg:text-2xl">
        {useCasesData.useCaseTitle}
      </h2>
      <p className="mb-12 text-secondary-text lg:mb-16 lg:text-xl">
        {useCasesData.useCaseDescription}
      </p>
      <Image
        src={useCasesData.useCaseBanner.url}
        alt="UseCaseBanner mobile"
        width="400"
        height="835"
      />
    </div>
  );
};
export default Header;
