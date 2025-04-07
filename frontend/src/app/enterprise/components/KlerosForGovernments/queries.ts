import { gql } from "graphql-request";

export const forGovernmentsQuery = gql`
  {
    enterprise {
      GovernmentSection {
        __typename
        ... on ComponentContentHighlightText {
          fullText
          highlightedText
        }
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

export type ICCHightlightText = {
  __typename: "ComponentContentHighlightText";
  fullText: string;
  highlightedText: string;
};

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
  | ICCHightlightText
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
): T[] {
  return blocks.filter((block) => block.__typename === typename) as T[];
}
