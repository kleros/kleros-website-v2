import { gql } from "graphql-request";

export const homeCaseStudiesQuery = gql`
  {
    homeCaseStudiesSection {
      title
      subtitle
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

export type HomeCaseStudiesQueryType = {
  homeCaseStudiesSection: {
    title: string;
    subtitle: string;
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
