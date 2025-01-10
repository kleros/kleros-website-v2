import { gql } from "graphql-request";

export type Community = {
  title: string;
  subtitle: string;
  url: string;
  icon: {
    url: string;
    name: string;
  };
};

export const heroQuery = gql`
  {
    communityPageHero {
      header
      subtitle
      communityButtons {
        text
        link {
          url
        }
      }
      background {
        url
      }
    }
    communities {
      title
      subtitle
      url
      icon {
        url
        name
      }
    }
  }
`;

export type HeroQueryType = {
  communityPageHero: {
    header: string;
    subtitle: string;
    communityButtons: {
      text: string;
      link: {
        url: string;
      };
    }[];
    background: {
      url: string;
    };
  };
  communities: Community[];
};
