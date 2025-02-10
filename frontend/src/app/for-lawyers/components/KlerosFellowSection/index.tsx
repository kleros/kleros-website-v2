import clsx from "clsx";
import Image from "next/image";

import ExternalLink from "@/components/ExternalLink";
import { request } from "@/utils/graphQLClient";

import {
  ForLawyersPageBecomeAFellowSection,
  forLawyersPageBecomeAFellowSectionQuery,
} from "../../queries/kleros-become-a-fellow-section";

const KlerosFellowSection: React.FC = async () => {
  const {
    header,
    headerSubtitle,
    firstSubtitle,
    secondSubtitle,
    fellowImages,
    arrowLink,
  } = (
    await request<ForLawyersPageBecomeAFellowSection>(
      forLawyersPageBecomeAFellowSectionQuery,
    )
  ).forLawyersPageBecomeAFellowSection;

  return (
    <div
      className={clsx(
        "bg-background-2",
        "flex flex-col gap-16",
        "px-6 py-12 lg:px-32 lg:py-24",
      )}
    >
      <div className="flex flex-col gap-8">
        <h3 className="text-primary-purple lg:text-lg">{headerSubtitle}</h3>
        <h1 className="text-primary-text text-xl font-medium lg:text-3xl">
          {header}
        </h1>
        <p className="text-secondary-text lg:text-lg">{firstSubtitle}</p>
        <p className="text-secondary-text lg:text-lg">{secondSubtitle}</p>
      </div>

      <div className="flex flex-wrap">
        {fellowImages.map((fellow) => (
          <Image
            key={fellow.url}
            width={64}
            height={64}
            src={fellow.url}
            alt="fellow image"
            className="rounded-full"
          />
        ))}
      </div>

      <ExternalLink
        text={arrowLink.text}
        url={arrowLink.link.url}
        className="mx-auto"
      />
    </div>
  );
};

export default KlerosFellowSection;
