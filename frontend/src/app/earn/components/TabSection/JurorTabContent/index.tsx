import CtaCard from "@/components/CtaCard";

import { EarnPageBecomeAJurorTab } from "../queries";

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
    <div className="space-y-8 pb-7 pt-[88px] lg:space-y-12 lg:pb-12 lg:pt-24">
      <div className="text-xl font-medium text-primary-text lg:text-3xl">
        {title}
      </div>
      <div className="text-secondary-text lg:text-lg">{description}</div>
      <div className="grid grid-cols-1 gap-6 pb-4 lg:grid-cols-3 lg:pb-0">
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
