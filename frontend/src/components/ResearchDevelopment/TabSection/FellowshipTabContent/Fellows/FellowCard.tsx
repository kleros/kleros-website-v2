import Image from "next/image";

import Divider from "@/components/Divider";
import ExternalLink from "@/components/ExternalLink";
import { Fellow } from "@/queries/research-development/tabs-data";

const FellowCard: React.FC<Fellow> = ({
  name,
  profession,
  profilePic,
  workText,
  reportUrl,
  arrowLinkText,
}) => {
  return (
    <div className="flex flex-col items-start rounded-2xl border border-stroke p-8">
      <Image
        width={150}
        height={150}
        src={profilePic.url}
        className="mb-6 aspect-square object-contain"
        alt="Profile pic"
      />

      <h2 className="mb-4 text-lg font-medium text-primary-text">{name}</h2>
      <label className="mb-6 font-medium text-secondary-text">
        {profession}
      </label>
      <Divider />

      <p className="mb-12 mt-6 text-xl text-primary-text">{workText}</p>
      <div className="mt-auto w-full">
        <Divider />
        <ExternalLink
          text={arrowLinkText}
          url={reportUrl}
          className="mt-6 flex-wrap justify-start"
        />
      </div>
    </div>
  );
};

export default FellowCard;
