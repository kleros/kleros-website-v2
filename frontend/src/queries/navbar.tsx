import { gql } from "graphql-request";

export type Link = {
  name: string;
  url: string;
};

export type Solution = {
  solution_name: string;
  header_title?: string;
  header_description?: string;
  logo_svg: {
    url: string;
  };
  url: string;
};

export type AppsSection = {
  solutions: Solution[];
  arrowLink: ArrowLink;
};

export type Social = {
  name: string;
  url: string;
  icon: {
    url: string;
  };
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
  link: Link;
};

export type KlerosLogo = {
  logo_svg: {
    url: string;
  };
};

export type ArrowLink = {
  text: string;
  link: Link;
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
    navbarAppsSection {
      solutions {
        solution_name
        header_title
        header_description
        logo_svg {
          url
        }
        url
      }
      arrowLink {
        text
        link {
          url
        }
      }
    }
    klerosLogo {
      logo_svg {
        url
      }
    }
    socials {
      name
      url
      icon {
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
  navbarAppsSection: AppsSection;
  klerosLogo: KlerosLogo;
  socials: Social[];
}
