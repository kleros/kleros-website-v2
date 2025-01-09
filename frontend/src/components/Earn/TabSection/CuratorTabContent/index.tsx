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
    <div className="pt-[88px] pb-7 lg:pt-24 lg:pb-12 space-y-12">
      <div className="text-2xl md:text-3xl font-medium text-primary-text">
        {title}
      </div>
      <div className="text-lg text-secondary-text">{description}</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ctaCard.map((card) => (
          <CtaCard key={card.title} {...card} />
        ))}
      </div>
      <ExternalLink
        url={arrowLink.link.url}
        text={arrowLink.text}
        className="flex-wrap justify-center"
      />
      <p className="text-lg text-secondary-text pt-8">{scoutExplanation}</p>
      <KlerosScoutSection {...klerosScoutSection} />
    </div>
  );
};

export default CuratorTabContent;
