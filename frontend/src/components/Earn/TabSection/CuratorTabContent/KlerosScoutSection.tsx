import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import ExternalLink from "@/components/ExternalLink";
import { KlerosScoutSection as IKlerosScoutSection } from "@/queries/earn/tabs-data";

const KlerosScoutSection: React.FC<IKlerosScoutSection> = ({
  header,
  productName,
  productIcon,
  background,
  learnMoreButton,
  arrowLinks,
}) => {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-background-1",
        "flex flex-col gap-8 px-6 py-8 md:px-8 md:py-12",
      )}
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <Image
          width={128}
          height={128}
          priority
          src={productIcon.url}
          alt="Product Icon"
        />
        <div className="flex flex-col gap-4">
          <div className="text-lg text-primary-purple">{header}</div>
          <div className="text-xl text-primary-text md:text-2xl">
            {productName}
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${background.url})` }}
        className={clsx(
          "relative h-[308px] rounded-2xl md:h-[380px]",
          "bg-cover bg-[-314px] md:bg-[0px]",
          "flex items-center justify-center pt-3 md:pt-0",
        )}
      >
        <Link
          href={learnMoreButton.link.url}
          target="_blank"
          rel="noreferrer noopener"
          className="z-[1] mt-16 md:mt-0"
        >
          <Button className="text-background-1">{learnMoreButton.text}</Button>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        {arrowLinks.map((arrowLink) => (
          <ExternalLink
            key={arrowLink.text}
            text={arrowLink.text}
            url={arrowLink.link.url}
          />
        ))}
      </div>
    </div>
  );
};

export default KlerosScoutSection;
