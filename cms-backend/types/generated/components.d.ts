import type { Schema, Struct } from '@strapi/strapi';

export interface BrandAssetsPageColorCard extends Struct.ComponentSchema {
  collectionName: 'components_brand_assets_page_color_cards';
  info: {
    displayName: 'colorCard';
  };
  attributes: {
    hexColor: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface BrandAssetsPageImageDownload extends Struct.ComponentSchema {
  collectionName: 'components_brand_assets_page_image_downloads';
  info: {
    description: '';
    displayName: 'imageDownload';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    pngDownloadLink: Schema.Attribute.String;
    svgDownloadLink: Schema.Attribute.String;
  };
}

export interface ContentButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_content_button_links';
  info: {
    displayName: 'ButtonLink';
  };
  attributes: {
    link: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
    text: Schema.Attribute.String;
  };
}

export interface ContentCtaCard extends Struct.ComponentSchema {
  collectionName: 'components_content_cta_cards';
  info: {
    description: '';
    displayName: 'CTACard';
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String;
  };
}

export interface ContentHighlightText extends Struct.ComponentSchema {
  collectionName: 'components_content_highlight_texts';
  info: {
    displayName: 'HighlightText';
  };
  attributes: {
    fullText: Schema.Attribute.String;
    highlightedText: Schema.Attribute.String;
  };
}

export interface ContentLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_content_link_cards';
  info: {
    description: '';
    displayName: 'LinkCard';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'content.button-link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentNavlink extends Struct.ComponentSchema {
  collectionName: 'components_content_navlinks';
  info: {
    displayName: 'NavLink';
  };
  attributes: {
    is_dropdown: Schema.Attribute.Boolean & Schema.Attribute.Required;
    path_name: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ContentResponsiveMedia extends Struct.ComponentSchema {
  collectionName: 'components_content_responsive_medias';
  info: {
    displayName: 'ResponsiveMedia';
  };
  attributes: {
    desktop: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mobile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentSection extends Struct.ComponentSchema {
  collectionName: 'components_content_sections';
  info: {
    description: '';
    displayName: 'section';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    links: Schema.Attribute.Relation<'oneToMany', 'api::link.link'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ContentStatDisplay extends Struct.ComponentSchema {
  collectionName: 'components_content_stat_display';
  info: {
    description: '';
    displayName: 'StatDisplay';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    statName: Schema.Attribute.String;
    statValue: Schema.Attribute.String;
    statValueSuffix: Schema.Attribute.String;
  };
}

export interface CooperativeReportPageLearnMoreSection
  extends Struct.ComponentSchema {
  collectionName: 'components_cooperative_report_page_learn_more_sections';
  info: {
    description: '';
    displayName: 'LearnMoreSection';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button: Schema.Attribute.Component<'content.button-link', false>;
    title: Schema.Attribute.String;
  };
}

export interface CooperativeReportPageReportCard
  extends Struct.ComponentSchema {
  collectionName: 'components_cooperative_report_page_report_cards';
  info: {
    description: '';
    displayName: 'ReportCard';
  };
  attributes: {
    downloadButtonText: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    monthDropdownLabel: Schema.Attribute.String;
    reportType: Schema.Attribute.Enumeration<['annual', 'treasury', 'risk']>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    yearDropdownLabel: Schema.Attribute.String;
  };
}

export interface EarnPageEnterCourtSection extends Struct.ComponentSchema {
  collectionName: 'enter_court_sections';
  info: {
    description: 'Component for the Enter Court section in the Juror tab of the Earn page';
    name: 'Enter Court';
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    background: Schema.Attribute.Media;
    button: Schema.Attribute.Component<'content.button-link', false>;
  };
}

export interface EarnPageKlerosScoutSection extends Struct.ComponentSchema {
  collectionName: 'kleros_scout_sections';
  info: {
    description: 'Component for the Kleros Scout section in the Curator tab of the Earn page';
    name: 'Kleros Scout';
  };
  attributes: {
    arrowLinks: Schema.Attribute.Component<'content.button-link', true>;
    background: Schema.Attribute.Media;
    header: Schema.Attribute.String;
    learnMoreButton: Schema.Attribute.Component<'content.button-link', false>;
    productIcon: Schema.Attribute.Media;
    productName: Schema.Attribute.String;
  };
}

export interface ForBuildersPageGetInTouchSection
  extends Struct.ComponentSchema {
  collectionName: 'get_in_touch_sections';
  info: {
    description: "Component for the Get in Touch section of the For Builders' Use Cases page";
    name: 'Get in Touch';
  };
  attributes: {
    background: Schema.Attribute.Media;
    button: Schema.Attribute.Component<'content.button-link', false>;
    header: Schema.Attribute.String;
  };
}

export interface ForBuildersPageKeyChallenge extends Struct.ComponentSchema {
  collectionName: 'key_challenges';
  info: {
    description: "Key challenges section of the For Builders' Use Cases page";
    name: 'Key Challenge';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ForBuildersPageSolutionSection extends Struct.ComponentSchema {
  collectionName: 'solution_sections';
  info: {
    description: "The Solution section for the For Builders' Use Cases page";
    name: 'Solution Section';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    partners: Schema.Attribute.Relation<'oneToMany', 'api::partner.partner'>;
    partnersHeader: Schema.Attribute.String;
    solution: Schema.Attribute.Relation<'oneToOne', 'api::solution.solution'>;
    solutionHeader: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ForLawyersPageArbitrationMethodCard
  extends Struct.ComponentSchema {
  collectionName: 'components_for_lawyers_page_arbitration_method_cards';
  info: {
    description: '';
    displayName: 'ArbitrationMethodCard';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.Component<
      'for-lawyers-page.arbitration-method-item',
      true
    >;
    methodType: Schema.Attribute.Enumeration<['kleros', 'other']>;
    name: Schema.Attribute.String;
  };
}

export interface ForLawyersPageArbitrationMethodItem
  extends Struct.ComponentSchema {
  collectionName: 'components_for_lawyers_page_arbitration_method_items';
  info: {
    description: '';
    displayName: 'ArbitrationMethodItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ForLawyersPageStep extends Struct.ComponentSchema {
  collectionName: 'components_for_lawyers_page_steps';
  info: {
    description: '';
    displayName: 'FlowchartItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    index: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
  };
}

export interface HomeCta extends Struct.ComponentSchema {
  collectionName: 'components_home_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonLink: Schema.Attribute.Component<'content.button-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeIntroduction extends Struct.ComponentSchema {
  collectionName: 'components_home_introductions';
  info: {
    displayName: 'introduction';
  };
  attributes: {
    closing_text: Schema.Attribute.String;
    heading_text: Schema.Attribute.String;
    link: Schema.Attribute.Component<'content.button-link', false>;
  };
}

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

export interface RAndDPageDownloadableFormat extends Struct.ComponentSchema {
  collectionName: 'components_r_and_d_page_downloadable_formats';
  info: {
    description: '';
    displayName: 'DownloadableFormat';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface RAndDPageKlerosBook extends Struct.ComponentSchema {
  collectionName: 'components_r_and_d_page_kleros_books';
  info: {
    description: '';
    displayName: 'KlerosBook';
  };
  attributes: {
    bookCover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bookTitle: Schema.Attribute.String;
    downloadFormats: Schema.Attribute.Component<
      'r-and-d-page.downloadable-format',
      true
    >;
    subtitle: Schema.Attribute.String;
  };
}

export interface RAndDPageWaitlistSection extends Struct.ComponentSchema {
  collectionName: 'components_r_and_d_page_waitlist_sections';
  info: {
    displayName: 'WaitlistSection';
  };
  attributes: {
    applyButton: Schema.Attribute.Component<'content.button-link', false>;
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    header: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface TableTable extends Struct.ComponentSchema {
  collectionName: 'components_table_tables';
  info: {
    displayName: 'Table';
  };
  attributes: {
    tableHeadings: Schema.Attribute.Component<'table.table-heading', true>;
    tableRows: Schema.Attribute.Component<'table.table-row', true>;
  };
}

export interface TableTableData extends Struct.ComponentSchema {
  collectionName: 'components_table_table_data';
  info: {
    displayName: 'TableData';
  };
  attributes: {
    primaryValue: Schema.Attribute.String;
    secondaryValue: Schema.Attribute.String;
  };
}

export interface TableTableHeading extends Struct.ComponentSchema {
  collectionName: 'components_table_table_headings';
  info: {
    displayName: 'TableHeading';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface TableTableRow extends Struct.ComponentSchema {
  collectionName: 'components_table_table_rows';
  info: {
    displayName: 'TableRow';
  };
  attributes: {
    rowData: Schema.Attribute.Component<'table.table-data', true>;
    rowHeading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'brand-assets-page.color-card': BrandAssetsPageColorCard;
      'brand-assets-page.image-download': BrandAssetsPageImageDownload;
      'content.button-link': ContentButtonLink;
      'content.cta-card': ContentCtaCard;
      'content.highlight-text': ContentHighlightText;
      'content.link-card': ContentLinkCard;
      'content.navlink': ContentNavlink;
      'content.responsive-media': ContentResponsiveMedia;
      'content.section': ContentSection;
      'content.stat-display': ContentStatDisplay;
      'cooperative-report-page.learn-more-section': CooperativeReportPageLearnMoreSection;
      'cooperative-report-page.report-card': CooperativeReportPageReportCard;
      'earn-page.enter-court-section': EarnPageEnterCourtSection;
      'earn-page.kleros-scout-section': EarnPageKlerosScoutSection;
      'for-builders-page.get-in-touch-section': ForBuildersPageGetInTouchSection;
      'for-builders-page.key-challenge': ForBuildersPageKeyChallenge;
      'for-builders-page.solution-section': ForBuildersPageSolutionSection;
      'for-lawyers-page.arbitration-method-card': ForLawyersPageArbitrationMethodCard;
      'for-lawyers-page.arbitration-method-item': ForLawyersPageArbitrationMethodItem;
      'for-lawyers-page.step': ForLawyersPageStep;
      'home.cta': HomeCta;
      'home.introduction': HomeIntroduction;
      'pnk-token-page.token-stat-display': PnkTokenPageTokenStatDisplay;
      'r-and-d-page.downloadable-format': RAndDPageDownloadableFormat;
      'r-and-d-page.kleros-book': RAndDPageKlerosBook;
      'r-and-d-page.waitlist-section': RAndDPageWaitlistSection;
      'table.table': TableTable;
      'table.table-data': TableTableData;
      'table.table-heading': TableTableHeading;
      'table.table-row': TableTableRow;
    }
  }
}
