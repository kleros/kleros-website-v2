import { TokenStat } from "@/queries/pnk-token/tokenomics";

const Stat: React.FC<TokenStat & { label: string }> = ({
  label,
  primaryValue,
  secondaryValue,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-base text-primary-text">{label}</label>
      <div className="flex flex-row gap-4">
        <h2 className="text-xl font-medium text-primary-text lg:text-2xl">
          {primaryValue}
        </h2>
        <h2 className="text-xl text-primary-blue lg:text-2xl">
          {secondaryValue}
        </h2>
      </div>
    </div>
  );
};

export default Stat;
