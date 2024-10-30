import { gql } from "graphql-request";

export type Solution = {
  solution_name: string;
  header_title?: string;
  header_description?: string;
  logo_svg: {
    url: string;
  };
  url: string;
};

export type ResourceLink = {
  name: string;
  url: string;
};

export type ResourceSection = {
  title: string;
  links: ResourceLink[];
};

export type NavLink = {
  title: string;
  path_name?: string | null;
  is_dropdown: boolean;
};

export type NavbarButton = {
  link: {
    name: string;
    url: string;
  };
};

export type KlerosLogo = {
  logo_svg: {
    url: string;
  };
};

export const navbarQuery = gql`
  query NavbarQuery {
    navbarButton {
      link {
        name
        url
      }
    }
    navbarNavlinksSection {
      Navlink {
        title
        path_name
        is_dropdown
      }
    }
    navbarResourcesSection {
      Section {
        title
        links {
          name
          url
        }
      }
    }
    solutions(sort: "createdAt:asc") {
      solution_name
      header_title
      header_description
      logo_svg {
        url
      }
      url
    }
    klerosLogo {
      logo_svg {
        url
      }
    }
  }
`;

export interface NavbarQueryType {
  navbarButton: NavbarButton;
  navbarNavlinksSection: {
    Navlink: NavLink[];
  };
  navbarResourcesSection: {
    Section: ResourceSection[];
  };
  solutions: Solution[];
  klerosLogo: KlerosLogo;
}
