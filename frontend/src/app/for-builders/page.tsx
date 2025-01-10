import Hero from "@/components/ForBuilders/Hero";
import IntegrateSection from "@/components/ForBuilders/IntegrateSection";
import UseCasesSection from "@/components/ForBuilders/UseCasesSection";
import { heroQuery, HeroQueryType } from "@/queries/for-builders/hero";
import {
  integrateQuery,
  IntegrateQueryType,
} from "@/queries/for-builders/integrate";
import {
  useCasesQuery,
  UseCasesQueryType,
} from "@/queries/for-builders/use-cases";
import { graphQLClient } from "@/utils/graphQLClient";

const ForBuilders: React.FC = async () => {
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);
  const useCasesData =
    await graphQLClient.request<UseCasesQueryType>(useCasesQuery);
  const integrateData =
    await graphQLClient.request<IntegrateQueryType>(integrateQuery);

  return (
    <>
      <Hero {...{ heroData: heroData.forBuildersPageHero }} />
      <UseCasesSection
        {...{ useCasesData: useCasesData.forBuildersPageUseCasesSection }}
      />
      <IntegrateSection
        {...{ integrateData: integrateData.forBuildersPageIntegrateSection }}
      />
    </>
  );
};

export default ForBuilders;
