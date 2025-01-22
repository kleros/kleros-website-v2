import { gql } from "graphql-request";

import { ArrowLink } from "@/queries/navbar";

import { Card } from "./kleros-enterprise-section";

export const forLawyersPageMediationSectionQuery = gql`
  {
    forLawyersPageMediationSection {
      header
      subtitle
      flowchart {
        name
        description
        index
      }
      benefitsHeader
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
    }
  }
`;

export type Flowchart = {
  name: string;
  description: string;
  index: number;
}[];

export type ForLawyersPageMediationSectionType = {
  forLawyersPageMediationSection: {
    header: string;
    subtitle: string;
    flowchart: Flowchart;
    benefitsHeader: string;
    cards: Card[];
    arrowLink: ArrowLink;
  };
};
