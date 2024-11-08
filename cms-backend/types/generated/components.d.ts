import type { Struct, Schema } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'for-builders-page.solution-section': ForBuildersPageSolutionSection;
      'for-builders-page.key-challenge': ForBuildersPageKeyChallenge;
      'for-builders-page.get-in-touch-section': ForBuildersPageGetInTouchSection;
      'content.section': ContentSection;
      'content.navlink': ContentNavlink;
      'content.button-link': ContentButtonLink;
    }
  }
}
