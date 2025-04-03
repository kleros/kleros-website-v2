import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import ExternalLink from "@/components/ExternalLink";

import { ILogosPackageQuery } from "./queries";

interface ILogosPackageSection {
  logosPackageData: ILogosPackageQuery["brandAssetsPageLogosPackageSection"];
}

const LogosPackageSection: React.FC<ILogosPackageSection> = ({
  logosPackageData,
}) => {
  return (
    <div
      className={
        "relative space-y-6 bg-background-2 px-6 py-12 lg:px-32 lg:py-24"
      }
    >
      <h1 className="text-xl font-medium text-primary-text lg:text-3xl">
        {logosPackageData.header}
      </h1>
      <p className="text-secondary-text lg:text-lg">
        {logosPackageData.subtitle}
      </p>
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
      />
    </div>
  );
};

export default LogosPackageSection;
