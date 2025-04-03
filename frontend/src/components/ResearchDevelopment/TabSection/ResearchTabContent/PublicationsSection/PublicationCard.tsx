import { RefObject } from "react";

import clsx from "clsx";

import Divider from "@/components/Divider";
import ExternalLink from "@/components/ExternalLink";
import {
  TeamPublication,
  ThirdPartyPublication,
} from "@/queries/research-development/tabs-data";

interface IPublicationCard {
  publication: TeamPublication | ThirdPartyPublication;
  ref?: RefObject<HTMLDivElement | null>;
  className?: string;
}

const PublicationCard: React.FC<IPublicationCard> = ({
  publication,
  ref,
  className,
}) => {
  return (
    <div
      ref={ref}
      className={clsx(
        "rounded-2xl border border-stroke p-6",
        "flex flex-col items-start",
        className,
      )}
    >
      {isTeamPublication(publication) ? (
        <>
          <h2 className="mb-6 text-lg font-medium text-primary-text lg:text-xl">
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
