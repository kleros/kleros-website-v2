import { gql } from "graphql-request";

export const homeCaseStudiesQuery = gql`
  {
    homeCaseStudiesSection {
      title
      subtitle
    }
  }
`;

export type HomeCaseStudiesQueryType = {
  homeCaseStudiesSection: {
    title: string;
    subtitle: string;
  };
};
