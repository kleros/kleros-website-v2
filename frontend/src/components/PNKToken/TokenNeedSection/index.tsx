import CtaCard from "@/components/CtaCard";
import ExternalLink from "@/components/ExternalLink";
import { TokenNeedSectionQueryType } from "@/queries/pnk-token/token-need";

interface ITokenNeedSection {
  tokenNeedData: TokenNeedSectionQueryType["pnkTokenPageNeedSection"];
}

const TokenNeedSection: React.FC<ITokenNeedSection> = ({ tokenNeedData }) => {
    
  return (
    <div className="bg-background-1 py-12 lg:py-24 px-6 lg:px-32">
      <h1 className="text-2xl lg:text-3xl text-primary-text font-medium mb-8">
        {tokenNeedData.header}
      </h1>
      <p className="text-lg text-secondary-text mb-16">
        {tokenNeedData.subtitle}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {tokenNeedData.card.map((card) => (
          <CtaCard key={card.title} {...card} />
        ))}
      </div>
      <div className="w-full items-center">
        <ExternalLink
          text={tokenNeedData.arrowLink.text}
          url={tokenNeedData.arrowLink.link.url}
          className="mt-12 flex-wrap justify-center md:justify-start"
        />
      </div>
    </div>
  );
};

export default TokenNeedSection;
