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
