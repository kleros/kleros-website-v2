import Hero from "@/components/Earn/Hero";
import TabSection from "@/components/Earn/TabSection";
import { heroQuery, HeroQueryType } from "@/queries/earn/hero";
import { tabSectionQuery, TabSectionQueryType } from "@/queries/earn/tabs-data";
import { request } from "@/utils/graphQLClient";

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
