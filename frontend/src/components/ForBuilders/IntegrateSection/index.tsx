import React from "react";

import AppsDropdownContent from "@/components/Navbar/AppsDropdownContent";
import { IntegrateQueryType } from "@/queries/for-builders/integrate";

import GetInTouch from "./GetInTouch";
import LearnMore from "./LearnMore";

interface IIntegrateSection {
  integrateData: IntegrateQueryType["forBuildersPageIntegrateSection"];
}

const IntegrateSection: React.FC<IIntegrateSection> = ({ integrateData }) => {
  return (
    <div className="bg-background-2 px-6 pb-16 pt-12">
      <h2 className="mb-8 text-lg text-primary-purple">
        {integrateData.header}
      </h2>
      <h1 className="mb-8 text-2xl text-primary-text">{integrateData.title}</h1>
      <p className="text-lg text-secondary-text">{integrateData.description}</p>
      <AppsDropdownContent appsSection={integrateData.appsSection} />
      <GetInTouch {...{ integrateData }} />
      <LearnMore {...{ integrateData }} />
    </div>
  );
};
export default IntegrateSection;
