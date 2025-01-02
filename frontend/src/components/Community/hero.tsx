import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/community/hero";

interface IHero {
  heroData: HeroQueryType["communityPageHero"];
}

const Hero: React.FC<IHero> = ({ heroData }) => {
  const { header, subtitle, communityButtons, background } =
    heroData;
  return (
    <div className="relative pt-52 pb-[277px] lg:pb-[331px] px-6 lg:px-32">
      <div className="space-y-8">
        <h1 className="text-3xl lg:text-4xl font-medium">{header}</h1>
        <p className="text-lg">{subtitle}</p>
        <div className="flex flex-wrap gap-6 items-center">
          {communityButtons.map((button) => (
            <Link
              key={button.text}
              href={button.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className=" hover:!bg-primary-blue hover:!border-primary-blue hover:!text-background-2">
                <span>{button.text}</span>
              </Button>
            </Link>
          ))}
        </div>
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
