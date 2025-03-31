import clsx from "clsx";
import Image from "next/image";

import { ArbitrationMethodTableType } from "@/app/enterprise/queries/kleros-dispute-resolution-section";

const TableCardContent: React.FC<ArbitrationMethodTableType> = ({
  name,
  methodType,
  icon,
  items,
}) => {
  return (
    <div
      className={clsx(
        "relative",
        methodType === "kleros" ? "p-[26px]" : "p-8 pb-1 lg:pr-2",
      )}
    >
      <h2
        className={clsx(
          "mb-12 text-lg font-medium lg:text-xl",
          methodType === "kleros" ? "text-background-2" : "text-primary-text",
        )}
      >
        {name}
      </h2>

      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex flex-row justify-start gap-4"
          >
            <Image
              width={24}
              height={24}
              src={item.icon.url}
              alt={item.name}
              className="h-fit"
            />
            <div>
              <p
                className={clsx(
                  "leading-none",
                  methodType === "kleros"
                    ? "text-background-2"
                    : "text-primary-purple",
                )}
              >
                {item.name}
              </p>
              <p className="text-primary-text lg:text-lg lg:font-medium">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {icon ? (
        <Image
          src={icon.url}
          width={53.251}
          height={49.259}
          alt="Kleros-icon"
          className="absolute right-[33.75px] top-[32px]"
        />
      ) : null}
    </div>
  );
};

export default TableCardContent;
