export type ILink = {
  name: string;
  url: string;
};

export type ISolution = {
  solution_name: string;
  header_title?: string;
  header_description?: string;
  logo_svg: {
    url: string;
  };
  url: string;
};

export type IAppsSection = {
  solutions: ISolution[];
  arrowLink: IArrowLink;
};

export type ISocial = {
  name: string;
  url: string;
  icon: {
    url: string;
  };
};

export type IResourceLink = {
  name: string;
  url: string;
};

export type IResourceSection = {
  title: string;
  links: IResourceLink[];
};

export type INavLink = {
  title: string;
  path_name?: string | null;
  is_dropdown: boolean;
};

export type INavbarButton = {
  link: ILink;
};

export type IKlerosLogo = {
  logo_svg: {
    url: string;
  };
};

export type IArrowLink = {
  text: string;
  link: ILink;
};
