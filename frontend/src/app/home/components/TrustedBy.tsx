import React from "react";

import clsx from "clsx";
import Image from "next/image";

import CustomLink from "@/components/CustomLink";
import { request } from "@/utils/graphQLClient";

import { partnersQuery, PartnersQueryType } from "../queries/trusted-by";

const TrustedBy: React.FC = async () => {
  const { partners, institutions } =
    await request<PartnersQueryType>(partnersQuery);

  return (
    <div className="w-full bg-background-2-alpha py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-screen-2xl">
        <h3 className="mx-auto mb-8 w-max text-lg text-secondary-text">
          Trusted By
        </h3>
        <div className="px-6 lg:px-10">
          <div
            className={clsx(
              "hover-pause-child-animation relative grid auto-cols-max",
              "grid-flow-col overflow-hidden",
            )}
          >
            <PartnersCarousel {...{ partners }} />
            <BlurredBorders />
          </div>
        </div>
        <div
          className={clsx(
            "mt-16 flex flex-col items-center justify-items-center gap-8 px-6",
            "md:px-32 lg:flex-row lg:justify-between xl:gap-16",
          )}
        >
          {institutions.map(({ name, link, image }) => (
            <CustomLink key={name} href={link.url}>
              <Image
                src={image.url}
                alt={name}
                width="1"
                height="1"
                className="h-auto w-auto"
              />
            </CustomLink>
          ))}
        </div>
      </div>
    </div>
  );
};

interface IPartnersCarousel {
  partners: PartnersQueryType["partners"];
}

const PartnersCarousel: React.FC<IPartnersCarousel> = ({ partners }) => (
  <>
    {[...Array(3)].map((_, i) => (
      <div className="h-16 animate-h-scroll" key={i}>
        {partners.map(({ name, icon_svg, url }) => (
          <CustomLink
            key={name}
            className={clsx(
              "relative mx-2 inline-block h-16 w-16 rounded-full bg-white",
              "hover:cursor-pointer lg:mx-10",
            )}
            href={url}
          >
            <Image
              src={icon_svg.url}
              alt={name}
              width="42"
              height="42"
              className={
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              }
              loading="eager"
            />
          </CustomLink>
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
