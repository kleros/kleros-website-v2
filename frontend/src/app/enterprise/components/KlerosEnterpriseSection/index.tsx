import clsx from "clsx";

import ExternalLink from "@/components/ExternalLink";
import { request } from "@/utils/graphQLClient";

import {
  ForLawyersPageKlerosEnterpiseSectionType,
  forLawyersPageKlerosEnterpriseSectionQuery,
} from "../../queries/kleros-enterprise-section";
import Card from "../Card";

import DisputeResolutionProcess from "./DisputeResolutionProcess";
import Industries from "./Industries";
import LemonCashSection from "./LemonCashSection";
import MethodsTable from "./MethodsTable";

const KlerosEnterpriseSection: React.FC = async () => {
  const {
    cards,
    disputeResolutionProcessHeader,
    processDiagram,
    table,
    arrowLink,
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
        "px-6 py-12 lg:py-24",
      )}
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:px-32">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>

      <DisputeResolutionProcess
        {...{
          disputeResolutionProcessHeader,
          processDiagram,
        }}
      />

      <LemonCashSection />

      <Industries />

      <div className="mx-auto lg:px-32">
        <ExternalLink url={arrowLink.link.url} text={arrowLink.text} />
      </div>
      <MethodsTable {...{ table }} />
    </div>
  );
};

export default KlerosEnterpriseSection;
