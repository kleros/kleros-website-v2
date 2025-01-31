import React from "react";

import UseCasesCards from "@/components/UseCasesCards";
import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

import DAOSection from "./DAOSection";

interface IUseCasesSection {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const UseCasesSection: React.FC<IUseCasesSection> = ({ useCasesData }) => {
  return (
    <div className="relative bg-background-1 px-6 py-16 md:px-32 md:py-24">
      <h1 className="mb-8 text-xl font-medium lg:mb-12 lg:text-3xl">
        {useCasesData.sectionHeader}
      </h1>
      <UseCasesCards selectedIndex={0} />
      <DAOSection {...{ useCasesData }} />
    </div>
  );
};

export default UseCasesSection;
