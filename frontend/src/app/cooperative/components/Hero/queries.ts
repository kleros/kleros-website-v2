import { gql } from "graphql-request";

import { IArrowLink } from "@/queries/utils";

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

export type IHeroQuery = {
  cooperativePageHero: {
    header: string;
    subtitle: string;
    buttons: {
      text: string;
      link: {
        url: string;
      };
    }[];
    arrowLink: IArrowLink;
    background: {
      url: string;
    };
  };
};
