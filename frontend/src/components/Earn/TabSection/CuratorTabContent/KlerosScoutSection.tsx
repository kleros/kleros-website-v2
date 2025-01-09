import Button from "@/components/Button";
import ExternalLink from "@/components/ExternalLink";
import { klerosScoutSection as IKlerosScoutSection } from "@/queries/earn/tabs-data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const KlerosScoutSection: React.FC<IKlerosScoutSection> = ({
  header,
  productName,
  productIcon,
  background,
  learnMoreButton,
  arrowLinks,
}) => {
  return (
    <div className=" bg-background-1 rounded-2xl flex flex-col gap-8 py-8 md:py-12 px-6 md:px-8">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          width={128}
          height={128}
          src={productIcon.url}
          alt="Product Icon"
        />
        <div className="flex flex-col gap-4">
          <div className="text-lg text-primary-purple">{header}</div>
          <div className="text-xl md:text-2xl text-primary-text">
            {productName}
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${background.url})` }}
        className={clsx(
          "relative h-[308px] md:h-[380px] rounded-2xl",
          "bg-[#bca2df] bg-[-314px] md:bg-[0px] bg-cover  bg-blend-luminosity",
          "flex justify-center items-center pt-3 md:pt-0"
        )}
      >
        <Link
          href={learnMoreButton.link.url}
          target="_blank"
          rel="noreferrer nooppener"
          className="z-[1] mt-16 md:mt-0"
        >
          <Button variant="primary" className="text-background-1">
            {learnMoreButton.text}
          </Button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
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