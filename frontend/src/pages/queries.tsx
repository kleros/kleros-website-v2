import { gql } from "graphql-request";

export const partnersQueryDocument = gql`
  {
    partners {
      name
      icon_svg {
        url
      }
    }
  }
`;

export type Partner = {
  name: string;
  icon_svg: { url: string };
};

export const klerosLogoQueryDocument = gql`
  {
    klerosLogo {
      logo_svg {
        url
      }
    }
  }
`;

export type KlerosLogo = {
  logo_svg: { url: string };
};

export const navLinksQueryDocument = gql`
  {
    navLinks {
      title
      path_name
      is_dropdown
    }
  }
`;

export type NavLink = {
  title: string;
  path_name: string;
  is_dropdown: boolean;
};

export const headerButtonQueryDocument = gql`
  {
    headerButton {
      name
      url
    }
  }
`;

export type HeaderButton = {
  name: string;
  url: string;
};
