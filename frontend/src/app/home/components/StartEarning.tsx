import React from "react";

import CtaBox from "@/components/CtaBox";
import CtaCard from "@/components/CtaCard";
import { request } from "@/utils/graphQLClient";

import {
  startEarningQuery,
  IStartEarningQuery,
} from "../queries/start-earning";

const LearnPosts: React.FC = async () => {
  const { title, subtitle, cards, cta } = await request<IStartEarningQuery>(
    startEarningQuery,
  ).then((res) => res.homeStartEarningSection);

  return (
    <div className="bg-background-2 px-6 py-12 lg:px-32 lg:py-24">
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-medium text-primary-text lg:text-3xl">
          {title}
        </h3>
        <p className="text-base text-primary-text lg:text-lg">{subtitle}</p>
        <div className="mx-auto mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map(({ icon, title, subtitle }) => (
            <CtaCard key={title} {...{ icon, title, description: subtitle }} />
          ))}
        </div>
      </div>
      <CtaBox
        background={cta.background}
        header={cta.title}
        button={{ text: cta.buttonLink[0].text, link: cta.buttonLink[0].link }}
      />
    </div>
  );
};

export default LearnPosts;
