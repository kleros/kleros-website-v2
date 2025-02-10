"use client";
import { useScreenSize } from "@/hooks/useScreenSize";

import { HeroQueryType } from "../queries/hero";

const TokenStats: React.FC<{
  tokenStats: HeroQueryType["homePageHero"]["tokenStats"];
}> = ({ tokenStats }) => {
  const screenSize = useScreenSize();
  return screenSize === "lg" ? (
    <div className="flex flex-wrap gap-16 pt-28">
      {tokenStats.map(({ key, primaryValue, secondaryValue }) => (
        <div key={key} className="flex flex-col">
          <div className="flex flex-row">
            <h3 className="text-2xl font-medium">{primaryValue}</h3>
            <h3 className="text-primary-blue text-2xl">{secondaryValue}</h3>
          </div>
          <p className="font-medium">{key}</p>
        </div>
      ))}
    </div>
  ) : null;
};

export default TokenStats;
