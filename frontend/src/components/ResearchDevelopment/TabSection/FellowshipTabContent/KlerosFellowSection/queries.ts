import { gql } from "graphql-request";

import { ArrowLink } from "@/queries/navbar";

export const forLawyersPageBecomeAFellowSectionQuery = gql`
  {
    forLawyersPageBecomeAFellowSection {
      headerSubtitle
      header
      firstSubtitle
      secondSubtitle
      fellowImages {
        url
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

export type ForLawyersPageBecomeAFellowSection = {
  forLawyersPageBecomeAFellowSection: {
    headerSubtitle: string;
    header: string;
    firstSubtitle: string;
    secondSubtitle: string;
    fellowImages: {
      url: string;
    }[];
    arrowLink: ArrowLink;
  };
};
