import Footer from "@/components/Footer";
import Hero from "@/components/ForBuilders/Hero";
import IntegrateSection from "@/components/ForBuilders/IntegrateSection";
import UseCasesSection from "@/components/ForBuilders/UseCasesSection";
import Navbar from "@/components/Navbar";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { heroQuery, HeroQueryType } from "@/queries/for-builders/hero";
import {
  integrateQuery,
  IntegrateQueryType,
} from "@/queries/for-builders/integrate";
import {
  useCasesQuery,
  UseCasesQueryType,
} from "@/queries/for-builders/use-cases";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import { graphQLClient } from "@/utils/graphQLClient";

interface IForBuilders {
  navbarData: NavbarQueryType;
  footerData: FooterQueryType;
  heroData: HeroQueryType["forBuildersPageHero"];
  useCasesData: UseCasesQueryType["forBuildersPageUseCasesSection"];
  integrateData: IntegrateQueryType["forBuildersPageIntegrateSection"];
}

const ForBuilders: React.FC<IForBuilders> = ({
  footerData,
  heroData,
  navbarData,
  useCasesData,
  integrateData,
}) => {
  return (
    <div>
      <Navbar {...{ navbarData }} />
      <Hero {...{ heroData }} />
      <UseCasesSection {...{ useCasesData }} />
      <IntegrateSection {...{ integrateData }} />
      <Footer {...{ footerData }} />
    </div>
  );
};

export const getStaticProps = async () => {
  const navbarData = await graphQLClient.request<NavbarQueryType>(navbarQuery);
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);
  const useCasesData = await graphQLClient.request<UseCasesQueryType>(
    useCasesQuery
  );
  const integrateData = await graphQLClient.request<IntegrateQueryType>(
    integrateQuery
  );

  return {
    props: {
      navbarData,
      footerData,
      heroData: heroData.forBuildersPageHero,
      useCasesData: useCasesData.forBuildersPageUseCasesSection,
      integrateData: integrateData.forBuildersPageIntegrateSection,
    },
  };
};

export default ForBuilders;
