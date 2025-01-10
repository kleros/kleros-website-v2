import { gql } from "graphql-request";

export type Exchange = {
  url: string;
  name: string;
  icon: {
    url: string;
  };
};

export const buySectionQuery = gql`
  {
    pnkTokenPageBuySection {
      header
      featuredExchanges {
        url
        name
        icon {
          url
        }
      }
      exchanges {
        url
        name
        icon {
          url
        }
      }
    }
  }
`;

export type BuySectionQueryType = {
  pnkTokenPageBuySection: {
    header: string;
    featuredExchanges: Exchange[];
    exchanges: Exchange[];
  };
};
