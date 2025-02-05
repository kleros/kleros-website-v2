"use client";

import { useState } from "react";

import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/Button";
import { Report } from "@/queries/cooperative/report-section";

import DropdownContainer from "./DropdownContainer";

export type Reports = {
  file: { url: string };
  month?: string;
  year: number;
}[];

interface IReportCard extends Report {
  reports: Reports;
}
const ReportCard: React.FC<IReportCard> = ({
  title,
  subtitle,
  icon,
  reports,
  yearDropdownLabel,
  monthDropdownLabel,
  downloadButtonText,
}) => {
  const [selectedReport, setSelectedReport] = useState<Reports[number]>();

  const handleDownload = () => {
    if (!selectedReport || !selectedReport.file.url) return;
    fetch(selectedReport.file.url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;

        const contentType = blob.type;

        const extension = contentType.split("/")[1] || "octet-stream";
        const fileExtension = extension === "json" ? "json" : extension;

        link.download = `${selectedReport.month ? selectedReport.month + "-" : ""}${selectedReport.year}.${fileExtension}`;

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
        "bg-background-2 md:pb-7",
        "flex flex-col justify-between gap-16 md:flex-row",
      )}
    >
      <div className="flex flex-col items-start gap-8">
        <h2 className="text-xl font-medium text-primary-text md:text-3xl">
          {title}
        </h2>
        <p className="text-secondary-text lg:text-lg">{subtitle}</p>

        <DropdownContainer
          {...{
            reports,
            setSelectedReport,
            yearDropdownLabel,
            monthDropdownLabel,
          }}
        />

        <Button
          variant="primary"
          className="text-background-1"
          disabled={typeof selectedReport === "undefined"}
          onClick={handleDownload}
        >
          {downloadButtonText}
        </Button>
      </div>

      <div
        className={
          "relative hidden h-32 w-32 flex-shrink-0 md:block md:h-56 md:w-56"
        }
      >
        <Image src={icon.url} alt={icon.name} fill className="object-contain" />
      </div>
    </div>
  );
};

export default ReportCard;
