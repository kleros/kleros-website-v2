import React from "react";

import Image from "next/image";

import { socialsQueryType } from "@/queries/socials";

interface IFooter {
  socials: socialsQueryType["socials"];
}

const Footer: React.FC<IFooter> = ({ socials }) => {
  return (
    <div className={
      "py-4 bg-gradient-to-b from-light-blue to-30% to-kleros-purple"
    }>
      <hr className="h-0.5 border-t-0 bg-secondary-purple mb-4 mx-2"/>
      <div className="flex gap-4 justify-center align-middle">
        {socials.map(({ name, icon }) => (
          <div key={name}>
            <Image src={icon.url} alt={name} width="24" height="24" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
