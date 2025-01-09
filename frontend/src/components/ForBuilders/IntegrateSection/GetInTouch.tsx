import React from "react";

import Link from "next/link";
// import Image from "next/image";

import Button from "@/components/Button";
import { IntegrateQueryType } from "@/queries/for-builders/integrate";

interface IGetInTouch {
  integrateData: IntegrateQueryType["forBuildersPageIntegrateSection"];
}

const GetInTouch: React.FC<IGetInTouch> = ({ integrateData }) => {
  return (
    <>
      <div className="flex-column mt-16 flex flex-col items-center justify-center">
        <h2 className="mb-8 text-xl text-primary-text">
          {integrateData.getInTouchSection.header}
        </h2>
        <Link
          href={integrateData.getInTouchSection.button.link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <span className="text-background-2">
              {integrateData.getInTouchSection.button.text}
            </span>
          </Button>
        </Link>
      </div>
      {/* <Image
        src={integrateData.getInTouchSection.background.url}
        alt="Get In Touch Image Background"
        width="900"
        height="400"
        className="absolute z-[0]"
      /> */}
    </>
  );
};
export default GetInTouch;
