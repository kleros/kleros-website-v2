import { gql } from "graphql-request";

export const heroQuery = gql`
  {
    communityPageHero {
      header
      subtitle
      communityButtons {
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
`;

export type IHeroQuery = {
  communityPageHero: {
    header: string;
    subtitle: string;
    communityButtons: {
      text: string;
      link: {
        url: string;
      };
    }[];
    background: {
      url: string;
    };
  };
};
