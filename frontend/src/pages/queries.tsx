import { gql } from "graphql-request";

export type Solution = {
  solution_name: string;
  header_title?: string;
  header_description: string;
  logo_svg: {
    url: string;
  };
};

export type ResourceSection = {
  title: string;
  resource_links: ResourceLink[];
};

export type ResourceLink = {
  name: string;
  url: string;
};

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
    navLinks(sort: "createdAt:asc") {
      title
      path_name
      is_dropdown
      solutions {
        solution_name
        header_title
        header_description
        logo_svg {
          url
        }
      }
      resource_sections {
        title
        resource_links {
          name
          url
        }
      }
    }
  }
`;

export type NavLink = {
  title: string;
  path_name?: string | null;
  is_dropdown: boolean;
  solutions?: Solution[];
  resource_sections?: ResourceSection[];
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
