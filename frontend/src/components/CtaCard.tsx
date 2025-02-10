import clsx from "clsx";
import Image from "next/image";

import Divider from "./Divider";
import ExternalLink from "./ExternalLink";

export interface ICtaCard {
  icon?: {
    url: string;
  };
  title: string;
  description: string;
  arrowLink?: {
    text: string;
    link: {
      url: string;
    };
  };
  className?: string;
}

const CtaCard: React.FC<ICtaCard> = ({
  icon,
  title,
  description,
  arrowLink,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        "border-stroke flex flex-col items-start rounded-2xl border p-6",
      )}
    >
      {icon ? (
        <Image
          width={90}
          height={90}
          src={icon.url}
          className="mb-4 aspect-square object-contain"
          alt="Icon"
        />
      ) : null}
      <h2 className="text-primary-text mb-6 text-lg font-medium lg:text-xl">
        {title}
      </h2>
      <p className="text-secondary-text mb-6 text-base lg:text-lg">
        {description}
      </p>
      {typeof arrowLink !== "undefined" ? (
        <div className="mt-auto w-full">
          <Divider />
          <ExternalLink
            text={arrowLink.text}
            url={arrowLink.link.url}
            className="mt-6 mb-1 text-start"
          />
        </div>
      ) : null}
    </div>
  );
};

export default CtaCard;
