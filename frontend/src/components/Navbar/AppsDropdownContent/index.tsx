import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import LinkArrow from "@/assets/svgs/icons/link-arrow.svg";
import { AppsSection } from "@/queries/navbar";

import Card from "./Card";

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
        "mt-4 grid w-full gap-3 py-2 xl:mt-0 xl:w-[1172px] xl:gap-4 xl:py-12",
        "mx-auto grid-cols-1 bg-background-2 xl:grid-cols-3",
      )}
    >
      <div className="flex flex-col gap-3 xl:gap-4">
        {columnOne?.map((solution) => (
          <Card
            key={solution.solution_name}
            solution={solution}
            variant="large"
          />
        ))}
      </div>
      <div className="flex flex-col gap-3 xl:gap-4">
        {columnTwo?.map((solution) => (
          <Card
            key={solution.solution_name}
            solution={solution}
            variant="medium"
          />
        ))}
      </div>
      <div className="flex flex-col gap-3 xl:gap-4">
        {columnThree?.map((solution) => (
          <Card
            key={solution.solution_name}
            solution={solution}
            variant="small"
          />
        ))}
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href={appsSection?.arrowLink.link.url}
          className="self-start text-primary-blue xl:self-end"
        >
          <span className="mr-4">{appsSection?.arrowLink.text}</span>
          <Image
            src={LinkArrow}
            width={24}
            height={24}
            alt="Arrow link"
            className="inline"
          />
        </Link>
      </div>
    </div>
  );
};

export default AppsDropdownContent;
