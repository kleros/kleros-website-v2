import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/TrustedBy";
import { heroQuery, HeroQueryType } from "@/queries/home/hero";
import { partnersQuery, PartnersQueryType } from "@/queries/partners";
import { graphQLClient } from "@/utils/graphQLClient";

const Home: React.FC = async () => {
  const partnersData =
    await graphQLClient.request<PartnersQueryType>(partnersQuery);
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);

  return (
    <>
      <Hero {...{ heroData: heroData.homePageHero }} />
      <TrustedBy {...{ partnersData }} />
    </>
  );
};

export default Home;
