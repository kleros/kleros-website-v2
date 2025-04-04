import { gql } from "graphql-request";

import { Flowchart } from "@/app/enterprise/queries/kleros-mediation-section";
import { ArrowLink } from "@/queries/navbar";

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
