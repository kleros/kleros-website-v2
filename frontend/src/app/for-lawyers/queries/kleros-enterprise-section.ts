import { gql } from "graphql-request";

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

      disputeResolutionProcessHeader {
        fullText
        highlightedText
      }

      processDiagram {
        url
      }

      processDiagramDesktop {
        url
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
    disputeResolutionProcessHeader: HighlightedText;
    processDiagram: {
      url: string;
    };
    processDiagramDesktop: {
      url: string;
    };
    table: Table;
  };
};
