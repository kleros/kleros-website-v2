import React from "react";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface IHeader {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const Header: React.FC<IHeader> = ({ useCasesData }) => {
  return (
    <div>
      <h2 className="mb-6 text-lg text-primary-text lg:text-xl">
        {useCasesData.keyChallenges.title}
      </h2>
      <p className="mb-12 text-secondary-text lg:text-lg">
        {useCasesData.keyChallenges.description}
      </p>
    </div>
  );
};
export default Header;
