import { gql } from "graphql-request";

export const partnersQuery = gql`
  {
    partners {
      name
      icon_svg {
        url
      }
      url
    }
    institutions {
      name
      link {
        url
      }
      image {
        url
      }
    }
  }
`;

export type PartnersQueryType = {
  partners: Array<{
    name: string;
    icon_svg: {
      url: string;
    };
    url: string;
  }>;
  institutions: Array<{
    name: string;
    link: {
      url: string;
    };
    image: {
      url: string;
    };
  }>;
};
