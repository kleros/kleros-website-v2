import Card from "@/components/CtaCard";
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
} from "./queries";

const ForGovernments: React.FC = async () => {
  const sections = (await request<IForGovernmentsQuery>(forGovernmentsQuery))
    .enterprise.GovernmentSection;
  const { text } = getBlock<ICCText>(sections, "ComponentContentText");
  const { longtext } = getBlock<ICCLongText>(
    sections,
    "ComponentContentLongText",
  );
  const { cards } = getBlock<ICCCardsSection>(
    sections,
    "ComponentContentCardsSection",
  );
  const quote = getBlock<ICCQuote>(sections, "ComponentContentQuote");

  return (
    <div
      className={"flex flex-col gap-20 px-6 py-12 lg:gap-28 lg:px-32 lg:py-24"}
    >
      <div className="space-y-6">
        <span className="text-xl font-medium lg:text-2xl">{text}</span>
        <p className="lg:text-lg">{longtext}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            icon={card.icon}
            description={card.subtitle}
          />
        ))}
      </div>
      <Quote {...quote} />
    </div>
  );
};

export default ForGovernments;
