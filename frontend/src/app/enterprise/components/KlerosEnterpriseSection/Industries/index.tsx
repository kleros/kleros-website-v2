import clsx from "clsx";
import Image from "next/image";

import { request } from "@/utils/graphQLClient";

import { industriesQuery, IIndustriesQuery } from "./queries";

const Industries: React.FC = async () => {
  const industriesData = await request<IIndustriesQuery>(industriesQuery);

  return (
    <div className="flex flex-wrap gap-6 lg:mx-32">
      {industriesData.enterprise.industries.map(({ title, icon }) => (
        <div
          className={clsx(
            "flex flex-1 flex-col items-center rounded-2xl border",
            "border-stroke p-6",
          )}
          key={title}
        >
          <Image
            className="mx-10"
            src={icon.url}
            alt={title + " card image"}
            width="72"
            height="72"
          />
          <p className="mx-auto w-max text-lg text-primary-text lg:text-xl">
            {title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Industries;
