import { gql } from "graphql-request";

export type ICommunity = {
  title: string;
  subtitle: string;
  url: string;
  icon: {
    url: string;
    name: string;
  };
};

export const communitiesQuery = gql`
  {
    communities {
      title
      subtitle
      url
      icon {
        url
        name
      }
    }
  }
`;

export type ICommunitiesQuery = {
  communities: ICommunity[];
};
