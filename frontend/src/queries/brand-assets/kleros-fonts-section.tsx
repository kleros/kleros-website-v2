import { gql } from "graphql-request";

export const klerosFontsSectionQuery = gql`
  {
    brandAssetsPageKlerosFontsSection {
      header
      linkCard {
        title
        subtitle
        link {
          text
          link {
            url
          }
        }
      }
    }
  }
`;

export type KlerosFontsSectionQueryType = {
  brandAssetsPageKlerosFontsSection: {
    header: string;
    linkCard: {
      title: string;
      subtitle: string;
      link: {
        text: string;
        link: {
          url: string;
        };
      };
    };
  };
};
