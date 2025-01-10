import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Solution } from "@/queries/navbar";
import { hoverEffect } from "@/styles";

const cardBaseStyle = clsx(
  "bg-background-2 rounded-2xl border border-stroke text-wrap",
  "p-4 flex gap-4 h-full lg:items-start",
);
const headerTextStyle = clsx("text-primary-purple font-bold text-base");
const descriptionTextStyle = clsx(
  "text-secondary-text text-base leading-tight",
);

interface CardProps {
  solution: Solution;
  variant: "large" | "medium" | "small";
}

const Card: React.FC<CardProps> = ({ solution, variant }) => {
  return (
    <Link
      key={solution?.solution_name}
      href={solution?.url}
      rel="noopener noreferrer"
      target="_blank"
      className={clsx(cardBaseStyle, hoverEffect, "flex-row", "w-full", {
        "lg:flex-col lg:pb-8": variant === "large",
        "lg:flex-row": variant === "medium" || variant === "small",
        "lg:w-[380px]": true,
      })}
    >
      <Image
        src={solution?.logo_svg?.url}
        alt={solution?.solution_name}
        width={64}
        height={64}
      />
      <div>
        <h2 className={headerTextStyle}>{solution?.solution_name}</h2>

        <h3
          className={clsx(
            headerTextStyle,
            "mt-1 leading-tight text-primary-text",
            {
              "font-normal": variant === "small",
              "lg:text-xl": variant === "large",
              "lg:text-lg": variant === "medium",
              "lg:text-base": variant === "small",
            },
          )}
        >
          {solution?.header_title}
        </h3>

        {solution?.header_description && (
          <p
            className={clsx(descriptionTextStyle, "mt-2", {
              hidden: true,
              "lg:block": variant !== "small",
            })}
          >
            {solution?.header_description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Card;
