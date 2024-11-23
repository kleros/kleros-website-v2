import React from "react";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";
import UseCasesCards from "./UseCasesCards";
import DAOSection from "./DAOSection.tsx";

interface IUseCasesSection {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const UseCasesSection: React.FC<IUseCasesSection> = ({ useCasesData }) => {
  return (
    <div className="relative pt-16 pb-16 px-6 bg-background-1">
      <h1 className="text-3xl mb-12 font-medium">
        {useCasesData.sectionHeader}
      </h1>
      <UseCasesCards {...{ useCasesData }} />
      <DAOSection {...{ useCasesData }} />
    </div>
  );
};

export default UseCasesSection;
