import { gql } from "graphql-request";

import { ArrowLink } from "../navbar";

export const tokenomicsSectionQuery = gql`
  {
    pnkTokenPageTokenomicsSection {
      header
      subtitle

      arrowLink {
        text
        link {
          url
        }
      }

      tokenStatDisplay {
        icon {
          url
        }
        stats {
          key
          primaryValue
          secondaryValue
        }
      }
    }
  }
`;

export type TokenStat = {
    key: string;
    primaryValue: string;
    secondaryValue: string;
}

export type TokenStatDisplay = {
    icon : {
        url: string;
    };
    stats: TokenStat[];
};

export type TokenomicsSectionQueryType = {
  pnkTokenPageTokenomicsSection: {
    header: string;
    subtitle: string;
    tokenStatDisplay: TokenStatDisplay;
    arrowLink: ArrowLink;
  };
};
