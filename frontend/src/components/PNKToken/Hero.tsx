import React from "react";

import Image from "next/image";

import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/pnk-token/hero";

import CustomLink from "../CustomLink";

import Explorers from "./Explorers";

interface IHero {
  heroData: HeroQueryType;
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  const { header, subtitle, buyButton, background } = heroData.pnkTokenPageHero;
  return (
    <div className="relative px-6 pb-52 pt-44 md:pt-52 lg:px-32 lg:pb-60">
      <div className="space-y-8">
        <h1 className="pt-1 text-3xl font-medium lg:pt-3 lg:text-4xl">
          {header}
        </h1>
        <p className="max-w-[685px] text-lg">{subtitle}</p>
        <div>
          <CustomLink href={buyButton.link.url}>
            <Button variant="secondary">
              <span>{buyButton.text}</span>
            </Button>
          </CustomLink>
        </div>
        <Explorers explorers={heroData.tokenExplorers} />
      </div>
      <Image
        src={background.url}
        alt="Hero Image Background"
        fill
        priority
        className="absolute left-0 top-0 z-[-1] h-full object-cover"
      />
    </div>
  );
};

export default Hero;
