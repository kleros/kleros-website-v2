import { gql } from "graphql-request";

import { ArrowLink } from "@/queries/navbar";

export const forLawyersPageDisputeResolutionSectionQuery = gql`
  {
    forLawyersPageDisputeResolutionWithKlerosSection {
      headerSubtitle
      header
      subtitle
      secondHeader
      secondSubtitle
      thirdHeader
      thirdSubtitle

      arbitrationMethodTable {
        name
        methodType
        items {
          name
          value
          icon {
            url
          }
        }
        icon {
          url
        }
      }

      publications(pagination: { limit: 50 }) {
        topic
        authors
        paperLink {
          text
          link {
            url
          }
        }
      }
    }
  }
`;

export type ArbitrationMethodTableType = {
  name: string;
  methodType: "kleros" | "other";
  items: {
    name: string;
    value: string;
    icon: {
      url: string;
    };
  }[];
  icon: {
    url: string;
  };
};

export type ForLawyersPageDisputeResolutionSectionQueryType = {
  forLawyersPageDisputeResolutionWithKlerosSection: {
    headerSubtitle: string;
    header: string;
    subtitle: string;
    secondHeader: string;
    secondSubtitle: string;
    thirdHeader: string;
    thirdSubtitle: string;
    arbitrationMethodTable: ArbitrationMethodTableType[];
    publications: {
      topic: string;
      authors: string;
      paperLink: ArrowLink;
    }[];
  };
};
