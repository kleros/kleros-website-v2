import { Graffle } from "@/graffle/__.js";
import { getStrapiURL } from "@/utils/getStrapiURL";

const endpoint = getStrapiURL("/graphql");

const token = process.env.STRAPI_TOKEN;

export const graffle = Graffle.create({
  schema: endpoint,
  transport: {
    headers: { Authorization: `Bearer ${token}` },
  },
});

