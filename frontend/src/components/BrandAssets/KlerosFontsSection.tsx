import { KlerosFontsSectionQueryType } from "@/queries/brand-assets/kleros-fonts-section";

import CtaCard from "../CtaCard";

interface IKlerosFontsSection {
  klerosFontsData: KlerosFontsSectionQueryType["brandAssetsPageKlerosFontsSection"];
}

const KlerosFontsSection: React.FC<IKlerosFontsSection> = ({
  klerosFontsData,
}) => {
  return (
    <div className="bg-background-1 relative space-y-8 px-6 pb-12 lg:space-y-16 lg:px-32 lg:pt-8 lg:pb-24">
      <h1 className="text-xl font-medium lg:text-2xl">
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
