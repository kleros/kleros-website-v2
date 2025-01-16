import TrustedBy from "@/components/TrustedBy";
import UseCasesCards from "@/components/UseCasesCards";

import CaseStudies from "./components/CaseStudies";
import Hero from "./components/Hero";
import HowKlerosWorks from "./components/HowKlerosWorks";

const Home: React.FC = async () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowKlerosWorks />
      <CaseStudies />
      <UseCasesCards />
    </>
  );
};

export default Home;
