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
      socials {
        name
        url
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
  pnkTokenPageHero: {
    header: string;
    subtitle: string;
    buyButton: {
      text: string;
      link: {
        url: string;
      };
    };
    socials: {
      name: string;
      url: string;
        icon : {
            url: string;
        }
    }[];
    background: {
      url: string;
    };
  };
};
