import clsx from "clsx";

import Arrow from "@/assets/svgs/icons/arrow.svg";

interface IMobilePagination {
  currentPage: number;
  numPages: number;
  callback: (newPage: number) => void;
  className?: string;
}

const Pagination: React.FC<IMobilePagination> = ({
  currentPage,
  numPages,
  callback,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full items-center justify-center gap-8",
        className,
      )}
    >
      <button
        className={clsx(
          "size-6 rounded-full bg-primary-blue text-lg font-bold",
          "text-background-2 disabled:bg-stroke",
        )}
        disabled={currentPage === 1}
        aria-label="Move to the previous page"
        onClick={() => callback(currentPage - 1)}
      >
        <Arrow className="mx-auto fill-background-2" />
      </button>
      <label className="w-12 text-center">
        {currentPage}/{numPages}
      </label>
      <button
        className={clsx(
          "size-6 rounded-full bg-primary-blue text-lg font-bold",
          "text-background-2 disabled:bg-stroke",
        )}
        disabled={currentPage === numPages}
        aria-label="Move to the previous page"
        onClick={() => callback(currentPage + 1)}
      >
        <Arrow className="mx-auto rotate-180 fill-background-2" />
      </button>
    </div>
  );
};

export default Pagination;
