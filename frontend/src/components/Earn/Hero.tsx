import React from "react";

import clsx from "clsx";
import Image from "next/image";

import { HeroQueryType } from "@/queries/earn/hero";

interface IHero {
  heroData: HeroQueryType;
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  const { title, subtitle, statDisplay, background } = heroData.earnPageHero;
  return (
    <div className="relative px-6 pb-[218px] pt-44 lg:px-32 lg:pb-72 lg:pt-56">
      <div className="space-y-8">
        <h1 className="text-2xl font-medium lg:text-4xl">{title}</h1>
        <p className="text-lg">{subtitle}</p>

        <div
          className={clsx(
            "flex w-fit items-center gap-8 rounded-full",
            "bg-background-translucent p-4 pr-8",
          )}
        >
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
              <h2 className="text-xl font-medium text-primary-text lg:text-2xl">
                {statDisplay.statValue}
              </h2>
              <h2 className="text-xl text-primary-blue lg:text-2xl">
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
        unoptimized
        className="absolute left-0 top-0 z-[-1] h-full object-cover"
      />
    </div>
  );
};

export default Hero;
