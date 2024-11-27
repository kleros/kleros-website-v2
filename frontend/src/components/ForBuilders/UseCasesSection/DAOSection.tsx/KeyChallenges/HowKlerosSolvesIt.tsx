import React from "react";

import { UseCasesQueryType } from "@/queries/for-builders/use-cases";
import Card from "@/components/Navbar/AppsDropdownContent/Card";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const hoverEffect = clsx(
  "hover:scale-[1.03] transform transition duration-100"
);

interface IHowKlerosSolvesIt {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const HowKlerosSolvesIt: React.FC<IHowKlerosSolvesIt> = ({ useCasesData }) => {
  return (
    <div>
      <h2 className="text-xl mb-6 text-primary-purple">
        {useCasesData.solutionSections.header}
      </h2>
      <div className="bg-background-2 border border-stroke rounded-2xl p-6">
        <h2 className="text-xl mb-4">{useCasesData.solutionSections.title}</h2>
        <div className="text-lg text-secondary-text mb-8">
          {useCasesData.solutionSections.description}
        </div>
        <div className="text-secondary-text mb-4">
          {useCasesData.solutionSections.solutionHeader}
        </div>
        <div className="mb-6">
          <Card
            key={useCasesData.solutionSections?.solution?.solution_name}
            solution={useCasesData.solutionSections.solution}
            variant="small"
          />
        </div>
        <div className="text-secondary-text mb-4">
          {useCasesData.solutionSections.partnersHeader}
        </div>
        <div className="flex flex-row border border-stroke rounded-2xl p-4 gap-x-6">
          {useCasesData.solutionSections.partners.map((partner) => (
            <Link
              key={partner?.name}
              href={partner?.url}
              rel="noopener noreferrer"
              target="_blank"
              className={clsx(hoverEffect, "cursor-pointer")}
            >
              <Image
                key={partner?.name}
                src={partner?.icon_svg?.url}
                alt={partner?.name}
                width={64}
                height={64}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HowKlerosSolvesIt;
