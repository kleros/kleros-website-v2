import clsx from "clsx";

interface IPagination {
  currentPage: number;
  numPages: number;
  callback: (newPage: number) => void;
  className?: string;
}

const Pagination: React.FC<IPagination> = ({
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
      {Array.from(Array(numPages), (_, index) => (
        <button
          key={index}
          aria-label={`Go to page ${index + 1}`}
          aria-current={currentPage === index + 1 ? "page" : undefined}
          className={clsx(
            "h-4 w-4 rounded-full transition-all",
            currentPage === index + 1
              ? "bg-primary-blue scale-110"
              : "bg-stroke",
          )}
          onClick={() => callback(index + 1)}
        ></button>
      ))}
    </div>
  );
};

export default Pagination;
