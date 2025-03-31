import { gql } from "graphql-request";

import { ArrowLink } from "@/queries/navbar";

export const forLawyersPageParticipateSectionQuery = gql`
  {
    forLawyersPageParticipateSection {
      headerSubtitle
      header
      subtitle
      starterKitSection {
        title
        button {
          text
          link {
            url
          }
        }
        background {
          url
        }
      }
    }
  }
`;

export type ForLawyersPageParticipateSection = {
  forLawyersPageParticipateSection: {
    headerSubtitle: string;
    header: string;
    subtitle: string;
    starterKitSection: {
      title: string;
      button: ArrowLink;
      background: {
        url: string;
      };
    };
  };
};
