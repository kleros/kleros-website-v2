import ExternalLink from "@/components/ExternalLink";
import LearnMore from "@/components/LearnMore";
import { request } from "@/utils/graphQLClient";

import { memberQuery, IMemberQuery } from "./queries";

const MemberSection: React.FC = async () => {
  const { header, subtitle, learnMoreSection, secondaryHeader, arrowLink } =
    await request<IMemberQuery>(memberQuery).then(
      ({ cooperativePageMemberSection }) => cooperativePageMemberSection,
    );
  return (
    <div className="bg-background-1 px-6 py-12 lg:px-32 lg:py-24">
      <h1 className="mb-8 text-xl font-medium text-primary-text lg:text-3xl">
        {header}
      </h1>
      <p className="mb-16 text-secondary-text lg:text-lg"> {subtitle} </p>
      <LearnMore {...learnMoreSection} />
      <h1
        className={
          "mb-8 mt-16 text-xl font-medium text-primary-text lg:text-3xl"
        }
      >
        {secondaryHeader}
      </h1>
      <ExternalLink url={arrowLink.link.url} text={arrowLink.text} />
    </div>
  );
};

export default MemberSection;
