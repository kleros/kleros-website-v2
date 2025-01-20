import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import ExternalLink from "@/components/ExternalLink";
import { RAndDPageWaitlistSection } from "@/queries/research-development/tabs-data";

const WaitlistSection: React.FC<RAndDPageWaitlistSection> = ({
  header,
  applyButton,
  arrowLink,
  icon,
}) => {
  return (
    <div
      className={clsx(
        "bg-background-1",
        "px-6 pb-[90px] pt-12 lg:flex-row lg:px-32 lg:py-24",
        "flex flex-col items-start justify-start gap-16",
      )}
    >
      <div className="space-y-16">
        <h1 className="max-w-[683px] text-2xl font-medium lg:text-3xl">
          {header}
        </h1>
        <div className="flex flex-wrap gap-8">
          <Link
            href={applyButton.link.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button className="text-background-1">{applyButton.text}</Button>
          </Link>
          <ExternalLink url={arrowLink.link.url} text={arrowLink.text} />
        </div>
      </div>
      <div className="relative h-[267px] w-[295px] flex-shrink-0">
        <Image src={icon.url} alt="Icon" fill className="!w-fit" />
      </div>
    </div>
  );
};

export default WaitlistSection;
