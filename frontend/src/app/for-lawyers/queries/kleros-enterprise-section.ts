import { gql } from "graphql-request";

import { ArrowLink } from "@/queries/navbar";

export const forLawyersPageKlerosEnterpriseSectionQuery = gql`
  {
    forLawyersPageKlerosEnterpriseSection {
      headerSubtitle
      header

      subtitle {
        fullText
        highlightedText
      }

      cards {
        title
        description
        icon {
          url
        }
      }
      arrowLink {
        text
        link {
          url
        }
      }

      disputeResolutionProcessHeader {
        fullText
        highlightedText
      }

      processDiagram {
        mobile {
          url
        }
        desktop {
          url
        }
      }

      table {
        tableHeadings {
          heading
        }
        tableRows {
          rowHeading
          rowData {
            primaryValue
            secondaryValue
          }
        }
      }
    }
  }
`;

export type Table = {
  tableHeadings: {
    heading: string;
  }[];
  tableRows: {
    rowHeading: string;
    rowData: {
      primaryValue: string;
      secondaryValue: string;
    }[];
  }[];
};

export type HighlightedText = {
  fullText: string;
  highlightedText: string;
};

export type Card = {
  title: string;
  description: string;
  icon: {
    url: string;
  };
};

export type ForLawyersPageKlerosEnterpiseSectionType = {
  forLawyersPageKlerosEnterpriseSection: {
    headerSubtitle: string;
    header: string;
    subtitle: HighlightedText;
    cards: Card[];
    arrowLink: ArrowLink;
    disputeResolutionProcessHeader: HighlightedText;

    processDiagram: {
      mobile: { url: string };
      desktop: { url: string };
    };
    table: Table;
  };
};
