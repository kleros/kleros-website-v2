import type { Metadata } from "next";

import { seoQuery, SEOQueryType } from "@/queries/seo";
import { request } from "@/utils/graphQLClient";

type PageKey = keyof SEOQueryType;

export const getPageMetadata = async (pageKey: PageKey): Promise<Metadata> => {
  const seoData = await request<SEOQueryType>(seoQuery);
  const { title, description, image } = seoData[pageKey].SEO;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image.url,
    },
  };
};
