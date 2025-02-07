import ExternalLink from "@/components/ExternalLink";
import { request } from "@/utils/graphQLClient";

import {
  ForLawyersPageKlerosEscrowSection,
  forLawyersPageKlerosEscrowSectionQuery,
} from "../../queries/kleros-escrow-section";
import Flowchart from "../Flowchart";

const KlerosEscrowSection: React.FC = async () => {
  const {
    header,
    subtitle,
    secondHeader,
    secondSubtitle,
    flowchart,
    flowchartLabel,
    arrowLink,
  } = (
    await request<ForLawyersPageKlerosEscrowSection>(
      forLawyersPageKlerosEscrowSectionQuery,
    )
  ).forLawyersPageKlerosEscrowSection;
  return (
    <div>
      <h1
        className={
          "mb-6 text-lg font-medium text-primary-text lg:px-32 lg:text-2xl"
        }
      >
        {header}
      </h1>
      <p className="mb-16 text-secondary-text lg:px-32 lg:text-lg">
        {subtitle}
      </p>

      <p className="mb-12 text-primary-purple lg:px-32 lg:text-lg">
        {flowchartLabel}
      </p>
      <Flowchart items={flowchart} background="secondary" />

      <h2
        className={
          "mb-6 mt-12 text-lg font-medium text-primary-text lg:px-32 lg:text-xl"
        }
      >
        {secondHeader}
      </h2>
      <p className="mb-8 text-secondary-text lg:px-32 lg:text-lg">
        {secondSubtitle}
      </p>

      <div className="mx-auto lg:mx-0 lg:px-32">
        <ExternalLink text={arrowLink.text} url={arrowLink.link.url} />
      </div>
    </div>
  );
};

export default KlerosEscrowSection;
