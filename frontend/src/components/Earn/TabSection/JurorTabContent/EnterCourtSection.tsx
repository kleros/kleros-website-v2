import React from "react";

import Image from "next/image";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import ExternalLink from "@/components/ExternalLink";
import { EnterCourtSection as IEnterCourtSection } from "@/queries/earn/tabs-data";

const EnterCourtSection: React.FC<IEnterCourtSection> = ({
  button,
  arrowLink,
  background,
}) => {
  return (
    <div className="relative mt-16 flex w-full flex-col items-center justify-center p-8">
      <CustomLink href={button.link.url} className="z-[1] mb-8">
        <Button>
          <span className="text-background-2">{button.text}</span>
        </Button>
      </CustomLink>
      <ExternalLink
        url={arrowLink.link.url}
        text={arrowLink.text}
        className="z-[1] flex-wrap justify-center"
      />
      <Image
        src={background.url}
        alt="Learn more Image Background"
        fill
        className="rounded-2xl object-cover"
      />
    </div>
  );
};
export default EnterCourtSection;
