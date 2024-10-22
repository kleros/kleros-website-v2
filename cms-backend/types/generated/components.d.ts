import type { Struct, Schema } from '@strapi/strapi';

export interface FooterFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_sections';
  info: {
    displayName: 'FooterSection';
    description: '';
  };
  attributes: {
    footer_links: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer-link.footer-link'
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer-section': FooterFooterSection;
    }
  }
}
