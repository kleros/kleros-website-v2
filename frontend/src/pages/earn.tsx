import Hero from "@/components/Earn/Hero";
import TabSection from "@/components/Earn/TabSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { heroQuery, HeroQueryType } from "@/queries/earn/hero";
import { tabSectionQuery, TabSectionQueryType } from "@/queries/earn/tabs-data";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import { graphQLClient } from "@/utils/graphQLClient";

interface IEarn {
  navbarData: NavbarQueryType;
  footerData: FooterQueryType;
  heroData: HeroQueryType;
  tabsData: TabSectionQueryType
}

const Earn: React.FC<IEarn> = ({
  footerData,
  heroData,
  tabsData,
  navbarData,
}) => {
  return (
    <div>
      <Navbar {...{ navbarData }} />
      <Hero {...{heroData}}/>
      <TabSection {...{tabsData}}/>
      <Footer {...{ footerData }} />
    </div>
  );
};

export const getStaticProps = async () => {
  const navbarData = await graphQLClient.request<NavbarQueryType>(navbarQuery);
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);
  const tabsData = await graphQLClient.request<TabSectionQueryType>(tabSectionQuery);

  return {
    props: {
      navbarData,
      footerData,
      heroData: heroData,
      tabsData
    },
  };
};

export default Earn;
