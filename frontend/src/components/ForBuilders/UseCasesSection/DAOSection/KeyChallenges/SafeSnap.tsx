import clsx from "clsx";
import Image from "next/image";

import CustomLink from "@/components/CustomLink";
import Card from "@/components/Navbar/AppsDropdownContent/Card";
import { UseCasesQueryType } from "@/queries/for-builders/use-cases";

interface ISafeSnap {
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
}

const SafeSnap: React.FC<ISafeSnap> = ({ useCasesData }) => {
  return (
    <div className="rounded-2xl border border-stroke bg-background-2 p-6 pb-8 lg:p-8 lg:pb-16">
      <h2 className="mb-4 text-lg font-medium lg:text-xl">
        {useCasesData.solutionSections.title}
      </h2>
      <div className="mb-8 text-secondary-text lg:text-lg">
        {useCasesData.solutionSections.description}
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-4">
          <div className="text-secondary-text">
            {useCasesData.solutionSections.solutionHeader}
          </div>
          <div>
            <Card
              key={useCasesData.solutionSections?.solution?.solution_name}
              solution={useCasesData.solutionSections.solution}
              variant="small"
              className="border-gradient-purple-blue !rounded-2xl border-none before:!p-[1px]"
            />
          </div>
        </div>

        <div className="flex flex-grow flex-col gap-4">
          <div className="text-secondary-text">
            {useCasesData.solutionSections.partnersHeader}
          </div>
          <div className="border-gradient-purple-blue flex flex-row gap-x-6 !rounded-2xl p-4 before:!p-[1px]">
            {useCasesData.solutionSections.partners.map((partner) => (
              <CustomLink
                key={partner?.name}
                href={partner?.url}
                className={clsx(
                  "transform transition duration-100 hover:scale-[1.01]",
                  "cursor-pointer",
                )}
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
    </div>
  );
};

export default SafeSnap;
