import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import ExternalLink from "@/components/ExternalLink";
import { HeroQueryType } from "@/queries/cooperative/hero";

interface IHero {
  heroData: HeroQueryType["cooperativePageHero"];
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  const { header, subtitle, buttons, arrowLink, background } = heroData;
  return (
    <div className="relative pt-44 lg:pt-52 pb-52 lg:pb-56 px-6 lg:px-32">
      <div className="space-y-8">
        <h1 className="text-3xl lg:text-4xl font-medium pt-1 lg:pt-3">
          {header}
        </h1>
        <p className="text-lg max-w-[685px]">{subtitle}</p>
        <div className="flex flex-wrap gap-6 items-center">
          {buttons.map((button) => (
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
        <ExternalLink
          url={arrowLink.link.url}
          text={arrowLink.text}
          className="[&>span]:text-primary-text [&>span]:text-base lg:pb-6"
        />
      </div>
      <Image
        src={background.url}
        alt="Hero Image Background"
        fill
        className="absolute top-0 left-0 h-full z-[-1] object-cover"
      />
    </div>
  );
};

export default Hero;
