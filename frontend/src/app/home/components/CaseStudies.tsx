import React from "react";

import CtaCard from "@/components/CtaCard";
import { request } from "@/utils/graphQLClient";

import {
  homeCaseStudiesQuery,
  HomeCaseStudiesQueryType,
} from "../queries/case-studies";

const CaseStudies: React.FC = async () => {
  const { title, subtitle, cards } = await request<HomeCaseStudiesQueryType>(
    homeCaseStudiesQuery,
  ).then((res) => res.homeCaseStudiesSection);

  return (
    <div className="bg-background-2 px-6 py-12 lg:px-32 lg:pt-24">
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-medium lg:text-3xl">{title}</h3>
        <p className="text-base lg:text-lg">{subtitle}</p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map(({ title, subtitle, icon, link }) => (
          <CtaCard
            key={title}
            {...{ icon, title, description: subtitle, arrowLink: link }}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
