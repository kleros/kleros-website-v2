import ExternalLink from "@/components/ExternalLink";
import LearnMore from "@/components/LearnMore";
import { CooperativePageMemberQueryType } from "@/queries/cooperative/member-section";

interface IMemberSection {
  memberData: CooperativePageMemberQueryType["cooperativePageMemberSection"];
}

const MemberSection: React.FC<IMemberSection> = ({ memberData }) => {
  return (
    <div className="bg-background-1 px-6 py-12 lg:px-32 lg:py-24">
      <h1 className="mb-8 text-xl font-medium text-primary-text lg:text-3xl">
        {memberData.header}
      </h1>
      <p className="mb-16 text-secondary-text lg:text-lg">
        {memberData.subtitle}
      </p>
      <LearnMore {...memberData.learnMoreSection} />
      <h1 className="mb-8 mt-16 text-xl font-medium text-primary-text lg:text-3xl">
        {memberData.secondaryHeader}
      </h1>
      <ExternalLink
        url={memberData.arrowLink.link.url}
        text={memberData.arrowLink.text}
        className="!gap-2"
      />
    </div>
  );
};

export default MemberSection;
