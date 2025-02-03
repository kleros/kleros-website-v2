import { StyledImagesSectionQueryType } from "@/queries/brand-assets/styled-images-section";

import ImageDownload from "../ImageDownload";

interface IStyledImagesSection {
  styledImagesData: StyledImagesSectionQueryType["brandAssetsPageStyledImagesSection"];
}

const StyledImagesSection: React.FC<IStyledImagesSection> = ({
  styledImagesData,
}) => {
  return (
    <div className="relative space-y-8 bg-background-2 px-6 py-12 lg:px-32 lg:py-24">
      <h1 className="text-xl font-medium lg:text-3xl">
        {styledImagesData.header}
      </h1>
      <h1 className="text-lg lg:text-2xl">
        {styledImagesData.wallpapersHeader}
      </h1>
      <p className="pb-8 text-secondary-text lg:pb-16 lg:text-lg">
        {styledImagesData.wallpapersSubtitle}
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-y-16">
        {styledImagesData.wallpapersImageDownloads.map((imageDownload) => {
          return (
            <ImageDownload key={imageDownload.name} {...{ imageDownload }} />
          );
        })}
      </div>
      <div className="space-y-6 py-8 lg:space-y-8 lg:py-16">
        <h2 className="text-lg font-medium lg:text-2xl lg:font-normal">
          {styledImagesData.productMockupsHeader}
        </h2>
        <p className="text-secondary-text lg:text-lg">
          {styledImagesData.productMockupsSubtitle}
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-y-16">
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
