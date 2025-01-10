import { GraphQLClient } from "graphql-request";

import { getStrapiURL } from "@/utils/getStrapiURL";

const endpoint = getStrapiURL("/graphql");

const token = process.env.STRAPI_TOKEN;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: { Authorization: `Bearer ${token}` },
});
