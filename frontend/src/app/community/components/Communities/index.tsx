import clsx from "clsx";

import { request } from "@/utils/graphQLClient";

import CommunityCard from "./CommunityCard";
import { communitiesQuery, ICommunitiesQuery } from "./queries";

const CommunitiesSection: React.FC = async () => {
  const { communities } = await request<ICommunitiesQuery>(communitiesQuery);

  const rowOneCommunities = communities.slice(0, 2);
  const restCommunities = communities.slice(2);
  return (
    <div className="w-full bg-background-2 px-6 lg:px-32">
      <div
        className={clsx(
          "-translate-y-40 lg:-translate-y-44",
          "grid grid-cols-1 gap-6 lg:grid-cols-3",
        )}
      >
        {rowOneCommunities.map((community) => (
          <CommunityCard key={community.title} {...community} />
        ))}
      </div>
      <div
        className={clsx(
          "-translate-y-40 lg:-translate-y-44",
          "grid grid-cols-1 gap-6 lg:grid-cols-3",
          "mt-6",
        )}
      >
        {restCommunities.map((community) => (
          <CommunityCard key={community.title} {...community} />
        ))}
      </div>
    </div>
  );
};

export default CommunitiesSection;
