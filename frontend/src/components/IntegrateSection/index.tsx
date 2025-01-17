import React from "react";

import CtaBox from "@/components/CtaBox";
import AppsDropdownContent from "@/components/Navbar/AppsDropdownContent";
import { integrateQuery, IntegrateQueryType } from "@/queries/integrate";
import { request } from "@/utils/graphQLClient";

import LearnMore from "./LearnMore";

const IntegrateSection: React.FC = async () => {
  const integrateData = await request<IntegrateQueryType>(integrateQuery).then(
    (res) => res.forBuildersPageIntegrateSection,
  );

  return (
    <div className="bg-background-2 px-6 pb-16 pt-12">
      <h2 className="mb-8 text-lg text-primary-purple">
        {integrateData.header}
      </h2>
      <h1 className="mb-8 text-2xl text-primary-text">{integrateData.title}</h1>
      <p className="text-lg text-secondary-text">{integrateData.description}</p>
      <AppsDropdownContent appsSection={integrateData.appsSection} />
      <CtaBox
        background={integrateData.getInTouchSection.background}
        header={integrateData.header}
        button={integrateData.arrowLink}
      />
      <LearnMore {...{ integrateData }} />
    </div>
  );
};
export default IntegrateSection;
