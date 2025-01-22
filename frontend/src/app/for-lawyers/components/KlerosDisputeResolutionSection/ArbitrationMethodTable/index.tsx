import clsx from "clsx";

import { ArbitrationMethodTableType } from "@/app/for-lawyers/queries/kleros-dispute-resolution-section";

import TableCardContent from "./TabelCardContent";

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
