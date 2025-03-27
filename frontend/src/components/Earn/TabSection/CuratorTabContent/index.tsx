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
      <div className="text-xl font-medium text-primary-text lg:text-3xl">
        {title}
      </div>
      <div className="text-secondary-text lg:text-lg">{description}</div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
        {ctaCard.map((card, i) => (
          <CtaCard
            className={i + 1 < ctaCard.length / 2 ? "col-span-3" : "col-span-2"}
            key={card.title}
            {...card}
          />
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
