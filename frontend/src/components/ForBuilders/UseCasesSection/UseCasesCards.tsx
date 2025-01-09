import Tag from "@/components/Tag";
import { UseCasesQueryType } from "@/queries/for-builders/use-cases";
import React from "react";

interface IUseCasesCards {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const UseCasesCards: React.FC<IUseCasesCards> = ({ useCasesData }) => {
  return (
    <div className="flex mb-12 flex-row flex-wrap gap-4">
      {useCasesData.useCases.map((useCase, index) => (
        <Tag key={index} text={useCase.name} selected={index === 0}/>
      ))}
    </div>
  );
};
export default UseCasesCards;
