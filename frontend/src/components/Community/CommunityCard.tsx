import Image from "next/image";
import Link from "next/link";

import { Community } from "@/queries/community/hero";

const CommunityCard: React.FC<Community> = ({ title, subtitle, icon, url }) => {
  return (
    <Link href={url} target="_blank" rel="noreferrer noopener">
      <div className="flex min-h-[326px] flex-col items-center justify-center rounded-2xl border border-stroke bg-background-2 hover:scale-[1.01]">
        <Image
          src={icon.url}
          alt={icon.name}
          width={76}
          height={76}
          className="object-contain"
        />
        <h2 className="mb-4 mt-2 text-center text-xl font-medium text-primary-text">
          {title}
        </h2>
        <label className="text-base text-secondary-text">{subtitle}</label>
      </div>
    </Link>
  );
};

export default CommunityCard;
