import React from "react";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface IHeader {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const Header: React.FC<IHeader> = ({ useCasesData }) => {
  return (
    <div>
      <h2 className="text-primary-text mb-6 text-lg lg:text-xl">
        {useCasesData.keyChallenges.title}
      </h2>
      <p className="text-secondary-text mb-12 lg:text-lg">
        {useCasesData.keyChallenges.description}
      </p>
    </div>
  );
};
export default Header;
