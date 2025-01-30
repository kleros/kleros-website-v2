import React from "react";

import Image from "next/image";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import { request } from "@/utils/graphQLClient";

import { HeroQueryType, heroQuery } from "../queries/hero";

const Hero: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const {
    title,
    subtitle,
    primaryButton,
    secondaryButton,
    arrowLink,
    background,
  } = heroData.homePageHero;

  return (
    <div className="relative h-[835px] px-6 pb-28 pt-44">
      <div className="space-y-6">
        <h1 className="text-2xl lg:text-3xl">{title}</h1>
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
        <div>
          <CustomLink href={arrowLink.link.url}>
            <span className="mr-4">{arrowLink.text}</span>
            <Image
              src={LinkArrow}
              width="24"
              height="24"
              alt="Arrow link image"
              className="inline"
            />
          </CustomLink>
        </div>
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
