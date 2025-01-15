import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import { KlerosBook as IKlerosBook } from "@/queries/research-development/tabs-data";

const KlerosBook: React.FC<IKlerosBook> = ({
  bookCover,
  subtitle,
  bookTitle,
  downloadFormats,
}) => {
  return (
    <div
      className={clsx(
        "bg-background-1",
        "px-6 pb-[90px] pt-12 lg:flex-row lg:px-32 lg:py-24",
        "flex flex-col items-start justify-start gap-16",
      )}
    >
      <div className="max-w-457 relative h-[536px] w-full flex-shrink-0 lg:h-[717px] lg:w-[457px]">
        <Image src={bookCover.url} alt="Book Cover" fill className="!w-fit" />
      </div>
      <div className="space-y-16">
        <div className="space-y-6">
          <h3 className="text-lg text-primary-purple">{subtitle}</h3>
          <h1 className="text-2xl font-medium lg:text-3xl">{bookTitle}</h1>
        </div>
        <div className="flex flex-wrap gap-4">
          {downloadFormats.map((format) => (
            <Link
              key={format.text}
              href={format.link.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button className="text-background-1">{format.text}</Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KlerosBook;
