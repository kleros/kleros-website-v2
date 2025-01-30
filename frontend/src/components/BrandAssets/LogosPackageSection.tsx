import { LogosPackageSectionQueryType } from "@/queries/brand-assets/logos-package-section";

import Button from "../Button";
import CustomLink from "../CustomLink";
import ExternalLink from "../ExternalLink";

interface ILogosPackageSection {
  logosPackageData: LogosPackageSectionQueryType["brandAssetsPageLogosPackageSection"];
}

const LogosPackageSection: React.FC<ILogosPackageSection> = ({
  logosPackageData,
}) => {
  return (
    <div className="relative space-y-6 bg-background-2 px-6 pb-12 pt-32">
      <h1 className="w-min text-3xl">{logosPackageData.header}</h1>
      <p className="text-lg text-secondary-text">{logosPackageData.subtitle}</p>
      <div>
        <CustomLink href={logosPackageData.button?.link?.url}>
          <Button variant="primary">
            <span className="text-background-2">
              {logosPackageData.button?.text}
            </span>
          </Button>
        </CustomLink>
      </div>
      <ExternalLink
        url={logosPackageData.arrowLink.link.url}
        text={logosPackageData.arrowLink.text}
        className="z-[1] flex-wrap"
      />
    </div>
  );
};

export default LogosPackageSection;
