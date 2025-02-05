import React from "react";

import Image from "next/image";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import ExternalLink from "@/components/ExternalLink";
import { request } from "@/utils/graphQLClient";

import { HeroQueryType, heroQuery } from "../queries/hero";

import TokenStats from "./TokenStats";

const Hero: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const {
    title,
    subtitle,
    primaryButton,
    secondaryButton,
    arrowLink,
    background,
    tokenStats,
  } = heroData.homePageHero;

  return (
    <div className="relative px-6 pb-28 pt-44 md:pt-52 lg:px-32 lg:pb-20">
      <div className="space-y-8">
        <h1 className="text-2xl font-medium lg:text-3xl">{title}</h1>
        <p className="text-lg">{subtitle}</p>
        <div className="lg:hidden">
          <CustomLink href={primaryButton.link.url}>
            <Button>
              <span className="text-background-2"> {primaryButton.text} </span>
            </Button>
          </CustomLink>
        </div>
        <div>
          <CustomLink href={secondaryButton.link.url}>
            <Button variant="secondary">
              <span>{secondaryButton.text}</span>
            </Button>
          </CustomLink>
        </div>
        <ExternalLink
          url={arrowLink.link.url}
          text={arrowLink.text}
          className="[&>span]:text-base [&>span]:text-primary-text"
        />
        <TokenStats {...{ tokenStats }} />
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
