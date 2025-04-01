import ImageDownload from "@/components/ImageDownload";

import { IBadgesQuery } from "./queries";

interface IBadges {
  badgesData: IBadgesQuery["brandAssetsPageKlerosBadgesSection"];
}

const Badges: React.FC<IBadges> = ({ badgesData }) => {
  return (
    <div
      className={
        "relative space-y-8 bg-background-1 px-6 py-12 lg:px-32 lg:py-24"
      }
    >
      <h1 className="text-xl font-medium text-primary-text lg:text-2xl">
        {badgesData.header}
      </h1>
      <p className="pb-4 text-secondary-text lg:pb-8 lg:text-lg">
        {badgesData.subtitle}
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-y-16">
        {badgesData.imageDownloads.map((imageDownload) => {
          return (
            <ImageDownload key={imageDownload.image.url} {...imageDownload} />
          );
        })}
      </div>
    </div>
  );
};

export default Badges;
