import { gql } from "graphql-request";

export const heroQuery = gql`
  {
    homePageHero {
      title
      subtitle
      primaryButton {
        text
        link {
          url
        }
      }
      secondaryButton {
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
  homePageHero: {
    title: string;
    subtitle: string;
    primaryButton: {
      text: string;
      link: {
        url: string;
      };
    };
    secondaryButton: {
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
    };
    background: {
      url: string;
    };
  };
};
