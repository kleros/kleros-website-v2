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
    <div className="relative px-6 pb-12 pt-32">
      <div className="space-y-6">
        <h1 className="w-min text-3xl">{heroData.title}</h1>
        <p className="text-lg">{heroData.subtitle}</p>
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
                className="inline"
              />
            </CustomLink>
          ))}
        </div>
      </div>
      <Image
        src={heroData.background.url}
        alt="Hero Image Background"
        width="1440"
        height="835"
        priority
        className="absolute left-0 top-0 z-[-1] h-full object-cover object-left"
      />
    </div>
  );
};

export default Hero;
