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
    <div className="flex flex-col gap-8 pb-12 pt-[88px] lg:py-24">
      <h1 className="text-2xl font-medium text-primary-text md:text-3xl">
        {researchHeader}
      </h1>
      <h3 className="text-xl text-secondary-text">{researchSecondaryHeader}</h3>
      <p className="text-lg text-secondary-text">{researchParagraph}</p>
      <label className="text-lg text-secondary-text">{researchCardLabel}</label>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {researches.map((research) => (
          <ResearchCard key={research.field} {...research} />
        ))}
      </div>
    </div>
  );
};

export default ResearchSection;
