import CommunitiesSection from "@/components/Community/CommunitiesSection";
import Hero from "@/components/Community/hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { heroQuery, HeroQueryType } from "@/queries/community/hero";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import { graphQLClient } from "@/utils/graphQLClient";

interface ICommunity {
  navbarData: NavbarQueryType;
  footerData: FooterQueryType;
  heroData: HeroQueryType;
}

const Community: React.FC<ICommunity> = ({
  footerData,
  heroData,
  navbarData,
}) => {
  return (
    <div>
      <Navbar {...{ navbarData }} />
      <Hero heroData={heroData.communityPageHero} />
      <CommunitiesSection communities={heroData.communities} />
      <Footer {...{ footerData }} />
    </div>
  );
};

export const getStaticProps = async () => {
  const navbarData = await graphQLClient.request<NavbarQueryType>(navbarQuery);
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);

  return {
    props: {
      navbarData,
      footerData,
      heroData: heroData,
    },
  };
};

export default Community;
