import React from "react";

import ExternalLink from "@/components/ExternalLink";
import AppsDropdownContent from "@/components/Navbar/AppsDropdownContent";
import { integrateQuery, IntegrateQueryType } from "@/queries/integrate";
import { request } from "@/utils/graphQLClient";

import LearnMore from "../LearnMore";

const IntegrateSection: React.FC = async () => {
  const integrateData = await request<IntegrateQueryType>(integrateQuery).then(
    (res) => res.forBuildersPageIntegrateSection,
  );

  return (
    <div className="bg-background-2 px-6 py-12 lg:px-32 lg:py-24">
      <h2 className="mb-8 text-base text-primary-purple lg:text-lg">
        {integrateData.header}
      </h2>
      <h1 className="mb-8 text-xl text-primary-text lg:text-3xl">
        {integrateData.title}
      </h1>
      <p className="text-base text-secondary-text lg:mb-4 lg:text-lg">
        {integrateData.description}
      </p>
      <AppsDropdownContent appsSection={integrateData.appsSection} />
      <LearnMore
        background={integrateData.getInTouchSection.background}
        title={integrateData.header}
        button={integrateData.arrowLink}
        className="!mt-16 lg:!mt-4"
      />
      <ExternalLink
        className="mt-12 flex-wrap justify-center text-center lg:mt-16"
        text={integrateData.arrowLink.text}
        url={integrateData.arrowLink.link.url}
      />
    </div>
  );
};
export default IntegrateSection;
