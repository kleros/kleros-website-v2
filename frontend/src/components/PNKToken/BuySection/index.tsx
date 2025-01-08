import { BuySectionQueryType } from "@/queries/pnk-token/token-buy";

import Exchanges from "./Exchanges";
import FeaturedExchange from "./FeaturedExchange";


interface IBuySection {
  buyData: BuySectionQueryType["pnkTokenPageBuySection"];
}

const BuySection: React.FC<IBuySection> = ({ buyData }) => {
  return (
    <div className="bg-background-2 py-12 lg:py-24 px-6 lg:px-32">
      <h1 className="text-2xl lg:text-3xl text-primary-text font-medium mb-16">
        {buyData.header}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {buyData.featuredExchanges.map((exchange) => (
          <FeaturedExchange key={exchange.name} {...{ exchange }} />
        ))}
      </div>
     <Exchanges exchanges={buyData.exchanges}/>
    </div>
  );
};

export default BuySection;
