import Image from "next/image";

import PlusIcon from "@/assets/svgs/icons/plus-icon.svg";
import CustomLink from "@/components/CustomLink";
import Tag from "@/components/Tag";
import { Court } from "@/queries/earn/tabs-data";
import { ArrowLink } from "@/queries/navbar";

interface ICourtsSection {
  mostActiveCourtsHeader: string;
  mostActiveCourts: Court[];
  courtsButton: ArrowLink;
}
const CourtsSection: React.FC<ICourtsSection> = ({
  mostActiveCourtsHeader,
  mostActiveCourts,
  courtsButton,
}) => {
  return (
    <>
      <h2 className="text-lg font-medium lg:pt-4 lg:text-xl lg:font-normal">
        {mostActiveCourtsHeader}
      </h2>
      <div className="flex flex-row flex-wrap items-center gap-4">
        {mostActiveCourts.map((court) => (
          <Tag key={court.name} text={court.name} />
        ))}
        <CustomLink href={courtsButton.link.url}>
          <button
            className={
              "border-gradient-purple-blue h-8 w-8 px-2 lg:h-12 lg:w-12"
            }
          >
            <Image
              src={PlusIcon}
              width="24"
              height="18"
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
