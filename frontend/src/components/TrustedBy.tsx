import React from "react";

import Image from "next/image";

import { partnersQueryType } from "@/queries/partners";

interface ITrustedBy {
  partnersData: partnersQueryType
}

const TrustedBy: React.FC<ITrustedBy> = ({ partnersData }) => {
  const partners = partnersData.partners;
  return (
    <div className="bg-background-2 py-4 px-6">
      <p className="text-2xl mx-auto w-max mb-2 text-secondary-text">
        Trusted By
      </p>
      <div className="flex gap-2">
        {partners.map(({ name, icon_svg }) => 
          <div
            key={name}
            className={
              "bg-white h-16 w-16 rounded-full flex justify-center align-middle"
            }
          >
            <Image
              src={icon_svg.url}
              alt={name}
              width="42"
              height="42"
            />
          </div>
        )}
      </div>
    </div>
  )
}
export default TrustedBy;
