import ExternalLink from "@/components/ExternalLink";
import { CooperativePageMemberQueryType } from "@/queries/cooperative/member-section";
import LearnMore from "./LearnMore";

interface IMemberSection {
  memberData: CooperativePageMemberQueryType["cooperativePageMemberSection"];
}

const MemberSection: React.FC<IMemberSection> = ({ memberData }) => {
  return (
    <div className="bg-background-1 py-12 lg:py-24 px-6 lg:px-32">
      <h1 className="text-2xl lg:text-3xl text-primary-text font-medium mb-8">
        {memberData.header}
      </h1>
      <p className="text-lg text-secondary-text mb-16">{memberData.subtitle}</p>
      <LearnMore {...memberData.learnMoreSection} />
      <h1 className="text-2xl lg:text-3xl text-primary-text font-medium mb-8 mt-16">
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
