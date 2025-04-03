import React from "react";

import ResponsiveImage from "@/components/ResponsiveImage";
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
    <div className="w-full bg-background-1-alpha backdrop-blur-sm px-6 py-12 lg:px-32 lg:py-24">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-8">
          <label className="text-base text-primary-purple lg:text-lg">
            {label}
          </label>
          <h3 className="text-xl font-medium text-primary-text lg:text-3xl">
            {title}
          </h3>
          <p className="text-base text-primary-text lg:text-lg">{subtitle}</p>
        </div>
        <ResponsiveImage
          mobileProps={{
            className: "mx-auto mt-12",
            src: explainer.mobile.url,
            alt: "Explainer",
            width: 294,
            height: 798,
          }}
          desktopProps={{
            className: "mx-auto mt-12",
            src: explainer.desktop.url,
            alt: "Explainer",
            width: 1182,
            height: 388,
          }}
        />
      </div>
    </div>
  );
};

export default HowKlerosWorks;
