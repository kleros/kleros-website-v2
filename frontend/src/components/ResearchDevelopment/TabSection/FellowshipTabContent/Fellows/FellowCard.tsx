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
    <div
      className={
        "border-stroke flex flex-col items-start rounded-2xl border p-8"
      }
    >
      <Image
        width={150}
        height={150}
        src={profilePic.url}
        className="mb-6 aspect-square object-contain"
        alt="Profile pic"
      />

      <h2 className="text-primary-text mb-4 text-lg font-medium">{name}</h2>
      <label className="text-secondary-text mb-6 font-medium">
        {profession}
      </label>
      <Divider />

      <p className="text-primary-text mt-6 mb-8 text-lg lg:mb-12 lg:text-xl">
        {workText}
      </p>
      <div className="mt-auto w-full">
        <Divider />
        <ExternalLink text={arrowLinkText} url={reportUrl} className="mt-6" />
      </div>
    </div>
  );
};

export default FellowCard;
