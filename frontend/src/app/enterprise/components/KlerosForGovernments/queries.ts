import { gql } from "graphql-request";

export const forGovernmentsQuery = gql`
  {
    enterprise {
      GovernmentSection {
        __typename
        ... on ComponentContentText {
          text
        }
        ... on ComponentContentLongText {
          longtext
        }
        ... on ComponentContentCardsSection {
          cards {
            icon {
              url
            }
            title
            subtitle
            link {
              link {
                url
              }
            }
          }
        }
        ... on ComponentContentQuote {
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
    }
  }
`;

export type ICCText = {
  __typename: "ComponentContentText";
  text: string;
};

export type ICCLongText = {
  __typename: "ComponentContentLongText";
  longtext: string;
};

export type ICCCardsSection = {
  __typename: "ComponentContentCardsSection";
  cards: Array<{
    icon: {
      url: string;
    };
    title: string;
    subtitle: string;
    link: {
      link: {
        url: string;
      };
    };
  }>;
};

export type ICCQuote = {
  __typename: "ComponentContentQuote";
  header: string;
  primarySubtitle: string;
  secondarySubtitle: string;
  icon: {
    url: string;
  };
  testimony: string;
  testimonyAuthor: string;
};

type GovernmentSectionBlock =
  | ICCText
  | ICCLongText
  | ICCCardsSection
  | ICCQuote;

export type IForGovernmentsQuery = {
  enterprise: {
    GovernmentSection: GovernmentSectionBlock[];
  };
};

export function getBlock<T extends GovernmentSectionBlock>(
  blocks: GovernmentSectionBlock[],
  typename: T["__typename"],
): T {
  return blocks.find((block) => block.__typename === typename) as T;
}
