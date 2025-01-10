import { gql } from "graphql-request";

import { ArrowLink } from "../navbar";

export const heroQuery = gql`
  {
    cooperativePageHero {
      header
      subtitle
      buttons {
        text
        link {
          url
        }
      }
      arrowLink {
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
  cooperativePageHero: {
    header: string;
    subtitle: string;
    buttons: {
      text: string;
      link: {
        url: string;
      };
    }[];
    arrowLink: ArrowLink;
    background: {
      url: string;
    };
  };
};
