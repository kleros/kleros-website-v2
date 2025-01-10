import CommunitiesSection from "@/components/Community/CommunitiesSection";
import Hero from "@/components/Community/hero";
import { heroQuery, HeroQueryType } from "@/queries/community/hero";
import { graphQLClient } from "@/utils/graphQLClient";

const Community: React.FC = async () => {
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);

  return (
    <>
      <Hero heroData={heroData.communityPageHero} />
      <CommunitiesSection communities={heroData.communities} />
    </>
  );
};

export default Community;
