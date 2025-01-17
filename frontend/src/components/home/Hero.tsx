import React from "react";

import Image from "next/image";
import Link from "next/link";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/home/hero";

interface IHero {
  heroData: HeroQueryType["homePageHero"];
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  return (
    <div className="relative h-[835px] px-6 pb-28 pt-44">
      <div className="space-y-6">
        <h1 className="w-min text-3xl">{heroData.title}</h1>
        <p className="text-lg">{heroData.subtitle}</p>
        <div className="lg:hidden">
          <Link
            href={heroData.primaryButton.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <span className="text-background-2">
                {heroData.primaryButton.text}
              </span>
            </Button>
          </Link>
        </div>
        <div>
          <Link
            href={heroData.secondaryButton.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              <span>{heroData.secondaryButton.text}</span>
            </Button>
          </Link>
        </div>
        <div>
          <Link
            href={heroData.arrowLink.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-4">{heroData.arrowLink.text}</span>
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
        src={heroData.background.url}
        alt="Hero Image Background"
        width="1440"
        height="835"
        priority
        className="absolute left-0 top-0 z-[-1] h-full object-cover object-left"
      />
    </div>
  );
};

export default Hero;
