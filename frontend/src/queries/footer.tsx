import { gql } from "graphql-request";

export const footerQuery = gql`
  {
    footerLinksSection {
      Section {
        title
        links {
          name
        }
      }
    }
    footerSocialsSection {
      socials {
        name,
        icon_white {
          url
        }
      }
    }
  }
`;

export type footerQueryType = {
  footerLinksSection: {
    Section: {
      title: string,
      links: {
        name: string
      }[],
    }[]
  }
  footerSocialsSection: {
    socials: {
      name: string,
      icon_white: {
        url: string
      }
    }[]
  }
};
