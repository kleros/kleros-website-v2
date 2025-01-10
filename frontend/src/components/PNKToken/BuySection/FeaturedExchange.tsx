import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Exchange } from "@/queries/pnk-token/token-buy";
import { hoverEffect } from "@/styles";

interface IFeaturedExchange {
  exchange: Exchange;
}
const FeaturedExchange: React.FC<IFeaturedExchange> = ({ exchange }) => {
  return (
    <Link href={exchange.url} target="_blank" rel="noopener noreferrer">
      <div
        className={clsx(
          "flex h-40 flex-col items-center justify-center gap-5 rounded-2xl border border-stroke px-2",
          hoverEffect,
        )}
      >
        <div className="relative h-16 w-60">
          <Image src={exchange.icon.url} alt={exchange.name} fill />
        </div>

        <p className="text-secondary-text">{exchange.name}</p>
      </div>
    </Link>
  );
};

export default FeaturedExchange;
