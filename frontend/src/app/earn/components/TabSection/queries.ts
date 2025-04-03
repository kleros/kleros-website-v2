import { gql } from "graphql-request";

import { IArrowLink } from "@/queries/utils";

export const tabsQuery = gql`
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

      mostActiveCourts {
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
  arrowLink: IArrowLink;
  icon: { url: string };
};

export type EnterCourtSection = {
  button: IArrowLink;
  arrowLink: IArrowLink;
  background: { url: string };
};

export type KlerosScoutSection = {
  header: string;
  productName: string;
  productIcon: { url: string };
  learnMoreButton: IArrowLink;
  background: { url: string };
  arrowLinks: IArrowLink[];
};

export type EarnPageBecomeAJurorTab = {
  tabName: string;
  title: string;
  description: string;
  ctaCard: CtaCard[];
  enterCourtSection: EnterCourtSection;
  mostActiveCourtsHeader: string;
  mostActiveCourts: Court[];
  courtsButton: IArrowLink;
};

export type EarnPageBecomeACuratorTab = {
  tabName: string;
  title: string;
  description: string;
  ctaCard: CtaCard[];
  arrowLink: IArrowLink;
  scoutExplanation: string;
  klerosScoutSection: KlerosScoutSection;
};

export type ITabsQuery = {
  earnPageBecomeAJurorTabContent: EarnPageBecomeAJurorTab;
  earnPageBecomeACuratorTabContent: EarnPageBecomeACuratorTab;
};
