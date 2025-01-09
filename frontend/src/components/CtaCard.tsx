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
    <div className="flex flex-col items-start border border-stroke rounded-2xl p-6">
      <Image
        width={90}
        height={90}
        src={icon.url}
        className="object-contain mb-4 aspect-square"
        alt="Icon"
      />
      <h2 className="text-xl text-primary-text font-medium mb-6">{title}</h2>
      <p className="text-lg text-secondary-text mb-6">{description}</p>
      <div className="w-full mt-auto">
        <Divider />
        <ExternalLink
          text={arrowLink.text}
          url={arrowLink.link.url}
          className="mt-6 mb-1 flex-wrap justify-start"
        />
      </div>
    </div>
  );
};

export default CtaCard;
