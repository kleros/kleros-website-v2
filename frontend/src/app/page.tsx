import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import TrustedBy from "@/components/TrustedBy";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { heroQuery, HeroQueryType } from "@/queries/home/hero";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import { partnersQuery, PartnersQueryType } from "@/queries/partners";
import { graphQLClient } from "@/utils/graphQLClient";

const Home: React.FC = async () => {
  const navbarData = await graphQLClient.request<NavbarQueryType>(navbarQuery);
  const partnersData =
    await graphQLClient.request<PartnersQueryType>(partnersQuery);
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);

  return (
    <div>
      <Navbar {...{ navbarData }} />
      <Hero {...{ heroData: heroData.homePageHero }} />
      <TrustedBy {...{ partnersData }} />
      <Footer {...{ footerData }} />
    </div>
  );
};

export default Home;
