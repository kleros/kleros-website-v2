import Footer from "@/components/Footer";
import Hero from "@/components/ForBuilders/Hero";
import Navbar from "@/components/Navbar";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import { heroQuery, HeroQueryType } from "@/queries/for-builders/hero";
import { graphQLClient } from "@/utils/graphQLClient";

interface IForBuilders {
  navbarData: NavbarQueryType;
  footerData: FooterQueryType;
  heroData: HeroQueryType["forBuildersPageHero"];
}

const ForBuilders: React.FC<IForBuilders> = ({
  footerData,
  heroData,
  navbarData,
}) => {
  return (
    <div>
      <Navbar {...{ navbarData }} />
      <Hero {...{ heroData }} />
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
      heroData: heroData.forBuildersPageHero,
    },
  };
};

export default ForBuilders;
