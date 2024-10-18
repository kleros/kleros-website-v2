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
}

export const footerQueryDocument = gql`
  {
    socials {
      name
      icon {
        url
      }
      url
    }
  }
`;

export type Social = {
  name: string;
  icon: { url: string };
  url: string;
}
