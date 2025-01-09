import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import TrustedBy from "@/components/TrustedBy";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { heroQuery, HeroQueryType } from "@/queries/home/hero";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import { partnersQuery, PartnersQueryType } from "@/queries/partners";
import { graphQLClient } from "@/utils/graphQLClient";

interface IHome {
  navbarData: NavbarQueryType;
  partnersData: PartnersQueryType;
  footerData: FooterQueryType;
  heroData: HeroQueryType["homePageHero"];
}

const Home: React.FC<IHome> = ({
  partnersData,
  footerData,
  heroData,
  navbarData,
}) => {
  return (
    <div>
      <Navbar {...{ navbarData }} />
      <Hero {...{ heroData }} />
      <TrustedBy {...{ partnersData }}/>
      <Footer {...{ footerData }}/>
    </div>
  );
};

export const getStaticProps = async () => {
  const navbarData = await graphQLClient.request<NavbarQueryType>(navbarQuery);
  const partnersData = await graphQLClient.request<PartnersQueryType>(
    partnersQuery
  );
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);

  return {
    props: {
      navbarData,
      partnersData,
      footerData,
      heroData: heroData.homePageHero,
    },
  };
};

export default Home;
