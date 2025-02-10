import type { Metadata } from "next";

import IntegrateSection from "@/components/IntegrateSection";
import { request } from "@/utils/graphQLClient";

import CaseStudies from "./components/CaseStudies";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import HowKlerosWorks from "./components/HowKlerosWorks";
import LearnPosts from "./components/LearnPosts";
import StartEarning from "./components/StartEarning";
import TrustedBy from "./components/TrustedBy";
import UseCases from "./components/UseCases";
import { HeroQueryType, heroQuery } from "./queries/hero";

export const generateMetadata = async (): Promise<Metadata> => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const { title, subtitle, background } = heroData.homePageHero;
  return {
    title,
    description: subtitle,
    openGraph: {
      title,
      description: subtitle,
      images: background.url,
    },
  };
};

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
