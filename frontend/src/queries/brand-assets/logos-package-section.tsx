import { gql } from "graphql-request";

export const logosPackageSectionQuery = gql`
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

export type LogosPackageSectionQueryType = {
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
