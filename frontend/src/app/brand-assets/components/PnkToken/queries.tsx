import { gql } from "graphql-request";

import { IImageDownload } from "@/components/ImageDownload";

export const pnkTokenQuery = gql`
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

export type IPnkTokenQuery = {
  brandAssetsPagePnkTokenSection: {
    header: string;
    subtitle: string;
    imageDownload: IImageDownload;
  };
};
