import Hero from "./components/Hero";
import KlerosDisputeResolutionSection from "./components/KlerosDisputeResolutionSection";
import KlerosEnterpriseSection from "./components/KlerosEnterpriseSection";
import KlerosFellowSection from "./components/KlerosFellowSection";
import KlerosMediationSection from "./components/KlerosMediationSection";
import KlerosParticipateSection from "./components/KlerosParticipateSection";

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
