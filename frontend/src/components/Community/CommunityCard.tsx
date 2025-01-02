import Image from "next/image";
import Link from "next/link";

import { Community } from "@/queries/community/hero";

const CommunityCard: React.FC<Community> = ({ title, subtitle, icon, url }) => {
  return (
    <Link href={url} target="_blank" rel="noreferrer noopener">
      <div className="bg-background-2 min-h-[326px] flex flex-col items-center justify-center border border-stroke rounded-2xl hover:scale-[1.01]">
        <Image
          src={icon.url}
          alt={icon.name}
          width={76}
          height={76}
          className="object-contain"
        />
        <h2 className="text-xl text-primary-text font-medium text-center mb-4 mt-2">
          {title}
        </h2>
        <label className="text-base text-secondary-text">{subtitle}</label>
      </div>
    </Link>
  );
};

export default CommunityCard;