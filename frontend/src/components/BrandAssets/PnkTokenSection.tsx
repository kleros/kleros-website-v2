import { PnkTokenSectionQueryType } from "@/queries/brand-assets/pnk-token-section";

import ImageDownload from "../ImageDownload";

interface IPnkTokenSection {
  pnkTokenData: PnkTokenSectionQueryType["brandAssetsPagePnkTokenSection"];
}

const PnkTokenSection: React.FC<IPnkTokenSection> = ({ pnkTokenData }) => {
  return (
    <div className="relative space-y-6 bg-background-1 px-6 py-12 lg:space-y-8 lg:px-32 lg:py-24">
      <h1 className="text-xl font-medium lg:text-3xl">{pnkTokenData.header}</h1>
      <p className="pb-10 text-secondary-text lg:pb-16 lg:text-lg">
        {pnkTokenData.subtitle}
      </p>
      <ImageDownload
        key={pnkTokenData.imageDownload.name}
        {...{ imageDownload: pnkTokenData.imageDownload }}
      />
    </div>
  );
};

export default PnkTokenSection;
