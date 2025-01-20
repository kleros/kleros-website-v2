import { PnkTokenSectionQueryType } from "@/queries/brand-assets/pnk-token-section";

import ImageDownload from "../ImageDownload";

interface IPnkTokenSection {
  pnkTokenData: PnkTokenSectionQueryType["brandAssetsPagePnkTokenSection"];
}

const PnkTokenSection: React.FC<IPnkTokenSection> = ({ pnkTokenData }) => {
  return (
    <div className="relative space-y-6 bg-background-1 px-6 pb-12 pt-32">
      <h1 className="w-min text-3xl">{pnkTokenData.header}</h1>
      <p className="text-lg text-secondary-text">{pnkTokenData.subtitle}</p>
      <ImageDownload
        key={pnkTokenData.imageDownload.name}
        {...{ imageDownload: pnkTokenData.imageDownload }}
      />
    </div>
  );
};

export default PnkTokenSection;
