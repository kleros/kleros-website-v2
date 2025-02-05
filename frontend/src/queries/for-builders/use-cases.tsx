import { gql } from "graphql-request";

export const useCasesQuery = gql`
  {
    forBuildersPageUseCasesSection {
      sectionHeader
      useCaseTitle
      useCaseDescription
      useCaseBanner {
        mobile {
          url
        }
        desktop {
          url
        }
      }
      keyChallenges {
        title
        description
      }
      solutionSections {
        header
        title
        description
        solutionHeader
        solution {
          solution_name
          header_title
          logo_svg {
            url
          }
          url
        }
        partnersHeader
        partners {
          name
          icon_svg {
            url
          }
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

export type UseCasesQueryType = {
  forBuildersPageUseCasesSection: {
    sectionHeader: string;
    useCaseTitle: string;
    useCaseDescription: string;
    useCaseBanner: {
      mobile: { url: string };
      desktop: { url: string };
    };
    keyChallenges: {
      title: string;
      description: string;
    };
    solutionSections: {
      header: string;
      title: string;
      description: string;
      solutionHeader: string;
      solution: {
        solution_name: string;
        header_title: string;
        logo_svg: {
          url: string;
        };
        url: string;
      };
      partnersHeader: string;
      partners: {
        name: string;
        icon_svg: {
          url: string;
        };
        url: string;
      }[];
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
