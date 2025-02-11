import { gql } from "graphql-request";

export const herosImagesQuery = gql`
  {
    earnPageHero {
      background {
        name
        url
      }
    }
    forBuildersPageHero {
      background {
        name
        url
      }
    }
    forLawyersPageHero {
      background {
        name
        url
      }
    }
    communityPageHero {
      background {
        name
        url
      }
    }
    cooperativePageHero {
      background {
        name
        url
      }
    }
    rAndDPageHero {
      background {
        name
        url
      }
    }
    brandAssetsPageHero {
      background {
        name
        url
      }
    }
    pnkTokenPageHero {
      background {
        name
        url
      }
    }
  }
`;
type Hero = {
  background: { name: string; url: string };
};

export type HeroImagesQueryType = {
  earnPageHero: Hero;
  forBuildersPageHero: Hero;
  forLawyersPageHero: Hero;
  communityPageHero: Hero;
  cooperativePageHero: Hero;
  rAndDPageHero: Hero;
  brandAssetsPageHero: Hero;
  pnkTokenPageHero: Hero;
};
