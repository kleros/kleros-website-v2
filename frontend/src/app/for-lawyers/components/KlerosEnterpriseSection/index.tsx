import clsx from "clsx";

import { request } from "@/utils/graphQLClient";

import {
  ForLawyersPageKlerosEnterpiseSectionType,
  forLawyersPageKlerosEnterpriseSectionQuery,
} from "../../queries/kleros-enterprise-section";
import Card from "../Card";

import DisputeResolutionProcess from "./DisputeResolutionProcess";
import HighlightedText from "./HighlightedText";
import LemonCashSection from "./LemonCashSection";
import MethodsTable from "./MethodsTable";

const KlerosEnterpriseSection: React.FC = async () => {
  const {
    headerSubtitle,
    header,
    subtitle,
    cards,
    disputeResolutionProcessHeader,
    processDiagram,
    processDiagramDesktop,
    table,
  } = (
    await request<ForLawyersPageKlerosEnterpiseSectionType>(
      forLawyersPageKlerosEnterpriseSectionQuery,
    )
  ).forLawyersPageKlerosEnterpriseSection;
  return (
    <div
      className={clsx(
        "bg-background-2",
        "flex flex-col gap-12 lg:gap-16",
        "px-6 py-12 lg:px-32 lg:py-24",
      )}
    >
      <div className="flex flex-col gap-6">
        <h3 className="text-primary-purple lg:text-lg">{headerSubtitle}</h3>
        <h1 className="text-xl font-medium text-primary-text lg:text-3xl">
          {header}
        </h1>
        <HighlightedText {...subtitle} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>

      <DisputeResolutionProcess
        {...{
          disputeResolutionProcessHeader,
          processDiagram,
          processDiagramDesktop,
        }}
      />

      <LemonCashSection />
      <MethodsTable {...{ table }} />
    </div>
  );
};

export default KlerosEnterpriseSection;
