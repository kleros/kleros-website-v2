import Hero from "@/components/Earn/Hero";
import TabSection from "@/components/Earn/TabSection";
import { heroQuery, HeroQueryType } from "@/queries/earn/hero";
import { tabSectionQuery, TabSectionQueryType } from "@/queries/earn/tabs-data";
import { graphQLClient } from "@/utils/graphQLClient";

const Earn: React.FC = async () => {
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);
  const tabsData =
    await graphQLClient.request<TabSectionQueryType>(tabSectionQuery);

  return (
    <>
      <Hero {...{ heroData }} />
      <TabSection {...{ tabsData }} />
    </>
  );
};

export default Earn;
