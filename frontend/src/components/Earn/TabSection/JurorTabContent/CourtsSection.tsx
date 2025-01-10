import Image from "next/image";
import Link from "next/link";

import PlusIcon from "@/assets/svgs/icons/plus-icon.svg";
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
      <h2 className="md:text-xlfont-medium text-lg md:font-normal">
        {mostActiveCourtsHeader}
      </h2>
      <div className="flex flex-row flex-wrap items-center gap-4">
        {mostActiveCourts.map((court) => (
          <Tag
            key={court.name}
            text={court.name}
            className="!text-base leading-none"
          />
        ))}
        <Link
          href={courtsButton.link.url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className="border-gradient-purple-blue h-12 w-12">
            <Image
              src={PlusIcon}
              width="24"
              height="18"
              alt="Plus icon"
              className="inline"
            />
          </button>
        </Link>
      </div>
    </>
  );
};

export default CourtsSection;
