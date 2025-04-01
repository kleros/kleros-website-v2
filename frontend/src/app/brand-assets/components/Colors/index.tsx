import clsx from "clsx";

import ColorCard from "./ColorCard";
import { IColorsQuery } from "./queries";

interface IColors {
  colorsData: IColorsQuery["brandAssetsPageKlerosColorsSection"];
}

const KlerosColorsSection: React.FC<IColors> = ({ colorsData }) => {
  return (
    <div
      className={
        "relative space-y-8 bg-background-2 px-6 py-12 lg:px-32 lg:py-24"
      }
    >
      <h1 className="text-xl font-medium text-primary-text lg:text-2xl">
        {colorsData.header}
      </h1>
      <p
        className={clsx(
          "pb-4 text-sm font-medium text-secondary-text",
          "lg:pb-8 lg:text-lg lg:font-normal",
        )}
      >
        {colorsData.subtitle}
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {colorsData?.colorCards?.map((colorCard) => (
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
