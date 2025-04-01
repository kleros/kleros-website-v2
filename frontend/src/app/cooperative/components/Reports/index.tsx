import { useCallback } from "react";

import clsx from "clsx";

import { request } from "@/utils/graphQLClient";

import { reportQuery, ReportType, IReportQuery } from "./queries";
import ReportCard from "./ReportCard";

const Reports: React.FC = async () => {
  const reportsData = await request<IReportQuery>(reportQuery);

  return <ComponentContent {...{ reportsData }} />;
};

interface IComponentContent {
  reportsData: IReportQuery;
}

const ComponentContent: React.FC<IComponentContent> = ({ reportsData }) => {
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

export default Reports;
