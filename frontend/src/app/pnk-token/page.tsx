import type { Metadata } from "next";

import BuySection from "@/components/PNKToken/BuySection";
import Hero from "@/components/PNKToken/Hero";
import TokenNeedSection from "@/components/PNKToken/TokenNeedSection";
import TokenomicsSection from "@/components/PNKToken/TokenomicsSection";
import { heroQuery, HeroQueryType } from "@/queries/pnk-token/hero";
import {
  buySectionQuery,
  BuySectionQueryType,
} from "@/queries/pnk-token/token-buy";
import {
  tokenNeedSectionQuery,
  TokenNeedSectionQueryType,
} from "@/queries/pnk-token/token-need";
import {
  TokenomicsSectionQueryType,
  tokenomicsSectionQuery,
} from "@/queries/pnk-token/tokenomics";
import { request } from "@/utils/graphQLClient";
import { getPageMetadata } from "@/utils/seo";

export const generateMetadata = async (): Promise<Metadata> => {
  return await getPageMetadata("pnkTokenPageSeo");
};

const PNKToken: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const buyData = await request<BuySectionQueryType>(buySectionQuery);
  const tokenNeedData = await request<TokenNeedSectionQueryType>(
    tokenNeedSectionQuery,
  );
  const tokenomicsData = await request<TokenomicsSectionQueryType>(
    tokenomicsSectionQuery,
  );

  return (
    <>
      <Hero {...{ heroData }} />
      <BuySection {...{ buyData: buyData.pnkTokenPageBuySection }} />
      <TokenNeedSection
        {...{ tokenNeedData: tokenNeedData.pnkTokenPageNeedSection }}
      />
      <TokenomicsSection
        {...{ tokenomicsData: tokenomicsData.pnkTokenPageTokenomicsSection }}
      />
    </>
  );
};

export default PNKToken;
