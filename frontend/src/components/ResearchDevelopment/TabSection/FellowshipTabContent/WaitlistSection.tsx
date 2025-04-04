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
  const fellowshipBatchIsLive = false;

  return (
    <div
      className={clsx(
        "flex flex-col gap-16 bg-background-1 px-6 py-12 md:flex-row md:gap-4",
        "lg:px-32 lg:py-24",
      )}
    >
      <div>
        <h3 className="mb-8 text-xl font-medium text-primary-text lg:mb-12 lg:text-3xl">
          {header}
        </h3>
        <div className="flex items-start gap-4 md:flex-row md:gap-8">
          {fellowshipBatchIsLive ? (
            <Link
              href={applyButton.link.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button className="text-background-1">{applyButton.text}</Button>
            </Link>
          ) : null}
          <ExternalLink url={arrowLink.link.url} text={arrowLink.text} />
        </div>
      </div>
      <Image
        className="mx-auto mb-20 lg:mx-0 lg:ml-auto lg:justify-self-end"
        alt="Kleros Logo"
        src={icon.url}
        width="296"
        height="267"
      />
    </div>
  );
};

export default WaitlistSection;
