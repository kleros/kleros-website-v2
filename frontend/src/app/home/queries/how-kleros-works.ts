import { gql } from "graphql-request";

export const homeHowKlerosWorksQuery = gql`
  {
    homeHowKlerosWorksSection {
      label
      title
      subtitle
      explainer {
        url
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
      url: string;
    };
  };
};
