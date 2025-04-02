import type { Metadata } from "next";

import { getPageMetadata } from "@/utils/seo";

import CaseStudies from "./components/CaseStudies";
import Enterprise from "./components/Enterprise";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import HowKlerosWorks from "./components/HowKlerosWorks";
import LearnPosts from "./components/LearnPosts";
import StartEarning from "./components/StartEarning";
import TrustedBy from "./components/TrustedBy";
import Web3 from "./components/Web3";

export const generateMetadata = async (): Promise<Metadata> => {
  return await getPageMetadata("homePageSeo");
};

const Home: React.FC = async () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <LearnPosts />
      <HowKlerosWorks />
      <Web3 />
      <Enterprise />
      <CaseStudies />
      <StartEarning />
      <GetInTouch />
    </>
  );
};

export default Home;
