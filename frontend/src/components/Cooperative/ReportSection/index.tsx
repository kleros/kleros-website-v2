import { useCallback } from "react";

import clsx from "clsx";

import {
  CooperativePageReportQueryType,
  ReportType,
} from "@/queries/cooperative/report-section";

import ReportCard from "./ReportCard";

interface IReportSection {
  reportsData: CooperativePageReportQueryType;
}

const ReportSection: React.FC<IReportSection> = ({ reportsData }) => {
  const getReports = useCallback(
    (reportType: ReportType) => {
      switch (reportType) {
        case "annual":
          return reportsData.annualReports;
        case "risk":
          return reportsData.riskReports;
        default:
          return reportsData.treasuryReports;
      }
    },
    [reportsData],
  );

  return (
    <div
      className={clsx(
        "bg-background-2 px-6 py-12 lg:px-32 lg:py-24",
        "flex flex-col gap-12 md:gap-24",
      )}
    >
      {reportsData.cooperativePageReportSection.reports.map((report, i) => (
        <ReportCard
          key={i}
          {...report}
          reports={getReports(report.reportType)}
        />
      ))}
    </div>
  );
};

export default ReportSection;
