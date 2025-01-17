import { gql } from "graphql-request";

export const styledImagesSectionQuery = gql`
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

export type StyledImagesSectionQueryType = {
  brandAssetsPageStyledImagesSection: {
    header: string;
    wallpapersHeader: string;
    wallpapersSubtitle: string;
    wallpapersImageDownloads: ImageDownloadType[];
    productMockupsHeader: string;
    productMockupsSubtitle: string;
    productMockupsImageDownloads: ImageDownloadType[];
  };
};

export type ImageDownloadType = {
  name: string;
  image: {
    url: string;
  };
  pngDownloadLink: string;
};
