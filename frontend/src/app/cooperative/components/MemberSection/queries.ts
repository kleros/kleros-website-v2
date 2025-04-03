import { gql } from "graphql-request";

import { IArrowLink } from "@/queries/utils";

export const memberQuery = gql`
  {
    cooperativePageMemberSection {
      header
      subtitle
      learnMoreSection {
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
      secondaryHeader
      arrowLink {
        text
        link {
          url
        }
      }
    }
  }
`;

export type ILearnMoreSection = {
  title: string;
  button: IArrowLink;
  background: {
    url: string;
  };
};

export type IMemberQuery = {
  cooperativePageMemberSection: {
    header: string;
    subtitle: string;
    learnMoreSection: ILearnMoreSection;
    secondaryHeader: string;
    arrowLink: IArrowLink;
  };
};
