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
        "border-stroke rounded-2xl border p-6",
        "flex flex-col items-start",
        className,
      )}
    >
      {isTeamPublication(publication) ? (
        <>
          <h2 className="text-primary-text mb-6 text-lg font-medium lg:text-xl">
            {publication.topic}
          </h2>
          <p className="text-secondary-text mb-8">{publication.authors}</p>
        </>
      ) : (
        <p className="text-secondary-text mb-8">{publication.topic}</p>
      )}
      <div className="mt-auto w-full">
        <Divider />
        <ExternalLink
          text={publication.paperLink.text}
          url={publication.paperLink.link.url}
          className="mt-6 lg:mb-2"
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
