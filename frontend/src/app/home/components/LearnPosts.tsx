import React from "react";

import CtaCard from "@/components/CtaCard";
import CustomLink from "@/components/CustomLink";
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
    <div className="bg-background-1 px-6 py-12 lg:px-32 lg:py-24">
      <div className="flex flex-col gap-8">
        <h3 className="text-xl font-medium lg:text-3xl">{title}</h3>
        <p className="text-base lg:text-lg">{subtitle}</p>
        <div
          className={
            "mx-auto mb-12 mt-16 flex flex-wrap gap-4 xl:grid xl:grid-cols-3"
          }
        >
          {cards.map(({ icon, title, subtitle, link }) => (
            <CtaCard
              className="flex-grow"
              key={title}
              {...{ icon, title, description: subtitle, arrowLink: link }}
            />
          ))}
        </div>
        <div>
          <p className="text-center text-base lg:text-lg">
            <span className="text-secondary-text">
              {introduction.heading_text}
            </span>
            <br />
            <CustomLink
              className="text-primary-blue"
              href={introduction.link.link.url}
            >
              {introduction.link.text}
            </CustomLink>
            <br />
            {introduction.closing_text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnPosts;
