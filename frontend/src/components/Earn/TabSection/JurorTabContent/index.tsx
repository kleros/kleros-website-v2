import CtaCard from "@/components/CtaCard";
import { EarnPageBecomeAJurorTab } from "@/queries/earn/tabs-data";

import CourtsSection from "./CourtsSection";
import EnterCourtSection from "./EnterCourtSection";

const JurorTabContent: React.FC<EarnPageBecomeAJurorTab> = ({
  title,
  description,
  ctaCard,
  enterCourtSection,
  mostActiveCourtsHeader,
  mostActiveCourts,
  courtsButton,
}) => {
  return (
    <div className="space-y-12 pb-7 pt-[88px] lg:pb-12 lg:pt-24">
      <div className="text-2xl font-medium text-primary-text md:text-3xl">
        {title}
      </div>
      <div className="text-lg text-secondary-text">{description}</div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {ctaCard.map((card) => (
          <CtaCard key={card.title} {...card} />
        ))}
      </div>
      <EnterCourtSection {...enterCourtSection} />
      <CourtsSection
        {...{ mostActiveCourts, mostActiveCourtsHeader, courtsButton }}
      />
    </div>
  );
};

export default JurorTabContent;
