import { gql } from "graphql-request";

export const partnersQuery = gql`
  {
    partners {
      name
      icon_svg {
        url
      }
    }
  }
`;

export type partnersQueryType = {
  partners: {
    name: string,
    icon_svg: {
      url: string
    }
  }[]
};
