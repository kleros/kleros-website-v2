import type { Metadata } from "next";

import CommunitiesSection from "@/components/Community/CommunitiesSection";
import Hero from "@/components/Community/hero";
import { heroQuery, HeroQueryType } from "@/queries/community/hero";
import { seoQuery, SEOQueryType } from "@/queries/seo";
import { request } from "@/utils/graphQLClient";

export const generateMetadata = async (): Promise<Metadata> => {
  const seoData = await request<SEOQueryType>(seoQuery);
  const { title, description, image } = seoData.communityPageSeo.SEO;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image.url,
    },
  };
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
