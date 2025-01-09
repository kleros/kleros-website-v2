import { gql } from "graphql-request";

export const heroQuery = gql`
  {
    earnPageHero {
      title
      subtitle
      statDisplay {
        statName
        statValue
        statValueSuffix
        icon {
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
  earnPageHero: {
    title: string;
    subtitle: string;
    statDisplay: {
      statName: string;
      statValue: string;
      statValueSuffix: string;
      icon: {
        url: string;
      };
    };
    background: {
      url: string;
    };
  };
};
