import Dropdown from "@/components/Dropdown";
import { Reports } from "./ReportCard";
import { useEffect, useMemo, useState } from "react";
import { Report } from "@/queries/cooperative/report-section";

interface IDropdownContainer
  extends Pick<Report, "yearDropdownLabel" | "monthDropdownLabel"> {
  reports: Reports;
  setReportUrl: (url?: string) => void;
}

const DropdownContainer: React.FC<IDropdownContainer> = ({
  reports,
  setReportUrl,
  yearDropdownLabel,
  monthDropdownLabel,
}) => {
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<string>();

  const yearsSet = useMemo(
    () =>
      reports.reduce<Set<number>>((acc, current) => {
        acc.add(current.year);
        return acc;
      }, new Set([])),
    [reports]
  );

  const years = useMemo(
    () =>
      Array.from(new Set(yearsSet))
        .sort((a, b) => a - b)
        .map((year) => ({
          key: year,
          value: year,
        })),
    [yearsSet]
  );

  const monthsSet = useMemo(
    () =>
      reports.reduce<Set<string>>((acc, current) => {
        if (current.month) {
          acc.add(current.month);
        }
        return acc;
      }, new Set([])),
    [reports]
  );

  const months = useMemo(
    () =>
      Array.from(new Set(monthsSet))
        .sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b))
        .map((month) => ({
          key: month,
          value: month,
        })),
    [monthsSet]
  );

  const isMonthInfo = months.length !== 0;

  useEffect(() => {
    const selectedReport = reports.find(
      (report) =>
        (isMonthInfo ? report.month === month : true) && report.year === year
    );
    setReportUrl(selectedReport?.url);
  }, [month, year]);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
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
