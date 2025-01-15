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
      <h1 className="mb-8 text-2xl text-primary-text lg:text-3xl lg:font-medium">
        {publicationsHeader}
      </h1>

      <h3 className="mb-16 text-xl text-secondary-text">
        {publicationsTeamHeader}
      </h3>
      <TeamPublications {...{ teamPublications }} />

      <h3 className="my-12 text-xl text-secondary-text">
        {publications3rdPartyHeader}
      </h3>
      <ThirdPartyPublications {...{ thirdPartyPublications }} />
    </div>
  );
};
export default PublicationSection;
