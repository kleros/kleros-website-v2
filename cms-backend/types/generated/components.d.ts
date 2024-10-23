import type { Struct, Schema } from '@strapi/strapi';

export interface ContentLinkSection extends Struct.ComponentSchema {
  collectionName: 'components_content_link_sections';
  info: {
    displayName: 'LinkSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    links: Schema.Attribute.Relation<'oneToMany', 'api::link.link'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.link-section': ContentLinkSection;
    }
  }
}
