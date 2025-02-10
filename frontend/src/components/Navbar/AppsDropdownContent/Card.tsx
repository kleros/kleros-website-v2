import clsx from "clsx";
import Image from "next/image";

import CustomLink from "@/components/CustomLink";
import { Solution } from "@/queries/navbar";

interface ICard {
  solution: Solution;
  variant: "large" | "medium" | "small";
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<ICard> = ({ solution, variant, onClick, className }) => {
  return (
    <CustomLink
      href={solution?.url}
      className={clsx(
        className,
        "flex h-full w-full transform flex-row gap-4 rounded-2xl text-wrap",
        "border-stroke bg-background-2 border p-4 transition duration-100",
        "hover:scale-[1.01] lg:items-start",
        {
          "lg:flex-col": variant === "large",
          "lg:flex-row": variant === "medium" || variant === "small",
        },
      )}
      {...{ onClick }}
    >
      <Image
        className="md:h-fit"
        src={solution?.logo_svg?.url}
        alt={solution?.solution_name}
        width={64}
        height={64}
      />
      <div className="space-y-2">
        <h2 className="text-primary-purple text-base font-medium">
          {solution?.solution_name}
        </h2>

        <h3
          className={clsx("text-primary-text text-base font-medium", {
            "md:text-lg lg:text-xl": variant === "large",
            "md:text-lg": variant === "medium",
            "md:text-lg lg:text-base": variant === "small",
          })}
        >
          {solution?.header_title}
        </h3>

        {solution?.header_description && (
          <p
            className={clsx("text-secondary-text mt-2 text-base", {
              hidden: true,
              "md:block": variant !== "small",
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
