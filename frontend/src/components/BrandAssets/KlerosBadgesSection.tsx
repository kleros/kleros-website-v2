import { KlerosBadgesSectionQueryType } from "@/queries/brand-assets/kleros-badges-section";

import ImageDownload from "../ImageDownload";

interface IKlerosBadgesSection {
  klerosBadgesData: KlerosBadgesSectionQueryType["brandAssetsPageKlerosBadgesSection"];
}

const KlerosBadgesSection: React.FC<IKlerosBadgesSection> = ({
  klerosBadgesData,
}) => {
  return (
    <div className="relative space-y-8 bg-background-1 px-6 py-12 lg:px-32 lg:py-24">
      <h1 className="text-xl font-medium text-primary-text lg:text-2xl">
        {klerosBadgesData.header}
      </h1>
      <p className="pb-4 text-secondary-text lg:pb-8 lg:text-lg">
        {klerosBadgesData.subtitle}
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-y-16">
        {klerosBadgesData.imageDownloads.map((imageDownload) => {
          return (
            <ImageDownload
              key={imageDownload.image.url}
              {...{ imageDownload }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default KlerosBadgesSection;
