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
import { graphQLClient } from "@/utils/graphQLClient";

const Cooperative: React.FC = async () => {
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);
  const reportData =
    await graphQLClient.request<CooperativePageReportQueryType>(
      cooperativePageReportQuery,
    );
  const memberSectionData =
    await graphQLClient.request<CooperativePageMemberQueryType>(
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
