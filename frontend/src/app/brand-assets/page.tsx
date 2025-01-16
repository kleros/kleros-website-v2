import Hero from "@/components/BrandAssets/Hero";
// import TabSection from "@/components/BrandAssets/TabSection";
import { heroQuery, HeroQueryType } from "@/queries/brand-assets/hero";
// import { tabSectionQuery, TabSectionQueryType } from "@/queries/brand-assets/tabs-data";
import { request } from "@/utils/graphQLClient";

const BrandAssets: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  // const tabsData = await request<TabSectionQueryType>(tabSectionQuery);

  return (
    <>
      <Hero {...{ heroData: heroData.brandAssetsPageHero }} />
      {/* <TabSection {...{ tabsData }} /> */}
    </>
  );
};

export default BrandAssets;
