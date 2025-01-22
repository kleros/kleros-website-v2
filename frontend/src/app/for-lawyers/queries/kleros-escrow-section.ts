import { gql } from "graphql-request";

import { ArrowLink } from "@/queries/navbar";

import { Flowchart } from "./kleros-mediation-section";

export const forLawyersPageKlerosEscrowSectionQuery = gql`
  {
    forLawyersPageKlerosEscrowSection {
      header
      subtitle
      flowchartLabel
      secondHeader
      secondSubtitle
      flowchart {
        name
        description
        index
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

export type ForLawyersPageKlerosEscrowSection = {
  forLawyersPageKlerosEscrowSection: {
    header: string;
    subtitle: string;
    secondHeader: string;
    secondSubtitle: string;
    flowchartLabel: string;
    flowchart: Flowchart;
    arrowLink: ArrowLink;
  };
};
