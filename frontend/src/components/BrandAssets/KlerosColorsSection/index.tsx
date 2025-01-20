import { KlerosColorsSectionQueryType } from "@/queries/brand-assets/kleros-colors-section";

import ColorCard from "./ColorCard";

interface IKlerosColorsSection {
  klerosColorsData: KlerosColorsSectionQueryType["brandAssetsPageKlerosColorsSection"];
}

const KlerosColorsSection: React.FC<IKlerosColorsSection> = ({
  klerosColorsData,
}) => {
  return (
    <div className="relative space-y-6 bg-background-2 px-6 pb-12 pt-32">
      <h1 className="w-min text-3xl">{klerosColorsData.header}</h1>
      <p className="text-lg text-secondary-text">{klerosColorsData.subtitle}</p>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {klerosColorsData?.colorCards?.map((colorCard) => (
          <ColorCard
            key={colorCard.name}
            name={colorCard.name}
            hexColor={colorCard.hexColor}
          />
        ))}
      </div>
    </div>
  );
};

export default KlerosColorsSection;
