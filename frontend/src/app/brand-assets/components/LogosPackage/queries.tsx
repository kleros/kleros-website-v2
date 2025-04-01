import { gql } from "graphql-request";

export const logosPackageQuery = gql`
  {
    brandAssetsPageLogosPackageSection {
      header
      subtitle
      button {
        text
        link {
          url
        }
      }
      arrowLink {
        text
        link {
          url
        }
      }
    }
  }
`;

export type ILogosPackageQuery = {
  brandAssetsPageLogosPackageSection: {
    header: string;
    subtitle: string;
    button: {
      text: string;
      link: {
        url: string;
      };
    };
    arrowLink: {
      text: string;
      link: {
        name: string;
        url: string;
      };
    };
  };
};
