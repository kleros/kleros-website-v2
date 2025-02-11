import type { Metadata } from "next";

import Hero from "@/components/Cooperative/hero";
import MemberSection from "@/components/Cooperative/MemberSection";
import ReportSection from "@/components/Cooperative/ReportSection";
import { heroQuery, HeroQueryType } from "@/queries/cooperative/hero";
import {
  cooperativePageMemberQuery,
  CooperativePageMemberQueryType,
} from "@/queries/cooperative/member-section";
import {
  cooperativePageReportQuery,
  CooperativePageReportQueryType,
} from "@/queries/cooperative/report-section";
import { seoQuery, SEOQueryType } from "@/queries/seo";
import { request } from "@/utils/graphQLClient";

export const generateMetadata = async (): Promise<Metadata> => {
  const seoData = await request<SEOQueryType>(seoQuery);
  const { title, description, image } = seoData.cooperativePageSeo.SEO;
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

const Cooperative: React.FC = async () => {
  const heroData = await request<HeroQueryType>(heroQuery);
  const reportData = await request<CooperativePageReportQueryType>(
    cooperativePageReportQuery,
  );
  const memberSectionData = await request<CooperativePageMemberQueryType>(
    cooperativePageMemberQuery,
  );

  return (
    <>
      <Hero heroData={heroData.cooperativePageHero} />
      <ReportSection reportsData={reportData} />
      <MemberSection
        memberData={memberSectionData.cooperativePageMemberSection}
      />
    </>
  );
};

export default Cooperative;
