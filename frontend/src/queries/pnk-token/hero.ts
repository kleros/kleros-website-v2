import { gql } from "graphql-request";

export const heroQuery = gql`
  {
    pnkTokenPageHero {
      header
      subtitle
      buyButton {
        text
        link {
          url
        }
      }
      background {
        url
      }
    }
    tokenExplorers {
      icon {
        url
      }
      name
      url
    }
  }
`;

export type HeroQueryType = {
  pnkTokenPageHero: {
    header: string;
    subtitle: string;
    buyButton: {
      text: string;
      link: {
        url: string;
      };
    };
    background: {
      url: string;
    };
  };
  tokenExplorers: {
    name: string;
    url: string;
    icon: {
      url: string;
    };
  }[];
};
