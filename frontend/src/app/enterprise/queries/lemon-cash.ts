import { gql } from "graphql-request";

export const lemonCashSectionQuery = gql`
  {
    lemonCashSection {
      header
      primarySubtitle
      secondarySubtitle
      icon {
        url
      }
      testimony
      testimonyAuthor
    }
  }
`;

export type lemonCashSectionQueryType = {
  lemonCashSection: {
    header: string;
    primarySubtitle: string;
    secondarySubtitle: string;
    icon: {
      url: string;
    };
    testimony: string;
    testimonyAuthor: string;
  };
};
