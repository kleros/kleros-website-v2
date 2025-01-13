import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/TrustedBy";
import { heroQuery, HeroQueryType } from "@/queries/home/hero";
import { partnersQuery, PartnersQueryType } from "@/queries/partners";
import { request } from "@/utils/graphQLClient";

const Home: React.FC = async () => {
  const partnersData = await request<PartnersQueryType>(partnersQuery);
  const heroData = await request<HeroQueryType>(heroQuery);

  return (
    <>
      <Hero {...{ heroData: heroData.homePageHero }} />
      <TrustedBy {...{ partnersData }} />
    </>
  );
};

export default Home;
