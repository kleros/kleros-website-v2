import React from "react";

import Image from "next/image";

import { HeroQueryType } from "@/queries/research-development/hero";

interface IHero {
  heroData: HeroQueryType;
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  const { header, subtitle, background } = heroData.rAndDPageHero;
  return (
    <div className="relative px-6 pb-40 pt-44 md:pt-52 lg:px-32 lg:pb-96">
      <div className="space-y-8">
        <h1 className="pt-1 text-2xl font-medium text-primary-text lg:pt-3 lg:text-4xl">
          {header}
        </h1>
        <p className="max-w-[685px] text-lg text-primary-text">{subtitle}</p>
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
