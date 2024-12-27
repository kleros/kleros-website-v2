import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import { HeroQueryType } from "@/queries/pnk-token/hero";
import Explorers from "./Explorers";

interface IHero {
  heroData: HeroQueryType;
}

const Hero: React.FC<IHero> = ({ heroData }) => {
    const {header, subtitle, buyButton, background} = heroData.pnkTokenPageHero
  return (
    <div className="relative pt-52 pb-52 lg:pb-56 px-6 lg:px-32">
      <div className="space-y-8">
        <h1 className="text-3xl lg:text-4xl font-medium">{header}</h1>
        <p className="text-lg">{subtitle}</p>
        <div>
          <Link
            href={buyButton.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              <span>{buyButton.text}</span>
            </Button>
          </Link>
        </div>
       <Explorers explorers={heroData.tokenExplorers}/>
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
