import { gql } from "graphql-request";

export const homeLearnPostsQuery = gql`
  {
    homeLearnPostsSection {
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
      introduction {
        heading_text
        link {
          text
          link {
            name
            url
          }
        }
        closing_text
      }
    }
  }
`;

export type HomeLearnPostsQueryType = {
  homeLearnPostsSection: {
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
    introduction: {
      heading_text: string;
      link: {
        text: string;
        link: {
          name: string;
          url: string;
        };
      };
      closing_text: string;
    };
  };
};
