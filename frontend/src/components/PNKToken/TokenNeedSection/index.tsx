import CtaCard from "@/components/CtaCard";
import ExternalLink from "@/components/ExternalLink";
import { TokenNeedSectionQueryType } from "@/queries/pnk-token/token-need";

interface ITokenNeedSection {
  tokenNeedData: TokenNeedSectionQueryType["pnkTokenPageNeedSection"];
}

const TokenNeedSection: React.FC<ITokenNeedSection> = ({ tokenNeedData }) => {
  return (
    <div className="bg-background-1 px-6 py-12 lg:px-32 lg:py-24">
      <h1 className="text-primary-text mb-8 text-xl font-medium lg:text-3xl">
        {tokenNeedData.header}
      </h1>
      <p className="text-secondary-text mb-16 lg:text-lg">
        {tokenNeedData.subtitle}
      </p>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tokenNeedData.card.map((card) => (
          <CtaCard key={card.title} {...card} />
        ))}
      </div>
      <ExternalLink
        text={tokenNeedData.arrowLink.text}
        url={tokenNeedData.arrowLink.link.url}
        className="mx-auto mt-12"
      />
    </div>
  );
};

export default TokenNeedSection;
