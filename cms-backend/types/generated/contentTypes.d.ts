import type { Struct, Schema } from "@strapi/strapi";

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: "files";
  info: {
    singularName: "file";
    pluralName: "files";
    displayName: "File";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<"morphToMany">;
    folder: Schema.Attribute.Relation<"manyToOne", "plugin::upload.folder"> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::upload.file"
    >;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: "upload_folders";
  info: {
    singularName: "folder";
    pluralName: "folders";
    displayName: "Folder";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<"manyToOne", "plugin::upload.folder">;
    children: Schema.Attribute.Relation<"oneToMany", "plugin::upload.folder">;
    files: Schema.Attribute.Relation<"oneToMany", "plugin::upload.file">;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::upload.folder"
    >;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: "i18n_locale";
  info: {
    singularName: "locale";
    pluralName: "locales";
    collectionName: "locales";
    displayName: "Locale";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::i18n.locale"
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: "strapi_releases";
  info: {
    singularName: "release";
    pluralName: "releases";
    displayName: "Release";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ["ready", "blocked", "failed", "done", "empty"]
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::content-releases.release-action"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::content-releases.release"
    >;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: "strapi_release_actions";
  info: {
    singularName: "release-action";
    pluralName: "release-actions";
    displayName: "Release Action";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    type: Schema.Attribute.Enumeration<["publish", "unpublish"]> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String;
    release: Schema.Attribute.Relation<
      "manyToOne",
      "plugin::content-releases.release"
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::content-releases.release-action"
    >;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: "strapi_workflows";
  info: {
    name: "Workflow";
    description: "";
    singularName: "workflow";
    pluralName: "workflows";
    displayName: "Workflow";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::review-workflows.workflow-stage"
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"[]">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::review-workflows.workflow"
    >;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: "strapi_workflows_stages";
  info: {
    name: "Workflow Stage";
    description: "";
    singularName: "workflow-stage";
    pluralName: "workflow-stages";
    displayName: "Stages";
  };
  options: {
    version: "1.1.0";
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<"#4945FF">;
    workflow: Schema.Attribute.Relation<
      "manyToOne",
      "plugin::review-workflows.workflow"
    >;
    permissions: Schema.Attribute.Relation<"manyToMany", "admin::permission">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::review-workflows.workflow-stage"
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: "up_permissions";
  info: {
    name: "permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.Relation<
      "manyToOne",
      "plugin::users-permissions.role"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::users-permissions.permission"
    >;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: "up_roles";
  info: {
    name: "role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::users-permissions.permission"
    >;
    users: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::users-permissions.user"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::users-permissions.role"
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: "up_users";
  info: {
    name: "user";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  options: {
    timestamps: true;
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      "manyToOne",
      "plugin::users-permissions.role"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "plugin::users-permissions.user"
    >;
  };
}

export interface ApiAnnualReportAnnualReport
  extends Struct.CollectionTypeSchema {
  collectionName: "annual_reports";
  info: {
    singularName: "annual-report";
    pluralName: "annual-reports";
    displayName: "Annual Report";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    url: Schema.Attribute.String;
    year: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::annual-report.annual-report"
    >;
  };
}

export interface ApiCommunityCommunity extends Struct.CollectionTypeSchema {
  collectionName: "communities";
  info: {
    singularName: "community";
    pluralName: "communities";
    displayName: "Community";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::community.community"
    >;
  };
}

export interface ApiCommunityPageHeroCommunityPageHero
  extends Struct.SingleTypeSchema {
  collectionName: "community_page_heroes";
  info: {
    singularName: "community-page-hero";
    pluralName: "community-page-heroes";
    displayName: "CommunityPageHero";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    communityButtons: Schema.Attribute.Component<"content.button-link", true>;
    background: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::community-page-hero.community-page-hero"
    >;
  };
}

export interface ApiCooperativePageHeroCooperativePageHero
  extends Struct.SingleTypeSchema {
  collectionName: "cooperative_page_heroes";
  info: {
    singularName: "cooperative-page-hero";
    pluralName: "cooperative-page-heroes";
    displayName: "CooperativePageHero";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<"content.button-link", true>;
    arrowLink: Schema.Attribute.Component<"content.button-link", false>;
    background: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::cooperative-page-hero.cooperative-page-hero"
    >;
  };
}

export interface ApiCooperativePageMemberSectionCooperativePageMemberSection
  extends Struct.SingleTypeSchema {
  collectionName: "cooperative_page_member_sections";
  info: {
    singularName: "cooperative-page-member-section";
    pluralName: "cooperative-page-member-sections";
    displayName: "CooperativePageMemberSection";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    learnMoreSection: Schema.Attribute.Component<
      "cooperative-report-page.learn-more-section",
      false
    >;
    secondaryHeader: Schema.Attribute.String;
    arrowLink: Schema.Attribute.Component<"content.button-link", false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::cooperative-page-member-section.cooperative-page-member-section"
    >;
  };
}

export interface ApiCooperativePageReportSectionCooperativePageReportSection
  extends Struct.SingleTypeSchema {
  collectionName: "cooperative_page_report_sections";
  info: {
    singularName: "cooperative-page-report-section";
    pluralName: "cooperative-page-report-sections";
    displayName: "CooperativePageReportSection";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    reports: Schema.Attribute.Component<
      "cooperative-report-page.report-card",
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::cooperative-page-report-section.cooperative-page-report-section"
    >;
  };
}

export interface ApiCourtCourt extends Struct.CollectionTypeSchema {
  collectionName: "courts";
  info: {
    singularName: "court";
    pluralName: "courts";
    displayName: "Court";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::court.court">;
  };
}

export interface ApiEarnPageBecomeACuratorTabContentEarnPageBecomeACuratorTabContent
  extends Struct.SingleTypeSchema {
  collectionName: "earn_page_become_a_curator_tab_contents";
  info: {
    singularName: "earn-page-become-a-curator-tab-content";
    pluralName: "earn-page-become-a-curator-tab-contents";
    displayName: "EarnPageBecomeACuratorTabContent";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tabName: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    ctaCard: Schema.Attribute.Component<"content.cta-card", true>;
    arrowLink: Schema.Attribute.Component<"content.button-link", false>;
    scoutExplanation: Schema.Attribute.Text;
    klerosScoutSection: Schema.Attribute.Component<
      "earn-page.kleros-scout-section",
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::earn-page-become-a-curator-tab-content.earn-page-become-a-curator-tab-content"
    >;
  };
}

export interface ApiEarnPageBecomeAJurorTabContentEarnPageBecomeAJurorTabContent
  extends Struct.SingleTypeSchema {
  collectionName: "earn_page_become_a_juror_tab_contents";
  info: {
    singularName: "earn-page-become-a-juror-tab-content";
    pluralName: "earn-page-become-a-juror-tab-contents";
    displayName: "EarnPageBecomeAJurorTabContent";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    tabName: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.String;
    ctaCard: Schema.Attribute.Component<"content.cta-card", true>;
    enterCourtSection: Schema.Attribute.Component<
      "earn-page.enter-court-section",
      false
    >;
    mostActiveCourtsHeader: Schema.Attribute.String;
    mostActiveCourts: Schema.Attribute.Relation<
      "oneToMany",
      "api::court.court"
    >;
    courtsButton: Schema.Attribute.Component<"content.button-link", false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::earn-page-become-a-juror-tab-content.earn-page-become-a-juror-tab-content"
    >;
  };
}

export interface ApiEarnPageHeroEarnPageHero extends Struct.SingleTypeSchema {
  collectionName: "earn_page_heroes";
  info: {
    singularName: "earn-page-hero";
    pluralName: "earn-page-heroes";
    displayName: "EarnPageHero";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    statDisplay: Schema.Attribute.Component<"content.stat-display", false>;
    background: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::earn-page-hero.earn-page-hero"
    >;
  };
}

export interface ApiExchangeExchange extends Struct.CollectionTypeSchema {
  collectionName: "exchanges";
  info: {
    singularName: "exchange";
    pluralName: "exchanges";
    displayName: "Exchange";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::exchange.exchange"
    >;
  };
}

export interface ApiFooterLinksSectionFooterLinksSection
  extends Struct.SingleTypeSchema {
  collectionName: "footer_links_sections";
  info: {
    singularName: "footer-links-section";
    pluralName: "footer-links-sections";
    displayName: "FooterLinksSection";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Section: Schema.Attribute.Component<"content.section", true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::footer-links-section.footer-links-section"
    >;
  };
}

export interface ApiFooterSocialsSectionFooterSocialsSection
  extends Struct.SingleTypeSchema {
  collectionName: "footer_socials_sections";
  info: {
    singularName: "footer-socials-section";
    pluralName: "footer-socials-sections";
    displayName: "FooterSocialsSection";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    socials: Schema.Attribute.Relation<"oneToMany", "api::social.social">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::footer-socials-section.footer-socials-section"
    >;
  };
}

export interface ApiFooterSubscribeCtaFooterSubscribeCta
  extends Struct.SingleTypeSchema {
  collectionName: "footer_subscribe_ctas";
  info: {
    singularName: "footer-subscribe-cta";
    pluralName: "footer-subscribe-ctas";
    displayName: "FooterSubscribeCTA";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    notice: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    cta_button: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::footer-subscribe-cta.footer-subscribe-cta"
    >;
  };
}

export interface ApiForBuildersPageHeroForBuildersPageHero
  extends Struct.SingleTypeSchema {
  collectionName: "for_builders_page_heroes";
  info: {
    singularName: "for-builders-page-hero";
    pluralName: "for-builders-page-heroes";
    displayName: "ForBuildersPageHero";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    button: Schema.Attribute.Component<"content.button-link", false>;
    arrowLink: Schema.Attribute.Component<"content.button-link", true>;
    background: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::for-builders-page-hero.for-builders-page-hero"
    >;
  };
}

export interface ApiForBuildersPageIntegrateSectionForBuildersPageIntegrateSection
  extends Struct.SingleTypeSchema {
  collectionName: "for_builders_page_integrate_section";
  info: {
    singularName: "for-builders-page-integrate-section";
    pluralName: "for-builders-page-integrate-sections";
    displayName: "ForBuildersPageIntegrateSection";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    appsSection: Schema.Attribute.Relation<
      "oneToOne",
      "api::navbar-apps-section.navbar-apps-section"
    >;
    getInTouchSection: Schema.Attribute.Component<
      "for-builders-page.get-in-touch-section",
      false
    >;
    arrowLink: Schema.Attribute.Component<"content.button-link", false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::for-builders-page-integrate-section.for-builders-page-integrate-section"
    >;
  };
}

export interface ApiForBuildersPageUseCasesSectionForBuildersPageUseCasesSection
  extends Struct.SingleTypeSchema {
  collectionName: "for_builders_page_use_cases_section";
  info: {
    singularName: "for-builders-page-use-cases-section";
    pluralName: "for-builders-page-use-cases-sections";
    displayName: "ForBuildersPageUseCasesSection";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sectionHeader: Schema.Attribute.String;
    useCases: Schema.Attribute.Relation<"oneToMany", "api::use-case.use-case">;
    useCaseTitle: Schema.Attribute.String;
    useCaseDescription: Schema.Attribute.String;
    useCaseBanner: Schema.Attribute.Media & Schema.Attribute.Required;
    keyChallenges: Schema.Attribute.Component<
      "for-builders-page.key-challenge",
      false
    >;
    solutionSections: Schema.Attribute.Component<
      "for-builders-page.solution-section",
      false
    >;
    arrowLink: Schema.Attribute.Component<"content.button-link", false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::for-builders-page-use-cases-section.for-builders-page-use-cases-section"
    >;
  };
}

export interface ApiHomePageHeroHomePageHero extends Struct.SingleTypeSchema {
  collectionName: "home_page_heroes";
  info: {
    singularName: "home-page-hero";
    pluralName: "home-page-heroes";
    displayName: "HomePageHero";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<"content.button-link", false>;
    secondaryButton: Schema.Attribute.Component<"content.button-link", false>;
    arrowLink: Schema.Attribute.Component<"content.button-link", false>;
    background: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::home-page-hero.home-page-hero"
    >;
  };
}

export interface ApiKlerosLogoKlerosLogo extends Struct.SingleTypeSchema {
  collectionName: "kleros_logo";
  info: {
    singularName: "kleros-logo";
    pluralName: "kleros-logos";
    displayName: "KlerosLogo";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo_svg: Schema.Attribute.Media<"images" | "files">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::kleros-logo.kleros-logo"
    >;
  };
}

export interface ApiLinkLink extends Struct.CollectionTypeSchema {
  collectionName: "links";
  info: {
    singularName: "link";
    pluralName: "links";
    displayName: "Link";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::link.link">;
  };
}

export interface ApiNavbarAppsSectionNavbarAppsSection
  extends Struct.SingleTypeSchema {
  collectionName: "navbar_apps_sections";
  info: {
    singularName: "navbar-apps-section";
    pluralName: "navbar-apps-sections";
    displayName: "NavbarAppsSection";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    solutions: Schema.Attribute.Relation<"oneToMany", "api::solution.solution">;
    arrowLink: Schema.Attribute.Component<"content.button-link", false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::navbar-apps-section.navbar-apps-section"
    >;
  };
}

export interface ApiNavbarButtonNavbarButton extends Struct.SingleTypeSchema {
  collectionName: "navbar_button";
  info: {
    singularName: "navbar-button";
    pluralName: "navbar-buttons";
    displayName: "NavbarButton";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    link: Schema.Attribute.Relation<"oneToOne", "api::link.link">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::navbar-button.navbar-button"
    >;
  };
}

export interface ApiNavbarNavlinksSectionNavbarNavlinksSection
  extends Struct.SingleTypeSchema {
  collectionName: "navbar_navlinks_sections";
  info: {
    singularName: "navbar-navlinks-section";
    pluralName: "navbar-navlinks-sections";
    displayName: "NavbarNavlinksSection";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Navlink: Schema.Attribute.Component<"content.navlink", true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::navbar-navlinks-section.navbar-navlinks-section"
    >;
  };
}

export interface ApiNavbarResourcesSectionNavbarResourcesSection
  extends Struct.SingleTypeSchema {
  collectionName: "navbar_resources_sections";
  info: {
    singularName: "navbar-resources-section";
    pluralName: "navbar-resources-sections";
    displayName: "NavbarResourcesSection";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Section: Schema.Attribute.Component<"content.section", true>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::navbar-resources-section.navbar-resources-section"
    >;
  };
}

export interface ApiPartnerPartner extends Struct.CollectionTypeSchema {
  collectionName: "partners";
  info: {
    singularName: "partner";
    pluralName: "partners";
    displayName: "Partner";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    icon_svg: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::partner.partner"
    >;
  };
}

export interface ApiPnkTokenPageBuySectionPnkTokenPageBuySection
  extends Struct.SingleTypeSchema {
  collectionName: "pnk_token_page_buy_sections";
  info: {
    singularName: "pnk-token-page-buy-section";
    pluralName: "pnk-token-page-buy-sections";
    displayName: "PNKTokenPageBuySection";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Schema.Attribute.String;
    exchanges: Schema.Attribute.Relation<"oneToMany", "api::exchange.exchange">;
    featuredExchanges: Schema.Attribute.Relation<
      "oneToMany",
      "api::exchange.exchange"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::pnk-token-page-buy-section.pnk-token-page-buy-section"
    >;
  };
}

export interface ApiPnkTokenPageHeroPnkTokenPageHero
  extends Struct.SingleTypeSchema {
  collectionName: "pnk_token_page_heroes";
  info: {
    singularName: "pnk-token-page-hero";
    pluralName: "pnk-token-page-heroes";
    displayName: "PNKTokenPageHero";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    buyButton: Schema.Attribute.Component<"content.button-link", false>;
    background: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::pnk-token-page-hero.pnk-token-page-hero"
    >;
  };
}

export interface ApiPnkTokenPageNeedSectionPnkTokenPageNeedSection
  extends Struct.SingleTypeSchema {
  collectionName: "pnk_token_page_need_sections";
  info: {
    singularName: "pnk-token-page-need-section";
    pluralName: "pnk-token-page-need-sections";
    displayName: "PNKTokenPageNeedSection";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    card: Schema.Attribute.Component<"content.cta-card", true>;
    arrowLink: Schema.Attribute.Component<"content.button-link", false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::pnk-token-page-need-section.pnk-token-page-need-section"
    >;
  };
}

export interface ApiPnkTokenPageTokenomicsSectionPnkTokenPageTokenomicsSection
  extends Struct.SingleTypeSchema {
  collectionName: "pnk_token_page_tokenomics_sections";
  info: {
    singularName: "pnk-token-page-tokenomics-section";
    pluralName: "pnk-token-page-tokenomics-sections";
    displayName: "PNKTokenPageTokenomicsSection";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    arrowLink: Schema.Attribute.Component<"content.button-link", false>;
    tokenStatDisplay: Schema.Attribute.Component<
      "pnk-token-page.token-stat-display",
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::pnk-token-page-tokenomics-section.pnk-token-page-tokenomics-section"
    >;
  };
}

export interface ApiRiskReportRiskReport extends Struct.CollectionTypeSchema {
  collectionName: "risk_reports";
  info: {
    singularName: "risk-report";
    pluralName: "risk-reports";
    displayName: "Risk Report";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    url: Schema.Attribute.String;
    month: Schema.Attribute.Enumeration<
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
    >;
    year: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::risk-report.risk-report"
    >;
  };
}

export interface ApiRAndDPageHeroRAndDPageHero extends Struct.SingleTypeSchema {
  collectionName: "r_and_d_page_heroes";
  info: {
    singularName: "r-and-d-page-hero";
    pluralName: "r-and-d-page-heroes";
    displayName: "R&DPageHero";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    header: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<"content.button-link", true>;
    arrowLink: Schema.Attribute.Component<"content.button-link", true>;
    background: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::r-and-d-page-hero.r-and-d-page-hero"
    >;
  };
}

export interface ApiRAndDPageResearchTabSectionRAndDPageResearchTabSection
  extends Struct.SingleTypeSchema {
  collectionName: "r_and_d_page_research_tab_sections";
  info: {
    singularName: "r-and-d-page-research-tab-section";
    pluralName: "r-and-d-page-research-tab-sections";
    displayName: "R&DPageResearchTabSection";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    researchHeader: Schema.Attribute.String;
    researchSecondaryHeader: Schema.Attribute.String;
    researchParagraph: Schema.Attribute.String;
    researchCardLabel: Schema.Attribute.String;
    publicationsHeader: Schema.Attribute.String;
    publicationsTeamHeader: Schema.Attribute.String;
    publications3rdPartyHeader: Schema.Attribute.String;
    klerosBook: Schema.Attribute.Component<"r-and-d-page.kleros-book", false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::r-and-d-page-research-tab-section.r-and-d-page-research-tab-section"
    >;
  };
}

export interface ApiResearchResearch extends Struct.CollectionTypeSchema {
  collectionName: "researches";
  info: {
    singularName: "research";
    pluralName: "researches";
    displayName: "research";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    field: Schema.Attribute.String;
    url: Schema.Attribute.String;
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::research.research"
    >;
  };
}

export interface ApiSocialSocial extends Struct.CollectionTypeSchema {
  collectionName: "socials";
  info: {
    singularName: "social";
    pluralName: "socials";
    displayName: "Social";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    icon_white: Schema.Attribute.Media<
      "images" | "files" | "videos" | "audios"
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios"> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::social.social">;
  };
}

export interface ApiSolutionSolution extends Struct.CollectionTypeSchema {
  collectionName: "solutions";
  info: {
    singularName: "solution";
    pluralName: "solutions";
    displayName: "Solution";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
    solution_name: Schema.Attribute.String & Schema.Attribute.Required;
    header_title: Schema.Attribute.String;
    header_description: Schema.Attribute.Text;
    logo_svg: Schema.Attribute.Media & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::solution.solution"
    >;
  };
}

export interface ApiTeamPublicationTeamPublication
  extends Struct.CollectionTypeSchema {
  collectionName: "team_publications";
  info: {
    singularName: "team-publication";
    pluralName: "team-publications";
    displayName: "TeamPublication";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    topic: Schema.Attribute.String;
    authors: Schema.Attribute.String;
    paperLink: Schema.Attribute.Component<"content.button-link", false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::team-publication.team-publication"
    >;
  };
}

export interface ApiThirdPartyPublicationThirdPartyPublication
  extends Struct.CollectionTypeSchema {
  collectionName: "third_party_publications";
  info: {
    singularName: "third-party-publication";
    pluralName: "third-party-publications";
    displayName: "ThirdPartyPublication";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Topic: Schema.Attribute.String;
    paperLink: Schema.Attribute.Component<"content.button-link", false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::third-party-publication.third-party-publication"
    >;
  };
}

export interface ApiTokenExplorerTokenExplorer
  extends Struct.CollectionTypeSchema {
  collectionName: "token_explorers";
  info: {
    singularName: "token-explorer";
    pluralName: "token-explorers";
    displayName: "TokenExplorer";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::token-explorer.token-explorer"
    >;
  };
}

export interface ApiTokenStatTokenStat extends Struct.CollectionTypeSchema {
  collectionName: "token_stats";
  info: {
    singularName: "token-stat";
    pluralName: "token-stats";
    displayName: "TokenStat";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    key: Schema.Attribute.String;
    primaryValue: Schema.Attribute.String;
    secondaryValue: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::token-stat.token-stat"
    >;
  };
}

export interface ApiTreasuryReportTreasuryReport
  extends Struct.CollectionTypeSchema {
  collectionName: "treasury_reports";
  info: {
    singularName: "treasury-report";
    pluralName: "treasury-reports";
    displayName: "Treasury Report";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    url: Schema.Attribute.String;
    month: Schema.Attribute.Enumeration<
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
    >;
    year: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::treasury-report.treasury-report"
    >;
  };
}

export interface ApiUseCaseUseCase extends Struct.CollectionTypeSchema {
  collectionName: "use-case";
  info: {
    singularName: "use-case";
    pluralName: "use-cases";
    displayName: "UseCase";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::use-case.use-case"
    >;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: "admin_permissions";
  info: {
    name: "Permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
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
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<"manyToOne", "admin::role">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::permission">;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: "admin_users";
  info: {
    name: "User";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<"manyToMany", "admin::role"> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::user">;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: "admin_roles";
  info: {
    name: "Role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<"manyToMany", "admin::user">;
    permissions: Schema.Attribute.Relation<"oneToMany", "admin::permission">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::role">;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: "strapi_api_tokens";
  info: {
    name: "Api Token";
    singularName: "api-token";
    pluralName: "api-tokens";
    displayName: "Api Token";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<"">;
    type: Schema.Attribute.Enumeration<["read-only", "full-access", "custom"]> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"read-only">;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      "oneToMany",
      "admin::api-token-permission"
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::api-token">;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: "strapi_api_token_permissions";
  info: {
    name: "API Token Permission";
    description: "";
    singularName: "api-token-permission";
    pluralName: "api-token-permissions";
    displayName: "API Token Permission";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<"manyToOne", "admin::api-token">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "admin::api-token-permission"
    >;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: "strapi_transfer_tokens";
  info: {
    name: "Transfer Token";
    singularName: "transfer-token";
    pluralName: "transfer-tokens";
    displayName: "Transfer Token";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<"">;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      "oneToMany",
      "admin::transfer-token-permission"
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "admin::transfer-token"
    >;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: "strapi_transfer_token_permissions";
  info: {
    name: "Transfer Token Permission";
    description: "";
    singularName: "transfer-token-permission";
    pluralName: "transfer-token-permissions";
    displayName: "Transfer Token Permission";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<"manyToOne", "admin::transfer-token">;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "admin::transfer-token-permission"
    >;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ContentTypeSchemas {
      "plugin::upload.file": PluginUploadFile;
      "plugin::upload.folder": PluginUploadFolder;
      "plugin::i18n.locale": PluginI18NLocale;
      "plugin::content-releases.release": PluginContentReleasesRelease;
      "plugin::content-releases.release-action": PluginContentReleasesReleaseAction;
      "plugin::review-workflows.workflow": PluginReviewWorkflowsWorkflow;
      "plugin::review-workflows.workflow-stage": PluginReviewWorkflowsWorkflowStage;
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
      "plugin::users-permissions.role": PluginUsersPermissionsRole;
      "plugin::users-permissions.user": PluginUsersPermissionsUser;
      "api::annual-report.annual-report": ApiAnnualReportAnnualReport;
      "api::community.community": ApiCommunityCommunity;
      "api::community-page-hero.community-page-hero": ApiCommunityPageHeroCommunityPageHero;
      "api::cooperative-page-hero.cooperative-page-hero": ApiCooperativePageHeroCooperativePageHero;
      "api::cooperative-page-member-section.cooperative-page-member-section": ApiCooperativePageMemberSectionCooperativePageMemberSection;
      "api::cooperative-page-report-section.cooperative-page-report-section": ApiCooperativePageReportSectionCooperativePageReportSection;
      "api::court.court": ApiCourtCourt;
      "api::earn-page-become-a-curator-tab-content.earn-page-become-a-curator-tab-content": ApiEarnPageBecomeACuratorTabContentEarnPageBecomeACuratorTabContent;
      "api::earn-page-become-a-juror-tab-content.earn-page-become-a-juror-tab-content": ApiEarnPageBecomeAJurorTabContentEarnPageBecomeAJurorTabContent;
      "api::earn-page-hero.earn-page-hero": ApiEarnPageHeroEarnPageHero;
      "api::exchange.exchange": ApiExchangeExchange;
      "api::footer-links-section.footer-links-section": ApiFooterLinksSectionFooterLinksSection;
      "api::footer-socials-section.footer-socials-section": ApiFooterSocialsSectionFooterSocialsSection;
      "api::footer-subscribe-cta.footer-subscribe-cta": ApiFooterSubscribeCtaFooterSubscribeCta;
      "api::for-builders-page-hero.for-builders-page-hero": ApiForBuildersPageHeroForBuildersPageHero;
      "api::for-builders-page-integrate-section.for-builders-page-integrate-section": ApiForBuildersPageIntegrateSectionForBuildersPageIntegrateSection;
      "api::for-builders-page-use-cases-section.for-builders-page-use-cases-section": ApiForBuildersPageUseCasesSectionForBuildersPageUseCasesSection;
      "api::home-page-hero.home-page-hero": ApiHomePageHeroHomePageHero;
      "api::kleros-logo.kleros-logo": ApiKlerosLogoKlerosLogo;
      "api::link.link": ApiLinkLink;
      "api::navbar-apps-section.navbar-apps-section": ApiNavbarAppsSectionNavbarAppsSection;
      "api::navbar-button.navbar-button": ApiNavbarButtonNavbarButton;
      "api::navbar-navlinks-section.navbar-navlinks-section": ApiNavbarNavlinksSectionNavbarNavlinksSection;
      "api::navbar-resources-section.navbar-resources-section": ApiNavbarResourcesSectionNavbarResourcesSection;
      "api::partner.partner": ApiPartnerPartner;
      "api::pnk-token-page-buy-section.pnk-token-page-buy-section": ApiPnkTokenPageBuySectionPnkTokenPageBuySection;
      "api::pnk-token-page-hero.pnk-token-page-hero": ApiPnkTokenPageHeroPnkTokenPageHero;
      "api::pnk-token-page-need-section.pnk-token-page-need-section": ApiPnkTokenPageNeedSectionPnkTokenPageNeedSection;
      "api::pnk-token-page-tokenomics-section.pnk-token-page-tokenomics-section": ApiPnkTokenPageTokenomicsSectionPnkTokenPageTokenomicsSection;
      "api::risk-report.risk-report": ApiRiskReportRiskReport;
      "api::r-and-d-page-hero.r-and-d-page-hero": ApiRAndDPageHeroRAndDPageHero;
      "api::r-and-d-page-research-tab-section.r-and-d-page-research-tab-section": ApiRAndDPageResearchTabSectionRAndDPageResearchTabSection;
      "api::research.research": ApiResearchResearch;
      "api::social.social": ApiSocialSocial;
      "api::solution.solution": ApiSolutionSolution;
      "api::team-publication.team-publication": ApiTeamPublicationTeamPublication;
      "api::third-party-publication.third-party-publication": ApiThirdPartyPublicationThirdPartyPublication;
      "api::token-explorer.token-explorer": ApiTokenExplorerTokenExplorer;
      "api::token-stat.token-stat": ApiTokenStatTokenStat;
      "api::treasury-report.treasury-report": ApiTreasuryReportTreasuryReport;
      "api::use-case.use-case": ApiUseCaseUseCase;
      "admin::permission": AdminPermission;
      "admin::user": AdminUser;
      "admin::role": AdminRole;
      "admin::api-token": AdminApiToken;
      "admin::api-token-permission": AdminApiTokenPermission;
      "admin::transfer-token": AdminTransferToken;
      "admin::transfer-token-permission": AdminTransferTokenPermission;
    }
  }
}
