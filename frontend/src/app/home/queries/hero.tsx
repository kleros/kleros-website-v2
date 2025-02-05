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
      tokenStats {
        key
        primaryValue
        secondaryValue
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
    tokenStats: Array<{
      key: string;
      primaryValue: string;
      secondaryValue: string;
    }>;
    background: {
      url: string;
    };
  };
};
