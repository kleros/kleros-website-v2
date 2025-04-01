import clsx from "clsx";
import Image from "next/image";

import PlusIcon from "@/assets/svgs/icons/plus-icon.svg";
import CustomLink from "@/components/CustomLink";
import Tag from "@/components/Tag";
import { IArrowLink } from "@/queries/utils";

import { Court } from "../queries";

interface ICourtsSection {
  mostActiveCourtsHeader: string;
  mostActiveCourts: Court[];
  courtsButton: IArrowLink;
}
const CourtsSection: React.FC<ICourtsSection> = ({
  mostActiveCourtsHeader,
  mostActiveCourts,
  courtsButton,
}) => {
  return (
    <>
      <h2
        className={clsx(
          "text-lg font-medium text-primary-text",
          "lg:pt-4 lg:text-xl lg:font-normal",
        )}
      >
        {mostActiveCourtsHeader}
      </h2>
      <div className="flex flex-row flex-wrap items-center gap-4">
        {mostActiveCourts.map((court) => (
          <Tag key={court.name} text={court.name} />
        ))}
        <CustomLink href={courtsButton.link.url}>
          <button
            className={clsx(
              "border-gradient-purple-blue flex h-8 w-8 items-center",
              "justify-center px-2 lg:h-12 lg:w-12",
            )}
          >
            <Image
              src={PlusIcon}
              width="24"
              height="19"
              alt="Plus icon"
              className="inline"
            />
          </button>
        </CustomLink>
      </div>
    </>
  );
};

export default CourtsSection;
