import React from "react";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface IHeader {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const Header: React.FC<IHeader> = ({ useCasesData }) => {
  return (
    <div>
      <h2 className="mb-6 text-xl text-primary-text">
        {useCasesData.keyChallenges.title}
      </h2>
      <p className="mb-12 text-lg text-secondary-text">
        {useCasesData.keyChallenges.description}
      </p>
    </div>
  );
};
export default Header;
