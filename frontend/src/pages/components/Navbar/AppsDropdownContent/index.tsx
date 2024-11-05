import { AppsSection } from "@/queries/navbar";
import Card from "./Card";
import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import Image from "next/image";
import clsx from "clsx";

interface AppsDropdownContentProps {
  appsSection: AppsSection;
}

const AppsDropdownContent: React.FC<AppsDropdownContentProps> = ({
  appsSection,
}) => {
  const columnOne = appsSection?.solutions.slice(0, 1);
  const columnTwo = appsSection?.solutions.slice(1, 3);
  const columnThree = appsSection?.solutions.slice(3, 7);

  return (
    <div
      className={clsx(
        "mt-4 lg:mt-0 w-full lg:w-[1172px] py-2 lg:py-12 grid gap-3 lg:gap-4",
        "grid-cols-1 lg:grid-cols-3 bg-background-2 mx-auto"
      )}
    >
      <div className="flex flex-col gap-3 lg:gap-4">
        {columnOne?.map((solution) => (
          <Card
            key={solution.solution_name}
            solution={solution}
            variant="large"
          />
        ))}
      </div>
      <div className="flex flex-col gap-3 lg:gap-4">
        {columnTwo?.map((solution) => (
          <Card
            key={solution.solution_name}
            solution={solution}
            variant="medium"
          />
        ))}
      </div>
      <div className="flex flex-col gap-3 lg:gap-4">
        {columnThree?.map((solution) => (
          <Card
            key={solution.solution_name}
            solution={solution}
            variant="small"
          />
        ))}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={appsSection?.arrowLink.link.url}
          className="text-primary-blue self-start lg:self-end"
        >
          <span className="mr-4">{appsSection?.arrowLink.text}</span>
          <Image
            src={LinkArrow}
            width={24}
            height={24}
            alt="Arrow link"
            className="inline"
          />
        </a>
      </div>
    </div>
  );
};

export default AppsDropdownContent;
