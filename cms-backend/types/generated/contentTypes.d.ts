import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAnnualReportAnnualReport
  extends Struct.CollectionTypeSchema {
  collectionName: 'annual_reports';
  info: {
    description: '';
    displayName: 'Annual Report';
    pluralName: 'annual-reports';
    singularName: 'annual-report';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::annual-report.annual-report'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    year: Schema.Attribute.Integer;
  };
}

export interface ApiBrandAssetsPageHeroBrandAssetsPageHero
  extends Struct.SingleTypeSchema {
  collectionName: 'brand_assets_page_heroes';
  info: {
    description: '';
    displayName: 'BrandAssetsPageHero';
    pluralName: 'brand-assets-page-heroes';
    singularName: 'brand-assets-page-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::brand-assets-page-hero.brand-assets-page-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBrandAssetsPageKlerosBadgesSectionBrandAssetsPageKlerosBadgesSection
  extends Struct.SingleTypeSchema {
  collectionName: 'brand_assets_page_kleros_badges_sections';
  info: {
    displayName: 'BrandAssetsPageKlerosBadgesSection';
    pluralName: 'brand-assets-page-kleros-badges-sections';
    singularName: 'brand-assets-page-kleros-badges-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    imageDownloads: Schema.Attribute.Component<
      'brand-assets-page.image-download',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::brand-assets-page-kleros-badges-section.brand-assets-page-kleros-badges-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBrandAssetsPageKlerosColorsSectionBrandAssetsPageKlerosColorsSection
  extends Struct.SingleTypeSchema {
  collectionName: 'brand_assets_page_kleros_colors_sections';
  info: {
    description: '';
    displayName: 'BrandAssetsPageKlerosColorsSection';
    pluralName: 'brand-assets-page-kleros-colors-sections';
    singularName: 'brand-assets-page-kleros-colors-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    colorCards: Schema.Attribute.Component<
      'brand-assets-page.color-card',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::brand-assets-page-kleros-colors-section.brand-assets-page-kleros-colors-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBrandAssetsPageKlerosFontsSectionBrandAssetsPageKlerosFontsSection
  extends Struct.SingleTypeSchema {
  collectionName: 'brand_assets_page_kleros_fonts_sections';
  info: {
    displayName: 'BrandAssetsPageKlerosFontsSection';
    pluralName: 'brand-assets-page-kleros-fonts-sections';
    singularName: 'brand-assets-page-kleros-fonts-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    linkCard: Schema.Attribute.Component<'content.link-card', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::brand-assets-page-kleros-fonts-section.brand-assets-page-kleros-fonts-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBrandAssetsPageKlerosLogoSectionBrandAssetsPageKlerosLogoSection
  extends Struct.SingleTypeSchema {
  collectionName: 'brand_assets_page_kleros_logo_sections';
  info: {
    displayName: 'BrandAssetsPageKlerosLogoSection';
    pluralName: 'brand-assets-page-kleros-logo-sections';
    singularName: 'brand-assets-page-kleros-logo-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    imageDownloads: Schema.Attribute.Component<
      'brand-assets-page.image-download',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::brand-assets-page-kleros-logo-section.brand-assets-page-kleros-logo-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBrandAssetsPageLogosPackageSectionBrandAssetsPageLogosPackageSection
  extends Struct.SingleTypeSchema {
  collectionName: 'brand_assets_page_logos_package_sections';
  info: {
    displayName: 'BrandAssetsPageLogosPackageSection';
    pluralName: 'brand-assets-page-logos-package-sections';
    singularName: 'brand-assets-page-logos-package-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    button: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::brand-assets-page-logos-package-section.brand-assets-page-logos-package-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBrandAssetsPagePnkTokenSectionBrandAssetsPagePnkTokenSection
  extends Struct.SingleTypeSchema {
  collectionName: 'brand_assets_page_pnk_token_sections';
  info: {
    displayName: 'BrandAssetsPagePNKTokenSection';
    pluralName: 'brand-assets-page-pnk-token-sections';
    singularName: 'brand-assets-page-pnk-token-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    imageDownload: Schema.Attribute.Component<
      'brand-assets-page.image-download',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::brand-assets-page-pnk-token-section.brand-assets-page-pnk-token-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBrandAssetsPageSeoBrandAssetsPageSeo
  extends Struct.SingleTypeSchema {
  collectionName: 'brand_assets_page_seos';
  info: {
    displayName: 'BrandAssetsPageSEO';
    pluralName: 'brand-assets-page-seos';
    singularName: 'brand-assets-page-seo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::brand-assets-page-seo.brand-assets-page-seo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SEO: Schema.Attribute.Component<'content.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBrandAssetsPageStyledImagesSectionBrandAssetsPageStyledImagesSection
  extends Struct.SingleTypeSchema {
  collectionName: 'brand_assets_page_styled_images_sections';
  info: {
    displayName: 'BrandAssetsPageStyledImagesSection';
    pluralName: 'brand-assets-page-styled-images-sections';
    singularName: 'brand-assets-page-styled-images-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::brand-assets-page-styled-images-section.brand-assets-page-styled-images-section'
    > &
      Schema.Attribute.Private;
    productMockupsHeader: Schema.Attribute.String;
    productMockupsImageDownloads: Schema.Attribute.Component<
      'brand-assets-page.image-download',
      true
    >;
    productMockupsSubtitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    wallpapersHeader: Schema.Attribute.String;
    wallpapersImageDownloads: Schema.Attribute.Component<
      'brand-assets-page.image-download',
      true
    >;
    wallpapersSubtitle: Schema.Attribute.String;
  };
}

export interface ApiCommunityPageHeroCommunityPageHero
  extends Struct.SingleTypeSchema {
  collectionName: 'community_page_heroes';
  info: {
    displayName: 'CommunityPageHero';
    pluralName: 'community-page-heroes';
    singularName: 'community-page-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    communityButtons: Schema.Attribute.Component<'content.button-link', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::community-page-hero.community-page-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCommunityPageSeoCommunityPageSeo
  extends Struct.SingleTypeSchema {
  collectionName: 'community_page_seos';
  info: {
    displayName: 'CommunityPageSEO';
    pluralName: 'community-page-seos';
    singularName: 'community-page-seo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::community-page-seo.community-page-seo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SEO: Schema.Attribute.Component<'content.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCommunityCommunity extends Struct.CollectionTypeSchema {
  collectionName: 'communities';
  info: {
    description: '';
    displayName: 'Community';
    pluralName: 'communities';
    singularName: 'community';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::community.community'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String;
  };
}

export interface ApiCooperativePageHeroCooperativePageHero
  extends Struct.SingleTypeSchema {
  collectionName: 'cooperative_page_heroes';
  info: {
    description: '';
    displayName: 'CooperativePageHero';
    pluralName: 'cooperative-page-heroes';
    singularName: 'cooperative-page-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttons: Schema.Attribute.Component<'content.button-link', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cooperative-page-hero.cooperative-page-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCooperativePageMemberSectionCooperativePageMemberSection
  extends Struct.SingleTypeSchema {
  collectionName: 'cooperative_page_member_sections';
  info: {
    description: '';
    displayName: 'CooperativePageMemberSection';
    pluralName: 'cooperative-page-member-sections';
    singularName: 'cooperative-page-member-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    learnMoreSection: Schema.Attribute.Component<
      'cooperative-report-page.learn-more-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cooperative-page-member-section.cooperative-page-member-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    secondaryHeader: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCooperativePageReportSectionCooperativePageReportSection
  extends Struct.SingleTypeSchema {
  collectionName: 'cooperative_page_report_sections';
  info: {
    displayName: 'CooperativePageReportSection';
    pluralName: 'cooperative-page-report-sections';
    singularName: 'cooperative-page-report-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cooperative-page-report-section.cooperative-page-report-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    reports: Schema.Attribute.Component<
      'cooperative-report-page.report-card',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCooperativePageSeoCooperativePageSeo
  extends Struct.SingleTypeSchema {
  collectionName: 'cooperative_page_seos';
  info: {
    displayName: 'CooperativePageSEO';
    pluralName: 'cooperative-page-seos';
    singularName: 'cooperative-page-seo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cooperative-page-seo.cooperative-page-seo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SEO: Schema.Attribute.Component<'content.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCourtCourt extends Struct.CollectionTypeSchema {
  collectionName: 'courts';
  info: {
    displayName: 'Court';
    pluralName: 'courts';
    singularName: 'court';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::court.court'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEarnPageBecomeACuratorTabContentEarnPageBecomeACuratorTabContent
  extends Struct.SingleTypeSchema {
  collectionName: 'earn_page_become_a_curator_tab_contents';
  info: {
    description: '';
    displayName: 'EarnPageBecomeACuratorTabContent';
    pluralName: 'earn-page-become-a-curator-tab-contents';
    singularName: 'earn-page-become-a-curator-tab-content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaCard: Schema.Attribute.Component<'content.cta-card', true>;
    description: Schema.Attribute.Text;
    klerosScoutSection: Schema.Attribute.Component<
      'earn-page.kleros-scout-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::earn-page-become-a-curator-tab-content.earn-page-become-a-curator-tab-content'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    scoutExplanation: Schema.Attribute.Text;
    tabName: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEarnPageBecomeAJurorTabContentEarnPageBecomeAJurorTabContent
  extends Struct.SingleTypeSchema {
  collectionName: 'earn_page_become_a_juror_tab_contents';
  info: {
    description: '';
    displayName: 'EarnPageBecomeAJurorTabContent';
    pluralName: 'earn-page-become-a-juror-tab-contents';
    singularName: 'earn-page-become-a-juror-tab-content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    courtsButton: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaCard: Schema.Attribute.Component<'content.cta-card', true>;
    description: Schema.Attribute.String;
    enterCourtSection: Schema.Attribute.Component<
      'earn-page.enter-court-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::earn-page-become-a-juror-tab-content.earn-page-become-a-juror-tab-content'
    > &
      Schema.Attribute.Private;
    mostActiveCourts: Schema.Attribute.Relation<
      'oneToMany',
      'api::court.court'
    >;
    mostActiveCourtsHeader: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    tabName: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEarnPageHeroEarnPageHero extends Struct.SingleTypeSchema {
  collectionName: 'earn_page_heroes';
  info: {
    description: '';
    displayName: 'EarnPageHero';
    pluralName: 'earn-page-heroes';
    singularName: 'earn-page-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::earn-page-hero.earn-page-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    statDisplay: Schema.Attribute.Component<'content.stat-display', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEarnPageSeoEarnPageSeo extends Struct.SingleTypeSchema {
  collectionName: 'earn_page_seos';
  info: {
    displayName: 'EarnPageSEO';
    pluralName: 'earn-page-seos';
    singularName: 'earn-page-seo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::earn-page-seo.earn-page-seo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SEO: Schema.Attribute.Component<'content.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExchangeExchange extends Struct.CollectionTypeSchema {
  collectionName: 'exchanges';
  info: {
    description: '';
    displayName: 'Exchange';
    pluralName: 'exchanges';
    singularName: 'exchange';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::exchange.exchange'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String;
  };
}

export interface ApiFellowFellow extends Struct.CollectionTypeSchema {
  collectionName: 'fellows';
  info: {
    displayName: 'Fellow';
    pluralName: 'fellows';
    singularName: 'fellow';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLinkText: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fellow.fellow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    profession: Schema.Attribute.String;
    profilePic: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    publishedAt: Schema.Attribute.DateTime;
    reportUrl: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workText: Schema.Attribute.String;
  };
}

export interface ApiFooterLinksSectionFooterLinksSection
  extends Struct.SingleTypeSchema {
  collectionName: 'footer_links_sections';
  info: {
    displayName: 'FooterLinksSection';
    pluralName: 'footer-links-sections';
    singularName: 'footer-links-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer-links-section.footer-links-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Section: Schema.Attribute.Component<'content.section', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFooterSocialsSectionFooterSocialsSection
  extends Struct.SingleTypeSchema {
  collectionName: 'footer_socials_sections';
  info: {
    displayName: 'FooterSocialsSection';
    pluralName: 'footer-socials-sections';
    singularName: 'footer-socials-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer-socials-section.footer-socials-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    socials: Schema.Attribute.Relation<'oneToMany', 'api::social.social'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFooterSubscribeCtaFooterSubscribeCta
  extends Struct.SingleTypeSchema {
  collectionName: 'footer_subscribe_ctas';
  info: {
    displayName: 'FooterSubscribeCTA';
    pluralName: 'footer-subscribe-ctas';
    singularName: 'footer-subscribe-cta';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta_button: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::footer-subscribe-cta.footer-subscribe-cta'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    notice: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForBuildersPageHeroForBuildersPageHero
  extends Struct.SingleTypeSchema {
  collectionName: 'for_builders_page_heroes';
  info: {
    description: '';
    displayName: 'ForBuildersPageHero';
    pluralName: 'for-builders-page-heroes';
    singularName: 'for-builders-page-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', true>;
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-builders-page-hero.for-builders-page-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForBuildersPageIntegrateSectionForBuildersPageIntegrateSection
  extends Struct.SingleTypeSchema {
  collectionName: 'for_builders_page_integrate_section';
  info: {
    description: '';
    displayName: 'ForBuildersPageIntegrateSection';
    pluralName: 'for-builders-page-integrate-sections';
    singularName: 'for-builders-page-integrate-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    appsSection: Schema.Attribute.Relation<
      'oneToOne',
      'api::navbar-apps-section.navbar-apps-section'
    >;
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    getInTouchSection: Schema.Attribute.Component<
      'for-builders-page.get-in-touch-section',
      false
    >;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-builders-page-integrate-section.for-builders-page-integrate-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForBuildersPageSeoForBuildersPageSeo
  extends Struct.SingleTypeSchema {
  collectionName: 'for_builders_page_seos';
  info: {
    displayName: 'ForBuildersPageSEO';
    pluralName: 'for-builders-page-seos';
    singularName: 'for-builders-page-seo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-builders-page-seo.for-builders-page-seo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SEO: Schema.Attribute.Component<'content.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForBuildersPageUseCasesSectionForBuildersPageUseCasesSection
  extends Struct.SingleTypeSchema {
  collectionName: 'for_builders_page_use_cases_section';
  info: {
    description: '';
    displayName: 'ForBuildersPageUseCasesSection';
    pluralName: 'for-builders-page-use-cases-sections';
    singularName: 'for-builders-page-use-cases-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    keyChallenges: Schema.Attribute.Component<
      'for-builders-page.key-challenge',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-builders-page-use-cases-section.for-builders-page-use-cases-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sectionHeader: Schema.Attribute.String;
    solutionSections: Schema.Attribute.Component<
      'for-builders-page.solution-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    useCaseBanner: Schema.Attribute.Component<
      'content.responsive-media',
      false
    >;
    useCaseDescription: Schema.Attribute.String;
    useCases: Schema.Attribute.Relation<'oneToMany', 'api::use-case.use-case'>;
    useCaseTitle: Schema.Attribute.String;
  };
}

export interface ApiForLawyersPageBecomeAFellowSectionForLawyersPageBecomeAFellowSection
  extends Struct.SingleTypeSchema {
  collectionName: 'for_lawyers_page_become_a_fellow_sections';
  info: {
    displayName: 'ForLawyersPageBecomeAFellowSection';
    pluralName: 'for-lawyers-page-become-a-fellow-sections';
    singularName: 'for-lawyers-page-become-a-fellow-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fellowImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    firstSubtitle: Schema.Attribute.Text;
    header: Schema.Attribute.String;
    headerSubtitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-lawyers-page-become-a-fellow-section.for-lawyers-page-become-a-fellow-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    secondSubtitle: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForLawyersPageDisputeResolutionWithKlerosSectionForLawyersPageDisputeResolutionWithKlerosSection
  extends Struct.SingleTypeSchema {
  collectionName: 'for_lawyers_page_dispute_resolution_with_kleros_sections';
  info: {
    description: '';
    displayName: 'ForLawyersPageDisputeResolutionWithKlerosSection';
    pluralName: 'for-lawyers-page-dispute-resolution-with-kleros-sections';
    singularName: 'for-lawyers-page-dispute-resolution-with-kleros-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arbitrationMethodTable: Schema.Attribute.Component<
      'for-lawyers-page.arbitration-method-card',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    headerSubtitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-lawyers-page-dispute-resolution-with-kleros-section.for-lawyers-page-dispute-resolution-with-kleros-section'
    > &
      Schema.Attribute.Private;
    publications: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-publication.team-publication'
    >;
    publishedAt: Schema.Attribute.DateTime;
    secondHeader: Schema.Attribute.String;
    secondSubtitle: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    thirdHeader: Schema.Attribute.String;
    thirdSubtitle: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForLawyersPageHeroForLawyersPageHero
  extends Struct.SingleTypeSchema {
  collectionName: 'for_lawyers_page_heroes';
  info: {
    displayName: 'ForLawyersPageHero';
    pluralName: 'for-lawyers-page-heroes';
    singularName: 'for-lawyers-page-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttons: Schema.Attribute.Component<'content.button-link', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-lawyers-page-hero.for-lawyers-page-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForLawyersPageKlerosEnterpriseSectionForLawyersPageKlerosEnterpriseSection
  extends Struct.SingleTypeSchema {
  collectionName: 'for_lawyers_page_kleros_enterprise_sections';
  info: {
    description: '';
    displayName: 'ForLawyersPageKlerosEnterpriseSection';
    pluralName: 'for-lawyers-page-kleros-enterprise-sections';
    singularName: 'for-lawyers-page-kleros-enterprise-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    cards: Schema.Attribute.Component<'content.cta-card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    disputeResolutionProcessHeader: Schema.Attribute.Component<
      'content.highlight-text',
      false
    >;
    header: Schema.Attribute.String;
    headerSubtitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-lawyers-page-kleros-enterprise-section.for-lawyers-page-kleros-enterprise-section'
    > &
      Schema.Attribute.Private;
    processDiagram: Schema.Attribute.Component<
      'content.responsive-media',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.Component<'content.highlight-text', false>;
    table: Schema.Attribute.Component<'table.table', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForLawyersPageKlerosEscrowSectionForLawyersPageKlerosEscrowSection
  extends Struct.SingleTypeSchema {
  collectionName: 'for_lawyers_page_kleros_escrow_sections';
  info: {
    description: '';
    displayName: 'ForLawyersPageKlerosEscrowSection';
    pluralName: 'for-lawyers-page-kleros-escrow-sections';
    singularName: 'for-lawyers-page-kleros-escrow-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    flowchart: Schema.Attribute.Component<'for-lawyers-page.step', true>;
    flowchartLabel: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-lawyers-page-kleros-escrow-section.for-lawyers-page-kleros-escrow-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    secondHeader: Schema.Attribute.String;
    secondSubtitle: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForLawyersPageMediationSectionForLawyersPageMediationSection
  extends Struct.SingleTypeSchema {
  collectionName: 'for_lawyers_page_mediation_sections';
  info: {
    description: '';
    displayName: 'ForLawyersPageMediationSection';
    pluralName: 'for-lawyers-page-mediation-sections';
    singularName: 'for-lawyers-page-mediation-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    benefitsHeader: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'content.cta-card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    flowchart: Schema.Attribute.Component<'for-lawyers-page.step', true>;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-lawyers-page-mediation-section.for-lawyers-page-mediation-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForLawyersPageParticipateSectionForLawyersPageParticipateSection
  extends Struct.SingleTypeSchema {
  collectionName: 'for_lawyers_page_participate_sections';
  info: {
    description: '';
    displayName: 'ForLawyersPageParticipateSection';
    pluralName: 'for-lawyers-page-participate-sections';
    singularName: 'for-lawyers-page-participate-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    headerSubtitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-lawyers-page-participate-section.for-lawyers-page-participate-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    starterKitSection: Schema.Attribute.Component<
      'cooperative-report-page.learn-more-section',
      false
    >;
    subtitle: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiForLawyersPageSeoForLawyersPageSeo
  extends Struct.SingleTypeSchema {
  collectionName: 'for_lawyers_page_seos';
  info: {
    displayName: 'ForLawyersPageSEO';
    pluralName: 'for-lawyers-page-seos';
    singularName: 'for-lawyers-page-seo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::for-lawyers-page-seo.for-lawyers-page-seo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SEO: Schema.Attribute.Component<'content.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeCaseStudiesSectionHomeCaseStudiesSection
  extends Struct.SingleTypeSchema {
  collectionName: 'home_case_studies_sections';
  info: {
    description: '';
    displayName: 'HomeCaseStudiesSection';
    pluralName: 'home-case-studies-sections';
    singularName: 'home-case-studies-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cards: Schema.Attribute.Component<'content.link-card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-case-studies-section.home-case-studies-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeEnterpriseHomeEnterprise
  extends Struct.SingleTypeSchema {
  collectionName: 'home_enterprises';
  info: {
    displayName: 'HomeEnterprise';
    pluralName: 'home-enterprises';
    singularName: 'home-enterprise';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cards: Schema.Attribute.Component<'content.link-card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-enterprise.home-enterprise'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeGetInTouchSectionHomeGetInTouchSection
  extends Struct.SingleTypeSchema {
  collectionName: 'home_get_in_touch_sections';
  info: {
    description: '';
    displayName: 'HomeGetInTouchSection';
    pluralName: 'home-get-in-touch-sections';
    singularName: 'home-get-in-touch-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'content.button-link', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-get-in-touch-section.home-get-in-touch-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeHowKlerosWorksSectionHomeHowKlerosWorksSection
  extends Struct.SingleTypeSchema {
  collectionName: 'home_how_kleros_works_sections';
  info: {
    description: '';
    displayName: 'HomeHowKlerosWorksSection';
    pluralName: 'home-how-kleros-works-sections';
    singularName: 'home-how-kleros-works-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    explainer: Schema.Attribute.Component<'content.responsive-media', false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-how-kleros-works-section.home-how-kleros-works-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeLearnPostsSectionHomeLearnPostsSection
  extends Struct.SingleTypeSchema {
  collectionName: 'home_learn_posts_sections';
  info: {
    description: '';
    displayName: 'HomeLearnPostsSection';
    pluralName: 'home-learn-posts-sections';
    singularName: 'home-learn-posts-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cards: Schema.Attribute.Component<'content.link-card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    introduction: Schema.Attribute.Component<'home.introduction', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-learn-posts-section.home-learn-posts-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomePageHeroHomePageHero extends Struct.SingleTypeSchema {
  collectionName: 'home_page_heroes';
  info: {
    description: '';
    displayName: 'HomePageHero';
    pluralName: 'home-page-heroes';
    singularName: 'home-page-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page-hero.home-page-hero'
    > &
      Schema.Attribute.Private;
    primaryButton: Schema.Attribute.Component<'content.button-link', false>;
    publishedAt: Schema.Attribute.DateTime;
    secondaryButton: Schema.Attribute.Component<'content.button-link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    tokenStats: Schema.Attribute.Relation<
      'oneToMany',
      'api::token-stat.token-stat'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomePageSeoHomePageSeo extends Struct.SingleTypeSchema {
  collectionName: 'home_page_seos';
  info: {
    displayName: 'HomePageSEO';
    pluralName: 'home-page-seos';
    singularName: 'home-page-seo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page-seo.home-page-seo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SEO: Schema.Attribute.Component<'content.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomePageWeb3HomePageWeb3 extends Struct.SingleTypeSchema {
  collectionName: 'home_page_web3s';
  info: {
    description: '';
    displayName: 'HomeWeb3';
    pluralName: 'home-page-web3s';
    singularName: 'home-page-web3';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cards: Schema.Attribute.Component<'content.link-card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page-web3.home-page-web3'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeStartEarningSectionHomeStartEarningSection
  extends Struct.SingleTypeSchema {
  collectionName: 'home_start_earning_sections';
  info: {
    description: '';
    displayName: 'HomeStartEarningSection';
    pluralName: 'home-start-earning-sections';
    singularName: 'home-start-earning-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cards: Schema.Attribute.Component<'content.link-card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta: Schema.Attribute.Component<'home.cta', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-start-earning-section.home-start-earning-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeUseCasesSectionHomeUseCasesSection
  extends Struct.SingleTypeSchema {
  collectionName: 'home_use_cases_sections';
  info: {
    description: '';
    displayName: 'HomeUseCasesSection';
    pluralName: 'home-use-cases-sections';
    singularName: 'home-use-cases-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-use-cases-section.home-use-cases-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiInstitutionInstitution extends Struct.CollectionTypeSchema {
  collectionName: 'institutions';
  info: {
    displayName: 'Institution';
    pluralName: 'institutions';
    singularName: 'institution';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::institution.institution'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiKlerosLogoKlerosLogo extends Struct.SingleTypeSchema {
  collectionName: 'kleros_logo';
  info: {
    displayName: 'KlerosLogo';
    pluralName: 'kleros-logos';
    singularName: 'kleros-logo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::kleros-logo.kleros-logo'
    > &
      Schema.Attribute.Private;
    logo_svg: Schema.Attribute.Media<'images' | 'files'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLemonCashSectionLemonCashSection
  extends Struct.SingleTypeSchema {
  collectionName: 'lemon_cash_sections';
  info: {
    description: '';
    displayName: 'LemonCashSection';
    pluralName: 'lemon-cash-sections';
    singularName: 'lemon-cash-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lemon-cash-section.lemon-cash-section'
    > &
      Schema.Attribute.Private;
    primarySubtitle: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    secondarySubtitle: Schema.Attribute.String;
    testimony: Schema.Attribute.Text;
    testimonyAuthor: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLinkLink extends Struct.CollectionTypeSchema {
  collectionName: 'links';
  info: {
    displayName: 'Link';
    pluralName: 'links';
    singularName: 'link';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::link.link'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiNavbarAppsSectionNavbarAppsSection
  extends Struct.SingleTypeSchema {
  collectionName: 'navbar_apps_sections';
  info: {
    displayName: 'NavbarAppsSection';
    pluralName: 'navbar-apps-sections';
    singularName: 'navbar-apps-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navbar-apps-section.navbar-apps-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    solutions: Schema.Attribute.Relation<'oneToMany', 'api::solution.solution'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNavbarButtonNavbarButton extends Struct.SingleTypeSchema {
  collectionName: 'navbar_button';
  info: {
    displayName: 'NavbarButton';
    pluralName: 'navbar-buttons';
    singularName: 'navbar-button';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    link: Schema.Attribute.Relation<'oneToOne', 'api::link.link'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navbar-button.navbar-button'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNavbarNavlinksSectionNavbarNavlinksSection
  extends Struct.SingleTypeSchema {
  collectionName: 'navbar_navlinks_sections';
  info: {
    displayName: 'NavbarNavlinksSection';
    pluralName: 'navbar-navlinks-sections';
    singularName: 'navbar-navlinks-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navbar-navlinks-section.navbar-navlinks-section'
    > &
      Schema.Attribute.Private;
    Navlink: Schema.Attribute.Component<'content.navlink', true>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNavbarResourcesSectionNavbarResourcesSection
  extends Struct.SingleTypeSchema {
  collectionName: 'navbar_resources_sections';
  info: {
    displayName: 'NavbarResourcesSection';
    pluralName: 'navbar-resources-sections';
    singularName: 'navbar-resources-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::navbar-resources-section.navbar-resources-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Section: Schema.Attribute.Component<'content.section', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPartnerPartner extends Struct.CollectionTypeSchema {
  collectionName: 'partners';
  info: {
    description: '';
    displayName: 'Partner';
    pluralName: 'partners';
    singularName: 'partner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon_svg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::partner.partner'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String;
  };
}

export interface ApiPnkTokenPageBuySectionPnkTokenPageBuySection
  extends Struct.SingleTypeSchema {
  collectionName: 'pnk_token_page_buy_sections';
  info: {
    description: '';
    displayName: 'PNKTokenPageBuySection';
    pluralName: 'pnk-token-page-buy-sections';
    singularName: 'pnk-token-page-buy-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    exchanges: Schema.Attribute.Relation<'oneToMany', 'api::exchange.exchange'>;
    featuredExchanges: Schema.Attribute.Relation<
      'oneToMany',
      'api::exchange.exchange'
    >;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pnk-token-page-buy-section.pnk-token-page-buy-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPnkTokenPageHeroPnkTokenPageHero
  extends Struct.SingleTypeSchema {
  collectionName: 'pnk_token_page_heroes';
  info: {
    description: '';
    displayName: 'PNKTokenPageHero';
    pluralName: 'pnk-token-page-heroes';
    singularName: 'pnk-token-page-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buyButton: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pnk-token-page-hero.pnk-token-page-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPnkTokenPageNeedSectionPnkTokenPageNeedSection
  extends Struct.SingleTypeSchema {
  collectionName: 'pnk_token_page_need_sections';
  info: {
    description: '';
    displayName: 'PNKTokenPageNeedSection';
    pluralName: 'pnk-token-page-need-sections';
    singularName: 'pnk-token-page-need-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    card: Schema.Attribute.Component<'content.cta-card', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pnk-token-page-need-section.pnk-token-page-need-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPnkTokenPageSeoPnkTokenPageSeo
  extends Struct.SingleTypeSchema {
  collectionName: 'pnk_token_page_seos';
  info: {
    displayName: 'PNKTokenPageSEO';
    pluralName: 'pnk-token-page-seos';
    singularName: 'pnk-token-page-seo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pnk-token-page-seo.pnk-token-page-seo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SEO: Schema.Attribute.Component<'content.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPnkTokenPageTokenomicsSectionPnkTokenPageTokenomicsSection
  extends Struct.SingleTypeSchema {
  collectionName: 'pnk_token_page_tokenomics_sections';
  info: {
    description: '';
    displayName: 'PNKTokenPageTokenomicsSection';
    pluralName: 'pnk-token-page-tokenomics-sections';
    singularName: 'pnk-token-page-tokenomics-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pnk-token-page-tokenomics-section.pnk-token-page-tokenomics-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    tokenStatDisplay: Schema.Attribute.Component<
      'pnk-token-page.token-stat-display',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRAndDPageFellowshipTabSectionRAndDPageFellowshipTabSection
  extends Struct.SingleTypeSchema {
  collectionName: 'r_and_d_page_fellowship_tab_sections';
  info: {
    description: '';
    displayName: 'R&DPageFellowshipTabSection';
    pluralName: 'r-and-d-page-fellowship-tab-sections';
    singularName: 'r-and-d-page-fellowship-tab-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fellowsHeader: Schema.Attribute.String;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::r-and-d-page-fellowship-tab-section.r-and-d-page-fellowship-tab-section'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.Text;
    tabName: Schema.Attribute.String;
    testimonialsHeader: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    waitlistSection: Schema.Attribute.Component<
      'r-and-d-page.waitlist-section',
      false
    >;
  };
}

export interface ApiRAndDPageHeroRAndDPageHero extends Struct.SingleTypeSchema {
  collectionName: 'r_and_d_page_heroes';
  info: {
    displayName: 'R&DPageHero';
    pluralName: 'r-and-d-page-heroes';
    singularName: 'r-and-d-page-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    arrowLink: Schema.Attribute.Component<'content.button-link', true>;
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttons: Schema.Attribute.Component<'content.button-link', true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::r-and-d-page-hero.r-and-d-page-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subtitle: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRAndDPageResearchTabSectionRAndDPageResearchTabSection
  extends Struct.SingleTypeSchema {
  collectionName: 'r_and_d_page_research_tab_sections';
  info: {
    description: '';
    displayName: 'R&DPageResearchTabSection';
    pluralName: 'r-and-d-page-research-tab-sections';
    singularName: 'r-and-d-page-research-tab-section';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    klerosBook: Schema.Attribute.Component<'r-and-d-page.kleros-book', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::r-and-d-page-research-tab-section.r-and-d-page-research-tab-section'
    > &
      Schema.Attribute.Private;
    publications3rdPartyHeader: Schema.Attribute.String;
    publicationsHeader: Schema.Attribute.String;
    publicationsTeamHeader: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    researchCardLabel: Schema.Attribute.String;
    researchHeader: Schema.Attribute.String;
    researchParagraph: Schema.Attribute.Text;
    researchSecondaryHeader: Schema.Attribute.String;
    tabName: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRAndDPageSeoRAndDPageSeo extends Struct.SingleTypeSchema {
  collectionName: 'r_and_d_page_seos';
  info: {
    displayName: 'R&DPageSEO';
    pluralName: 'r-and-d-page-seos';
    singularName: 'r-and-d-page-seo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::r-and-d-page-seo.r-and-d-page-seo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    SEO: Schema.Attribute.Component<'content.seo', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiResearchResearch extends Struct.CollectionTypeSchema {
  collectionName: 'researches';
  info: {
    description: '';
    displayName: 'Research';
    pluralName: 'researches';
    singularName: 'research';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    field: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::research.research'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String;
  };
}

export interface ApiRiskReportRiskReport extends Struct.CollectionTypeSchema {
  collectionName: 'risk_reports';
  info: {
    description: '';
    displayName: 'Risk Report';
    pluralName: 'risk-reports';
    singularName: 'risk-report';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::risk-report.risk-report'
    > &
      Schema.Attribute.Private;
    month: Schema.Attribute.Enumeration<
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    year: Schema.Attribute.Integer;
  };
}

export interface ApiSocialSocial extends Struct.CollectionTypeSchema {
  collectionName: 'socials';
  info: {
    description: '';
    displayName: 'Social';
    pluralName: 'socials';
    singularName: 'social';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    icon_white: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::social.social'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiSolutionSolution extends Struct.CollectionTypeSchema {
  collectionName: 'solutions';
  info: {
    displayName: 'Solution';
    pluralName: 'solutions';
    singularName: 'solution';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    header_description: Schema.Attribute.Text;
    header_title: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::solution.solution'
    > &
      Schema.Attribute.Private;
    logo_svg: Schema.Attribute.Media & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    solution_name: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiTeamPublicationTeamPublication
  extends Struct.CollectionTypeSchema {
  collectionName: 'team_publications';
  info: {
    displayName: 'TeamPublication';
    pluralName: 'team-publications';
    singularName: 'team-publication';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    authors: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-publication.team-publication'
    > &
      Schema.Attribute.Private;
    paperLink: Schema.Attribute.Component<'content.button-link', false>;
    publishedAt: Schema.Attribute.DateTime;
    topic: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTestimonialTestimonial extends Struct.CollectionTypeSchema {
  collectionName: 'testimonials';
  info: {
    displayName: 'Testimonial';
    pluralName: 'testimonials';
    singularName: 'testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String;
  };
}

export interface ApiThirdPartyPublicationThirdPartyPublication
  extends Struct.CollectionTypeSchema {
  collectionName: 'third_party_publications';
  info: {
    description: '';
    displayName: 'ThirdPartyPublication';
    pluralName: 'third-party-publications';
    singularName: 'third-party-publication';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::third-party-publication.third-party-publication'
    > &
      Schema.Attribute.Private;
    paperLink: Schema.Attribute.Component<'content.button-link', false>;
    publishedAt: Schema.Attribute.DateTime;
    topic: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTokenExplorerTokenExplorer
  extends Struct.CollectionTypeSchema {
  collectionName: 'token_explorers';
  info: {
    description: '';
    displayName: 'TokenExplorer';
    pluralName: 'token-explorers';
    singularName: 'token-explorer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::token-explorer.token-explorer'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String;
  };
}

export interface ApiTokenStatTokenStat extends Struct.CollectionTypeSchema {
  collectionName: 'token_stats';
  info: {
    displayName: 'TokenStat';
    pluralName: 'token-stats';
    singularName: 'token-stat';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    key: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::token-stat.token-stat'
    > &
      Schema.Attribute.Private;
    primaryValue: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    secondaryValue: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTreasuryReportTreasuryReport
  extends Struct.CollectionTypeSchema {
  collectionName: 'treasury_reports';
  info: {
    description: '';
    displayName: 'Treasury Report';
    pluralName: 'treasury-reports';
    singularName: 'treasury-report';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::treasury-report.treasury-report'
    > &
      Schema.Attribute.Private;
    month: Schema.Attribute.Enumeration<
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    year: Schema.Attribute.Integer;
  };
}

export interface ApiUseCaseUseCase extends Struct.CollectionTypeSchema {
  collectionName: 'use-case';
  info: {
    displayName: 'UseCase';
    pluralName: 'use-cases';
    singularName: 'use-case';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::use-case.use-case'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::annual-report.annual-report': ApiAnnualReportAnnualReport;
      'api::brand-assets-page-hero.brand-assets-page-hero': ApiBrandAssetsPageHeroBrandAssetsPageHero;
      'api::brand-assets-page-kleros-badges-section.brand-assets-page-kleros-badges-section': ApiBrandAssetsPageKlerosBadgesSectionBrandAssetsPageKlerosBadgesSection;
      'api::brand-assets-page-kleros-colors-section.brand-assets-page-kleros-colors-section': ApiBrandAssetsPageKlerosColorsSectionBrandAssetsPageKlerosColorsSection;
      'api::brand-assets-page-kleros-fonts-section.brand-assets-page-kleros-fonts-section': ApiBrandAssetsPageKlerosFontsSectionBrandAssetsPageKlerosFontsSection;
      'api::brand-assets-page-kleros-logo-section.brand-assets-page-kleros-logo-section': ApiBrandAssetsPageKlerosLogoSectionBrandAssetsPageKlerosLogoSection;
      'api::brand-assets-page-logos-package-section.brand-assets-page-logos-package-section': ApiBrandAssetsPageLogosPackageSectionBrandAssetsPageLogosPackageSection;
      'api::brand-assets-page-pnk-token-section.brand-assets-page-pnk-token-section': ApiBrandAssetsPagePnkTokenSectionBrandAssetsPagePnkTokenSection;
      'api::brand-assets-page-seo.brand-assets-page-seo': ApiBrandAssetsPageSeoBrandAssetsPageSeo;
      'api::brand-assets-page-styled-images-section.brand-assets-page-styled-images-section': ApiBrandAssetsPageStyledImagesSectionBrandAssetsPageStyledImagesSection;
      'api::community-page-hero.community-page-hero': ApiCommunityPageHeroCommunityPageHero;
      'api::community-page-seo.community-page-seo': ApiCommunityPageSeoCommunityPageSeo;
      'api::community.community': ApiCommunityCommunity;
      'api::cooperative-page-hero.cooperative-page-hero': ApiCooperativePageHeroCooperativePageHero;
      'api::cooperative-page-member-section.cooperative-page-member-section': ApiCooperativePageMemberSectionCooperativePageMemberSection;
      'api::cooperative-page-report-section.cooperative-page-report-section': ApiCooperativePageReportSectionCooperativePageReportSection;
      'api::cooperative-page-seo.cooperative-page-seo': ApiCooperativePageSeoCooperativePageSeo;
      'api::court.court': ApiCourtCourt;
      'api::earn-page-become-a-curator-tab-content.earn-page-become-a-curator-tab-content': ApiEarnPageBecomeACuratorTabContentEarnPageBecomeACuratorTabContent;
      'api::earn-page-become-a-juror-tab-content.earn-page-become-a-juror-tab-content': ApiEarnPageBecomeAJurorTabContentEarnPageBecomeAJurorTabContent;
      'api::earn-page-hero.earn-page-hero': ApiEarnPageHeroEarnPageHero;
      'api::earn-page-seo.earn-page-seo': ApiEarnPageSeoEarnPageSeo;
      'api::exchange.exchange': ApiExchangeExchange;
      'api::fellow.fellow': ApiFellowFellow;
      'api::footer-links-section.footer-links-section': ApiFooterLinksSectionFooterLinksSection;
      'api::footer-socials-section.footer-socials-section': ApiFooterSocialsSectionFooterSocialsSection;
      'api::footer-subscribe-cta.footer-subscribe-cta': ApiFooterSubscribeCtaFooterSubscribeCta;
      'api::for-builders-page-hero.for-builders-page-hero': ApiForBuildersPageHeroForBuildersPageHero;
      'api::for-builders-page-integrate-section.for-builders-page-integrate-section': ApiForBuildersPageIntegrateSectionForBuildersPageIntegrateSection;
      'api::for-builders-page-seo.for-builders-page-seo': ApiForBuildersPageSeoForBuildersPageSeo;
      'api::for-builders-page-use-cases-section.for-builders-page-use-cases-section': ApiForBuildersPageUseCasesSectionForBuildersPageUseCasesSection;
      'api::for-lawyers-page-become-a-fellow-section.for-lawyers-page-become-a-fellow-section': ApiForLawyersPageBecomeAFellowSectionForLawyersPageBecomeAFellowSection;
      'api::for-lawyers-page-dispute-resolution-with-kleros-section.for-lawyers-page-dispute-resolution-with-kleros-section': ApiForLawyersPageDisputeResolutionWithKlerosSectionForLawyersPageDisputeResolutionWithKlerosSection;
      'api::for-lawyers-page-hero.for-lawyers-page-hero': ApiForLawyersPageHeroForLawyersPageHero;
      'api::for-lawyers-page-kleros-enterprise-section.for-lawyers-page-kleros-enterprise-section': ApiForLawyersPageKlerosEnterpriseSectionForLawyersPageKlerosEnterpriseSection;
      'api::for-lawyers-page-kleros-escrow-section.for-lawyers-page-kleros-escrow-section': ApiForLawyersPageKlerosEscrowSectionForLawyersPageKlerosEscrowSection;
      'api::for-lawyers-page-mediation-section.for-lawyers-page-mediation-section': ApiForLawyersPageMediationSectionForLawyersPageMediationSection;
      'api::for-lawyers-page-participate-section.for-lawyers-page-participate-section': ApiForLawyersPageParticipateSectionForLawyersPageParticipateSection;
      'api::for-lawyers-page-seo.for-lawyers-page-seo': ApiForLawyersPageSeoForLawyersPageSeo;
      'api::home-case-studies-section.home-case-studies-section': ApiHomeCaseStudiesSectionHomeCaseStudiesSection;
      'api::home-enterprise.home-enterprise': ApiHomeEnterpriseHomeEnterprise;
      'api::home-get-in-touch-section.home-get-in-touch-section': ApiHomeGetInTouchSectionHomeGetInTouchSection;
      'api::home-how-kleros-works-section.home-how-kleros-works-section': ApiHomeHowKlerosWorksSectionHomeHowKlerosWorksSection;
      'api::home-learn-posts-section.home-learn-posts-section': ApiHomeLearnPostsSectionHomeLearnPostsSection;
      'api::home-page-hero.home-page-hero': ApiHomePageHeroHomePageHero;
      'api::home-page-seo.home-page-seo': ApiHomePageSeoHomePageSeo;
      'api::home-page-web3.home-page-web3': ApiHomePageWeb3HomePageWeb3;
      'api::home-start-earning-section.home-start-earning-section': ApiHomeStartEarningSectionHomeStartEarningSection;
      'api::home-use-cases-section.home-use-cases-section': ApiHomeUseCasesSectionHomeUseCasesSection;
      'api::institution.institution': ApiInstitutionInstitution;
      'api::kleros-logo.kleros-logo': ApiKlerosLogoKlerosLogo;
      'api::lemon-cash-section.lemon-cash-section': ApiLemonCashSectionLemonCashSection;
      'api::link.link': ApiLinkLink;
      'api::navbar-apps-section.navbar-apps-section': ApiNavbarAppsSectionNavbarAppsSection;
      'api::navbar-button.navbar-button': ApiNavbarButtonNavbarButton;
      'api::navbar-navlinks-section.navbar-navlinks-section': ApiNavbarNavlinksSectionNavbarNavlinksSection;
      'api::navbar-resources-section.navbar-resources-section': ApiNavbarResourcesSectionNavbarResourcesSection;
      'api::partner.partner': ApiPartnerPartner;
      'api::pnk-token-page-buy-section.pnk-token-page-buy-section': ApiPnkTokenPageBuySectionPnkTokenPageBuySection;
      'api::pnk-token-page-hero.pnk-token-page-hero': ApiPnkTokenPageHeroPnkTokenPageHero;
      'api::pnk-token-page-need-section.pnk-token-page-need-section': ApiPnkTokenPageNeedSectionPnkTokenPageNeedSection;
      'api::pnk-token-page-seo.pnk-token-page-seo': ApiPnkTokenPageSeoPnkTokenPageSeo;
      'api::pnk-token-page-tokenomics-section.pnk-token-page-tokenomics-section': ApiPnkTokenPageTokenomicsSectionPnkTokenPageTokenomicsSection;
      'api::r-and-d-page-fellowship-tab-section.r-and-d-page-fellowship-tab-section': ApiRAndDPageFellowshipTabSectionRAndDPageFellowshipTabSection;
      'api::r-and-d-page-hero.r-and-d-page-hero': ApiRAndDPageHeroRAndDPageHero;
      'api::r-and-d-page-research-tab-section.r-and-d-page-research-tab-section': ApiRAndDPageResearchTabSectionRAndDPageResearchTabSection;
      'api::r-and-d-page-seo.r-and-d-page-seo': ApiRAndDPageSeoRAndDPageSeo;
      'api::research.research': ApiResearchResearch;
      'api::risk-report.risk-report': ApiRiskReportRiskReport;
      'api::social.social': ApiSocialSocial;
      'api::solution.solution': ApiSolutionSolution;
      'api::team-publication.team-publication': ApiTeamPublicationTeamPublication;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::third-party-publication.third-party-publication': ApiThirdPartyPublicationThirdPartyPublication;
      'api::token-explorer.token-explorer': ApiTokenExplorerTokenExplorer;
      'api::token-stat.token-stat': ApiTokenStatTokenStat;
      'api::treasury-report.treasury-report': ApiTreasuryReportTreasuryReport;
      'api::use-case.use-case': ApiUseCaseUseCase;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
