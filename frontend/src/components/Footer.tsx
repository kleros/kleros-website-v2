import React from "react";

import Image from "next/image";

import { footerQueryType } from "@/queries/footer";

interface IFooter {
  footerData: footerQueryType;
}

const Footer: React.FC<IFooter> = ({ footerData }) => {
  const socials = footerData.footerSocialsSection.socials;
  const sections = footerData.footerLinksSection.Section;
  return (
    <div className={
      "py-4 bg-gradient-to-b from-light-blue to-30% to-kleros-purple"
    }>
      <div className="flex flex-col gap-12 my-12 px-4">
        {sections.map(({ title, links }) => (
          <div key={title} className="flex flex-col gap-2">
            <h1 className="text-background-2">
              {title}
            </h1>
            {links.map(({ name }) => (
              <p key={name}>{name}</p>
            ))}
          </div>
        ))}
      </div>
      <hr className="h-0.5 border-t-0 bg-secondary-purple mb-4 mx-2"/>
      <div className="flex gap-4 justify-center align-middle">
        {socials.map(({ name, icon_white: icon }) => (
          <div key={name}>
            <Image src={icon.url} alt={name} width="24" height="24" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
