import React from "react";

import CtaBox from "@/components/CtaBox";
import ExternalLink from "@/components/ExternalLink";
import AppsDropdownContent from "@/components/Navbar/AppsDropdownContent";
import { integrateQuery, IntegrateQueryType } from "@/queries/integrate";
import { request } from "@/utils/graphQLClient";

const IntegrateSection: React.FC = async () => {
  const integrateData = await request<IntegrateQueryType>(integrateQuery).then(
    (res) => res.forBuildersPageIntegrateSection,
  );

  return (
    <div className="bg-background-2 px-6 pb-16 pt-12">
      <h2 className="mb-8 text-base text-primary-purple lg:text-lg">
        {integrateData.header}
      </h2>
      <h1 className="mb-8 text-xl text-primary-text lg:text-2xl">
        {integrateData.title}
      </h1>
      <p className="text-base text-secondary-text lg:text-lg">
        {integrateData.description}
      </p>
      <AppsDropdownContent appsSection={integrateData.appsSection} />
      <CtaBox
        background={integrateData.getInTouchSection.background}
        header={integrateData.header}
        button={integrateData.arrowLink}
      />
      <ExternalLink
        className="mt-12 text-center"
        text={integrateData.arrowLink.text}
        url={integrateData.arrowLink.link.url}
      />
    </div>
  );
};
export default IntegrateSection;
