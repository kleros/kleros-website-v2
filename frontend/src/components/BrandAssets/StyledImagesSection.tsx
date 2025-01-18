import { StyledImagesSectionQueryType } from "@/queries/brand-assets/styled-images-section";

import ImageDownload from "../ImageDownload";

interface IStyledImagesSection {
  styledImagesData: StyledImagesSectionQueryType["brandAssetsPageStyledImagesSection"];
}

const StyledImagesSection: React.FC<IStyledImagesSection> = ({
  styledImagesData,
}) => {
  return (
    <div className="relative space-y-6 bg-background-2 px-6 pb-12 pt-32">
      <h1 className="w-min text-3xl">{styledImagesData.header}</h1>
      <h1 className="w-min text-2xl">{styledImagesData.wallpapersHeader}</h1>
      <p className="text-lg text-secondary-text">
        {styledImagesData.wallpapersSubtitle}
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-16">
        {styledImagesData.wallpapersImageDownloads.map((imageDownload) => {
          return (
            <ImageDownload key={imageDownload.name} {...{ imageDownload }} />
          );
        })}
      </div>
      <h2 className="w-min text-2xl">
        {styledImagesData.productMockupsHeader}
      </h2>
      <p className="text-lg text-secondary-text">
        {styledImagesData.productMockupsSubtitle}
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-16">
        {styledImagesData.productMockupsImageDownloads.map((imageDownload) => {
          return (
            <ImageDownload key={imageDownload.name} {...{ imageDownload }} />
          );
        })}
      </div>
    </div>
  );
};

export default StyledImagesSection;
