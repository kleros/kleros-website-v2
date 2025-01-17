import { gql } from "graphql-request";

export const klerosLogoSectionQuery = gql`
  {
    brandAssetsPageKlerosLogoSection {
      header
      imageDownloads {
        name
        image {
          url
        }
        svgDownloadLink
        pngDownloadLink
      }
    }
  }
`;

export type KlerosLogoSectionQueryType = {
  brandAssetsPageKlerosLogoSection: {
    header: string;
    imageDownloads: ImageDownloadType[];
  };
};

export type ImageDownloadType = {
  name: string;
  image: {
    url: string;
  };
  svgDownloadLink: string;
  pngDownloadLink: string;
};
