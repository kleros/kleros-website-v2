import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BuySection from "@/components/PNKToken/BuySection";
import Hero from "@/components/PNKToken/Hero";
import TokenNeedSection from "@/components/PNKToken/TokenNeedSection";
import TokenomicsSection from "@/components/PNKToken/TokenomicsSection";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
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
import { graphQLClient } from "@/utils/graphQLClient";

const PNKToken: React.FC = async () => {
  const navbarData = await graphQLClient.request<NavbarQueryType>(navbarQuery);
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);
  const buyData =
    await graphQLClient.request<BuySectionQueryType>(buySectionQuery);
  const tokenNeedData = await graphQLClient.request<TokenNeedSectionQueryType>(
    tokenNeedSectionQuery,
  );
  const tokenomicsData =
    await graphQLClient.request<TokenomicsSectionQueryType>(
      tokenomicsSectionQuery,
    );
  return (
    <div>
      <Navbar {...{ navbarData }} />
      <Hero {...{ heroData }} />
      <BuySection {...{ buyData: buyData.pnkTokenPageBuySection }} />
      <TokenNeedSection
        {...{ tokenNeedData: tokenNeedData.pnkTokenPageNeedSection }}
      />
      <TokenomicsSection
        {...{ tokenomicsData: tokenomicsData.pnkTokenPageTokenomicsSection }}
      />
      <Footer {...{ footerData }} />
    </div>
  );
};

export default PNKToken;
