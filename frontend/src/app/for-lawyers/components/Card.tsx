import clsx from "clsx";
import Image from "next/image";

import { Card as ICard } from "../queries/kleros-enterprise-section";

const Card: React.FC<ICard> = ({ title, description, icon }) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-stroke bg-background-2",
        "p-6 pb-[56px] lg:pb-[60px]",
        "flex flex-col items-start gap-4",
      )}
    >
      <Image src={icon.url} width={90} height={90} alt="Card Icon" />
      <h2 className="mb-2 text-lg font-medium text-primary-text lg:text-xl">
        {title}
      </h2>

      <p className="text-secondary-text lg:text-lg">{description}</p>
    </div>
  );
};

export default Card;
