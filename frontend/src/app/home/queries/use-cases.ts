import { gql } from "graphql-request";

export const useCasesQuery = gql`
  {
    homeUseCasesSection {
      title
      arrowLink {
        text
        link {
          url
        }
      }
    }
  }
`;

export type IUseCasesQuery = {
  homeUseCasesSection: {
    title: string;
    arrowLink: {
      text: string;
      link: {
        url: string;
      };
    };
  };
};
