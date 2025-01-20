import { gql } from "graphql-request";

export const heroQuery = gql`
  {
    brandAssetsPageHero {
      header
      subtitle
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
`;

export type HeroQueryType = {
  brandAssetsPageHero: {
    header: string;
    subtitle: string;
    button: {
      text: string;
      link: {
        url: string;
      };
    };
    background: {
      url: string;
    };
  };
};
