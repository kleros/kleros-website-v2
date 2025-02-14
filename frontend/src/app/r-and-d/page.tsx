import type { Metadata } from "next";

import Hero from "@/components/ResearchDevelopment/Hero";
import TabSection from "@/components/ResearchDevelopment/TabSection";
import { heroQuery, HeroQueryType } from "@/queries/research-development/hero";
import {
  tabSectionQuery,
  TabSectionQueryType,
} from "@/queries/research-development/tabs-data";
import { request } from "@/utils/graphQLClient";
import { getPageMetadata } from "@/utils/seo";

export const generateMetadata = async (): Promise<Metadata> => {
  return getPageMetadata("rAndDPageSeo");
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
