import React from "react";

import Image from "next/image";

import ExternalLink from "@/components/ExternalLink";
import { request } from "@/utils/graphQLClient";

import { getInTouchQuery, IGetInTouchQuery } from "../queries/get-in-touch";

const GetInTouch: React.FC = async () => {
  const { title, subtitle, icon, link } = await request<IGetInTouchQuery>(
    getInTouchQuery,
  ).then((res) => res.homeGetInTouchSection);

  return (
    <div
      className={
        "bg-background-1 px-6 py-12 md:grid md:grid-cols-2 lg:px-32 lg:py-24"
      }
    >
      <div>
        <h3 className="mb-8 text-xl font-medium lg:mb-12 lg:text-3xl">
          {title}
        </h3>
        <p className="mb-6 lg:mb-8 lg:text-lg">{subtitle}</p>
        <ExternalLink className="mb-16" text={link.text} url={link.link.url} />
      </div>
      <Image
        className="mx-auto mb-20 lg:mx-0 lg:ml-auto lg:justify-self-end"
        alt="Kleros Logo"
        src={icon.url}
        width="296"
        height="267"
      />
    </div>
  );
};

export default GetInTouch;
