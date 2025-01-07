import Image from "next/image";

import Button from "@/components/Button";
import { Report } from "@/queries/cooperative/report-section";
import { useState } from "react";
import DropdownContainer from "./DropdownContainer";
import Link from "next/link";

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
    <div className="bg-background-2 flex flex-col md:flex-row gap-16 pb-7 justify-between">
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

        <Link href={reportUrl ?? ""} target="_blank" rel="noreferrer noopenner">
          <Button variant="primary" className="text-background-1">
            {downloadButtonText}
          </Button>
        </Link>
      </div>

      <div className="relative w-32 h-32 md:w-56 md:h-56 flex-shrink-0">
        <Image src={icon.url} alt={icon.name} fill className="object-contain" />
      </div>
    </div>
  );
};
export default ReportCard;
