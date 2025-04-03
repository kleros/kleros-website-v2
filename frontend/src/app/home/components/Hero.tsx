import React from "react";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import ExternalLink from "@/components/ExternalLink";
import { request } from "@/utils/graphQLClient";

import { HeroQueryType, heroQuery } from "../queries/hero";
import { IcosahedronScene } from "./IcosahedronScene";
import { ScrollIndicator } from "./ScrollIndicator";
import { StatsSection } from "./StatsSection";

const Hero: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const {
    title,
    subtitle,
    primaryButton,
    secondaryButton,
    arrowLink,
  } = heroData.homePageHero;

  return (
    <div className="relative min-h-[100dvh] w-full">
      <div className="absolute inset-0">
        <IcosahedronScene />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-screen-2xl flex-col justify-center px-6">
        <div className="space-y-8">
          <h1 className="max-w-2xl text-3xl font-medium text-primary-text lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-primary-text lg:text-xl">{subtitle}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
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
          </div>
          <ExternalLink
            url={arrowLink.link.url}
            text={arrowLink.text}
            className="text-start [&>span]:text-base [&>span]:text-primary-text"
          />
          <StatsSection />
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default Hero;
