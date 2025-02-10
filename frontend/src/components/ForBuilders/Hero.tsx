import React from "react";

import Image from "next/image";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/for-builders/hero";

import CustomLink from "../CustomLink";

interface IHero {
  heroData: HeroQueryType["forBuildersPageHero"];
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  return (
    <div className="relative px-6 pt-44 pb-28 md:pt-52 lg:px-32 lg:pb-60">
      <div className="space-y-6">
        <h1 className="pt-1 text-2xl font-medium lg:pt-3 lg:text-4xl">
          {heroData.title}
        </h1>
        <p className="max-w-[685px] text-lg">{heroData.subtitle}</p>
        <div>
          <CustomLink href={heroData.button.link.url}>
            <Button variant="secondary">
              <span>{heroData.button.text}</span>
            </Button>
          </CustomLink>
        </div>
        <div className="block space-x-2">
          {heroData.arrowLink?.map((arrowLink) => (
            <CustomLink key={arrowLink.text} href={arrowLink.link.url}>
              <span className="mr-2">{arrowLink.text}</span>
              <Image
                src={LinkArrow}
                width="24"
                height="24"
                alt="Arrow link image"
                className="inline h-4 w-4 lg:h-6 lg:w-6"
              />
            </CustomLink>
          ))}
        </div>
      </div>
      <Image
        src={heroData.background.url}
        alt="Hero Image Background"
        fill
        priority
        className="absolute top-0 left-0 z-[-1] h-full object-cover"
      />
    </div>
  );
};

export default Hero;
