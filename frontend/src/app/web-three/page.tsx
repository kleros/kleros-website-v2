import type { Metadata } from "next";

import Hero from "@/components/ForBuilders/Hero";
import UseCasesSection from "@/components/ForBuilders/UseCasesSection";
import { heroQuery, HeroQueryType } from "@/queries/for-builders/hero";
import {
  useCasesQuery,
  UseCasesQueryType,
} from "@/queries/for-builders/use-cases";
import { request } from "@/utils/graphQLClient";
import { getPageMetadata } from "@/utils/seo";

import KlerosParticipateSection from "./components/KlerosParticipateSection";

export const generateMetadata = async (): Promise<Metadata> => {
  return await getPageMetadata("forBuildersPageSeo");
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
      <KlerosParticipateSection />
    </>
  );
};

export default ForBuilders;
