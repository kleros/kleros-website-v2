export const getStrapiURL = (path = ""): string => (
  `${process.env.STRAPI_URL || 'http://localhost:1337'}${path}`
);
