import Image from "next/image";

import Divider from "./Divider";
import ExternalLink from "./ExternalLink";

export interface ICtaCard {
  icon: {
    url: string;
  };
  title: string;
  description: string;
  arrowLink: {
    text: string;
    link: {
      url: string;
    };
  };
}

const CtaCard: React.FC<ICtaCard> = ({
  icon,
  title,
  description,
  arrowLink,
}) => {
  return (
    <div className="flex flex-col items-start rounded-2xl border border-stroke p-6">
      <Image
        width={90}
        height={90}
        src={icon.url}
        className="mb-4 aspect-square object-contain"
        alt="Icon"
      />
      <h2 className="mb-6 text-xl font-medium text-primary-text">{title}</h2>
      <p className="mb-6 text-lg text-secondary-text">{description}</p>
      <div className="mt-auto w-full">
        <Divider />
        <ExternalLink
          text={arrowLink.text}
          url={arrowLink.link.url}
          className="mb-1 mt-6 flex-wrap justify-start"
        />
      </div>
    </div>
  );
};

export default CtaCard;
