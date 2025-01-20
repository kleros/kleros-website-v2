import { gql } from "graphql-request";

export const klerosColorsSectionQuery = gql`
  {
    brandAssetsPageKlerosColorsSection {
      header
      subtitle
      colorCards {
        name
        hexColor
      }
    }
  }
`;

export type KlerosColorsSectionQueryType = {
  brandAssetsPageKlerosColorsSection: {
    header: string;
    subtitle: string;
    colorCards: {
      name: string;
      hexColor: string;
    }[];
  };
};
