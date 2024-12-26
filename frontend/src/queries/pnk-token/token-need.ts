import { gql } from "graphql-request";

import { ArrowLink } from "../navbar";

export const tokenNeedSectionQuery = gql`
  {
    pnkTokenPageNeedSection {
      header
      subtitle
      card {
        title
        description
        icon {
          url
        }
        arrowLink {
          text
          link {
            url
          }
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

export type TokenNeedSectionQueryType = {
  pnkTokenPageNeedSection: {
    header: string;
    subtitle: string;
    card: {
      title: string;
      description: string;
      icon: {
        url: string;
        name: string;
      };
      arrowLink: ArrowLink;
    }[];
    arrowLink: ArrowLink;
  };
};
