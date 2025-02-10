import { KlerosLogoSectionQueryType } from "@/queries/brand-assets/kleros-logo-section";

import ImageDownload from "../ImageDownload";

interface IKlerosLogoSection {
  klerosLogoData: KlerosLogoSectionQueryType["brandAssetsPageKlerosLogoSection"];
}

const KlerosLogoSection: React.FC<IKlerosLogoSection> = ({
  klerosLogoData,
}) => {
  return (
    <div className="bg-background-1 relative space-y-12 px-6 py-12 lg:space-y-16 lg:px-32 lg:py-24">
      <h1 className="text-xl font-medium lg:text-3xl">
        {klerosLogoData.header}
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-12 lg:gap-y-16">
        {klerosLogoData.imageDownloads.map((imageDownload) => {
          return (
            <ImageDownload key={imageDownload.name} {...{ imageDownload }} />
          );
        })}
      </div>
    </div>
  );
};

export default KlerosLogoSection;
