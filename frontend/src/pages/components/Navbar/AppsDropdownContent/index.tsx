import { Solution } from "@/queries/navbar";
import Image from "next/image";

interface AppsDropdownContentProps {
  solutions: Solution[];
}

const AppsDropdownContent: React.FC<AppsDropdownContentProps> = ({
  solutions = [],
}) => {
  const columnOne = solutions.slice(0, 1);
  const columnTwo = solutions.slice(1, 3);
  const columnThree = solutions.slice(3, 7);

  return (
    <div className="flex fixed w-screen left-[50%] transform translate-x-[-50%] mt-[27px] py-[48px] bg-[#220050] justify-center items-center">
      <div className="grid grid-cols-3 gap-4 w-[1172px]">
        <div className="flex flex-col gap-4 h-full">
          {columnOne?.map((solution) => (
            <a
              key={solution.solution_name}
              href={solution.url}
              rel="noopener noreferrer"
              target="_blank"
              className="bg-[#220050] gap-[16px] flex flex-wrap flex-col rounded-lg p-[16px] pb-[32px] w-[380px] h-full border border-[#42498F] hover:scale-[1.02] transition-transform"
            >
              <Image
                src={solution.logo_svg.url}
                alt={solution.solution_name}
                width={64}
                height={64}
              />
              <h3 className="flex text-wrap w-full text-[#9747FF] font-bold break-words text-[16px]">
                {solution.solution_name}
              </h3>
              <h1 className="flex text-wrap w-full text-[#DAF0FF] font-bold break-words text-[32px] leading-tight">
                {solution.header_title}
              </h1>
              <p className="flex text-wrap flex-wrap w-full text-[#BECCE5] mt-2 break-words text-[16px] leading-tight">
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
              className="bg-[#220050] gap-[12px] flex flex-row rounded-lg p-[16px] w-[380px] border border-[#42498F] h-full hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col gap-[8px] w-[240px]">
                <Image
                  src={solution.logo_svg.url}
                  alt={solution.solution_name}
                  width={64}
                  height={64}
                />
                <h3 className="flex text-wrap w-full text-[#9747FF] font-bold break-words text-[16px]">
                  {solution.solution_name}
                </h3>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h3 className="flex text-wrap w-full text-[#DAF0FF] font-bold break-words text-[24px] leading-tight">
                  {solution.header_title || solution.solution_name}
                </h3>
                <p className="flex text-wrap w-full text-[#BECCE5] mt-[8px] break-words text-[16px] leading-tight">
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
              className="bg-[#220050] flex flex-row gap-[16px] rounded-lg p-[16px] w-[380px] border border-[#42498F] hover:scale-[1.02] transition-transform"
            >
              <Image
                className="flex"
                src={solution.logo_svg.url}
                alt={solution.solution_name}
                width={64}
                height={64}
              />
              <div className="flex flex-col">
                <h3 className="flex text-wrap w-full text-[#9747FF] font-bold break-words text-[16px]">
                  {solution.solution_name}
                </h3>
                <p className="flex text-wrap w-full text-[#DAF0FF] mt-[4px] break-words text-[16px] leading-tight">
                  {solution.header_title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsDropdownContent;
