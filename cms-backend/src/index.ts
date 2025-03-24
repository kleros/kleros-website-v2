import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Get the role ID of the Editor
    const editorRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { name: 'Editor' },
    });

    if (!editorRole) {
      strapi.log.error('Editor role not found');
      return;
    }

    const editorRoleId = editorRole.id;

    // Define the default permissions for new content types (optional - customize as needed)
    const defaultPermissions = ['create', 'read', 'update', 'delete'];

    // Get the editor role permissions
    const rolePermissions = await strapi.query('plugin::users-permissions.permission').findMany({
      where: { role: editorRoleId },
    });

    const contentTypesWithPermission = rolePermissions.map((permission) => permission.controller);

    const contentTypes = Object.keys(strapi.contentTypes);

    for (const contentType of contentTypes) {
      if (!contentTypesWithPermission.includes(contentType)) {
        const permissionsToAdd = defaultPermissions.map((action) => ({
          action: `plugin::content-manager.explorer.${contentType}.${action}`,
          role: editorRoleId,
        }));

        await strapi.query('plugin::users-permissions.permission').createMany({
          data: permissionsToAdd,
        });

        strapi.log.info(`Editor permissions granted for the content type: ${contentType}`);
      }
    }
  },
};
