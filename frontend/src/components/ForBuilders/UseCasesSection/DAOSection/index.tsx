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
        className="mx-auto mt-12 md:mx-0 lg:mt-16"
      />
    </div>
  );
};
export default DAOSection;
