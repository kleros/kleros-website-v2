import React from "react";

// import Link from "next/link";

// import CtaBox from "@/components/CtaBox";
import CtaCard from "@/components/CtaCard";
import { request } from "@/utils/graphQLClient";

import {
  startEarningQuery,
  IStartEarningQuery,
} from "../queries/start-earning";

const LearnPosts: React.FC = async () => {
  const { title, subtitle, cards } = await request<IStartEarningQuery>(
    startEarningQuery,
  ).then((res) => res.homeStartEarningSection);

  return (
    <div className="bg-background-2 px-6 py-12">
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-semibold lg:text-2xl">{title}</h3>
        <p className="text-base lg:text-lg">{subtitle}</p>
        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map(({ icon, title, subtitle }) => (
            <CtaCard
              className=""
              key={title}
              {...{ icon, title, description: subtitle }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnPosts;
