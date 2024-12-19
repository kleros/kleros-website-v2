import { UseCasesQueryType } from "@/queries/for-builders/use-cases";
import React from "react";

interface IUseCasesCards {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const UseCasesCards: React.FC<IUseCasesCards> = ({ useCasesData }) => {
  return (
    <div className="flex mb-12 flex-row flex-wrap gap-4">
      {useCasesData.useCases.map((useCase, index) => (
        <div
          key={useCase.name}
          className={`${
            index === 0
              ? "bg-primary-purple text-lg text-white px-8 py-4 rounded-full"
              : "border-gradient-purple-blue text-lg text-secondary-text px-8 py-4"
          }`}
        >
          {useCase.name}
        </div>
      ))}
    </div>
  );
};
export default UseCasesCards;
