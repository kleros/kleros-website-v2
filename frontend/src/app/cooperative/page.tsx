import Hero from "@/components/Cooperative/hero";
import MemberSection from "@/components/Cooperative/MemberSection";
import ReportSection from "@/components/Cooperative/ReportSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { heroQuery, HeroQueryType } from "@/queries/cooperative/hero";
import {
  cooperativePageMemberQuery,
  CooperativePageMemberQueryType,
} from "@/queries/cooperative/member-section";
import {
  cooperativePageReportQuery,
  CooperativePageReportQueryType,
} from "@/queries/cooperative/report-section";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import { graphQLClient } from "@/utils/graphQLClient";

const Cooperative: React.FC = async () => {
  const navbarData = await graphQLClient.request<NavbarQueryType>(navbarQuery);
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
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
    <div>
      <Navbar {...{ navbarData }} />
      <Hero heroData={heroData.cooperativePageHero} />
      <ReportSection reportsData={reportData} />
      <MemberSection
        memberData={memberSectionData.cooperativePageMemberSection}
      />
      <Footer {...{ footerData }} />
    </div>
  );
};

export default Cooperative;
