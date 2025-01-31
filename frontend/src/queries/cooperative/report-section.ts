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
      file {
        url
      }
      year
    }

    riskReports {
      file {
        url
      }
      month
      year
    }

    treasuryReports {
      file {
        url
      }
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
    file: { url: string };
    year: number;
  }[];

  riskReports: {
    file: { url: string };
    month: string;
    year: number;
  }[];

  treasuryReports: {
    file: { url: string };
    month: string;
    year: number;
  }[];
};
