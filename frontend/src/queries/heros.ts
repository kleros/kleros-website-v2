import { gql } from "graphql-request";

export const herosQuery = gql`
  {
    pnkTokenPageHero {
      background {
        url
      }
    }
    earnPageHero {
      background {
        url
      }
    }
  }
`;

export type HeroQueryType = {
  pnkTokenPageHero: {
    background: {
      url: string;
    };
  };
  earnPageHero: {
    background: {
      url: string;
    };
  };
};
