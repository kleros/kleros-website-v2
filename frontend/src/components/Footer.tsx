import React from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import { FooterQueryType, footerQuery } from "@/queries/footer";
import { request } from "@/utils/graphQLClient";

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
      <div className={"bg-primary-purple py-16"}>
        <div className="flex flex-col gap-12 px-6">
          {sections.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-4">
              <h2 className="text-background-2">{title}</h2>
              {links.map(({ name, url }) => (
                <Link
                  className={clsx(hoverScaleUp, "w-max")}
                  key={name}
                  href={url}
                  target={/^https?:\/\//.test(url) ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <hr className="mx-6 mb-6 mt-16 h-0.5 border-t-0 bg-secondary-purple" />
        <div className="flex items-center justify-center gap-8">
          {socials.map(({ name, icon_white: icon, url }) => (
            <Link
              className={hoverScaleUp}
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={icon.url} alt={name} width="24" height="24" />
            </Link>
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
