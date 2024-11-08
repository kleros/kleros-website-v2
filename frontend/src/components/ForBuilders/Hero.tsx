import React from "react";

import Image from "next/image";
import Link from "next/link";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/for-builders/hero";

interface IHero {
  heroData: HeroQueryType["forBuildersPageHero"];
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  return (
    <div className="relative h-[835px] pt-44 pb-28 px-6">
      <div className="space-y-6">
        <h1 className="text-3xl w-min">{heroData.title}</h1>
        <p className="text-lg">{heroData.subtitle}</p>
        <div>
          <Link
            href={heroData.button.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              <span>{heroData.button.text}</span>
            </Button>
          </Link>
        </div>
        <div className="flex flex-wrap gap-4">
          {heroData.arrowLink.map((arrowLink) => (
            <Link
              key={arrowLink.text}
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
          ))}
        </div>
      </div>
      <Image
        src={heroData.background.url}
        alt="Hero Image Background"
        width="1440"
        height="835"
        className="absolute top-0 h-full object-cover object-left left-0 z-[-1]"
      />
    </div>
  );
};

export default Hero;
