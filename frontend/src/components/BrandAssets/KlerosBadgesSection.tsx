import { KlerosBadgesSectionQueryType } from "@/queries/brand-assets/kleros-badges-section";

import ImageDownload from "../ImageDownload";

interface IKlerosBadgesSection {
  klerosBadgesData: KlerosBadgesSectionQueryType["brandAssetsPageKlerosBadgesSection"];
}

const KlerosBadgesSection: React.FC<IKlerosBadgesSection> = ({
  klerosBadgesData,
}) => {
  return (
    <div className="relative bg-background-1 px-6 pb-12 pt-32">
      <div className="space-y-6">
        <h1 className="w-min text-3xl">{klerosBadgesData.header}</h1>
        <p className="text-lg text-secondary-text">
          {klerosBadgesData.subtitle}
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-16">
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
    </div>
  );
};

export default KlerosBadgesSection;
