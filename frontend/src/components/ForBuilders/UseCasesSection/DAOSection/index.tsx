import React from "react";

import ExternalLink from "@/components/ExternalLink";
import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

import Header from "./Header";
import KeyChallenges from "./KeyChallenges";

interface IDAOSection {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const DAOSection: React.FC<IDAOSection> = ({ useCasesData }) => {
  return (
    <div>
      <Header {...{ useCasesData }} />
      <KeyChallenges {...{ useCasesData }} />
      <ExternalLink
        url={useCasesData.arrowLink.link.url}
        text={useCasesData.arrowLink.text}
        className="mt-12 flex-wrap justify-center lg:mt-16 lg:justify-start"
      />
    </div>
  );
};
export default DAOSection;
