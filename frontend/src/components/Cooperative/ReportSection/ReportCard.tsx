import { useState } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
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
    <div className={clsx(
      "bg-background-2 md:pb-7",
      "flex flex-col md:flex-row gap-16 justify-between"
    )}>
      <div className="flex flex-col gap-8 items-start">
        <h2 className="text-2xl md:text-3xl font-medium text-primary-text">
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

        <Link href={reportUrl ?? ""} target="_blank" rel="noreferrer noopener">
          <Button
            variant="primary"
            className="text-background-1"
            disabled={typeof reportUrl === "undefined"}
          >
            {downloadButtonText}
          </Button>
        </Link>
      </div>

      <div className={
        "relative w-32 h-32 md:w-56 md:h-56 flex-shrink-0 hidden md:block"
      }>
        <Image src={icon.url} alt={icon.name} fill className="object-contain" />
      </div>
    </div>
  );
};

export default ReportCard;
