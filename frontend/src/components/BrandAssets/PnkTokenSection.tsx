import { PnkTokenSectionQueryType } from "@/queries/brand-assets/pnk-token-section";

import ImageDownload from "../ImageDownload";

interface IPnkTokenSection {
  pnkTokenData: PnkTokenSectionQueryType["brandAssetsPagePnkTokenSection"];
}

const PnkTokenSection: React.FC<IPnkTokenSection> = ({ pnkTokenData }) => {
  return (
    <div className="relative bg-background-1 px-6 pb-12 pt-32">
      <div className="space-y-6">
        <h1 className="w-min text-3xl">{pnkTokenData.header}</h1>
        <p className="text-lg text-secondary-text">{pnkTokenData.subtitle}</p>
        <div className="flex flex-row flex-wrap gap-x-8 gap-y-16">
          <ImageDownload
            key={pnkTokenData.imageDownload.name}
            {...{ imageDownload: pnkTokenData.imageDownload }}
          />
        </div>
      </div>
    </div>
  );
};

export default PnkTokenSection;
