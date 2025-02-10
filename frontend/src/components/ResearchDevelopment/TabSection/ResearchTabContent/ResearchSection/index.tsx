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
  researchParagraph,
  researchSecondaryHeader,
  researchCardLabel,
  researches,
}) => {
  return (
    <div className="flex flex-col gap-6 pt-[88px] pb-12 lg:gap-8 lg:py-24">
      <h1 className="text-primary-text text-xl font-medium md:text-3xl lg:mb-2">
        {researchHeader}
      </h1>
      <h3 className="text-secondary-text text-lg lg:text-xl">
        {researchSecondaryHeader}
      </h3>
      <p className="text-secondary-text lg:text-lg">{researchParagraph}</p>
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
