import React from "react";

import clsx from "clsx";
import Image from "next/image";

import Button from "@/components/Button";

import CustomLink from "./CustomLink";

interface ICtaBox {
  background: {
    url: string;
  };
  header: string;
  button: {
    text: string;
    link: {
      url: string;
    };
  };
}

const CtaBox: React.FC<ICtaBox> = ({ background, header, button }) => {
  return (
    <div className="relative">
      <Image
        src={background.url}
        alt="Background Image"
        fill
        className="rounded-2xl object-cover"
      />
      <div
        className={clsx(
          "flex-column relative z-10 mt-16 flex flex-col items-center",
          "justify-center py-9",
        )}
      >
        <h2 className="mb-8 text-center text-lg text-primary-text lg:text-xl">
          {header}
        </h2>
        <CustomLink href={button.link.url}>
          <Button>
            <span className="text-background-2"> {button.text} </span>
          </Button>
        </CustomLink>
      </div>
    </div>
  );
};

export default CtaBox;
