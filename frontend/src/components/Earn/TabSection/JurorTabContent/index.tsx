import CtaCard from "@/components/CtaCard";
import { EarnPageBecomeAJurorTab } from "@/queries/earn/tabs-data";
import EnterCourtSection from "./EnterCourtSection";
import CourtsSection from "./CourtsSection";

const JurorTabContent: React.FC<EarnPageBecomeAJurorTab> = ({
  title,
  description,
  ctaCard,
  enterCourtSection,
  mostActiveCourtsHeader,
  mostActiveCourts,
  courtsButton
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
      <EnterCourtSection {...enterCourtSection} />
      <CourtsSection
        {...{ mostActiveCourts, mostActiveCourtsHeader, courtsButton }}
      />
    </div>
  );
};

export default JurorTabContent;
