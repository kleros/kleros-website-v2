import type { Metadata } from "next";

import { getPageMetadata } from "@/utils/seo";

import Hero from "./components/Hero";
import KlerosDisputeResolutionSection from "./components/KlerosDisputeResolutionSection";
import KlerosEnterpriseSection from "./components/KlerosEnterpriseSection";
import KlerosFellowSection from "./components/KlerosFellowSection";
import KlerosMediationSection from "./components/KlerosMediationSection";
import KlerosParticipateSection from "./components/KlerosParticipateSection";

export const generateMetadata = async (): Promise<Metadata> => {
  return getPageMetadata("forLawyersPageSeo");
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
