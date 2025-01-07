import ReportCard from "./ReportCard";

import {
  CooperativePageReportQueryType,
  ReportType,
} from "@/queries/cooperative/report-section";

interface IReportSection {
  reportsData: CooperativePageReportQueryType;
}

const ReportSection: React.FC<IReportSection> = ({ reportsData }) => {
  const getReports = (reportType: ReportType) => {
    switch (reportType) {
      case "annual":
        return reportsData.annualReports;
      case "risk":
        return reportsData.riskReports;
      default:
        return reportsData.treasuryReports;
    }
  };
  return (
    <div className="bg-background-2 py-12 lg:py-24 px-6 lg:px-32 flex flex-col gap-24">
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
