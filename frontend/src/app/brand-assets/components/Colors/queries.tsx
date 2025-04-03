import { gql } from "graphql-request";

export const colorsQuery = gql`
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

export type IColorsQuery = {
  brandAssetsPageKlerosColorsSection: {
    header: string;
    subtitle: string;
    colorCards: {
      name: string;
      hexColor: string;
    }[];
  };
};
