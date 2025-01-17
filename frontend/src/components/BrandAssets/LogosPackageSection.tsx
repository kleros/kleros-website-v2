import Link from "next/link";

import { LogosPackageSectionQueryType } from "@/queries/brand-assets/logos-package-section";

import Button from "../Button";
import ExternalLink from "../ExternalLink";

interface ILogosPackageSection {
  logosPackageData: LogosPackageSectionQueryType["brandAssetsPageLogosPackageSection"];
}

const LogosPackageSection: React.FC<ILogosPackageSection> = ({
  logosPackageData,
}) => {
  return (
    <div className="relative bg-background-2 px-6 pb-12 pt-32">
      <div className="space-y-6">
        <h1 className="w-min text-3xl">{logosPackageData.header}</h1>
        <p className="text-lg">{logosPackageData.subtitle}</p>
        <div>
          <Link
            href={logosPackageData.button?.link?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">
              <span className="text-background-2">
                {logosPackageData.button?.text}
              </span>
            </Button>
          </Link>
        </div>
        <ExternalLink
          url={logosPackageData.arrowLink.link.url}
          text={logosPackageData.arrowLink.text}
          className="z-[1] flex-wrap"
        />
      </div>
    </div>
  );
};

export default LogosPackageSection;
