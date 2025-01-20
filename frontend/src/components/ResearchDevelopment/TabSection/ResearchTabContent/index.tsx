import {
  RAndDPageResearchTabSection,
  Research,
  TeamPublication,
  ThirdPartyPublication,
} from "@/queries/research-development/tabs-data";

import PublicationSection from "./PublicationsSection";
import ResearchSection from "./ResearchSection";

interface IResearchTabContent extends RAndDPageResearchTabSection {
  researches: Research[];
  teamPublications: TeamPublication[];
  thirdPartyPublications: ThirdPartyPublication[];
}
const ResearchTabContent: React.FC<IResearchTabContent> = (props) => {
  return (
    <div>
      <ResearchSection {...props} />
      <PublicationSection {...props} />
    </div>
  );
};

export default ResearchTabContent;
