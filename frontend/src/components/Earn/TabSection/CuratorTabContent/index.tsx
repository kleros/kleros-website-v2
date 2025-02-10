import CtaCard from "@/components/CtaCard";
import ExternalLink from "@/components/ExternalLink";
import { EarnPageBecomeACuratorTab } from "@/queries/earn/tabs-data";

import KlerosScoutSection from "./KlerosScoutSection";

const CuratorTabContent: React.FC<EarnPageBecomeACuratorTab> = ({
  title,
  description,
  ctaCard,
  arrowLink,
  scoutExplanation,
  klerosScoutSection,
}) => {
  return (
    <div className="space-y-12 pt-[88px] pb-7 lg:pt-24 lg:pb-12">
      <div className="text-primary-text text-xl font-medium lg:text-3xl">
        {title}
      </div>
      <div className="text-secondary-text lg:text-lg">{description}</div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {ctaCard.map((card) => (
          <CtaCard key={card.title} {...card} />
        ))}
      </div>
      <ExternalLink
        url={arrowLink.link.url}
        text={arrowLink.text}
        className="mx-auto"
      />
      <p className="text-secondary-text pt-8 lg:text-lg">{scoutExplanation}</p>
      <KlerosScoutSection {...klerosScoutSection} />
    </div>
  );
};

export default CuratorTabContent;
