import Image from "next/image";

import CustomLink from "@/components/CustomLink";
import { Exchange } from "@/queries/pnk-token/token-buy";
import { hoverEffect } from "@/styles";

interface IExchanges {
  exchanges: Exchange[];
}

const Exchanges: React.FC<IExchanges> = ({ exchanges }) => {
  return (
    <div className="mb-8 flex w-full flex-wrap justify-center gap-6 md:mb-0 md:gap-16 lg:gap-20">
      {exchanges.map((exchange) => (
        <CustomLink href={exchange.url} key={exchange.name}>
          <Image
            width={64}
            height={64}
            src={exchange.icon.url}
            alt={exchange.name}
            className={hoverEffect}
          />
        </CustomLink>
      ))}
    </div>
  );
};

export default Exchanges;
