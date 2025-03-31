import { gql } from "graphql-request";

import { ArrowLink } from "@/queries/navbar";

export const heroQuery = gql`
  {
    forLawyersPageHero {
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
  forLawyersPageHero: {
    header: string;
    subtitle: string;
    buttons: ArrowLink[];
    arrowLink: ArrowLink;
    background: {
      url: string;
    };
  };
};
