import { gql } from "graphql-request";

import { ArrowLink } from "../navbar";

export const tabSectionQuery = gql`
  {
    rAndDPageResearchTabSection {
      tabName

      researchHeader
      researchSecondaryHeader
      researchParagraph
      researchCardLabel

      publicationsHeader
      publicationsTeamHeader
      publications3rdPartyHeader

      klerosBook {
        subtitle
        bookTitle
        downloadFormats {
          name
          file {
            url
          }
        }
        bookCover {
          url
        }
      }
    }

    rAndDPageFellowshipTabSection {
      tabName
      header
      subtitle
      testimonialsHeader
      fellowsHeader
      waitlistSection {
        header
        applyButton {
          text
          link {
            url
          }
        }
        arrowLink {
          text
          link {
            url
          }
        }
        icon {
          url
        }
      }
    }

    researches {
      field
      icon {
        url
      }
    }

    teamPublications {
      topic
      authors
      paperLink {
        text
        link {
          url
        }
      }
    }

    thirdPartyPublications {
      topic
      paperLink {
        text
        link {
          url
        }
      }
    }

    testimonials {
      url
      thumbnail {
        url
      }
    }

    fellows(sort: "createdAt:desc") {
      name
      profession
      workText
      arrowLinkText
      reportUrl
      profilePic {
        url
      }
    }
  }
`;

export type Research = {
  field: string;
  icon: { url: string };
};

export type TeamPublication = {
  topic: string;
  authors: string;
  paperLink: ArrowLink;
};

export type ThirdPartyPublication = {
  topic: string;
  paperLink: ArrowLink;
};

export type Testimonial = {
  url: string;
  thumbnail: { url: string };
};

export type Fellow = {
  name: string;
  profession: string;
  workText: string;
  arrowLinkText: string;
  reportUrl: string;
  profilePic: {
    url: string;
  };
};

export type KlerosBook = {
  subtitle: string;
  bookTitle: string;
  downloadFormats: Array<{
    name: string;
    file: { url: string };
  }>;
  bookCover: {
    url: string;
  };
};

export type RAndDPageResearchTabSection = {
  tabName: string;
  researchHeader: string;
  researchSecondaryHeader: string;
  researchParagraph: string;
  researchCardLabel: string;
  publicationsHeader: string;
  publicationsTeamHeader: string;
  publications3rdPartyHeader: string;
  klerosBook: KlerosBook;
};

export type RAndDPageWaitlistSection = {
  header: string;
  applyButton: ArrowLink;
  arrowLink: ArrowLink;
  icon: {
    url: string;
  };
};

export type RAndDPageFellowshipTabSection = {
  tabName: string;
  header: string;
  subtitle: string;
  testimonialsHeader: string;
  fellowsHeader: string;
  waitlistSection: RAndDPageWaitlistSection;
};

export type TabSectionQueryType = {
  rAndDPageResearchTabSection: RAndDPageResearchTabSection;
  rAndDPageFellowshipTabSection: RAndDPageFellowshipTabSection;
  researches: Research[];
  teamPublications: TeamPublication[];
  thirdPartyPublications: ThirdPartyPublication[];
  testimonials: Testimonial[];
  fellows: Fellow[];
};
