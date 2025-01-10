import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/community/hero";

interface IHero {
  heroData: HeroQueryType["communityPageHero"];
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  const { header, subtitle, communityButtons, background } = heroData;
  return (
    <div className="relative px-6 pb-[277px] pt-44 lg:px-32 lg:pb-[331px]">
      <div className="space-y-8">
        <h1 className="pt-1 text-3xl font-medium lg:pt-3 lg:text-4xl">
          {header}
        </h1>
        <p className="text-lg">{subtitle}</p>
        <div className="flex flex-wrap items-center gap-6">
          {communityButtons.map((button) => (
            <Link
              key={button.text}
              href={button.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <span>{button.text}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <Image
        src={background.url}
        alt="Hero Image Background"
        fill
        className="absolute left-0 top-0 z-[-1] h-full object-cover"
      />
    </div>
  );
};

export default Hero;
