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
    <div className="space-y-12 pb-7 pt-[88px] lg:pb-12 lg:pt-24">
      <div className="text-xl font-medium text-primary-text md:text-3xl">
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
      <p className="pt-8 text-secondary-text lg:text-lg">{scoutExplanation}</p>
      <KlerosScoutSection {...klerosScoutSection} />
    </div>
  );
};

export default CuratorTabContent;
