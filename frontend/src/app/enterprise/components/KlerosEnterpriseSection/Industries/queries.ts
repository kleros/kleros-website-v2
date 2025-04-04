import { gql } from "graphql-request";

export const industriesQuery = gql`
  {
    enterprise {
      industries {
        title
        icon {
          url
        }
      }
    }
  }
`;

export type IIndustriesQuery = {
  enterprise: {
    industries: Array<{
      title: string;
      icon: {
        url: string;
      };
    }>;
  };
};
