import React from "react";

import Tag from "@/components/Tag";
import {
  useCasesCardsQuery,
  UseCasesCardsQueryType,
} from "@/queries/use-cases-cards";
import { request } from "@/utils/graphQLClient";

const UseCasesCards: React.FC = async () => {
  const useCasesData =
    await request<UseCasesCardsQueryType>(useCasesCardsQuery);

  const useCases = useCasesData.forBuildersPageUseCasesSection.useCases;

  return (
    <div className="mb-12 flex flex-row flex-wrap gap-4">
      {useCases.map((useCase, index) => (
        <Tag key={index} text={useCase.name} selected={index === 0} />
      ))}
    </div>
  );
};
export default UseCasesCards;
