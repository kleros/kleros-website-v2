import clsx from "clsx";
import Image from "next/image";

import { ArbitrationMethodTableType } from "../../queries/kleros-dispute-resolution-section";

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

interface IArbitrationMethodTable {
  table: ArbitrationMethodTableType[];
}

const ArbitrationMethodTable: React.FC<IArbitrationMethodTable> = ({
  table,
}) => {
  return (
    <div className="relative h-fit min-h-[1125px] w-full lg:min-h-[500px]">
      <div
        className={clsx(
          "box-border rounded-3xl border-2 border-stroke bg-background-2",
          "absolute left-0 top-0 h-full min-h-fit w-full",
          "pb-[66.666%] lg:pb-0 lg:pr-[66.666%]",
        )}
      >
        <TableCardContent {...table?.[0]} />
      </div>

      <div
        className={clsx(
          "box-border rounded-3xl bg-background-1",
          "absolute left-0 top-1/3 h-2/3 min-h-fit w-full lg:left-1/3 lg:top-0 lg:h-full lg:w-2/3",
          "pb-[33.333%] lg:pb-0 lg:pr-[33.333%]",
        )}
      >
        <TableCardContent {...table?.[1]} />
      </div>

      <div
        className={clsx(
          "box-border rounded-3xl",
          "bg-[linear-gradient(0deg,_#5B2B99_0%,_#27CDFE_100%)]",
          "absolute left-0 top-2/3 h-1/3 w-full p-[6px] lg:left-2/3 lg:top-0 lg:h-full lg:w-1/3",
        )}
      >
        <div
          className={clsx(
            "h-full w-full bg-[linear-gradient(90deg,_#D38BFF_0%,_#9747FF_100%)] shadow-[0px_2px_3px_0px_rgba(0,_0,_0,_0.06)]",
            "rounded-3xl",
          )}
        >
          <TableCardContent {...table?.[2]} />
        </div>
      </div>
    </div>
  );
};

export default ArbitrationMethodTable;
