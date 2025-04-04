import clsx from "clsx";
import Image from "next/image";

interface IQuote {
  header: string;
  primarySubtitle: string;
  secondarySubtitle?: string;
  icon: {
    url: string;
  };
  testimony: string;
  testimonyAuthor: string;
  className?: string;
}

const Quote: React.FC<IQuote> = async ({
  header,
  primarySubtitle,
  secondarySubtitle,
  icon,
  testimony,
  testimonyAuthor,
  className,
}) => {
  return (
    <div className={className}>
      <h2 className="mb-6 text-lg font-medium text-primary-text lg:text-xl">
        {header}
      </h2>
      <p className="text-primary-purple lg:text-lg">{primarySubtitle}</p>
      {secondarySubtitle ? (
        <p className="mb-12 text-secondary-text lg:text-lg">
          {secondarySubtitle}
        </p>
      ) : null}

      <div
        className={clsx(
          "rounded-2xl border border-stroke px-6 py-12 lg:px-12",
          "flex flex-col items-center gap-12 lg:flex-row lg:gap-16",
        )}
      >
        <Image
          width={180}
          height={180}
          src={icon.url}
          alt="Lemon cash"
          className="flex-shrink-0 rounded-2xl"
        />
        <div className="flex flex-col gap-4">
          <p className="text-primary-text lg:text-lg">{testimony}</p>
          <p className="text-success lg:text-lg">{testimonyAuthor}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
