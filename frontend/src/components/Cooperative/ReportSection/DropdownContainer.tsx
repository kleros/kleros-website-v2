import { useEffect, useMemo, useState } from "react";

import Dropdown from "@/components/Dropdown";
import { Report } from "@/queries/cooperative/report-section";

import { Reports } from "./ReportCard";

interface IDropdownContainer
  extends Pick<Report, "yearDropdownLabel" | "monthDropdownLabel"> {
  reports: Reports;
  setReportUrl: (url?: string) => void;
}

type IProcessedReports = Record<number, Array<string>>;

const DropdownContainer: React.FC<IDropdownContainer> = ({
  reports,
  setReportUrl,
  yearDropdownLabel,
  monthDropdownLabel,
}) => {
  const processedReports = useMemo<IProcessedReports>(
    () =>
      reports.reduce<IProcessedReports>((acc, report: Reports[number]) => {
        const months = acc[report.year] ?? [];
        if (report.month) {
          acc[report.year] = [...months, report.month];
        } else {
          acc[report.year] = months;
        }
        return acc;
      }, {}),
    [reports]
  );

  const years = useMemo(
    () =>
      Object.keys(processedReports)
        .map((key) => parseInt(key))
        .sort((a, b) => b - a)
        .map((year) => ({
          key: year,
          value: year,
        })),
    [processedReports]
  );

  const firstYear = years[0].value;

  const [year, setYear] = useState<number>(firstYear);

  const months = useMemo(
    () =>
      processedReports[year]
        .sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b))
        .map((month) => ({
          key: month,
          value: month,
        })),
    [year, processedReports]
  );

  const [month, setMonth] = useState<string>();

  const isMonthInfo = months.length > 0;

  useEffect(() => {
    setMonth(undefined);
  }, [year]);

  useEffect(() => {
    const selectedReport = reports.find(
      (report) =>
        (isMonthInfo ? report.month === month : true) && report.year === year
    );
    setReportUrl(selectedReport?.url);
  }, [isMonthInfo, month, year, reports, setReportUrl]);

  return (
    <div className={
      "flex flex-col md:flex-row gap-8 items-start md:items-center"
    }>
      <div className="flex gap-4 items-center">
        <label className="text-lg text-secondary-text">
          {yearDropdownLabel}
        </label>
        <Dropdown
          items={years}
          value={year}
          onChange={(val) => setYear(Number(val))}
        />
      </div>
      {isMonthInfo ? (
        <div className="flex gap-4 items-center">
          <label className="text-lg text-secondary-text">
            {monthDropdownLabel}
          </label>
          <Dropdown
            items={months}
            value={month}
            onChange={(val) => setMonth(val.toString())}
          />
        </div>
      ) : null}
    </div>
  );
};

const monthOrder = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default DropdownContainer;
