import React from "react";
import Button from "@/components/Button";
import { EnterCourtSection as IEnterCourtSection } from "@/queries/earn/tabs-data";
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "@/components/ExternalLink";

const EnterCourtSection: React.FC<IEnterCourtSection> = ({ button,arrowLink, background }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-16 p-8 ">
      <Link
        href={button.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-8 z-[1]"
      >
        <Button>
          <span className="text-background-2">{button.text}</span>
        </Button>
      </Link>
      <ExternalLink url={arrowLink.link.url} text={arrowLink.text} className="flex-wrap justify-center z-[1]"/>
      <Image
        src={background.url}
        alt="Learn more Image Background"
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  );
};
export default EnterCourtSection;
