import clsx from "clsx";
import Image from "next/image";

import { Research } from "@/queries/research-development/tabs-data";

const ResearchCard: React.FC<Research> = ({ field, icon }) => {
  return (
    <div
      className={clsx(
        "relative min-h-[185px] w-full",
        "border-stroke bg-background-2 rounded-2xl border",
        "before:border-primary-purple before:absolute before:top-1/2 before:left-[-1px] before:h-[146px] before:-translate-y-1/2 before:border-r-2",
        "flex items-center justify-start gap-4 p-6",
      )}
    >
      <Image src={icon.url} alt="document" width={64} height={64} />
      <p className="text-primary-text lg:text-lg">{field}</p>
    </div>
  );
};

export default ResearchCard;
