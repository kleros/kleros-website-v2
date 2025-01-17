import React from "react";

import Image from "next/image";
import Link from "next/link";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import Button from "@/components/Button";
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
        <h1 className="w-min text-3xl">{title}</h1>
        <p className="text-lg">{subtitle}</p>
        <div className="lg:hidden">
          <Link
            href={primaryButton.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <span className="text-background-2"> {primaryButton.text} </span>
            </Button>
          </Link>
        </div>
        <div>
          <Link
            href={secondaryButton.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              <span>{secondaryButton.text}</span>
            </Button>
          </Link>
        </div>
        <div>
          <Link
            href={arrowLink.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-4">{arrowLink.text}</span>
            <Image
              src={LinkArrow}
              width="24"
              height="24"
              alt="Arrow link image"
              className="inline"
            />
          </Link>
        </div>
      </div>
      <Image
        src={background.url}
        alt="Hero Image Background"
        width="1440"
        height="835"
        className="absolute left-0 top-0 z-[-1] h-full object-cover object-left"
      />
    </div>
  );
};

export default Hero;
