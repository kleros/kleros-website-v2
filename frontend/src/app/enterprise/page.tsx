import type { Metadata } from "next";

import { getPageMetadata } from "@/utils/seo";

import Hero from "./components/Hero";
import KlerosDisputeResolutionSection from "./components/KlerosDisputeResolutionSection";
import KlerosEnterpriseSection from "./components/KlerosEnterpriseSection";
// import KlerosMediationSection from "./components/KlerosMediationSection";

export const generateMetadata = async (): Promise<Metadata> => {
  return getPageMetadata("forLawyersPageSeo");
};

const ForLawyers: React.FC = async () => {
  return (
    <>
      <Hero />
      <KlerosEnterpriseSection />
      <KlerosDisputeResolutionSection />
    </>
  );
};

export default ForLawyers;
