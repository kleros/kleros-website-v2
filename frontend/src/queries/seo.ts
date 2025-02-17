import { gql } from "graphql-request";

const SEO_CONTENT = `
  SEO {
    title
    description
    image {
      url
    }
  }
`;

export const seoQuery = gql`
  {
    brandAssetsPageSeo {
      ${SEO_CONTENT}
    }
    communityPageSeo {
      ${SEO_CONTENT}
    }
    cooperativePageSeo {
      ${SEO_CONTENT}
    }
    earnPageSeo {
      ${SEO_CONTENT}
    }
    forBuildersPageSeo {
      ${SEO_CONTENT}
    }
    forLawyersPageSeo {
      ${SEO_CONTENT}
    }
    homePageSeo {
      ${SEO_CONTENT}
    }
    pnkTokenPageSeo {
      ${SEO_CONTENT}
    }
    rAndDPageSeo {
      ${SEO_CONTENT}
    }
  }
`;

type ISEO = {
  SEO: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
};

export type SEOQueryType = {
  brandAssetsPageSeo: ISEO;
  communityPageSeo: ISEO;
  cooperativePageSeo: ISEO;
  earnPageSeo: ISEO;
  forBuildersPageSeo: ISEO;
  forLawyersPageSeo: ISEO;
  homePageSeo: ISEO;
  pnkTokenPageSeo: ISEO;
  rAndDPageSeo: ISEO;
};
