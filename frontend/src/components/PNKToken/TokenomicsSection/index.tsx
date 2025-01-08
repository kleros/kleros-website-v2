
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
    <div className="bg-background-2 py-12 lg:py-24 px-6 lg:px-32">
      <h1 className="text-3xl text-primary-text font-medium mb-8">
        {tokenomicsData.header}
      </h1>
      <p className="text-lg text-secondary-text mb-16">
        {tokenomicsData.subtitle}
      </p>
      <TokenStatDisplay {...tokenomicsData.tokenStatDisplay} />
      <ExternalLink
        text={tokenomicsData.arrowLink.text}
        url={tokenomicsData.arrowLink.link.url}
        className="pt-12 md:pt-16 flex-wrap justify-center md:justify-start"
      />
    </div>
  );
};

export default TokenomicsSection;
