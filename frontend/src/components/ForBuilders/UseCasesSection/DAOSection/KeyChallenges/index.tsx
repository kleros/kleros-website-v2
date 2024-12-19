import React from "react";
import { UseCasesQueryType } from "@/queries/for-builders/use-cases";
import Header from "./Header";
import HowKlerosSolvesIt from "./HowKlerosSolvesIt";

interface IKeyChallenges {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const KeyChallenges: React.FC<IKeyChallenges> = ({ useCasesData }) => {
  return (
    <div>
      <Header {...{ useCasesData }} />
      <HowKlerosSolvesIt {...{ useCasesData }} />
    </div>
  );
};
export default KeyChallenges;
