import clsx from "clsx";

import ExternalLink from "@/components/ExternalLink";
import { request } from "@/utils/graphQLClient";

import {
  forLawyersPageMediationSectionQuery,
  ForLawyersPageMediationSectionType,
} from "../../queries/kleros-mediation-section";
import Card from "../Card";
import Flowchart from "../Flowchart";

const KlerosMediationSection: React.FC = async () => {
  const { header, subtitle, cards, flowchart, benefitsHeader, arrowLink } = (
    await request<ForLawyersPageMediationSectionType>(
      forLawyersPageMediationSectionQuery,
    )
  ).forLawyersPageMediationSection;
  return (
    <div
      className={clsx(
        "bg-background-1",
        "flex flex-col gap-16",
        "px-6 py-12 lg:py-24",
      )}
    >
      <div className="flex flex-col gap-8 lg:px-32">
        <h1 className="text-xl font-medium text-primary-text lg:text-3xl">
          {header}
        </h1>
        <p className="text-secondary-text lg:text-lg">{subtitle}</p>
      </div>

      <Flowchart items={flowchart} background="primary" />

      <div className="flex flex-col gap-8 lg:px-32">
        <h2 className="text-lg text-primary-text lg:text-xl">
          {benefitsHeader}
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>

      <ExternalLink
        text={arrowLink.text}
        url={arrowLink.link.url}
        className="w-full flex-wrap justify-center"
      />
    </div>
  );
};

export default KlerosMediationSection;
