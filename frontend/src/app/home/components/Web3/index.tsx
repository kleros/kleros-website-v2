import React from "react";

import clsx from "clsx";

import CtaCard from "@/components/CtaCard";
import { request } from "@/utils/graphQLClient";

import { web3Query, IWeb3Query } from "./queries";

const Web3: React.FC = async () => {
  const { title, subtitle, cards } = await request<IWeb3Query>(web3Query).then(
    ({ homePageWeb3 }) => homePageWeb3,
  );

  return (
    <div className="bg-background-1 px-6 pb-6 pt-24 lg:px-32 lg:pb-12">
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-medium text-primary-text lg:text-3xl">
          {title}
        </h3>
        <p className="text-base text-primary-text lg:text-lg">{subtitle}</p>
        <div
          className={clsx(
            "mx-auto mb-12 mt-4 flex flex-wrap gap-4",
            "xl:mt-16 xl:grid xl:grid-cols-3",
          )}
        >
          {cards.map(({ icon, title, subtitle }) => (
            <CtaCard
              className="flex-grow"
              key={title}
              {...{ icon, title, description: subtitle }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Web3;
