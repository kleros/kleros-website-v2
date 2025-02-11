import type { Metadata } from "next";

import Hero from "@/components/Earn/Hero";
import TabSection from "@/components/Earn/TabSection";
import { heroQuery, HeroQueryType } from "@/queries/earn/hero";
import { tabSectionQuery, TabSectionQueryType } from "@/queries/earn/tabs-data";
import { seoQuery, SEOQueryType } from "@/queries/seo";
import { request } from "@/utils/graphQLClient";

export const generateMetadata = async (): Promise<Metadata> => {
  const seoData = await request<SEOQueryType>(seoQuery);
  const { title, description, image } = seoData.earnPageSeo.SEO;
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

const Earn: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const tabsData = await request<TabSectionQueryType>(tabSectionQuery);

  return (
    <>
      <Hero {...{ heroData }} />
      <TabSection {...{ tabsData }} />
    </>
  );
};

export default Earn;
