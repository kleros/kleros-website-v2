import IntegrateSection from "@/components/IntegrateSection";
import TrustedBy from "@/components/TrustedBy";

import CaseStudies from "./components/CaseStudies";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import HowKlerosWorks from "./components/HowKlerosWorks";
import LearnPosts from "./components/LearnPosts";
import StartEarning from "./components/StartEarning";
import UseCases from "./components/UseCases";

const Home: React.FC = async () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowKlerosWorks />
      <CaseStudies />
      <UseCases />
      <LearnPosts />
      <IntegrateSection />
      <StartEarning />
      <GetInTouch />
    </>
  );
};

export default Home;
