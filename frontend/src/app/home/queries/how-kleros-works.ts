import { gql } from "graphql-request";

export const homeHowKlerosWorksQuery = gql`
  {
    homeHowKlerosWorksSection {
      label
      title
      subtitle
      explainer {
        mobile {
          url
        }
        desktop {
          url
        }
      }
    }
  }
`;

export type HomeHowKlerosWorksQueryType = {
  homeHowKlerosWorksSection: {
    label: string;
    title: string;
    subtitle: string;
    explainer: {
      mobile: {
        url: string;
      };
      desktop: {
        url: string;
      };
    };
  };
};
