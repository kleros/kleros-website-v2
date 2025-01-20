import { gql } from "graphql-request";

export const klerosBadgesSectionQuery = gql`
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

export type KlerosBadgesSectionQueryType = {
  brandAssetsPageKlerosBadgesSection: {
    header: string;
    subtitle: string;
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
