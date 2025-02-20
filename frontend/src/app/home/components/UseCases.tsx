import React from "react";

import ExternalLink from "@/components/ExternalLink";
import UseCasesCards from "@/components/UseCasesCards";
import { request } from "@/utils/graphQLClient";

import { useCasesQuery, IUseCasesQuery } from "../queries/use-cases";

const UseCases: React.FC = async () => {
  const { title, arrowLink } = await request<IUseCasesQuery>(
    useCasesQuery,
  ).then((res) => res.homeUseCasesSection);

  return (
    <div
      className={
        "space-y-8 bg-background-2 px-6 pb-12 lg:space-y-12 lg:px-32 lg:pb-24"
      }
    >
      <h3 className="text-xl font-medium text-primary-text lg:text-3xl">
        {" "}
        {title}{" "}
      </h3>
      <UseCasesCards />
      <ExternalLink
        text={arrowLink.text}
        url={arrowLink.link.url}
        className="mx-0 lg:mx-auto"
      />
    </div>
  );
};

export default UseCases;
