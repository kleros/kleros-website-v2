import React from "react";

import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/Button";
import { FooterQueryType, footerQuery } from "@/queries/footer";
import { request } from "@/utils/graphQLClient";

import CustomLink from "./CustomLink";

const hoverScaleUp = clsx("hover:scale-105 transform transition duration-75");

const Footer: React.FC = async () => {
  const { socials, sections, cta } = await request<FooterQueryType>(
    footerQuery,
  ).then((result) => ({
    socials: result.footerSocialsSection.socials,
    sections: result.footerLinksSection.Section,
    cta: result.footerSubscribeCta,
  }));
  return (
    <div>
      <div className={"bg-background-dark py-16 md:px-16 xl:px-32"}>
        <div
          className={clsx(
            "grid grid-flow-col grid-cols-2 grid-rows-2 gap-12 px-6",
            "lg:grid-cols-4 lg:grid-rows-1",
          )}
        >
          {sections.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-4">
              <h2 className="text-primary-purple">{title}</h2>
              {links.map(({ name, url }) => (
                <CustomLink
                  className={clsx(hoverScaleUp, "w-max")}
                  key={name}
                  href={url}
                >
                  {name}
                </CustomLink>
              ))}
            </div>
          ))}
        </div>
        <hr className="mx-6 mb-6 mt-16 h-0.5 border-t-0 bg-primary-purple" />
        <div className="flex items-center justify-center gap-8">
          {socials.map(({ name, icon_white: icon, url }) => (
            <CustomLink className={hoverScaleUp} key={name} href={url}>
              <Image src={icon.url} alt={name} width="24" height="24" />
            </CustomLink>
          ))}
        </div>
      </div>
      <div
        className={clsx(
          ["flex flex-col items-center justify-center"],
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
          <span className="text-background-2">{cta.cta_button}</span>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
