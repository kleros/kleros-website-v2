import type { Metadata } from "next";

import CommunitiesSection from "@/components/Community/CommunitiesSection";
import Hero from "@/components/Community/hero";
import { heroQuery, HeroQueryType } from "@/queries/community/hero";
import { request } from "@/utils/graphQLClient";
import { getPageMetadata } from "@/utils/seo";

export const generateMetadata = async (): Promise<Metadata> => {
  return await getPageMetadata("communityPageSeo");
};

const Community: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);

  return (
    <>
      <Hero heroData={heroData.communityPageHero} />
      <CommunitiesSection communities={heroData.communities} />
    </>
  );
};

export default Community;
