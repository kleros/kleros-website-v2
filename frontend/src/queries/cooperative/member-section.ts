import { gql } from "graphql-request";

import { ArrowLink } from "../navbar";

export type CooperativeLearnMoreSection = {
  title: string;
  button: ArrowLink;
  background: {
    url: string;
  };
};

export const cooperativePageMemberQuery = gql`
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

export type CooperativePageMemberQueryType = {
  cooperativePageMemberSection: {
    header: string;
    subtitle: string;
    learnMoreSection: CooperativeLearnMoreSection;
    secondaryHeader: string;
    arrowLink: ArrowLink;
  };
};
