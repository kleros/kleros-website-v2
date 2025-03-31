import type { Metadata } from "next";

import IntegrateSection from "@/components/IntegrateSection";
import { getPageMetadata } from "@/utils/seo";

import CaseStudies from "./components/CaseStudies";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import HowKlerosWorks from "./components/HowKlerosWorks";
import LearnPosts from "./components/LearnPosts";
import StartEarning from "./components/StartEarning";
import TrustedBy from "./components/TrustedBy";

export const generateMetadata = async (): Promise<Metadata> => {
  return await getPageMetadata("homePageSeo");
};

const Home: React.FC = async () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowKlerosWorks />
      <LearnPosts />
      <CaseStudies />
      <IntegrateSection listMode />
      <StartEarning />
      <GetInTouch />
    </>
  );
};

export default Home;
