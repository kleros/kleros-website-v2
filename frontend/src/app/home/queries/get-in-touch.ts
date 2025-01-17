import { gql } from "graphql-request";

export const getInTouchQuery = gql`
  {
    homeGetInTouchSection {
      title
      subtitle
      icon {
        url
      }
      link {
        text
        link {
          url
        }
      }
    }
  }
`;

export type IGetInTouchQuery = {
  homeGetInTouchSection: {
    title: string;
    subtitle: string;
    icon: {
      url: string;
    };
    link: {
      text: string;
      link: {
        url: string;
      };
    };
  };
};
