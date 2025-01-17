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
    <div className="relative px-6 pb-52 pt-44 lg:px-32 lg:pb-56 lg:pt-52">
      <div className="space-y-8">
        <h1 className="pt-1 text-3xl font-medium lg:pt-3 lg:text-4xl">
          {header}
        </h1>
        <p className="max-w-[685px] text-lg">{subtitle}</p>
        <div className="flex flex-wrap items-center gap-6">
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
          className="lg:pb-6 [&>span]:text-base [&>span]:text-primary-text"
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
