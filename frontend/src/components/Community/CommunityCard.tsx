import Image from "next/image";

import { Community } from "@/queries/community/hero";

import CustomLink from "../CustomLink";

const CommunityCard: React.FC<Community> = ({ title, subtitle, icon, url }) => {
  return (
    <CustomLink href={url}>
      <div className="border-stroke bg-background-2 flex min-h-[326px] flex-col items-center justify-center rounded-2xl border hover:scale-[1.01]">
        <Image
          src={icon.url}
          alt={icon.name}
          width={76}
          height={76}
          className="object-contain"
        />
        <h2 className="text-primary-text mt-2 mb-4 text-center text-xl font-medium">
          {title}
        </h2>
        <label className="text-secondary-text text-base">{subtitle}</label>
      </div>
    </CustomLink>
  );
};

export default CommunityCard;
