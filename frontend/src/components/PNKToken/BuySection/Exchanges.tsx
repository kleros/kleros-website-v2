import { Exchange } from "@/queries/pnk-token/token-buy";
import { hoverEffect } from "@/styles";
import Image from "next/image";
import Link from "next/link";

interface IExchanges {
  exchanges: Exchange[];
}

const Exchanges: React.FC<IExchanges> = ({ exchanges }) => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 md:gap-16 lg:gap-20 mb-8 md:mb-0">
      {exchanges.map((exchange) => (
        <Link
          href={exchange.url}
          target="_blank"
          rel="noopener noreferrer"
          key={exchange.name}
        >
          <Image
            width={64}
            height={64}
            src={exchange.icon.url}
            alt={exchange.name}
            className={hoverEffect}
          />
        </Link>
      ))}
    </div>
  );
};

export default Exchanges;
