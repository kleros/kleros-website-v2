import React from "react";

import Image from "next/image";

import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/brand-assets/hero";

import CustomLink from "../CustomLink";

interface IHero {
  heroData: HeroQueryType["brandAssetsPageHero"];
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  return (
    <div className="relative px-6 pb-28 pt-44 md:pt-52 lg:px-32 lg:pb-[302px]">
      <div className="space-y-6">
        <h1 className="pt-1 text-2xl font-medium lg:pt-3 lg:text-4xl">
          {heroData.header}
        </h1>
        <p className="max-w-[685px] text-lg">{heroData.subtitle}</p>
        <div>
          <CustomLink href={heroData.button?.link?.url}>
            <Button variant="secondary">
              <span>{heroData.button?.text}</span>
            </Button>
          </CustomLink>
        </div>
      </div>
      <Image
        src={heroData.background.url}
        alt="Hero Image Background"
        fill
        priority
        className="absolute left-0 top-0 z-[-1] h-full object-cover"
      />
    </div>
  );
};

export default Hero;
