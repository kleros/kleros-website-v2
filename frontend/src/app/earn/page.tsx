import type { Metadata } from "next";

import { getPageMetadata } from "@/utils/seo";

import Hero from "./components/Hero";
import TabSection from "./components/TabSection";

export const generateMetadata = async (): Promise<Metadata> => {
  return await getPageMetadata("earnPageSeo");
};

const Earn: React.FC = async () => {
  return (
    <>
      <Hero />
      <TabSection />
    </>
  );
};

export default Earn;
