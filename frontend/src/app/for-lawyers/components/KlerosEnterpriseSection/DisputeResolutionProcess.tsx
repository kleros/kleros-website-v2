import ResponsiveImage from "@/components/ResponsiveImage";

import { ForLawyersPageKlerosEnterpiseSectionType } from "../../queries/kleros-enterprise-section";

import HighlightedText from "./HighlightedText";

type IDisputeResolutionProcess = Pick<
  ForLawyersPageKlerosEnterpiseSectionType["forLawyersPageKlerosEnterpriseSection"],
  "disputeResolutionProcessHeader" | "processDiagram"
>;

const DisputeResolutionProcess: React.FC<IDisputeResolutionProcess> = ({
  disputeResolutionProcessHeader,
  processDiagram,
}) => {
  return (
    <div className="flex flex-col gap-8 lg:px-32">
      <HighlightedText
        {...disputeResolutionProcessHeader}
        fullTextStyle="text-primary-text! text-lg! font-medium! lg:text-xl!"
        highlightedTextStyle="text-lg! font-medium! lg:text-xl!"
      />

      <div className="relative flex w-full justify-center">
        <ResponsiveImage
          mobileProps={{
            src: processDiagram.mobile.url,
            alt: "Process diagram",
            width: 342,
            height: 864,
          }}
          desktopProps={{
            src: processDiagram.desktop.url,
            alt: "Process diagram",
            width: 1182,
            height: 707,
          }}
        />
      </div>
    </div>
  );
};

export default DisputeResolutionProcess;
