"use client";

import { useState } from "react";

import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import { Report } from "@/queries/cooperative/report-section";

import DropdownContainer from "./DropdownContainer";

export type Reports = {
  url: string;
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
  const [reportUrl, setReportUrl] = useState<string>();

  return (
    <div
      className={clsx(
        "bg-background-2 md:pb-7",
        "flex flex-col justify-between gap-16 md:flex-row",
      )}
    >
      <div className="flex flex-col items-start gap-8">
        <h2 className="text-2xl font-medium text-primary-text md:text-3xl">
          {title}
        </h2>
        <p className="text-lg text-secondary-text">{subtitle}</p>

        <DropdownContainer
          {...{
            reports,
            setReportUrl,
            yearDropdownLabel,
            monthDropdownLabel,
          }}
        />

        <CustomLink href={reportUrl ?? ""}>
          <Button
            variant="primary"
            className="text-background-1"
            disabled={typeof reportUrl === "undefined"}
          >
            {downloadButtonText}
          </Button>
        </CustomLink>
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
