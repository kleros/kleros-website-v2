import type { Metadata } from "next";

import { getPageMetadata } from "@/utils/seo";

import Communities from "./components/Communities";
import Hero from "./components/Hero";

export const generateMetadata = async (): Promise<Metadata> => {
  return await getPageMetadata("communityPageSeo");
};

const Community: React.FC = async () => {
  return (
    <>
      <Hero />
      <Communities />
    </>
  );
};

export default Community;
