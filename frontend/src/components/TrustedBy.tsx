import React from "react";

import Image from "next/image";

import { PartnersQueryType } from "@/queries/partners";

interface ITrustedBy {
  partnersData: PartnersQueryType;
}

const TrustedBy: React.FC<ITrustedBy> = ({ partnersData }) => {
  const partners = partnersData.partners;
  return (
    <div className="bg-background-2 px-6 py-4">
      <p className="mx-auto mb-2 w-max text-2xl text-secondary-text">
        Trusted By
      </p>
      <div className="flex gap-2">
        {partners.map(({ name, icon_svg }) => (
          <div
            key={name}
            className={
              "flex h-16 w-16 items-center justify-center rounded-full bg-white"
            }
          >
            <Image src={icon_svg.url} alt={name} width="42" height="42" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrustedBy;
