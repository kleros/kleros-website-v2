import Image from "next/image";
import Link from "next/link";

import { HeroQueryType } from "@/queries/pnk-token/hero";

interface IExplorers {
  explorers: HeroQueryType["tokenExplorers"];
}

const Explorers: React.FC<IExplorers> = ({ explorers }) => {
  return (
    <div className="flex flex-wrap gap-6 lg:gap-12 pb-2 lg:pb-1">
      {explorers.map((explorer) => (
        <Link
          key={explorer.name}
          href={explorer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative h-6 min-w-32 items-start"
        >
          <Image
            src={explorer.icon.url}
            fill
            alt={explorer.name}
            className="!w-min"
          />
        </Link>
      ))}
    </div>
  );
};

export default Explorers;
