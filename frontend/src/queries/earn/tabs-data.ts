import { gql } from "graphql-request";

import { ArrowLink } from "../navbar";

export const tabSectionQuery = gql`
  {
    earnPageBecomeAJurorTabContent {
      tabName
      title
      description

      ctaCard {
        title
        description
        icon {
          url
        }
        arrowLink {
          text
          link {
            url
          }
        }
      }

      enterCourtSection {
        button {
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
        background {
          url
        }
      }

      mostActiveCourtsHeader

      mostActiveCourts(pagination: { limit: 20 }) {
        name
      }

      courtsButton {
        text
        link {
            url
        }
      }
    }

    earnPageBecomeACuratorTabContent {
      tabName
      title
      description

      ctaCard {
        title
        description
        icon {
          url
        }
        arrowLink {
          text
          link {
            url
          }
        }
      }

      arrowLink {
        text
        link {
          url
        }
      }

      scoutExplanation

      klerosScoutSection {
        header
        productName
        productIcon {
          url
        }
        learnMoreButton {
          text
          link {
            url
          }
        }
        background {
          url
        }
        arrowLinks {
          text
          link {
            url
          }
        }
      }
    }
  }
`;

export type Court = {
  name: string;
};

export type CtaCard = {
  title: string;
  description: string;
  arrowLink: ArrowLink;
  icon: { url: string };
};

export type EnterCourtSection = {
  button: ArrowLink;
  arrowLink: ArrowLink;
  background: { url: string };
};

export type KlerosScoutSection = {
  header: string;
  productName: string;
  productIcon: { url: string };
  learnMoreButton: ArrowLink;
  background: { url: string };
  arrowLinks: ArrowLink[]
};

export type EarnPageBecomeAJurorTab = {
  tabName: string;
  title: string;
  description: string;
  ctaCard: CtaCard[];
  enterCourtSection: EnterCourtSection;
  mostActiveCourtsHeader: string;
  mostActiveCourts: Court[];
  courtsButton: ArrowLink;
};

export type EarnPageBecomeACuratorTab = {
  tabName: string;
  title: string;
  description: string;
  ctaCard: CtaCard[];
  arrowLink: ArrowLink;
  scoutExplanation: string;
  klerosScoutSection: KlerosScoutSection;
};

export type TabSectionQueryType = {
  earnPageBecomeAJurorTabContent: EarnPageBecomeAJurorTab;
  earnPageBecomeACuratorTabContent: EarnPageBecomeACuratorTab;
};
