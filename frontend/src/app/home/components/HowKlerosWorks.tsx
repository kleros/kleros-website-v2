import React from "react";

import Image from "next/image";

import { request } from "@/utils/graphQLClient";

import {
  homeHowKlerosWorksQuery,
  HomeHowKlerosWorksQueryType,
} from "../queries/how-kleros-works";

const HowKlerosWorks: React.FC = async () => {
  const howKlerosWorks = await request<HomeHowKlerosWorksQueryType>(
    homeHowKlerosWorksQuery,
  );
  const { label, title, subtitle, explainer } =
    howKlerosWorks.homeHowKlerosWorksSection;

  return (
    <div className="bg-background-1 px-6 py-12">
      <div className="flex flex-col gap-8">
        <label className="text-base text-primary-purple">{label}</label>
        <h3 className="text-xl font-medium lg:text-2xl">{title}</h3>
        <p className="text-base lg:text-lg">{subtitle}</p>
      </div>
      <Image
        className="mx-auto mt-12"
        src={explainer.url}
        alt="Explainer"
        width="294"
        height="798"
      />
    </div>
  );
};

export default HowKlerosWorks;
