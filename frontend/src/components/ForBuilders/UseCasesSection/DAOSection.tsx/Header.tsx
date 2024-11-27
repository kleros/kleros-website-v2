import React from "react";

import Image from "next/image";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface IHeader {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const Header: React.FC<IHeader> = ({ useCasesData }) => {
  return (
    <div className="mb-16">
      <h2 className="text-xl mb-6 text-primary-purple">
        {useCasesData.useCaseTitle}
      </h2>
      <p className="text-lg mb-12 text-secondary-text">
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
