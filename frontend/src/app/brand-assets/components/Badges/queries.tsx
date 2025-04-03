import { gql } from "graphql-request";

import { IImageDownload } from "@/components/ImageDownload";

export const badgesQuery = gql`
  {
    brandAssetsPageKlerosBadgesSection {
      header
      subtitle
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

export type IBadgesQuery = {
  brandAssetsPageKlerosBadgesSection: {
    header: string;
    subtitle: string;
    imageDownloads: IImageDownload[];
  };
};
