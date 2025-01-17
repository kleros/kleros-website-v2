import { KlerosFontsSectionQueryType } from "@/queries/brand-assets/kleros-fonts-section";

import CtaCard from "../CtaCard";

interface IKlerosFontsSection {
  klerosFontsData: KlerosFontsSectionQueryType["brandAssetsPageKlerosFontsSection"];
}

const KlerosFontsSection: React.FC<IKlerosFontsSection> = ({
  klerosFontsData,
}) => {
  return (
    <div className="relative bg-background-1 px-6 pb-12 pt-32">
      <div className="space-y-6">
        <h1 className="w-min text-3xl">{klerosFontsData.header}</h1>
        <CtaCard
          key={klerosFontsData.linkCard.title}
          title={klerosFontsData.linkCard.title}
          description={klerosFontsData.linkCard.subtitle}
          arrowLink={klerosFontsData.linkCard.link}
        />
      </div>
    </div>
  );
};

export default KlerosFontsSection;
