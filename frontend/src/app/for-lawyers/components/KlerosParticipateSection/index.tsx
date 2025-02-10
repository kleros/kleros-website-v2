import clsx from "clsx";

import LearnMore from "@/components/LearnMore";
import { request } from "@/utils/graphQLClient";

import {
  ForLawyersPageParticipateSection,
  forLawyersPageParticipateSectionQuery,
} from "../../queries/kleros-participation-section";

const KlerosParticipateSection: React.FC = async () => {
  const { header, subtitle, headerSubtitle, starterKitSection } = (
    await request<ForLawyersPageParticipateSection>(
      forLawyersPageParticipateSectionQuery,
    )
  ).forLawyersPageParticipateSection;
  return (
    <div className={clsx("bg-background-1", "px-6 py-12 lg:px-32 lg:py-24")}>
      <div className="flex flex-col gap-8">
        <h3 className="text-primary-purple lg:text-lg">{headerSubtitle}</h3>
        <h1 className="text-primary-text text-xl font-medium lg:text-3xl">
          {header}
        </h1>
        <p className="text-secondary-text lg:text-lg">{subtitle}</p>
      </div>

      <LearnMore {...starterKitSection} />
    </div>
  );
};

export default KlerosParticipateSection;
