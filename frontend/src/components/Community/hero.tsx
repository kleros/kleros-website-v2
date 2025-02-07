import React from "react";

import Image from "next/image";

import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/community/hero";

import CustomLink from "../CustomLink";

interface IHero {
  heroData: HeroQueryType["communityPageHero"];
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  const { header, subtitle, communityButtons, background } = heroData;
  return (
    <div className="relative px-6 pb-[277px] pt-44 lg:px-32 lg:pb-[331px]">
      <div className="space-y-8">
        <h1 className="pt-1 text-2xl font-medium lg:pt-3 lg:text-4xl">
          {header}
        </h1>
        <p className="text-lg">{subtitle}</p>
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
        priority
        quality={100}
        className="absolute left-0 top-0 z-[-1] h-full object-cover"
      />
    </div>
  );
};

export default Hero;
