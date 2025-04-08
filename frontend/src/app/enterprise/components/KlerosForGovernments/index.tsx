import clsx from "clsx";

import Card from "@/components/CtaCard";
import HighlightedText from "@/components/HighlightedText";
import Quote from "@/components/Quote";
import { request } from "@/utils/graphQLClient";

import {
  forGovernmentsQuery,
  IForGovernmentsQuery,
  getBlock,
  ICCText,
  ICCCardsSection,
  ICCLongText,
  ICCQuote,
  ICCHightlightText,
} from "./queries";

const ForGovernments: React.FC = async () => {
  const sections = (await request<IForGovernmentsQuery>(forGovernmentsQuery))
    .enterprise.GovernmentSection;
  const [{ fullText, highlightedText }] = getBlock<ICCHightlightText>(
    sections,
    "ComponentContentHighlightText",
  );
  const [{ longtext }] = getBlock<ICCLongText>(
    sections,
    "ComponentContentLongText",
  );
  const [{ text }] = getBlock<ICCText>(sections, "ComponentContentText");
  const [{ cards: objectivesCards }, { cards: disputeTypesCards }] =
    getBlock<ICCCardsSection>(sections, "ComponentContentCardsSection");
  const [quote] = getBlock<ICCQuote>(sections, "ComponentContentQuote");

  return (
    <div
      className={"flex flex-col gap-20 px-6 py-12 lg:gap-28 lg:px-32 lg:py-24"}
    >
      <div className="space-y-6">
        <HighlightedText
          {...{ fullText, highlightedText }}
          fullTextStyle="!text-primary-text !text-xl !font-medium lg:!text-2xl"
          highlightedTextStyle="!text-xl !font-medium lg:!text-2xl"
        />
        <p className="lg:text-lg">{longtext}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {objectivesCards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            icon={card.icon}
            description={card.subtitle}
          />
        ))}
      </div>
      <Quote {...quote} />
      <div>
        <h3 className="mb-12 text-lg font-medium text-primary-text lg:text-xl">
          {text}
        </h3>
        <div className="flex flex-wrap gap-4">
          {disputeTypesCards.map((card) => (
            <div
              key={card.title}
              className={clsx(
                "text-md rounded-2xl border border-stroke bg-background-2 p-6",
                "text-primary-text lg:text-lg",
              )}
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForGovernments;
