import { gql } from "graphql-request";

export const enterpriseQuery = gql`
  {
    homeEnterprise {
      title
      subtitle
      cards {
        icon {
          url
        }
        title
        subtitle
      }
    }
  }
`;

export type IEnterpriseQuery = {
  homeEnterprise: {
    title: string;
    subtitle: string;
    cards: Array<{
      icon: {
        url: string;
      };
      title: string;
      subtitle: string;
    }>;
  };
};
