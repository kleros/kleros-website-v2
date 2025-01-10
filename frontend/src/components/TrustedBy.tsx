import React from "react";

import clsx from "clsx";
import Image from "next/image";

import { PartnersQueryType } from "@/queries/partners";

interface ITrustedBy {
  partnersData: PartnersQueryType;
}

const TrustedBy: React.FC<ITrustedBy> = ({ partnersData }) => {
  const partners = partnersData.partners;

  return (
    <div className="bg-background-2 px-6 py-4">
      <p className="mx-auto mb-2 w-max text-2xl text-secondary-text">
        Trusted By
      </p>
      <div
        className={clsx(
          "hover-pause-child-animation",
          "relative grid auto-cols-max grid-flow-col overflow-hidden",
        )}
      >
        <PartnersCarousel {...{ partners }} />
        <BlurredBorders />
      </div>
    </div>
  );
};

interface IPartnersCarousel {
  partners: PartnersQueryType["partners"];
}

const PartnersCarousel: React.FC<IPartnersCarousel> = ({ partners }) => (
  <>
    {[...Array(4)].map((_, i) => (
      <div className="h-16 animate-h-scroll" key={i}>
        {partners.map(({ name, icon_svg }) => (
          <div
            key={name}
            className={clsx(
              "relative mx-2 inline-block h-16 w-16 rounded-full bg-white",
              "hover:cursor-pointer",
            )}
          >
            <Image
              src={icon_svg.url}
              alt={name}
              width="42"
              height="42"
              className={
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              }
            />
          </div>
        ))}
      </div>
    ))}
  </>
);

const BlurredBorders: React.FC = () => (
  <>
    <div
      className={clsx(
        "absolute bottom-0 left-0 right-[90%] top-0",
        "bg-gradient-to-r from-background-2 to-transparent",
      )}
    />
    <div
      className={clsx(
        "absolute bottom-0 left-[90%] right-0 top-0",
        "bg-gradient-to-r from-transparent to-background-2",
      )}
    />
  </>
);

export default TrustedBy;
