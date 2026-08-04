// import type { Core } from '@strapi/strapi';

async function migrateArticleTitleField(strapi: any) {
  const db = strapi.db.connection;

  const hasTitleColumn = await db.schema.hasColumn('articles', 'title');
  const hasTextColumn = await db.schema.hasColumn('articles', 'Text');

  if (!hasTitleColumn || !hasTextColumn) {
    return;
  }

  await db.raw(`
    UPDATE articles
    SET title = Text
    WHERE (title IS NULL OR title = '')
      AND (Text IS NOT NULL AND Text != '')
  `);
}

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
  async bootstrap({ strapi }: { strapi: any }) {
    await migrateArticleTitleField(strapi);
  },
};
