import React from "react";

import Image from "next/image";

import { HeroQueryType } from "@/queries/earn/hero";

interface IHero {
  heroData: HeroQueryType;
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  const { title, subtitle, statDisplay, background } = heroData.earnPageHero;
  return (
    <div className="relative pt-44 lg:pt-56 pb-[304px] lg:pb-72 px-6 lg:px-32">
      <div className="space-y-8">
        <h1 className="text-3xl lg:text-4xl font-medium">{title}</h1>
        <p className="text-lg">{subtitle}</p>

        <div className="bg-background-translucent md:w-fit rounded-full flex items-center gap-8 p-4 pr-8">
          <Image
            src={statDisplay.icon.url}
            alt="icon"
            width={90}
            height={90}
            className="object-contain"
          />
          <div className="flex flex-col">
            <label className="text-base text-primary-text">
              {statDisplay.statName}
            </label>
            <div className="flex flex-row">
              <h2 className="text-primary-text font-medium text-xl lg:text-2xl">
                {statDisplay.statValue}
              </h2>
              <h2 className="text-primary-blue text-xl lg:text-2xl">
                {statDisplay.statValueSuffix}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={background.url}
        alt="Hero Image Background"
        fill
        className="absolute top-0 left-0 h-full z-[-1] object-cover"
      />
    </div>
  );
};

export default Hero;
