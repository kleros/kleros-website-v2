import { gql } from "graphql-request";

import { AppsSection } from "@/queries/navbar";

export const integrateQuery = gql`
  {
    forBuildersPageIntegrateSection {
      header
      title
      description
      appsSection {
        solutions {
          solution_name
          header_title
          header_description
          logo_svg {
            url
          }
          url
        }
        arrowLink {
          text
          link {
            url
          }
        }
      }
      getInTouchSection {
        header
        button {
          text
          link {
            name
            url
          }
        }
        background {
          url
        }
      }
      arrowLink {
        text
        link {
          name
          url
        }
      }
    }
  }
`;

export type IntegrateQueryType = {
  forBuildersPageIntegrateSection: {
    header: string;
    title: string;
    description: string;
    appsSection: AppsSection;
    getInTouchSection: {
      header: string;
      button: {
        text: string;
        link: {
          name: string;
          url: string;
        };
      };
      background: {
        url: string;
      };
    };
    arrowLink: {
      text: string;
      link: {
        name: string;
        url: string;
      };
    };
  };
};
