import { gql } from "graphql-request";

export const useCasesCardsQuery = gql`
  {
    forBuildersPageUseCasesSection {
      useCases {
        name
      }
    }
  }
`;

export type UseCasesCardsQueryType = {
  forBuildersPageUseCasesSection: {
    useCases: {
      name: string;
    }[];
  };
};
