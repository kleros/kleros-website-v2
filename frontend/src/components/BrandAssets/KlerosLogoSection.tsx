import { KlerosLogoSectionQueryType } from "@/queries/brand-assets/kleros-logo-section";

import ImageDownload from "../ImageDownload";

interface IKlerosLogoSection {
  klerosLogoData: KlerosLogoSectionQueryType["brandAssetsPageKlerosLogoSection"];
}

const KlerosLogoSection: React.FC<IKlerosLogoSection> = ({
  klerosLogoData,
}) => {
  return (
    <div className="relative bg-background-1 px-6 pb-12 pt-32">
      <div className="space-y-6">
        <h1 className="w-min text-3xl">{klerosLogoData.header}</h1>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {klerosLogoData.imageDownloads.map((imageDownload) => {
            return (
              <ImageDownload key={imageDownload.name} {...{ imageDownload }} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KlerosLogoSection;
