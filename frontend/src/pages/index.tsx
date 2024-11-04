import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/TrustedBy";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { heroQuery, HeroQueryType } from "@/queries/home/hero";
import { partnersQuery, PartnersQueryType } from "@/queries/partners";
import { graphQLClient } from "@/utils/graphQLClient";

interface IHome {
  partnersData: PartnersQueryType;
  footerData: FooterQueryType;
  heroData: HeroQueryType["homePageHero"];
}

const Home: React.FC<IHome> = ({ partnersData, footerData, heroData }) => {
  return (
    <div>
      <Hero {...{ heroData }} />
      <TrustedBy {...{ partnersData }}/>
      <Footer {...{ footerData }}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const partnersData = await graphQLClient.request<PartnersQueryType>(
    partnersQuery
  );
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);
  return {
    props: {
      partnersData,
      footerData,
      heroData: heroData.homePageHero,
    }
  };
};

export default Home;
