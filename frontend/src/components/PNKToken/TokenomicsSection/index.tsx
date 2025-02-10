import ExternalLink from "@/components/ExternalLink";
import { TokenomicsSectionQueryType } from "@/queries/pnk-token/tokenomics";

import TokenStatDisplay from "./TokenStatDisplay";

interface ITokenomicsSection {
  tokenomicsData: TokenomicsSectionQueryType["pnkTokenPageTokenomicsSection"];
}

const TokenomicsSection: React.FC<ITokenomicsSection> = ({
  tokenomicsData,
}) => {
  return (
    <div className="bg-background-2 px-6 py-12 lg:px-32 lg:py-24">
      <h1 className="text-primary-text mb-8 text-2xl font-medium lg:text-3xl">
        {tokenomicsData.header}
      </h1>
      <p className="text-secondary-text mb-16 lg:text-lg">
        {tokenomicsData.subtitle}
      </p>
      <TokenStatDisplay {...tokenomicsData.tokenStatDisplay} />
      <ExternalLink
        text={tokenomicsData.arrowLink.text}
        url={tokenomicsData.arrowLink.link.url}
        className="mx-auto pt-3 md:mx-0 md:pt-16"
      />
    </div>
  );
};

export default TokenomicsSection;
