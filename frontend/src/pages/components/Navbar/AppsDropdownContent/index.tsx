import { AppsSection } from "@/queries/navbar";
import Image from "next/image";
import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import { useEffect } from "react";

interface AppsDropdownContentProps {
  appsSection: AppsSection;
}

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
    <div className="fixed w-screen lg:left-1/2 lg:transform lg:translate-x-[-50%] top-[80px] max-h-[calc(100vh-80px)] bg-background-2 overflow-y-auto lg:overflow-visible z-50 flex flex-col items-center">
      <div className="w-[80%] lg:w-[1172px] py-[24px] lg:py-[48px] grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          {columnOne?.map((solution) => (
            <a
              key={solution.solution_name}
              href={solution.url}
              rel="noopener noreferrer"
              target="_blank"
              className="text-wrap bg-background-2 gap-[16px] flex flex-wrap flex-col rounded-lg p-[16px] pb-[32px] lg:w-[380px] h-full border border-stroke hover:scale-[1.02] transition-transform"
            >
              <Image
                src={solution.logo_svg.url}
                alt={solution.solution_name}
                width={64}
                height={64}
              />
              <h3 className="text-primary-purple font-bold text-[16px]">
                {solution.solution_name}
              </h3>
              <h1 className="text-primary-text font-bold text-[32px] leading-tight">
                {solution.header_title}
              </h1>
              <p className="text-secondary-text mt-2 text-[16px] leading-tight">
                {solution.header_description}
              </p>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-[16px]">
          {columnTwo?.map((solution) => (
            <a
              key={solution.solution_name}
              href={solution.url}
              rel="noopener noreferrer"
              target="_blank"
              className="text-wrap bg-background-2 gap-[12px] flex flex-row rounded-lg p-[16px] w-full h-full lg:w-[380px] border border-stroke hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col gap-[8px] lg:w-[240px]">
                <Image
                  src={solution.logo_svg.url}
                  alt={solution.solution_name}
                  width={64}
                  height={64}
                />
                <h3 className="text-primary-purple font-bold text-[16px]">
                  {solution.solution_name}
                </h3>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-primary-text font-bold text-[24px] leading-tight">
                  {solution.header_title || solution.solution_name}
                </h3>
                <p className="text-secondary-text mt-[8px] text-[16px] leading-tight">
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
              className="text-wrap bg-background-2 flex flex-row gap-[16px] rounded-lg p-[16px] lg:w-[380px] border border-stroke hover:scale-[1.02] transition-transform"
            >
              <Image
                src={solution.logo_svg.url}
                alt={solution.solution_name}
                width={64}
                height={64}
              />
              <div className="flex flex-col">
                <h3 className="text-primary-purple font-bold text-[16px]">
                  {solution.solution_name}
                </h3>
                <p className="text-primary-text mt-[4px] text-[16px] leading-tight">
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
