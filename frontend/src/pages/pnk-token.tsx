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

interface IPNKtoken {
  navbarData: NavbarQueryType;
  footerData: FooterQueryType;
  heroData: HeroQueryType;
  buyData: BuySectionQueryType["pnkTokenPageBuySection"];
  tokenNeedData: TokenNeedSectionQueryType["pnkTokenPageNeedSection"];
  tokenomicsData: TokenomicsSectionQueryType["pnkTokenPageTokenomicsSection"];
}

const PNKToken: React.FC<IPNKtoken> = ({
  footerData,
  heroData,
  buyData,
  tokenNeedData,
  tokenomicsData,
  navbarData,
}) => {
  return (
    <div>
      <Navbar {...{ navbarData }} />
      <Hero {...{ heroData }} />
      <BuySection {...{ buyData }} />
      <TokenNeedSection {...{ tokenNeedData }} />
      <TokenomicsSection {...{ tokenomicsData }} />
      <Footer {...{ footerData }} />
    </div>
  );
};

export const getStaticProps = async () => {
  const navbarData = await graphQLClient.request<NavbarQueryType>(navbarQuery);

  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);
  const buyData = await graphQLClient.request<BuySectionQueryType>(
    buySectionQuery
  );
  const tokenNeedData = await graphQLClient.request<TokenNeedSectionQueryType>(
    tokenNeedSectionQuery
  );
  const tokenomicsData =
    await graphQLClient.request<TokenomicsSectionQueryType>(
      tokenomicsSectionQuery
    );

  return {
    props: {
      navbarData,
      footerData,
      heroData,
      buyData: buyData.pnkTokenPageBuySection,
      tokenNeedData: tokenNeedData.pnkTokenPageNeedSection,
      tokenomicsData: tokenomicsData.pnkTokenPageTokenomicsSection,
    },
  };
};

export default PNKToken;
