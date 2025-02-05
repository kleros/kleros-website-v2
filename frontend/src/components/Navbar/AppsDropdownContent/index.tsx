import clsx from "clsx";

import ExternalLink from "@/components/ExternalLink";
import { AppsSection } from "@/queries/navbar";

import Card from "./Card";

interface AppsDropdownContentProps {
  appsSection: AppsSection;
  closeFn?: () => void;
  className?: string;
}

const AppsDropdownContent: React.FC<AppsDropdownContentProps> = ({
  appsSection,
  closeFn,
  className,
}) => (
  <div className={clsx(className, "mx-auto lg:max-w-[1172px]")}>
    <div
      className={clsx(
        "grid w-full grid-cols-1 gap-3 bg-background-2 lg:grid-flow-col",
        "lg:grid-cols-3 lg:grid-rows-4 lg:gap-4",
      )}
    >
      {appsSection?.solutions.map((solution, i) => (
        <Card
          className={getRowSpan(i)}
          key={solution.solution_name}
          {...{ solution }}
          variant={getVariant(i)}
          onClick={closeFn}
        />
      ))}
    </div>
    <ExternalLink
      className="ml-auto mt-2 w-max"
      url={appsSection?.arrowLink.link.url}
      text={appsSection?.arrowLink.text}
    />
  </div>
);

const getVariant = (index: number): "large" | "medium" | "small" => {
  if (index === 0) return "large";
  if (index < 3) return "medium";
  return "small";
};

const getRowSpan = (
  index: number,
): "lg:row-span-4" | "lg:row-span-2" | undefined => {
  if (index === 0) return "lg:row-span-4";
  if (index < 3) return "lg:row-span-2";
};

export default AppsDropdownContent;
