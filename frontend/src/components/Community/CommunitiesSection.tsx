import clsx from "clsx";

import { Community } from "@/queries/community/hero";

import CommunityCard from "./CommunityCard";

interface ICommunitiesSection {
  communities: Community[];
}

const CommunitiesSection: React.FC<ICommunitiesSection> = ({ communities }) => {
  const rowOneCommunities = communities.slice(0, 2);
  const restCommunities = communities.slice(2);
  return (
    <div className="bg-background-2 w-full px-6 lg:px-32">
      <div
        className={clsx(
          "-translate-y-40 lg:-translate-y-44",
          "grid grid-cols-1 lg:grid-cols-3 gap-6"
        )}
      >
        {rowOneCommunities.map((community) => (
          <CommunityCard key={community.title} {...community} />
        ))}
      </div>
      <div
        className={clsx(
          "-translate-y-40 lg:-translate-y-44",
          "grid grid-cols-1 lg:grid-cols-3 gap-6",
          "mt-6"
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
