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
    <div className="bg-background-2 pt-12 pb-16 px-6">
      <h2 className="text-lg text-primary-purple mb-8">
        {integrateData.header}
      </h2>
      <h1 className="text-2xl text-primary-text mb-8">{integrateData.title}</h1>
      <p className="text-lg text-secondary-text">{integrateData.description}</p>
      <AppsDropdownContent appsSection={integrateData.appsSection} />
      <GetInTouch {...{ integrateData }} />
      <LearnMore {...{ integrateData }} />
    </div>
  );
};
export default IntegrateSection;
