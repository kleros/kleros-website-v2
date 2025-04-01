import clsx from "clsx";
import Image from "next/image";

import CustomLink from "@/components/CustomLink";

import { ICommunity } from "./queries";

const CommunityCard: React.FC<ICommunity> = ({
  title,
  subtitle,
  icon,
  url,
}) => {
  return (
    <CustomLink href={url}>
      <div
        className={clsx(
          "flex min-h-[326px] flex-col items-center justify-center rounded-2xl",
          "border border-stroke bg-background-2 hover:scale-[1.01]",
        )}
      >
        <Image
          src={icon.url}
          alt={icon.name}
          width={76}
          height={76}
          className="object-contain"
        />
        <h2
          className={
            "mb-4 mt-2 text-center text-xl font-medium text-primary-text"
          }
        >
          {title}
        </h2>
        <label className="text-base text-secondary-text">{subtitle}</label>
      </div>
    </CustomLink>
  );
};

export default CommunityCard;
