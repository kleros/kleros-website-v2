import React from "react";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

import SafeSnap from "./SafeSnap";

interface IHowKlerosSolvesIt {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const HowKlerosSolvesIt: React.FC<IHowKlerosSolvesIt> = ({ useCasesData }) => {
  return (
    <div>
      <h2 className="text-primary-purple mb-8 text-lg lg:text-xl">
        {useCasesData.solutionSections.header}
      </h2>
      <SafeSnap {...{ useCasesData }} />
    </div>
  );
};
export default HowKlerosSolvesIt;
