import { gql } from "graphql-request";

export const startEarningQuery = gql`
  {
    homeStartEarningSection {
      title
      subtitle
      cta {
        title
      }
      cards {
        icon {
          url
        }
        title
        subtitle
        link {
          text
          link {
            url
          }
        }
      }
    }
  }
`;

export type IStartEarningQuery = {
  homeStartEarningSection: {
    title: string;
    subtitle: string;
    cta: {
      title: string;
    };
    cards: Array<{
      icon: {
        url: string;
      };
      title: string;
      subtitle: string;
      link: {
        text: string;
        link: {
          url: string;
        };
      };
    }>;
  };
};
