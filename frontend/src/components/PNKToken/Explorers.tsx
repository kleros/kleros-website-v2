import Image from "next/image";

import { HeroQueryType } from "@/queries/pnk-token/hero";

import CustomLink from "../CustomLink";

interface IExplorers {
  explorers: HeroQueryType["tokenExplorers"];
}

const Explorers: React.FC<IExplorers> = ({ explorers }) => {
  return (
    <div className="flex flex-wrap gap-6 pb-2 lg:gap-12 lg:pb-1">
      {explorers.map((explorer) => (
        <CustomLink
          key={explorer.name}
          href={explorer.url}
          className="relative block h-6 min-w-32 items-start"
        >
          <Image
            src={explorer.icon.url}
            fill
            alt={explorer.name}
            className="w-min!"
          />
        </CustomLink>
      ))}
    </div>
  );
};

export default Explorers;
