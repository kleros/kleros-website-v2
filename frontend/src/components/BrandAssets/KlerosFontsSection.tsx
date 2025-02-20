import { KlerosFontsSectionQueryType } from "@/queries/brand-assets/kleros-fonts-section";

import CtaCard from "../CtaCard";

interface IKlerosFontsSection {
  klerosFontsData: KlerosFontsSectionQueryType["brandAssetsPageKlerosFontsSection"];
}

const KlerosFontsSection: React.FC<IKlerosFontsSection> = ({
  klerosFontsData,
}) => {
  return (
    <div className="relative space-y-8 bg-background-1 px-6 pb-12 lg:space-y-16 lg:px-32 lg:pb-24 lg:pt-8">
      <h1 className="text-xl font-medium text-primary-text lg:text-2xl">
        {klerosFontsData.header}
      </h1>
      <CtaCard
        className="max-w-[583px] [&>p]:mb-14 [&>p]:text-base"
        key={klerosFontsData.linkCard.title}
        title={klerosFontsData.linkCard.title}
        description={klerosFontsData.linkCard.subtitle}
        arrowLink={klerosFontsData.linkCard.link}
      />
    </div>
  );
};

export default KlerosFontsSection;
