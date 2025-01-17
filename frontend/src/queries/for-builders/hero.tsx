import { gql } from "graphql-request";

export const heroQuery = gql`
  {
    forBuildersPageHero {
      title
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
      arrowLink {
        text
        link {
          url
        }
      }
    }
  }
`;

export type HeroQueryType = {
  forBuildersPageHero: {
    title: string;
    subtitle: string;
    button: {
      text: string;
      link: {
        url: string;
      };
    };
    arrowLink: {
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
