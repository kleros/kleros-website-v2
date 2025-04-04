import { gql } from "graphql-request";

export const web3Query = gql`
  {
    homePageWeb3 {
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

export type IWeb3Query = {
  homePageWeb3: {
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
