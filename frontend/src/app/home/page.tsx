import Head from "next/head";

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

const Home: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const { title, subtitle, background } = heroData.homePageHero;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:image" content={background.url} />
      </Head>
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
