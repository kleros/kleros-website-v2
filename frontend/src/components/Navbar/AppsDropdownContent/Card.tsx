import clsx from "clsx";
import Image from "next/image";

import CustomLink from "@/components/CustomLink";
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
  className?: string;
}

const Card: React.FC<CardProps> = ({ solution, variant, className }) => {
  return (
    <CustomLink
      key={solution?.solution_name}
      href={solution?.url}
      className={clsx(
        cardBaseStyle,
        hoverEffect,
        "flex-row",
        "w-full",
        {
          "xl:flex-col xl:pb-8": variant === "large",
          "xl:flex-row": variant === "medium" || variant === "small",
          "xl:w-[380px]": true,
        },
        className,
      )}
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
              "xl:text-xl": variant === "large",
              "xl:text-lg": variant === "medium",
              "xl:text-base": variant === "small",
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
    </CustomLink>
  );
};

export default Card;
