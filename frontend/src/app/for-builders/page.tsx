import type { Metadata } from "next";

import Hero from "@/components/ForBuilders/Hero";
import UseCasesSection from "@/components/ForBuilders/UseCasesSection";
import IntegrateSection from "@/components/IntegrateSection";
import { heroQuery, HeroQueryType } from "@/queries/for-builders/hero";
import {
  useCasesQuery,
  UseCasesQueryType,
} from "@/queries/for-builders/use-cases";
import { seoQuery, SEOQueryType } from "@/queries/seo";
import { request } from "@/utils/graphQLClient";

export const generateMetadata = async (): Promise<Metadata> => {
  const seoData = await request<SEOQueryType>(seoQuery);
  const { title, description, image } = seoData.forBuildersPageSeo.SEO;
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

const ForBuilders: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const useCasesData = await request<UseCasesQueryType>(useCasesQuery);

  return (
    <>
      <Hero {...{ heroData: heroData.forBuildersPageHero }} />
      <UseCasesSection
        {...{ useCasesData: useCasesData.forBuildersPageUseCasesSection }}
      />
      <IntegrateSection />
    </>
  );
};

export default ForBuilders;
