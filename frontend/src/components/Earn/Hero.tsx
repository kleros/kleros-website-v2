import React from "react";

import Image from "next/image";

import { HeroQueryType } from "@/queries/earn/hero";

interface IHero {
  heroData: HeroQueryType;
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  const { title, subtitle, background } = heroData.earnPageHero;
  return (
    <div className="relative px-6 pb-[218px] pt-44 lg:px-32 lg:pb-72 lg:pt-56">
      <div className="space-y-8">
        <h1 className="text-2xl font-medium text-primary-text lg:text-4xl">
          {title}
        </h1>
        <p className="text-lg text-primary-text">{subtitle}</p>
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
