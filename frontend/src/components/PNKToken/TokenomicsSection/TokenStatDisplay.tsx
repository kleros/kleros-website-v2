import Image from "next/image";

import { TokenStatDisplay as ITokenStatDisplay } from "@/queries/pnk-token/tokenomics";


import Stat from "./Stat";

const TokenStatDisplay: React.FC<ITokenStatDisplay> = ({ icon, stats }) => {
  return (
    <div className="bg-background-1 md:w-fit flex flex-col gap-8 md:flex-row rounded-2xl md:rounded-full p-6 md:p-4 md:pr-8">
      <Image
        src={icon.url}
        alt="icon"
        width={90}
        height={90}
        className="object-contain"
      />
      {stats.map((stat) => (
        <Stat
          label={stat.key}
          primaryValue={stat.primaryValue}
          secondaryValue={stat.secondaryValue}
          key={stat.key}
        />
      ))}
    </div>
  );
};
export default TokenStatDisplay;
