import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient, RequestDocument } from "graphql-request";

import { getStrapiURL } from "@/utils/getStrapiURL";

const endpoint = getStrapiURL("/graphql");

const token = process.env.STRAPI_TOKEN;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: { Authorization: `Bearer ${token}` },
});

export async function request<T>(
  document: RequestDocument | TypedDocumentNode<T, object>,
  variables?: object,
) {
  return await graphQLClient.request<T>(document, variables);
}
