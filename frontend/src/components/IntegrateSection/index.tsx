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
      <h2 className="text-primary-purple mb-8 text-base lg:text-lg">
        {integrateData.header}
      </h2>
      <h1 className="text-primary-text mb-8 text-xl lg:text-3xl">
        {integrateData.title}
      </h1>
      <p className="text-secondary-text text-base lg:mb-4 lg:text-lg">
        {integrateData.description}
      </p>
      <AppsDropdownContent
        appsSection={integrateData.appsSection}
        className="pt-8 lg:pt-16"
      />
      <LearnMore
        background={integrateData.getInTouchSection.background}
        title={integrateData.header}
        button={integrateData.arrowLink}
        className="mt-12! lg:mt-16!"
      />
      <ExternalLink
        className="mx-auto mt-12 lg:mt-16"
        text={integrateData.arrowLink.text}
        url={integrateData.arrowLink.link.url}
      />
    </div>
  );
};
export default IntegrateSection;
