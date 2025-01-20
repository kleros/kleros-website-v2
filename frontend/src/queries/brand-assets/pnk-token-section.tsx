import { gql } from "graphql-request";

export const pnkTokenSectionQuery = gql`
  {
    brandAssetsPagePnkTokenSection {
      header
      subtitle
      imageDownload {
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

export type PnkTokenSectionQueryType = {
  brandAssetsPagePnkTokenSection: {
    header: string;
    subtitle: string;
    imageDownload: ImageDownloadType;
  };
};

export type ImageDownloadType = {
  name: string;
  image: {
    url: string;
  };
  svgDownloadLink?: string;
  pngDownloadLink?: string;
};
