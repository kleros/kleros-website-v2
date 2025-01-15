import Divider from "@/components/Divider";
import ExternalLink from "@/components/ExternalLink";
import {
  TeamPublication,
  ThirdPartyPublication,
} from "@/queries/research-development/tabs-data";

interface IPublicationCard {
  publication: TeamPublication | ThirdPartyPublication;
}

const PublicationCard: React.FC<IPublicationCard> = ({ publication }) => {
  return (
    <div className="flex flex-col items-start rounded-2xl border border-stroke p-6">
      {(publication as TeamPublication)?.authors ? (
        <>
          <h2 className="mb-6 text-xl font-medium text-primary-text">
            {publication.topic}
          </h2>
          <p className="mb-8 text-secondary-text">
            {(publication as TeamPublication).authors}
          </p>
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
