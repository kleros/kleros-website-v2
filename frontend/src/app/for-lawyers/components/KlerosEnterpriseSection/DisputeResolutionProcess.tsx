"use client";

import Image from "next/image";

import { useScreenSize } from "@/hooks/useScreenSize";

import { ForLawyersPageKlerosEnterpiseSectionType } from "../../queries/kleros-enterprise-section";

import HighlightedText from "./HighlightedText";

type IDisputeResolutionProcess = Pick<
  ForLawyersPageKlerosEnterpiseSectionType["forLawyersPageKlerosEnterpriseSection"],
  "disputeResolutionProcessHeader" | "processDiagram" | "processDiagramDesktop"
>;

const DisputeResolutionProcess: React.FC<IDisputeResolutionProcess> = ({
  disputeResolutionProcessHeader,
  processDiagram,
  processDiagramDesktop,
}) => {
  const screenSize = useScreenSize();
  return (
    <div className="flex flex-col gap-8">
      <HighlightedText
        {...disputeResolutionProcessHeader}
        fullTextStyle="!text-primary-text !text-lg !font-medium lg:!text-xl"
        highlightedTextStyle="!text-lg !font-medium lg:!text-xl"
      />

      <div className="relative flex w-full justify-center">
        {screenSize === "lg" ? (
          <Image
            src={processDiagramDesktop.url}
            width={1182}
            height={707}
            alt="Process diagram"
          />
        ) : (
          <Image
            src={processDiagram.url}
            width={342}
            height={864}
            alt="Process diagram"
          />
        )}
      </div>
    </div>
  );
};

export default DisputeResolutionProcess;
