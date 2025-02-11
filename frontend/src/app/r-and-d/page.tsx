import type { Metadata } from "next";

import Hero from "@/components/ResearchDevelopment/Hero";
import TabSection from "@/components/ResearchDevelopment/TabSection";
import { heroQuery, HeroQueryType } from "@/queries/research-development/hero";
import {
  tabSectionQuery,
  TabSectionQueryType,
} from "@/queries/research-development/tabs-data";
import { seoQuery, SEOQueryType } from "@/queries/seo";
import { request } from "@/utils/graphQLClient";

export const generateMetadata = async (): Promise<Metadata> => {
  const seoData = await request<SEOQueryType>(seoQuery);
  const { title, description, image } = seoData.rAndDPageSeo.SEO;
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

const ResearchDevelopment: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const tabsData = await request<TabSectionQueryType>(tabSectionQuery);
  return (
    <>
      <Hero {...{ heroData }} />
      <TabSection {...{ tabsData }} />
    </>
  );
};

export default ResearchDevelopment;
