import { gql } from "graphql-request";

export const footerQuery = gql`
  {
    footerLinksSection {
      Section {
        title
        links {
          name
          url
        }
      }
    }
    footerSocialsSection {
      socials {
        name
        url
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

export type FooterQueryType = {
  footerLinksSection: {
    Section: {
      title: string;
      links: {
        name: string;
        url: string;
      }[];
    }[];
  };
  footerSocialsSection: {
    socials: {
      name: string;
      url: string;
      icon_white: {
        url: string;
      };
    }[];
  };
  footerSubscribeCta: {
    logo: {
      url: string;
    };
    notice: string;
    cta_text: string;
    cta_button: string;
  };
};
