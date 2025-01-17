import React from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";

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
        alt="Get In Touch Image Background"
        fill
        className="rounded-2xl object-cover"
      />
      <div
        className={clsx(
          "flex-column relative z-10 mt-16 flex flex-col items-center",
          "justify-center py-9",
        )}
      >
        <h2 className="mb-8 text-xl text-primary-text"> {header} </h2>
        <Link href={button.link.url} target="_blank" rel="noopener noreferrer">
          <Button>
            <span className="text-background-2"> {button.text} </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CtaBox;
