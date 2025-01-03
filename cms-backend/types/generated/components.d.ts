import type { Struct, Schema } from '@strapi/strapi';

export interface PnkTokenPageTokenStatDisplay extends Struct.ComponentSchema {
  collectionName: 'components_pnk_token_page_token_stat_displays';
  info: {
    displayName: 'TokenStatDisplay';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    stats: Schema.Attribute.Relation<'oneToMany', 'api::token-stat.token-stat'>;
  };
}

export interface ForBuildersPageSolutionSection extends Struct.ComponentSchema {
  collectionName: 'solution_sections';
  info: {
    name: 'Solution Section';
    description: "The Solution section for the For Builders' Use Cases page";
  };
  attributes: {
    header: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    solutionHeader: Schema.Attribute.String;
    solution: Schema.Attribute.Relation<'oneToOne', 'api::solution.solution'>;
    partnersHeader: Schema.Attribute.String;
    partners: Schema.Attribute.Relation<'oneToMany', 'api::partner.partner'>;
  };
}

export interface ForBuildersPageKeyChallenge extends Struct.ComponentSchema {
  collectionName: 'key_challenges';
  info: {
    name: 'Key Challenge';
    description: "Key challenges section of the For Builders' Use Cases page";
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ForBuildersPageGetInTouchSection
  extends Struct.ComponentSchema {
  collectionName: 'get_in_touch_sections';
  info: {
    name: 'Get in Touch';
    description: "Component for the Get in Touch section of the For Builders' Use Cases page";
  };
  attributes: {
    header: Schema.Attribute.String;
    button: Schema.Attribute.Component<'content.button-link', false>;
    background: Schema.Attribute.Media;
  };
}

export interface EarnPageKlerosScoutSection extends Struct.ComponentSchema {
  collectionName: 'kleros_scout_sections';
  info: {
    name: 'Kleros Scout';
    description: 'Component for the Kleros Scout section in the Curator tab of the Earn page';
  };
  attributes: {
    header: Schema.Attribute.String;
    productName: Schema.Attribute.String;
    productIcon: Schema.Attribute.Media;
    learnMoreButton: Schema.Attribute.Component<'content.button-link', false>;
    background: Schema.Attribute.Media;
    arrowLinks: Schema.Attribute.Component<'content.button-link', true>;
  };
}

export interface EarnPageEnterCourtSection extends Struct.ComponentSchema {
  collectionName: 'enter_court_sections';
  info: {
    name: 'Enter Court';
    description: 'Component for the Enter Court section in the Juror tab of the Earn page';
  };
  attributes: {
    button: Schema.Attribute.Component<'content.button-link', false>;
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    background: Schema.Attribute.Media;
  };
}

export interface ContentStatDisplay extends Struct.ComponentSchema {
  collectionName: 'components_content_stat_display';
  info: {
    displayName: 'StatDisplay';
  };
  attributes: {
    title: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ContentSection extends Struct.ComponentSchema {
  collectionName: 'components_content_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    links: Schema.Attribute.Relation<'oneToMany', 'api::link.link'>;
  };
}

export interface ContentNavlink extends Struct.ComponentSchema {
  collectionName: 'components_content_navlinks';
  info: {
    displayName: 'NavLink';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    path_name: Schema.Attribute.String;
    is_dropdown: Schema.Attribute.Boolean & Schema.Attribute.Required;
  };
}

export interface ContentCtaCard extends Struct.ComponentSchema {
  collectionName: 'components_content_cta_cards';
  info: {
    displayName: 'CTACard';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
  };
}

export interface ContentButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_content_button_links';
  info: {
    displayName: 'ButtonLink';
  };
  attributes: {
    text: Schema.Attribute.String;
    link: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
  };
}

export interface CooperativeReportPageReportCard
  extends Struct.ComponentSchema {
  collectionName: 'components_cooperative_report_page_report_cards';
  info: {
    displayName: 'ReportCard';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    ReportType: Schema.Attribute.Enumeration<['annual', 'treasury', 'risk']>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CooperativeReportPageLearnMoreSection
  extends Struct.ComponentSchema {
  collectionName: 'components_cooperative_report_page_learn_more_sections';
  info: {
    displayName: 'LearnMoreSection';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String;
    button: Schema.Attribute.Component<'content.button-link', false>;
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'pnk-token-page.token-stat-display': PnkTokenPageTokenStatDisplay;
      'for-builders-page.solution-section': ForBuildersPageSolutionSection;
      'for-builders-page.key-challenge': ForBuildersPageKeyChallenge;
      'for-builders-page.get-in-touch-section': ForBuildersPageGetInTouchSection;
      'earn-page.kleros-scout-section': EarnPageKlerosScoutSection;
      'earn-page.enter-court-section': EarnPageEnterCourtSection;
      'content.stat-display': ContentStatDisplay;
      'content.section': ContentSection;
      'content.navlink': ContentNavlink;
      'content.cta-card': ContentCtaCard;
      'content.button-link': ContentButtonLink;
      'cooperative-report-page.report-card': CooperativeReportPageReportCard;
      'cooperative-report-page.learn-more-section': CooperativeReportPageLearnMoreSection;
    }
  }
}
