import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/TrustedBy";
import { heroQuery, HeroQueryType } from "@/queries/home/hero";
import { request } from "@/utils/graphQLClient";

const Home: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);

  return (
    <>
      <Hero {...{ heroData: heroData.homePageHero }} />
      <TrustedBy />
    </>
  );
};

export default Home;
