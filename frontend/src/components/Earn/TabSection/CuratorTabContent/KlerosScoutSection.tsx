import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
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
      <div className="flex flex-row gap-6">
        <Image
          width={128}
          height={128}
          priority
          src={productIcon.url}
          alt="Product Icon"
        />
        <div className="flex flex-col gap-4">
          <span className="text-primary-purple lg:text-lg">{header}</span>
          <span className="text-lg text-primary-text md:text-2xl">
            {productName}
          </span>
        </div>
      </div>
      <div
        className={clsx(
          "relative flex h-[308px] items-center justify-center rounded-2xl",
          "md:h-[380px]",
        )}
      >
        <CustomLink
          href={learnMoreButton.link.url}
          className="relative z-10 mt-14 block h-fit w-fit rounded-full md:mt-0"
        >
          <Button className="text-background-1">{learnMoreButton.text}</Button>
        </CustomLink>
        <Image
          src={background.url}
          alt="Background Image"
          fill
          className="rounded-2xl object-cover object-[65%]"
        />
      </div>
      <div className="flex flex-col items-center gap-6 md:flex-row lg:gap-8">
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
