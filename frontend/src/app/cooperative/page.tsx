import type { Metadata } from "next";

import { getPageMetadata } from "@/utils/seo";

import Hero from "./components/Hero";
import MemberSection from "./components/MemberSection";
import Reports from "./components/Reports";

export const generateMetadata = async (): Promise<Metadata> => {
  return await getPageMetadata("cooperativePageSeo");
};

const Cooperative: React.FC = async () => {
  return (
    <>
      <Hero />
      <Reports />
      <MemberSection />
    </>
  );
};

export default Cooperative;
