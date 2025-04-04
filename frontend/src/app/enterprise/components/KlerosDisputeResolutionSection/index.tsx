import clsx from "clsx";

import { request } from "@/utils/graphQLClient";

import {
  forLawyersPageDisputeResolutionSectionQuery,
  ForLawyersPageDisputeResolutionSectionQueryType,
} from "../../queries/kleros-dispute-resolution-section";

import ArbitrationMethodTable from "./ArbitrationMethodTable";
// import ResearchSection from "./ResearchSection";

const KlerosDisputeResolutionSection: React.FC = async () => {
  const {
    headerSubtitle,
    header,
    subtitle,
    thirdHeader,
    thirdSubtitle,
    arbitrationMethodTable,
  } = (
    await request<ForLawyersPageDisputeResolutionSectionQueryType>(
      forLawyersPageDisputeResolutionSectionQuery,
    )
  ).forLawyersPageDisputeResolutionWithKlerosSection;
  return (
    <div
      className={clsx(
        "bg-background-2",
        "flex flex-col gap-16",
        "px-6 py-12 lg:py-24",
      )}
    >
      <div className="flex flex-col gap-6 lg:px-32">
        <h3 className="mb-6 text-primary-purple lg:text-lg">
          {headerSubtitle}
        </h3>
        <h1 className="text-xl font-medium text-primary-text lg:text-3xl">
          {header}
        </h1>
        <p className="text-secondary-text lg:text-lg">{subtitle}</p>
      </div>

      <ArbitrationMethodTable table={arbitrationMethodTable} />

      <div className="my-4 lg:px-32">
        <h2 className="mb-6 text-lg font-medium text-primary-text lg:text-xl">
          {thirdHeader}
        </h2>
        <p className="text-secondary-text lg:text-lg">{thirdSubtitle}</p>
      </div>
    </div>
  );
};

export default KlerosDisputeResolutionSection;
