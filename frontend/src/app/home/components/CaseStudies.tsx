import React from "react";

import { request } from "@/utils/graphQLClient";

import {
  homeCaseStudiesQuery,
  HomeCaseStudiesQueryType,
} from "../queries/case-studies";

const CaseStudies: React.FC = async () => {
  const caseStudies =
    await request<HomeCaseStudiesQueryType>(homeCaseStudiesQuery);
  const { title, subtitle } = caseStudies.homeCaseStudiesSection;

  return (
    <div className="bg-background-2 px-6 py-12">
      <div className="flex flex-col gap-8">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default CaseStudies;
