import React from "react";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

import Header from "./Header";
import KeyChallenges from "./KeyChallenges";
import LearnMore from "./LearnMore";


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
