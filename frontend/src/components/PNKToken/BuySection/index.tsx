import { BuySectionQueryType } from "@/queries/pnk-token/token-buy";

import Exchanges from "./Exchanges";
import FeaturedExchange from "./FeaturedExchange";

interface IBuySection {
  buyData: BuySectionQueryType["pnkTokenPageBuySection"];
}

const BuySection: React.FC<IBuySection> = ({ buyData }) => {
  return (
    <div className="bg-background-2 px-6 py-12 lg:px-32 lg:py-24">
      <h1 className="mb-16 text-2xl font-medium text-primary-text lg:text-3xl">
        {buyData.header}
      </h1>
      <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {buyData.featuredExchanges.map((exchange) => (
          <FeaturedExchange key={exchange.name} {...{ exchange }} />
        ))}
      </div>
      <Exchanges exchanges={buyData.exchanges} />
    </div>
  );
};

export default BuySection;
