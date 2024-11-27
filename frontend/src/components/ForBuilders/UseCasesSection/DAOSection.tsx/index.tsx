import React from "react";

import KeyChallenges from "./KeyChallenges";
import Header from "./Header";
import LearnMore from "./LearnMore";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface IDAOSection {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const DAOSection: React.FC<IDAOSection> = ({ useCasesData }) => {
  return (
    <div>
      <Header {...{ useCasesData }} />
      <KeyChallenges {...{ useCasesData }} />
      <LearnMore {...{ useCasesData }} />
    </div>
  );
};
export default DAOSection;
