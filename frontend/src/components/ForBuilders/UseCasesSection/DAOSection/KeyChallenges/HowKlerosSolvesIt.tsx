import React from "react";

import clsx from "clsx";
import Image from "next/image";

import CustomLink from "@/components/CustomLink";
import Card from "@/components/Navbar/AppsDropdownContent/Card";
import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

const hoverEffect = clsx(
  "hover:scale-[1.03] transform transition duration-100",
);

interface IHowKlerosSolvesIt {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const HowKlerosSolvesIt: React.FC<IHowKlerosSolvesIt> = ({ useCasesData }) => {
  return (
    <div>
      <h2 className="mb-6 text-xl text-primary-purple">
        {useCasesData.solutionSections.header}
      </h2>
      <div className="rounded-2xl border border-stroke bg-background-2 p-6">
        <h2 className="mb-4 text-xl">{useCasesData.solutionSections.title}</h2>
        <div className="mb-8 text-lg text-secondary-text">
          {useCasesData.solutionSections.description}
        </div>
        <div className="mb-4 text-secondary-text">
          {useCasesData.solutionSections.solutionHeader}
        </div>
        <div className="mb-6">
          <Card
            key={useCasesData.solutionSections?.solution?.solution_name}
            solution={useCasesData.solutionSections.solution}
            variant="small"
          />
        </div>
        <div className="mb-4 text-secondary-text">
          {useCasesData.solutionSections.partnersHeader}
        </div>
        <div className="flex flex-row gap-x-6 rounded-2xl border border-stroke p-4">
          {useCasesData.solutionSections.partners.map((partner) => (
            <CustomLink
              key={partner?.name}
              href={partner?.url}
              className={clsx(hoverEffect, "cursor-pointer")}
            >
              <Image
                key={partner?.name}
                src={partner?.icon_svg?.url}
                alt={partner?.name}
                width={64}
                height={64}
              />
            </CustomLink>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HowKlerosSolvesIt;
