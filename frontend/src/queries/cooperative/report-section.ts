import { gql } from "graphql-request";

export type ReportType = "annual" | "risk" | "treasury";
export type Report = {
  title: string;
  subtitle: string;
  reportType: ReportType;
  yearDropdownLabel: string;
  monthDropdownLabel: string;
  downloadButtonText: string;
  icon: {
    name: string;
    url: string;
  };
};

export const cooperativePageReportQuery = gql`
  {
    cooperativePageReportSection {
      reports {
        title
        subtitle
        reportType
        yearDropdownLabel
        monthDropdownLabel
        downloadButtonText
        icon {
          name
          url
        }
      }
    }

    annualReports {
      url
      year
    }

    riskReports {
      url
      month
      year
    }

    treasuryReports {
      url
      month
      year
    }
  }
`;

export type CooperativePageReportQueryType = {
  cooperativePageReportSection: {
    reports: Report[];
  };

  annualReports: {
    url: string;
    year: number;
  }[];

  riskReports: {
    url: string;
    month: string;
    year: number;
  }[];

  treasuryReports: {
    url: string;
    month: string;
    year: number;
  }[];
};
