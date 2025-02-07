import React from "react";

import Image from "next/image";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import ExternalLink from "@/components/ExternalLink";
import { request } from "@/utils/graphQLClient";

import { heroQuery, HeroQueryType } from "../queries/hero";

const Hero: React.FC = async () => {
  const { header, subtitle, buttons, arrowLink, background } = (
    await request<HeroQueryType>(heroQuery)
  ).forLawyersPageHero;

  return (
    <div className="relative px-6 pb-28 pt-44 md:pt-52 lg:px-32 lg:pb-60">
      <div className="space-y-8">
        <h1 className="pt-1 text-2xl font-medium lg:pt-3 lg:text-4xl">
          {header}
        </h1>
        <p className="max-w-[685px] text-lg">{subtitle}</p>
        <div className="flex flex-wrap gap-6">
          {buttons.map((button) => (
            <CustomLink key={button.text} href={button.link.url}>
              <Button variant="secondary">
                <span>{button.text}</span>
              </Button>
            </CustomLink>
          ))}
        </div>
        <ExternalLink
          text={arrowLink.text}
          url={arrowLink.link.url}
          className="text-start lg:pb-9 [&>span]:text-primary-text"
        />
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
