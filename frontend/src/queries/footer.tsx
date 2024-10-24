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
    footerSubscribeCta {
      logo {
        url
      }
      notice
      cta_text
      cta_button
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
    }[],
  },
  footerSocialsSection: {
    socials: {
      name: string,
      icon_white: {
        url: string
      },
    }[],
  },
  footerSubscribeCta: {
    logo: {
      url: string
    },
    notice: string,
    cta_text: string,
    cta_button: string,
  },
};
