import { gql } from "graphql-request";

import { ArrowLink } from "../navbar";

export const heroQuery = gql`
  {
    rAndDPageHero {
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
  rAndDPageHero: {
    header: string;
    subtitle: string;
    buttons: ArrowLink[];
    arrowLink: ArrowLink[];
    background: {
      url: string;
    };
  };
};
