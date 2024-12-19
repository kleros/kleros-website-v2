import React from "react";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface IHeader {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const Header: React.FC<IHeader> = ({ useCasesData }) => {
  return (
    <div>
      <h2 className="text-xl mb-6 text-primary-text">
        {useCasesData.keyChallenges.title}
      </h2>
      <p className="text-lg mb-12 text-secondary-text">
        {useCasesData.keyChallenges.description}
      </p>
    </div>
  );
};
export default Header;
