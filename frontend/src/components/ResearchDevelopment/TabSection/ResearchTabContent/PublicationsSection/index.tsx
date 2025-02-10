import {
  RAndDPageResearchTabSection,
  TeamPublication,
  ThirdPartyPublication,
} from "@/queries/research-development/tabs-data";

import TeamPublications from "./TeamPublications";
import ThirdPartyPublications from "./ThirdPartyPublications";

interface IPublicationSection
  extends Pick<
    RAndDPageResearchTabSection,
    | "publicationsHeader"
    | "publicationsTeamHeader"
    | "publications3rdPartyHeader"
  > {
  teamPublications: TeamPublication[];
  thirdPartyPublications: ThirdPartyPublication[];
}

const PublicationSection: React.FC<IPublicationSection> = ({
  publicationsHeader,
  publicationsTeamHeader,
  publications3rdPartyHeader,
  teamPublications,
  thirdPartyPublications,
}) => {
  return (
    <div className="py-12 lg:py-24">
      <h1 className="text-primary-text mb-8 text-xl lg:text-3xl lg:font-medium">
        {publicationsHeader}
      </h1>

      <h3 className="text-secondary-text mb-16 text-lg lg:text-xl">
        {publicationsTeamHeader}
      </h3>
      <TeamPublications {...{ teamPublications }} />

      <h3 className="text-secondary-text my-12 text-lg lg:text-xl">
        {publications3rdPartyHeader}
      </h3>
      <ThirdPartyPublications {...{ thirdPartyPublications }} />
    </div>
  );
};
export default PublicationSection;
