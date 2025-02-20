import { KlerosColorsSectionQueryType } from "@/queries/brand-assets/kleros-colors-section";

import ColorCard from "./ColorCard";

interface IKlerosColorsSection {
  klerosColorsData: KlerosColorsSectionQueryType["brandAssetsPageKlerosColorsSection"];
}

const KlerosColorsSection: React.FC<IKlerosColorsSection> = ({
  klerosColorsData,
}) => {
  return (
    <div className="relative space-y-8 bg-background-2 px-6 py-12 lg:px-32 lg:py-24">
      <h1 className="text-xl font-medium text-primary-text lg:text-2xl">
        {klerosColorsData.header}
      </h1>
      <p className="pb-4 text-sm font-medium text-secondary-text lg:pb-8 lg:text-lg lg:font-normal">
        {klerosColorsData.subtitle}
      </p>
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
