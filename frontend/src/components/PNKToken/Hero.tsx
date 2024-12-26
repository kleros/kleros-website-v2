import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/pnk-token/hero";

interface IHero {
  heroData: HeroQueryType["pnkTokenPageHero"];
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  return (
    <div className="relative pt-32 lg:pt-52 pb-56 px-6 lg:px-32">
      <div className="space-y-8">
        <h1 className="text-3xl lg:text-4xl font-medium">{heroData.header}</h1>
        <p className="text-lg">{heroData.subtitle}</p>
        <div>
          <Link
            href={heroData.buyButton.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              <span>{heroData.buyButton.text}</span>
            </Button>
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 lg:gap-12 space-x-2">
          {heroData.socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-6 min-w-32"
            >
              <Image
                src={social.icon.url}
                fill
                alt="social link image"
              />
            </Link>
          ))}
        </div>
      </div>
      <Image
        src={heroData.background.url}
        alt="Hero Image Background"
        fill
        className="absolute top-0 left-0 h-full z-[-1] object-cover"
      />
    </div>
  );
};

export default Hero;
