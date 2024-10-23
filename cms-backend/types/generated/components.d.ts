import type { Struct, Schema } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.section': ContentSection;
    }
  }
}
