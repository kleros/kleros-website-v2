import { gql } from "graphql-request";

import { IImageDownload } from "@/components/ImageDownload";

export const logosQuery = gql`
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

export type ILogosQuery = {
  brandAssetsPageKlerosLogoSection: {
    header: string;
    imageDownloads: IImageDownload[];
  };
};
