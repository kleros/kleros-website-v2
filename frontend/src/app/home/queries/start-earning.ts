import { gql } from "graphql-request";

export const startEarningQuery = gql`
  {
    homeStartEarningSection {
      title
      subtitle
      cta {
        title
        buttonLink {
          text
          link {
            url
          }
        }
        background {
          url
        }
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
      buttonLink: Array<{
        text: string;
        link: {
          url: string;
        };
      }>;
      background: {
        url: string;
      };
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
