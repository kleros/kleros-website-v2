import { AppsSection } from "@/queries/navbar";
import Image from "next/image";
import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import { useEffect } from "react";
import clsx from "clsx";

interface AppsDropdownContentProps {
  appsSection: AppsSection;
}

const hoverEffect = clsx("hover:scale-[1.01] transform transition duration-100");
const cardBaseStyle = clsx(
  "bg-background-2 rounded-lg border border-stroke text-wrap",
  "p-4 flex gap-4 h-full"
);
const headerTextStyle = clsx("text-primary-purple font-bold text-base");
const descriptionTextStyle = clsx(
  "text-secondary-text text-base leading-tight"
);

const AppsDropdownContent: React.FC<AppsDropdownContentProps> = ({
  appsSection,
}) => {
  const columnOne = appsSection?.solutions.slice(0, 1);
  const columnTwo = appsSection?.solutions.slice(1, 3);
  const columnThree = appsSection?.solutions.slice(3, 7);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed w-screen top-20 max-h-[calc(100vh-80px)] bg-background-2",
        "overflow-y-auto lg:overflow-visible z-50 flex flex-col items-center",
        "lg:left-1/2 lg:transform lg:translate-x-[-50%]"
      )}
    >
      <div
        className={clsx(
          "w-4/5 lg:w-[1172px] py-6 lg:py-12 grid gap-4",
          "grid-cols-1 lg:grid-cols-3"
        )}
      >
        <div className="flex flex-col gap-4">
          {columnOne?.map((solution) => (
            <a
              key={solution.solution_name}
              href={solution.url}
              rel="noopener noreferrer"
              target="_blank"
              className={clsx(
                cardBaseStyle,
                "flex-col pb-8 lg:w-[380px]",
                hoverEffect
              )}
            >
              <Image
                src={solution.logo_svg.url}
                alt={solution.solution_name}
                width={64}
                height={64}
              />
              <h3 className={headerTextStyle}>{solution.solution_name}</h3>
              <h1 className="text-primary-text font-bold text-[32px] leading-tight">
                {solution.header_title}
              </h1>
              <p className={clsx(descriptionTextStyle, "mt-2")}>
                {solution.header_description}
              </p>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {columnTwo?.map((solution) => (
            <a
              key={solution.solution_name}
              href={solution.url}
              rel="noopener noreferrer"
              target="_blank"
              className={clsx(
                cardBaseStyle,
                "flex-row lg:w-[380px] w-full",
                hoverEffect
              )}
            >
              <div className="flex flex-col gap-2 lg:w-[240px]">
                <Image
                  src={solution.logo_svg.url}
                  alt={solution.solution_name}
                  width={64}
                  height={64}
                />
                <h3 className={headerTextStyle}>{solution.solution_name}</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-primary-text font-bold text-[24px] leading-tight">
                  {solution.header_title || solution.solution_name}
                </h3>
                <p className={clsx(descriptionTextStyle, "mt-2")}>
                  {solution.header_description}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {columnThree?.map((solution) => (
            <a
              key={solution.solution_name}
              href={solution.url}
              rel="noopener noreferrer"
              target="_blank"
              className={clsx(
                cardBaseStyle,
                "flex-row lg:w-[380px]",
                hoverEffect
              )}
            >
              <Image
                src={solution.logo_svg.url}
                alt={solution.solution_name}
                width={64}
                height={64}
              />
              <div className="flex flex-col">
                <h3 className={headerTextStyle}>{solution.solution_name}</h3>
                <p className="text-primary-text mt-1 text-base leading-tight">
                  {solution.header_title}
                </p>
              </div>
            </a>
          ))}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={appsSection?.arrowLink.link.url}
            className="text-primary-blue self-end"
          >
            <span className="mr-4">{appsSection?.arrowLink.text}</span>
            <Image
              src={LinkArrow}
              width="24"
              height="24"
              alt="Arrow link image"
              className="inline"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppsDropdownContent;
