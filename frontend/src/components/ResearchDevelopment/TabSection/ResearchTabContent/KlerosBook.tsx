"use client";
import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/Button";
import { KlerosBook as IKlerosBook } from "@/queries/research-development/tabs-data";

const KlerosBook: React.FC<IKlerosBook> = ({
  bookCover,
  subtitle,
  bookTitle,
  downloadFormats,
}) => {
  const handleDownload = (url: string) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;

        const contentType = blob.type;

        const extension = contentType.split("/")[1] || "octet-stream";
        const fileExtension = extension === "json" ? "json" : extension;

        link.download = `KlerosBook.${fileExtension}`;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <div
      className={clsx(
        "bg-background-1",
        "px-6 pb-[90px] pt-12 lg:flex-row lg:px-32 lg:py-24",
        "flex flex-col items-start justify-start gap-16",
      )}
    >
      <div className="max-w-457 relative h-[536px] w-full flex-shrink-0 lg:h-[717px] lg:w-[457px]">
        <Image
          src={bookCover.url}
          alt="Book Cover"
          fill
          priority
          className="!w-fit"
        />
      </div>
      <div className="space-y-16">
        <div className="space-y-6">
          <h3 className="text-primary-purple lg:text-lg">{subtitle}</h3>
          <h1 className="text-xl font-medium text-primary-text lg:text-3xl">
            {bookTitle}
          </h1>
        </div>
        <div className="flex flex-wrap gap-4">
          {downloadFormats.map((format) => (
            <Button
              key={format.name}
              className="text-background-1"
              onClick={() => handleDownload(format.file.url)}
            >
              {format.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KlerosBook;
