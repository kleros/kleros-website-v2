import React from "react";

import Tag from "@/components/Tag";
import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface IUseCasesCards {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const UseCasesCards: React.FC<IUseCasesCards> = ({ useCasesData }) => {
  return (
    <div className="flex mb-12 flex-row flex-wrap gap-4">
      {useCasesData.useCases.map((useCase, index) => (
        <Tag key={index} text={useCase.name} selected={index === 0} />
      ))}
    </div>
  );
};
export default UseCasesCards;
