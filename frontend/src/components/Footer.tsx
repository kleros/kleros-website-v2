import React from "react";

import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/Button";
import { footerQueryType } from "@/queries/footer";

interface IFooter {
  footerData: footerQueryType;
}

const Footer: React.FC<IFooter> = ({ footerData }) => {
  const socials = footerData.footerSocialsSection.socials;
  const sections = footerData.footerLinksSection.Section;
  const cta = footerData.footerSubscribeCta;
  return (
    <div>
      <div className={
        "bg-gradient-to-b from-light-blue to-[27.74%] to-kleros-purple py-16"
      }>
        <div className="flex flex-col gap-12 px-6">
          {sections.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-4">
              <h1 className="text-background-2">
                {title}
              </h1>
              {links.map(({ name }) => (
                <p key={name}>{name}</p>
              ))}
            </div>
          ))}
        </div>
        <hr className="h-0.5 border-t-0 bg-secondary-purple mt-16 mb-6 mx-6"/>
        <div className="flex gap-8 justify-center items-center">
          {socials.map(({ name, icon_white: icon }) => (
            <div key={name}>
              <Image src={icon.url} alt={name} width="24" height="24" />
            </div>
          ))}
        </div>
      </div>
      <div
        className={clsx(
          ["flex flex-col justify-center items-center"],
          ["bg-background-2 py-16"],
        )}
      >
        <Image
          src={cta.logo.url}
          alt="kleros logo"
          width="185"
          height="48"
          className="mb-8"
        />
        <p className="mb-8">{cta.notice}</p>
        <p className="mb-6">{cta.cta_text}</p>
        <Button>
          <p className="text-background-2">{cta.cta_button}</p>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
