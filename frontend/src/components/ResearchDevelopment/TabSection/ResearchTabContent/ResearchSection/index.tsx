import {
  RAndDPageResearchTabSection,
  Research,
} from "@/queries/research-development/tabs-data";

import ResearchCard from "./ResearchCard";

interface IResearchSection
  extends Pick<
    RAndDPageResearchTabSection,
    | "researchHeader"
    | "researchSecondaryHeader"
    | "researchParagraph"
    | "researchCardLabel"
  > {
  researches: Research[];
}

const ResearchSection: React.FC<IResearchSection> = ({
  researchHeader,
  researchCardLabel,
  researches,
}) => {
  return (
    <div className="flex flex-col gap-6 pb-12 pt-[88px] lg:gap-8 lg:py-24">
      <h1 className="text-xl font-medium text-primary-text md:text-3xl lg:mb-2">
        {researchHeader}
      </h1>
      <label className="text-secondary-text lg:text-lg">
        {researchCardLabel}
      </label>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8">
        {researches.map((research) => (
          <ResearchCard key={research.field} {...research} />
        ))}
      </div>
    </div>
  );
};

export default ResearchSection;
