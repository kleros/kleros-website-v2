import Image from "next/image";
import Link from "next/link";

import { Exchange } from "@/queries/pnk-token/token-buy";

interface IFeaturedExchange {
  exchange: Exchange;
}
const FeaturedExchange: React.FC<IFeaturedExchange> = ({ exchange }) => {
  return (
    <Link href={exchange.url} target="_blank" rel="noopener noreferrer">
      <div className="h-40 flex flex-col gap-5 items-center justify-center border border-stroke rounded-2xl px-2">
        <div className="relative h-16 w-60">
          <Image
            src={exchange.icon.url}
            alt={exchange.name}
            fill
          />
        </div>

        <p className="text-secondary-text">{exchange.name}</p>
      </div>
    </Link>
  );
};

export default FeaturedExchange;
