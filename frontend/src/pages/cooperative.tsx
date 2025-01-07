import Hero from "@/components/Cooperative/hero";
import MemberSection from "@/components/Cooperative/MemberSection";
import ReportSection from "@/components/Cooperative/ReportSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { heroQuery, HeroQueryType } from "@/queries/cooperative/hero";
import { cooperativePageMemberQuery, CooperativePageMemberQueryType } from "@/queries/cooperative/member-section";
import {
  cooperativePageReportQuery,
  CooperativePageReportQueryType,
} from "@/queries/cooperative/report-section";
import { footerQuery, FooterQueryType } from "@/queries/footer";
import { navbarQuery, NavbarQueryType } from "@/queries/navbar";
import { graphQLClient } from "@/utils/graphQLClient";

interface ICooperative {
  navbarData: NavbarQueryType;
  footerData: FooterQueryType;
  heroData: HeroQueryType["cooperativePageHero"];
  reportData: CooperativePageReportQueryType;
  memberSectionData: CooperativePageMemberQueryType["cooperativePageMemberSection"];
}

const Cooperative: React.FC<ICooperative> = ({
  footerData,
  heroData,
  navbarData,
  reportData,
  memberSectionData
}) => {
  return (
    <div>
      <Navbar {...{ navbarData }} />
      <Hero heroData={heroData} />
      <ReportSection reportsData={reportData}/>
      <MemberSection memberData={memberSectionData}/>
      <Footer {...{ footerData }} />
    </div>
  );
};

export const getStaticProps = async () => {
  const navbarData = await graphQLClient.request<NavbarQueryType>(navbarQuery);
  const footerData = await graphQLClient.request<FooterQueryType>(footerQuery);
  const heroData = await graphQLClient.request<HeroQueryType>(heroQuery);
  const reportData =
    await graphQLClient.request<CooperativePageReportQueryType>(
      cooperativePageReportQuery
    );
  const memberSectionData =
    await graphQLClient.request<CooperativePageMemberQueryType>(
      cooperativePageMemberQuery
    );

  return {
    props: {
      navbarData,
      footerData,
      heroData: heroData.cooperativePageHero,
      reportData,
      memberSectionData: memberSectionData.cooperativePageMemberSection,
    },
  };
};

export default Cooperative;
