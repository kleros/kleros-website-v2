import clsx from "clsx";

import Divider from "@/components/Divider";
import ExternalLink from "@/components/ExternalLink";
import {
  TeamPublication,
  ThirdPartyPublication,
} from "@/queries/research-development/tabs-data";

interface IPublicationCard {
  publication: TeamPublication | ThirdPartyPublication;
  className?: string;
}

const PublicationCard: React.FC<IPublicationCard> = ({
  publication,
  className,
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-stroke p-6",
        "flex flex-col items-start",
        className,
      )}
    >
      {isTeamPublication(publication) ? (
        <>
          <h2 className="mb-6 text-xl font-medium text-primary-text">
            {publication.topic}
          </h2>
          <p className="mb-8 text-secondary-text">{publication.authors}</p>
        </>
      ) : (
        <p className="mb-8 text-secondary-text">{publication.topic}</p>
      )}
      <div className="mt-auto w-full">
        <Divider />
        <ExternalLink
          text={publication.paperLink.text}
          url={publication.paperLink.link.url}
          className="mb-2 mt-6 flex-wrap justify-start"
        />
      </div>
    </div>
  );
};
export default PublicationCard;

function isTeamPublication(
  publication: TeamPublication | ThirdPartyPublication,
): publication is TeamPublication {
  return "authors" in publication;
}
