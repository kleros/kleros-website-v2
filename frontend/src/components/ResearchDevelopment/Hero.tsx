import React from "react";

import Image from "next/image";

import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/research-development/hero";

import CustomLink from "../CustomLink";
import ExternalLink from "../ExternalLink";

interface IHero {
  heroData: HeroQueryType;
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  const { header, subtitle, buttons, arrowLink, background } =
    heroData.rAndDPageHero;
  return (
    <div className="relative px-6 pb-36 pt-44 md:pt-52 lg:px-32 lg:pb-72">
      <div className="space-y-8">
        <h1 className="pt-1 text-2xl font-medium text-primary-text lg:pt-3 lg:text-4xl">
          {header}
        </h1>
        <p className="max-w-[685px] text-lg text-primary-text">{subtitle}</p>
        <div className="flex flex-wrap gap-6">
          {buttons.map((button) => (
            <CustomLink key={button.text} href={button.link.url}>
              <Button variant="secondary">
                <span>{button.text}</span>
              </Button>
            </CustomLink>
          ))}
        </div>
        <div className="flex flex-wrap gap-8">
          {arrowLink.map((link) => (
            <ExternalLink
              key={link.text}
              text={link.text}
              url={link.link.url}
              className={
                "text-start [&>span]:text-base [&>span]:text-primary-text"
              }
            />
          ))}
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
