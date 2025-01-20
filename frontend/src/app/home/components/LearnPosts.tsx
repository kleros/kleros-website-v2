import React from "react";

import Link from "next/link";

import CtaCard from "@/components/CtaCard";
import { request } from "@/utils/graphQLClient";

import {
  homeLearnPostsQuery,
  HomeLearnPostsQueryType,
} from "../queries/learn-posts";

const LearnPosts: React.FC = async () => {
  const { title, subtitle, cards, introduction } =
    await request<HomeLearnPostsQueryType>(homeLearnPostsQuery).then(
      (res) => res.homeLearnPostsSection,
    );

  return (
    <div className="bg-background-1 px-6 py-12">
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-semibold lg:text-2xl">{title}</h3>
        <p className="text-base lg:text-lg">{subtitle}</p>
        <div className="mx-auto flex flex-wrap gap-4">
          {cards.map(({ icon, title, subtitle, link }) => (
            <CtaCard
              className="flex-grow xl:max-h-[378px] xl:max-w-[364px]"
              key={title}
              {...{ icon, title, description: subtitle, arrowLink: link }}
            />
          ))}
        </div>
        <div>
          <p className="text-center text-base lg:text-lg">
            {introduction.heading_text}
            <br />
            <Link
              className="text-primary-blue"
              href={introduction.link.link.url}
            >
              {introduction.link.text}
            </Link>
            <br />
            {introduction.closing_text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnPosts;
