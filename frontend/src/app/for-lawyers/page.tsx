import type { Metadata } from "next";

import { seoQuery, SEOQueryType } from "@/queries/seo";
import { request } from "@/utils/graphQLClient";

import Hero from "./components/Hero";
import KlerosDisputeResolutionSection from "./components/KlerosDisputeResolutionSection";
import KlerosEnterpriseSection from "./components/KlerosEnterpriseSection";
import KlerosFellowSection from "./components/KlerosFellowSection";
import KlerosMediationSection from "./components/KlerosMediationSection";
import KlerosParticipateSection from "./components/KlerosParticipateSection";

export const generateMetadata = async (): Promise<Metadata> => {
  const seoData = await request<SEOQueryType>(seoQuery);
  const { title, description, image } = seoData.forLawyersPageSeo.SEO;
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

const ForLawyers: React.FC = async () => {
  return (
    <>
      <Hero />
      <KlerosEnterpriseSection />
      <KlerosMediationSection />
      <KlerosDisputeResolutionSection />
      <KlerosParticipateSection />
      <KlerosFellowSection />
    </>
  );
};

export default ForLawyers;
