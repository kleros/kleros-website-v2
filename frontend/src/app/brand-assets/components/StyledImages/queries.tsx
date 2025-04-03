import { gql } from "graphql-request";

import { IImageDownload } from "@/components/ImageDownload";

export const styledImagesQuery = gql`
  {
    brandAssetsPageStyledImagesSection {
      header
      wallpapersHeader
      wallpapersSubtitle
      wallpapersImageDownloads {
        name
        image {
          url
        }
        pngDownloadLink
      }
      productMockupsHeader
      productMockupsSubtitle
      productMockupsImageDownloads {
        name
        image {
          url
        }
        pngDownloadLink
      }
    }
  }
`;

export type IStyledImagesQuery = {
  brandAssetsPageStyledImagesSection: {
    header: string;
    wallpapersHeader: string;
    wallpapersSubtitle: string;
    wallpapersImageDownloads: IImageDownload[];
    productMockupsHeader: string;
    productMockupsSubtitle: string;
    productMockupsImageDownloads: IImageDownload[];
  };
};
