import React from "react";

import UseCasesCards from "@/components/UseCasesCards";
import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

import DAOSection from "./DAOSection";

interface IUseCasesSection {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const UseCasesSection: React.FC<IUseCasesSection> = ({ useCasesData }) => {
  return (
    <div className="relative bg-background-1 px-6 pb-16 pt-16">
      <h1 className="mb-12 text-3xl font-medium">
        {useCasesData.sectionHeader}
      </h1>
      <UseCasesCards />
      <DAOSection {...{ useCasesData }} />
    </div>
  );
};

export default UseCasesSection;
