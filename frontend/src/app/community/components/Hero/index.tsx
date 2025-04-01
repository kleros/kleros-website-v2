import React from "react";

import Image from "next/image";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import { request } from "@/utils/graphQLClient";

import { heroQuery, IHeroQuery } from "./queries";

const Hero: React.FC = async () => {
  const { header, subtitle, communityButtons, background } =
    await request<IHeroQuery>(heroQuery).then(
      (heroData) => heroData.communityPageHero,
    );

  return (
    <div className="relative px-6 pb-[277px] pt-44 lg:px-32 lg:pb-[331px]">
      <div className="space-y-8">
        <h1
          className={
            "pt-1 text-2xl font-medium text-primary-text lg:pt-3 lg:text-4xl"
          }
        >
          {header}
        </h1>
        <p className="text-lg text-primary-text">{subtitle}</p>
        <div className="flex flex-wrap items-center gap-6">
          {communityButtons.map((button) => (
            <CustomLink key={button.text} href={button.link.url}>
              <Button variant="secondary">
                <span>{button.text}</span>
              </Button>
            </CustomLink>
          ))}
        </div>
      </div>
      <Image
        src={background.url}
        alt="Hero Image Background"
        fill
        unoptimized
        className="absolute left-0 top-0 z-[-1] h-full object-cover"
      />
    </div>
  );
};

export default Hero;
